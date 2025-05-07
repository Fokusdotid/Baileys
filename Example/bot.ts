import { Boom } from '@hapi/boom'
import NodeCache from '@cacheable/node-cache'
import readline from 'readline'
import makeWASocket, {
	AnyMessageContent,
	BinaryInfo, delay,
	DisconnectReason,
	encodeWAM, fetchLatestBaileysVersion,
	getAggregateVotesInPollMessage,
	getContentType, getHistoryMsg,
	isJidNewsletter, jidNormalizedUser,
	makeCacheableSignalKeyStore, proto,
	useMultiFileAuthState, WAMessageContent,
	WAMessageKey, WAMessageStubType,
	generateWAMessageFromContent,
} from '../src'
//import MAIN_LOGGER from '../src/Utils/logger'
import * as Baileys from "../src"
import open from 'open'
import fs from 'fs'
import P from 'pino'
import { format } from 'util'

const logger = P({ timestamp: () => `,"time":"${new Date().toJSON()}"` }, P.destination('./wa-logs.txt'))
logger.level = 'trace'

const doReplies = process.argv.includes('--do-reply')
const usePairingCode = process.argv.includes('--use-pairing-code')

// external map to store retry counts of messages when decryption/encryption fails
// keep this out of the socket itself, so as to prevent a message decryption/encryption loop across socket restarts
const msgRetryCounterCache = new NodeCache()

const onDemandMap = new Map<string, string>()

// Read line interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text: string) => new Promise<string>((resolve) => rl.question(text, resolve))

