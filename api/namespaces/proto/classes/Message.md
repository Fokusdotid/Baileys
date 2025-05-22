# Class: Message

Defined in: [WAProto/index.d.ts:10809](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10809)

Represents a Message.

## Implements

- [`IMessage`](../interfaces/IMessage.md)

## Constructors

### new Message()

> **new Message**(`properties`?): [`Message`](Message.md)

Defined in: [WAProto/index.d.ts:10815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10815)

Constructs a new Message.

#### Parameters

##### properties?

[`IMessage`](../interfaces/IMessage.md)

Properties to set

#### Returns

[`Message`](Message.md)

## Properties

### audioMessage?

> `optional` **audioMessage**: `null` \| [`IAudioMessage`](../namespaces/Message/interfaces/IAudioMessage.md)

Defined in: [WAProto/index.d.ts:10839](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10839)

Message audioMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`audioMessage`](../interfaces/IMessage.md#audiomessage)

***

### bcallMessage?

> `optional` **bcallMessage**: `null` \| [`IBCallMessage`](../namespaces/Message/interfaces/IBCallMessage.md)

Defined in: [WAProto/index.d.ts:10998](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10998)

Message bcallMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`bcallMessage`](../interfaces/IMessage.md#bcallmessage)

***

### botInvokeMessage?

> `optional` **botInvokeMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10986](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10986)

Message botInvokeMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`botInvokeMessage`](../interfaces/IMessage.md#botinvokemessage)

***

### buttonsMessage?

> `optional` **buttonsMessage**: `null` \| [`IButtonsMessage`](../namespaces/Message/interfaces/IButtonsMessage.md)

Defined in: [WAProto/index.d.ts:10917](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10917)

Message buttonsMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`buttonsMessage`](../interfaces/IMessage.md#buttonsmessage)

***

### buttonsResponseMessage?

> `optional` **buttonsResponseMessage**: `null` \| [`IButtonsResponseMessage`](../namespaces/Message/interfaces/IButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:10920](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10920)

Message buttonsResponseMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`buttonsResponseMessage`](../interfaces/IMessage.md#buttonsresponsemessage)

***

### call?

> `optional` **call**: `null` \| [`ICall`](../namespaces/Message/interfaces/ICall.md)

Defined in: [WAProto/index.d.ts:10845](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10845)

Message call.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`call`](../interfaces/IMessage.md#call)

***

### callLogMesssage?

> `optional` **callLogMesssage**: `null` \| [`ICallLogMessage`](../namespaces/Message/interfaces/ICallLogMessage.md)

Defined in: [WAProto/index.d.ts:10989](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10989)

Message callLogMesssage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`callLogMesssage`](../interfaces/IMessage.md#calllogmesssage)

***

### cancelPaymentRequestMessage?

> `optional` **cancelPaymentRequestMessage**: `null` \| [`ICancelPaymentRequestMessage`](../namespaces/Message/interfaces/ICancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:10875](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10875)

Message cancelPaymentRequestMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`cancelPaymentRequestMessage`](../interfaces/IMessage.md#cancelpaymentrequestmessage)

***

### chat?

> `optional` **chat**: `null` \| [`IChat`](../namespaces/Message/interfaces/IChat.md)

Defined in: [WAProto/index.d.ts:10848](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10848)

Message chat.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`chat`](../interfaces/IMessage.md#chat)

***

### commentMessage?

> `optional` **commentMessage**: `null` \| [`ICommentMessage`](../namespaces/Message/interfaces/ICommentMessage.md)

Defined in: [WAProto/index.d.ts:11010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11010)

Message commentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`commentMessage`](../interfaces/IMessage.md#commentmessage)

***

### contactMessage?

> `optional` **contactMessage**: `null` \| [`IContactMessage`](../namespaces/Message/interfaces/IContactMessage.md)

Defined in: [WAProto/index.d.ts:10827](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10827)

Message contactMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`contactMessage`](../interfaces/IMessage.md#contactmessage)

***

### contactsArrayMessage?

> `optional` **contactsArrayMessage**: `null` \| [`IContactsArrayMessage`](../namespaces/Message/interfaces/IContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:10854](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10854)

Message contactsArrayMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`contactsArrayMessage`](../interfaces/IMessage.md#contactsarraymessage)

***

### conversation

> **conversation**: `string`

Defined in: [WAProto/index.d.ts:10818](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10818)

Message conversation.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`conversation`](../interfaces/IMessage.md#conversation)

***

### declinePaymentRequestMessage?

> `optional` **declinePaymentRequestMessage**: `null` \| [`IDeclinePaymentRequestMessage`](../namespaces/Message/interfaces/IDeclinePaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:10872](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10872)

Message declinePaymentRequestMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`declinePaymentRequestMessage`](../interfaces/IMessage.md#declinepaymentrequestmessage)

***

### deviceSentMessage?

> `optional` **deviceSentMessage**: `null` \| [`IDeviceSentMessage`](../namespaces/Message/interfaces/IDeviceSentMessage.md)

Defined in: [WAProto/index.d.ts:10893](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10893)

Message deviceSentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`deviceSentMessage`](../interfaces/IMessage.md#devicesentmessage)

***

### documentMessage?

> `optional` **documentMessage**: `null` \| [`IDocumentMessage`](../namespaces/Message/interfaces/IDocumentMessage.md)

Defined in: [WAProto/index.d.ts:10836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10836)

Message documentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`documentMessage`](../interfaces/IMessage.md#documentmessage)

***

### documentWithCaptionMessage?

> `optional` **documentWithCaptionMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10947](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10947)

