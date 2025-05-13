# Function: downloadMediaMessage()

> **downloadMediaMessage**\<`Type`\>(`message`, `type`, `options`, `ctx`?): `Promise`\<`Type` *extends* `"buffer"` ? `Buffer`\<`ArrayBufferLike`\> : `Transform`\>

Defined in: [src/Utils/messages.ts:964](https://github.com/Fokusdotid/Baileys/blob/db1d3e5f41e9eede5877460f9adbb0224021575c/src/Utils/messages.ts#L964)

Downloads the given message. Throws an error if it's not a media message

## Type Parameters

• **Type** *extends* `"stream"` \| `"buffer"`

## Parameters

### message

[`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)

### type

`Type`

### options

[`MediaDownloadOptions`](../type-aliases/MediaDownloadOptions.md)

### ctx?

`DownloadMediaMessageContext`

## Returns

`Promise`\<`Type` *extends* `"buffer"` ? `Buffer`\<`ArrayBufferLike`\> : `Transform`\>