// start a connection
const startSock = async() => {
	const { state, saveCreds } = await useMultiFileAuthState('baileys_auth_info')
	// fetch latest version of WA Web
	const { version, isLatest } = await fetchLatestBaileysVersion()
	console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)

	const sock = makeWASocket({
		version,
		logger,
		printQRInTerminal: !usePairingCode,
		auth: {
			creds: state.creds,
			/** caching makes the store faster to send/recv messages */
			keys: makeCacheableSignalKeyStore(state.keys, logger),
		},
		syncFullHistory: false,
		msgRetryCounterCache,
		generateHighQualityLinkPreview: true,
		// ignore all broadcast messages -- to receive the same
		// comment the line below out
		// shouldIgnoreJid: jid => isJidBroadcast(jid),
		// implement to handle retries & poll updates
		getMessage,
		patchMessageBeforeSending: (message) => {
			const requiresPatch: boolean = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {}
							},
							...message
						}
					}
				};
			};
			console.log("patchMessageBeforeSending:", JSON.stringify(message, null, 2))

			return message;
		}
	})

	// Pairing code for Web clients
	if (usePairingCode && !sock.authState.creds.registered) {
		// todo move to QR event
		const phoneNumber = await question('Please enter your phone number:\n')
		const code = await sock.requestPairingCode(phoneNumber)
		console.log(`Pairing code: ${code}`)
	}

	const sendMessageWTyping = async(jid: string, msg: AnyMessageContent, options?: object) => {
		await sock.presenceSubscribe(jid)
		await delay(500)

		await sock.sendPresenceUpdate('composing', jid)
		await delay(2000)

		await sock.sendPresenceUpdate('paused', jid)

		await sock.sendMessage(jid, msg, options)
	}

	// the process function lets you process all events that just occurred
	// efficiently in a batch
	sock.ev.process(
		// events is a map for event name => event data
		async(events) => {
			// something about the connection changed
			// maybe it closed, or we received all offline message or connection opened
			if(events['connection.update']) {
				const update = events['connection.update']
				const { connection, lastDisconnect } = update
				if(connection === 'close') {
					// reconnect if not logged out
					if((lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
						startSock()
					} else {
						console.log('Connection closed. You are logged out.')
					}
				}

				// WARNING: THIS WILL SEND A WAM EXAMPLE AND THIS IS A ****CAPTURED MESSAGE.****
				// DO NOT ACTUALLY ENABLE THIS UNLESS YOU MODIFIED THE FILE.JSON!!!!!
				// THE ANALYTICS IN THE FILE ARE OLD. DO NOT USE THEM.
				// YOUR APP SHOULD HAVE GLOBALS AND ANALYTICS ACCURATE TO TIME, DATE AND THE SESSION
				// THIS FILE.JSON APPROACH IS JUST AN APPROACH I USED, BE FREE TO DO THIS IN ANOTHER WAY.
				// THE FIRST EVENT CONTAINS THE CONSTANT GLOBALS, EXCEPT THE seqenceNumber(in the event) and commitTime
				// THIS INCLUDES STUFF LIKE ocVersion WHICH IS CRUCIAL FOR THE PREVENTION OF THE WARNING
				const sendWAMExample = false;
				if(connection === 'open' && sendWAMExample) {
					/// sending WAM EXAMPLE
					const {
						header: {
							wamVersion,
							eventSequenceNumber,
						},
						events,
					} = JSON.parse(await fs.promises.readFile("./boot_analytics_test.json", "utf-8"))

					const binaryInfo = new BinaryInfo({
						protocolVersion: wamVersion,
						sequence: eventSequenceNumber,
						events: events
					})

					const buffer = encodeWAM(binaryInfo);

					const result = await sock.sendWAMBuffer(buffer)
					console.log(result)
				}

				console.log('connection update', update)
			}

			// credentials updated -- save them
			if(events['creds.update']) {
				await saveCreds()
			}

			if(events['labels.association']) {
				console.log(events['labels.association'])
			}


			if(events['labels.edit']) {
				console.log(events['labels.edit'])
			}

			if(events.call) {
				console.log('recv call event', events.call)
			}

			// history received
			if(events['messaging-history.set']) {
				const { chats, contacts, messages, isLatest, progress, syncType } = events['messaging-history.set']
				if (syncType === proto.HistorySync.HistorySyncType.ON_DEMAND) {
					console.log('received on-demand history sync, messages=', messages)
				}
				console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest}, progress: ${progress}%), type: ${syncType}`)
			}

			// received a new message
			if(events['messages.upsert']) {
				const upsert = events['messages.upsert'];
				let m = upsert.messages[upsert.messages.length - 1];
				m = proto.WebMessageInfo.fromObject(m);
				console.log("m:", JSON.stringify(m, null, 2));
				const senderKeyDistributionMessage = m.message?.senderKeyDistributionMessage?.groupId;
				const chat = jidNormalizedUser(m.key?.remoteJid || (senderKeyDistributionMessage !== "status@broadcast" && senderKeyDistributionMessage) || '');
				const mtype = m.message && getContentType(m.message) || m.message && Object.keys(m.message)[0] || '';
				const msg = !m.message ? null : /viewOnceMessage/.test(mtype) ? m.message[Object.keys(m.message)[0]] : m.message[mtype];
				const body = typeof msg === "string" ? msg : msg && 'text' in msg && msg.text ? msg.text : msg && 'caption' in msg && msg.caption ? msg.caption : msg && 'contentText' in msg && msg.contentText ? msg.contentText : '';
				if (m.messageStubType) {
					console.log({
						messageStubType: WAMessageStubType[m.messageStubType],
						messageStubParameters: m.messageStubParameters,
						participant: m.participant
					})
				};

				const str2Regex = (str: string) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
				const customPrefix = /^×?> /;
				const prefix = new RegExp('^([' + ('‎/!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + '])');
				const match = (customPrefix.test(body) ? [[customPrefix.exec(body), customPrefix]].find(p => p[1]) : [[prefix.exec(body), prefix]].find(p => p[1])) || '';
				const usedPrefix = (match[0] || match[1] || '')[0] || '';
				const noPrefix = body.replace(usedPrefix, '');
				let [command, ...args] = noPrefix.trim().split` `.filter(v => v);
				args = args || [];
				let _args = noPrefix.trim().split` `.slice(1);
				let text = _args.join` `;
				command = (command || '').toLowerCase();
				if (!usedPrefix) return;
				console.log(`[Message]: ${m.pushName} > ${usedPrefix + command}`);
				switch(command) {
					case "tes":
					case "test":
						const msg = generateWAMessageFromContent(chat, {
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: { text: "Halo" },
								footer: { text: "FOOTER" },
								header: { title: "PILIH DISINI", hasMediaAttachment: false },
								nativeFlowMessage: {
									buttons: [
										{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Button 1", id: ".ping" }) },
										{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Button 2", id: ".ping" }) }
									]
								}
							})
						}, {
							userJid: m.key.participant || ""
						});

						await sock.relayMessage(chat, msg.message!, { messageId: msg.key.id! });
						await sendMessageWTyping(chat, { text: format(JSON.stringify(msg, null, 4)) }, { quoted: m });
						break;
					case "ping":
						await sendMessageWTyping(chat, { text: "OKE" }, { quoted: m });
						break;
					default:
						if (customPrefix.test(body)) {
							let i = 15;
							let _return;
							let _syntax;
							let _text = (/^(×>)/.test(usedPrefix) ? 'return ' : '') + noPrefix;
							try {
								// @ts-ignore
								let exec = new (async () => { }).constructor('print', 'm', 'sock', 'chat', 'process', 'args', 'require', "Baileys", _text);
								_return = await exec.call(sock, (...args) => {
									if (--i < 1) return;
									return sendMessageWTyping(chat, { text: format(...args) }, { quoted: m });
								}, m, sock, chat, process, args, require, Baileys);
							} catch (e) {
								_return = e;
							} finally {
								await sock.sendMessage(chat, { text: format(_return) }, { quoted: m });
							};
						};
				}
			};

			// messages updated like status delivered, message deleted etc.
			if(events['messages.update']) {
				/*
				console.log(
					JSON.stringify(events['messages.update'], undefined, 2)
				)
				*/

				for(const { key, update } of events['messages.update']) {
					if(update.pollUpdates) {
						const pollCreation: proto.IMessage = {} // get the poll creation message somehow
						if(pollCreation) {
							console.log(
								'got poll update, aggregation: ',
								getAggregateVotesInPollMessage({
									message: pollCreation,
									pollUpdates: update.pollUpdates,
								})
							)
						}
					}
				}
			}

			if(events['contacts.update']) {
				for(const contact of events['contacts.update']) {
					if(typeof contact.imgUrl !== 'undefined') {
						const newUrl = contact.imgUrl === null
							? null
							: await sock!.profilePictureUrl(contact.id!).catch(() => null)
						console.log(
							`contact ${contact.id} has a new profile pic: ${newUrl}`,
						)
					}
				}
			}

			if(events['chats.delete']) {
				console.log('chats deleted ', events['chats.delete'])
			}
		}
	)

	return sock

	async function getMessage(key: WAMessageKey): Promise<WAMessageContent | undefined> {
	  // Implement a way to retreive messages that were upserted from messages.upsert
			// up to you

		// only if store is present
		return proto.Message.fromObject({})
	}
}

startSock()