Message documentWithCaptionMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`documentWithCaptionMessage`](../interfaces/IMessage.md#documentwithcaptionmessage)

***

### editedMessage?

> `optional` **editedMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10959](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10959)

Message editedMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`editedMessage`](../interfaces/IMessage.md#editedmessage)

***

### encCommentMessage?

> `optional` **encCommentMessage**: `null` \| [`IEncCommentMessage`](../namespaces/Message/interfaces/IEncCommentMessage.md)

Defined in: [WAProto/index.d.ts:10995](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10995)

Message encCommentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`encCommentMessage`](../interfaces/IMessage.md#enccommentmessage)

***

### encEventResponseMessage?

> `optional` **encEventResponseMessage**: `null` \| [`IEncEventResponseMessage`](../namespaces/Message/interfaces/IEncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:11007](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11007)

Message encEventResponseMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`encEventResponseMessage`](../interfaces/IMessage.md#enceventresponsemessage)

***

### encReactionMessage?

> `optional` **encReactionMessage**: `null` \| [`IEncReactionMessage`](../namespaces/Message/interfaces/IEncReactionMessage.md)

Defined in: [WAProto/index.d.ts:10956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10956)

Message encReactionMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`encReactionMessage`](../interfaces/IMessage.md#encreactionmessage)

***

### ephemeralMessage?

> `optional` **ephemeralMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10911](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10911)

Message ephemeralMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`ephemeralMessage`](../interfaces/IMessage.md#ephemeralmessage)

***

### eventMessage?

> `optional` **eventMessage**: `null` \| [`IEventMessage`](../namespaces/Message/interfaces/IEventMessage.md)

Defined in: [WAProto/index.d.ts:11004](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11004)

Message eventMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`eventMessage`](../interfaces/IMessage.md#eventmessage)

***

### extendedTextMessage?

> `optional` **extendedTextMessage**: `null` \| [`IExtendedTextMessage`](../namespaces/Message/interfaces/IExtendedTextMessage.md)

Defined in: [WAProto/index.d.ts:10833](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10833)

Message extendedTextMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`extendedTextMessage`](../interfaces/IMessage.md#extendedtextmessage)

***

### fastRatchetKeySenderKeyDistributionMessage?

> `optional` **fastRatchetKeySenderKeyDistributionMessage**: `null` \| [`ISenderKeyDistributionMessage`](../namespaces/Message/interfaces/ISenderKeyDistributionMessage.md)

Defined in: [WAProto/index.d.ts:10860](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10860)

Message fastRatchetKeySenderKeyDistributionMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`fastRatchetKeySenderKeyDistributionMessage`](../interfaces/IMessage.md#fastratchetkeysenderkeydistributionmessage)

***

### groupInviteMessage?

> `optional` **groupInviteMessage**: `null` \| [`IGroupInviteMessage`](../namespaces/Message/interfaces/IGroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:10884](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10884)

Message groupInviteMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`groupInviteMessage`](../interfaces/IMessage.md#groupinvitemessage)

***

### groupMentionedMessage?

> `optional` **groupMentionedMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10971)

