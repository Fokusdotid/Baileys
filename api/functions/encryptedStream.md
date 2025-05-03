# Function: encryptedStream()

> **encryptedStream**(`media`, `mediaType`, `__namedParameters`): `Promise`\<\{ `bodyPath`: `undefined` \| `string`; `didSaveToTmpPath`: `boolean`; `encWriteStream`: `Readable`; `fileEncSha256`: `Buffer`\<`ArrayBufferLike`\>; `fileLength`: `number`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; `mac`: `Buffer`\<`ArrayBuffer`\>; `mediaKey`: `Buffer`\<`ArrayBufferLike`\>; \}\>

Defined in: [src/Utils/messages-media.ts:337](https://github.com/Fokusdotid/Baileys/blob/8399cb6fd4e55090cdf57b06ffaae3e8a88880fe/src/Utils/messages-media.ts#L337)

## Parameters

### media

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### mediaType

`"ppic"` | `"product"` | `"image"` | `"video"` | `"sticker"` | `"audio"` | `"gif"` | `"ptt"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-link"` | `"thumbnail-video"` | `"md-app-state"` | `"md-msg-hist"` | `"document"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"`

### \_\_namedParameters

`EncryptedStreamOptions` = `{}`

## Returns

`Promise`\<\{ `bodyPath`: `undefined` \| `string`; `didSaveToTmpPath`: `boolean`; `encWriteStream`: `Readable`; `fileEncSha256`: `Buffer`\<`ArrayBufferLike`\>; `fileLength`: `number`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; `mac`: `Buffer`\<`ArrayBuffer`\>; `mediaKey`: `Buffer`\<`ArrayBufferLike`\>; \}\>
