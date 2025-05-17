# Type Alias: SignalRepository

> **SignalRepository**: `object`

Defined in: [src/Types/Signal.ts:52](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Types/Signal.ts#L52)

## Type declaration

### decryptGroupMessage()

#### Parameters

##### opts

`DecryptGroupSignalOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

### decryptMessage()

#### Parameters

##### opts

`DecryptSignalProtoOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

### encryptGroupMessage()

#### Parameters

##### opts

`EncryptGroupMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `senderKeyDistributionMessage`: `Uint8Array`; \}\>

### encryptMessage()

#### Parameters

##### opts

`EncryptMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; \}\>

### injectE2ESession()

#### Parameters

##### opts

`E2ESessionOpts`

#### Returns

`Promise`\<`void`\>

### jidToSignalProtocolAddress()

#### Parameters

##### jid

`string`

#### Returns

`string`

### processSenderKeyDistributionMessage()

#### Parameters

##### opts

`ProcessSenderKeyDistributionMessageOpts`

#### Returns

`Promise`\<`void`\>