Message groupMentionedMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`groupMentionedMessage`](../interfaces/IMessage.md#groupmentionedmessage)

***

### highlyStructuredMessage?

> `optional` **highlyStructuredMessage**: `null` \| [`IHighlyStructuredMessage`](../namespaces/Message/interfaces/IHighlyStructuredMessage.md)

Defined in: [WAProto/index.d.ts:10857](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10857)

Message highlyStructuredMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`highlyStructuredMessage`](../interfaces/IMessage.md#highlystructuredmessage)

***

### imageMessage?

> `optional` **imageMessage**: `null` \| [`IImageMessage`](../namespaces/Message/interfaces/IImageMessage.md)

Defined in: [WAProto/index.d.ts:10824](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10824)

Message imageMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`imageMessage`](../interfaces/IMessage.md#imagemessage)

***

### interactiveMessage?

> `optional` **interactiveMessage**: `null` \| [`IInteractiveMessage`](../namespaces/Message/interfaces/IInteractiveMessage.md)

Defined in: [WAProto/index.d.ts:10926](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10926)

Message interactiveMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`interactiveMessage`](../interfaces/IMessage.md#interactivemessage)

***

### interactiveResponseMessage?

> `optional` **interactiveResponseMessage**: `null` \| [`IInteractiveResponseMessage`](../namespaces/Message/interfaces/IInteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:10935](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10935)

Message interactiveResponseMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`interactiveResponseMessage`](../interfaces/IMessage.md#interactiveresponsemessage)

***

### invoiceMessage?

> `optional` **invoiceMessage**: `null` \| [`IInvoiceMessage`](../namespaces/Message/interfaces/IInvoiceMessage.md)

Defined in: [WAProto/index.d.ts:10914](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10914)

Message invoiceMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`invoiceMessage`](../interfaces/IMessage.md#invoicemessage)

***

### keepInChatMessage?

> `optional` **keepInChatMessage**: `null` \| [`IKeepInChatMessage`](../namespaces/Message/interfaces/IKeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:10944](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10944)

Message keepInChatMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`keepInChatMessage`](../interfaces/IMessage.md#keepinchatmessage)

***

### listMessage?

> `optional` **listMessage**: `null` \| [`IListMessage`](../namespaces/Message/interfaces/IListMessage.md)

Defined in: [WAProto/index.d.ts:10899](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10899)

Message listMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`listMessage`](../interfaces/IMessage.md#listmessage)

***

### listResponseMessage?

> `optional` **listResponseMessage**: `null` \| [`IListResponseMessage`](../namespaces/Message/interfaces/IListResponseMessage.md)

Defined in: [WAProto/index.d.ts:10908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10908)

Message listResponseMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`listResponseMessage`](../interfaces/IMessage.md#listresponsemessage)

***

### liveLocationMessage?

> `optional` **liveLocationMessage**: `null` \| [`ILiveLocationMessage`](../namespaces/Message/interfaces/ILiveLocationMessage.md)

Defined in: [WAProto/index.d.ts:10866](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10866)

Message liveLocationMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`liveLocationMessage`](../interfaces/IMessage.md#livelocationmessage)

***

### locationMessage?

> `optional` **locationMessage**: `null` \| [`ILocationMessage`](../namespaces/Message/interfaces/ILocationMessage.md)

Defined in: [WAProto/index.d.ts:10830](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10830)

Message locationMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`locationMessage`](../interfaces/IMessage.md#locationmessage)

***

### lottieStickerMessage?

> `optional` **lottieStickerMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:11001](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11001)

