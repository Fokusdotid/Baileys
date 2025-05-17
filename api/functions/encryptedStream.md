# Function: encryptedStream()

> **encryptedStream**(`media`, `mediaType`, `__namedParameters`): `Promise`\<\{ `encFilePath`: `string`; `fileEncSha256`: `Buffer`\<`ArrayBufferLike`\>; `fileLength`: `number`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; `mac`: `Buffer`\<`ArrayBuffer`\>; `mediaKey`: `Buffer`\<`ArrayBufferLike`\>; `originalFilePath`: `undefined` \| `string`; \}\>

Defined in: [src/Utils/messages-media.ts:337](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Utils/messages-media.ts#L337)

## Parameters

### media

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### mediaType

`"ppic"` | `"product"` | `"image"` | `"video"` | `"sticker"` | `"audio"` | `"gif"` | `"ptt"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-link"` | `"thumbnail-video"` | `"md-app-state"` | `"md-msg-hist"` | `"document"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"`

### \_\_namedParameters

`EncryptedStreamOptions` = `{}`

## Returns

`Promise`\<\{ `encFilePath`: `string`; `fileEncSha256`: `Buffer`\<`ArrayBufferLike`\>; `fileLength`: `number`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; `mac`: `Buffer`\<`ArrayBuffer`\>; `mediaKey`: `Buffer`\<`ArrayBufferLike`\>; `originalFilePath`: `undefined` \| `string`; \}\>