Message lottieStickerMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`lottieStickerMessage`](../interfaces/IMessage.md#lottiestickermessage)

***

### messageContextInfo?

> `optional` **messageContextInfo**: `null` \| [`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

Defined in: [WAProto/index.d.ts:10896](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10896)

Message messageContextInfo.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`messageContextInfo`](../interfaces/IMessage.md#messagecontextinfo)

***

### messageHistoryBundle?

> `optional` **messageHistoryBundle**: `null` \| [`IMessageHistoryBundle`](../namespaces/Message/interfaces/IMessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:10992](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10992)

Message messageHistoryBundle.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`messageHistoryBundle`](../interfaces/IMessage.md#messagehistorybundle)

***

### newsletterAdminInviteMessage?

> `optional` **newsletterAdminInviteMessage**: `null` \| [`INewsletterAdminInviteMessage`](../namespaces/Message/interfaces/INewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:11013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11013)

Message newsletterAdminInviteMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`newsletterAdminInviteMessage`](../interfaces/IMessage.md#newsletteradmininvitemessage)

***

### orderMessage?

> `optional` **orderMessage**: `null` \| [`IOrderMessage`](../namespaces/Message/interfaces/IOrderMessage.md)

Defined in: [WAProto/index.d.ts:10905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10905)

Message orderMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`orderMessage`](../interfaces/IMessage.md#ordermessage)

***

### paymentInviteMessage?

> `optional` **paymentInviteMessage**: `null` \| [`IPaymentInviteMessage`](../namespaces/Message/interfaces/IPaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:10923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10923)

Message paymentInviteMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`paymentInviteMessage`](../interfaces/IMessage.md#paymentinvitemessage)

***

### pinInChatMessage?

> `optional` **pinInChatMessage**: `null` \| [`IPinInChatMessage`](../namespaces/Message/interfaces/IPinInChatMessage.md)

Defined in: [WAProto/index.d.ts:10974](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10974)

Message pinInChatMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`pinInChatMessage`](../interfaces/IMessage.md#pininchatmessage)

***

### placeholderMessage?

> `optional` **placeholderMessage**: `null` \| [`IPlaceholderMessage`](../namespaces/Message/interfaces/IPlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:11016](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11016)

Message placeholderMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`placeholderMessage`](../interfaces/IMessage.md#placeholdermessage)

***

### pollCreationMessage?

> `optional` **pollCreationMessage**: `null` \| [`IPollCreationMessage`](../namespaces/Message/interfaces/IPollCreationMessage.md)

Defined in: [WAProto/index.d.ts:10938](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10938)

Message pollCreationMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`pollCreationMessage`](../interfaces/IMessage.md#pollcreationmessage)

***

### pollCreationMessageV2?

> `optional` **pollCreationMessageV2**: `null` \| [`IPollCreationMessage`](../namespaces/Message/interfaces/IPollCreationMessage.md)

Defined in: [WAProto/index.d.ts:10965](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10965)

Message pollCreationMessageV2.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`pollCreationMessageV2`](../interfaces/IMessage.md#pollcreationmessagev2)

***

### pollCreationMessageV3?

> `optional` **pollCreationMessageV3**: `null` \| [`IPollCreationMessage`](../namespaces/Message/interfaces/IPollCreationMessage.md)

Defined in: [WAProto/index.d.ts:10977](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10977)

Message pollCreationMessageV3.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`pollCreationMessageV3`](../interfaces/IMessage.md#pollcreationmessagev3)

***

### pollUpdateMessage?

> `optional` **pollUpdateMessage**: `null` \| [`IPollUpdateMessage`](../namespaces/Message/interfaces/IPollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:10941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10941)

Message pollUpdateMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`pollUpdateMessage`](../interfaces/IMessage.md#pollupdatemessage)

***

### productMessage?

> `optional` **productMessage**: `null` \| [`IProductMessage`](../namespaces/Message/interfaces/IProductMessage.md)

Defined in: [WAProto/index.d.ts:10890](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10890)

Message productMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`productMessage`](../interfaces/IMessage.md#productmessage)

***

### protocolMessage?

> `optional` **protocolMessage**: `null` \| [`IProtocolMessage`](../namespaces/Message/interfaces/IProtocolMessage.md)

Defined in: [WAProto/index.d.ts:10851](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10851)

Message protocolMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`protocolMessage`](../interfaces/IMessage.md#protocolmessage)

***

### ptvMessage?

> `optional` **ptvMessage**: `null` \| [`IVideoMessage`](../namespaces/Message/interfaces/IVideoMessage.md)

Defined in: [WAProto/index.d.ts:10983](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10983)

Message ptvMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`ptvMessage`](../interfaces/IMessage.md#ptvmessage)

***

### reactionMessage?

> `optional` **reactionMessage**: `null` \| [`IReactionMessage`](../namespaces/Message/interfaces/IReactionMessage.md)

Defined in: [WAProto/index.d.ts:10929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10929)

Message reactionMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`reactionMessage`](../interfaces/IMessage.md#reactionmessage)

***

### requestPaymentMessage?

> `optional` **requestPaymentMessage**: `null` \| [`IRequestPaymentMessage`](../namespaces/Message/interfaces/IRequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:10869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10869)

Message requestPaymentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`requestPaymentMessage`](../interfaces/IMessage.md#requestpaymentmessage)

***

### requestPhoneNumberMessage?

> `optional` **requestPhoneNumberMessage**: `null` \| [`IRequestPhoneNumberMessage`](../namespaces/Message/interfaces/IRequestPhoneNumberMessage.md)

Defined in: [WAProto/index.d.ts:10950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10950)

Message requestPhoneNumberMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`requestPhoneNumberMessage`](../interfaces/IMessage.md#requestphonenumbermessage)

***

### scheduledCallCreationMessage?

> `optional` **scheduledCallCreationMessage**: `null` \| [`IScheduledCallCreationMessage`](../namespaces/Message/interfaces/IScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:10968](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10968)

Message scheduledCallCreationMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`scheduledCallCreationMessage`](../interfaces/IMessage.md#scheduledcallcreationmessage)

***

### scheduledCallEditMessage?

> `optional` **scheduledCallEditMessage**: `null` \| [`IScheduledCallEditMessage`](../namespaces/Message/interfaces/IScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:10980](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10980)

Message scheduledCallEditMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`scheduledCallEditMessage`](../interfaces/IMessage.md#scheduledcalleditmessage)

***

### secretEncryptedMessage?

> `optional` **secretEncryptedMessage**: `null` \| [`ISecretEncryptedMessage`](../namespaces/Message/interfaces/ISecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:11019](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11019)

Message secretEncryptedMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`secretEncryptedMessage`](../interfaces/IMessage.md#secretencryptedmessage)

***

### senderKeyDistributionMessage?

> `optional` **senderKeyDistributionMessage**: `null` \| [`ISenderKeyDistributionMessage`](../namespaces/Message/interfaces/ISenderKeyDistributionMessage.md)

Defined in: [WAProto/index.d.ts:10821](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10821)

Message senderKeyDistributionMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`senderKeyDistributionMessage`](../interfaces/IMessage.md#senderkeydistributionmessage)

***

### sendPaymentMessage?

> `optional` **sendPaymentMessage**: `null` \| [`ISendPaymentMessage`](../namespaces/Message/interfaces/ISendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:10863](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10863)

Message sendPaymentMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`sendPaymentMessage`](../interfaces/IMessage.md#sendpaymentmessage)

***

### stickerMessage?

> `optional` **stickerMessage**: `null` \| [`IStickerMessage`](../namespaces/Message/interfaces/IStickerMessage.md)

Defined in: [WAProto/index.d.ts:10881](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10881)

Message stickerMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`stickerMessage`](../interfaces/IMessage.md#stickermessage)

***

### stickerSyncRmrMessage?

> `optional` **stickerSyncRmrMessage**: `null` \| [`IStickerSyncRMRMessage`](../namespaces/Message/interfaces/IStickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:10932](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10932)

Message stickerSyncRmrMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`stickerSyncRmrMessage`](../interfaces/IMessage.md#stickersyncrmrmessage)

***

### templateButtonReplyMessage?

> `optional` **templateButtonReplyMessage**: `null` \| [`ITemplateButtonReplyMessage`](../namespaces/Message/interfaces/ITemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:10887](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10887)

Message templateButtonReplyMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`templateButtonReplyMessage`](../interfaces/IMessage.md#templatebuttonreplymessage)

***

### templateMessage?

> `optional` **templateMessage**: `null` \| [`ITemplateMessage`](../namespaces/Message/interfaces/ITemplateMessage.md)

Defined in: [WAProto/index.d.ts:10878](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10878)

Message templateMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`templateMessage`](../interfaces/IMessage.md#templatemessage)

***

### videoMessage?

> `optional` **videoMessage**: `null` \| [`IVideoMessage`](../namespaces/Message/interfaces/IVideoMessage.md)

Defined in: [WAProto/index.d.ts:10842](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10842)

Message videoMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`videoMessage`](../interfaces/IMessage.md#videomessage)

***

### viewOnceMessage?

> `optional` **viewOnceMessage**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10902)

Message viewOnceMessage.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`viewOnceMessage`](../interfaces/IMessage.md#viewoncemessage)

***

### viewOnceMessageV2?

> `optional` **viewOnceMessageV2**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10953](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10953)

Message viewOnceMessageV2.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`viewOnceMessageV2`](../interfaces/IMessage.md#viewoncemessagev2)

***

### viewOnceMessageV2Extension?

> `optional` **viewOnceMessageV2Extension**: `null` \| [`IFutureProofMessage`](../namespaces/Message/interfaces/IFutureProofMessage.md)

Defined in: [WAProto/index.d.ts:10962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10962)

Message viewOnceMessageV2Extension.

#### Implementation of

[`IMessage`](../interfaces/IMessage.md).[`viewOnceMessageV2Extension`](../interfaces/IMessage.md#viewoncemessagev2extension)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:11089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11089)

Converts this Message to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Message`](Message.md)

Defined in: [WAProto/index.d.ts:11026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11026)

Creates a new Message instance using the specified properties.

#### Parameters

##### properties?

[`IMessage`](../interfaces/IMessage.md)

Properties to set

#### Returns

[`Message`](Message.md)

Message instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Message`](Message.md)

Defined in: [WAProto/index.d.ts:11052](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11052)

Decodes a Message message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Message`](Message.md)

Message

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Message`](Message.md)

Defined in: [WAProto/index.d.ts:11061](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11061)

Decodes a Message message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Message`](Message.md)

Message

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11034](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11034)

Encodes the specified Message message. Does not implicitly [verify](Message.md#verify) messages.

#### Parameters

##### message

[`IMessage`](../interfaces/IMessage.md)

Message message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11042)

Encodes the specified Message message, length delimited. Does not implicitly [verify](Message.md#verify) messages.

#### Parameters

##### message

[`IMessage`](../interfaces/IMessage.md)

Message message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Message`](Message.md)

Defined in: [WAProto/index.d.ts:11075](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11075)

Creates a Message message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Message`](Message.md)

Message

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:11096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11096)

Gets the default type url for Message

#### Parameters

##### typeUrlPrefix?

`string`

your custom typeUrlPrefix(default "type.googleapis.com")

#### Returns

`string`

The default type url

***

### toObject()

> `static` **toObject**(`message`, `options`?): `object`

Defined in: [WAProto/index.d.ts:11083](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11083)

Creates a plain object from a Message message. Also converts values to other types if specified.

#### Parameters

##### message

[`Message`](Message.md)

Message

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:11068](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11068)

Verifies a Message message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
