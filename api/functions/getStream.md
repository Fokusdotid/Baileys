# Function: getStream()

> **getStream**(`item`, `opts`?): `Promise`\<\{ `stream`: `Readable`; `type`: `"buffer"`; \} \| \{ `stream`: `Readable`; `type`: `"readable"`; \} \| \{ `stream`: `Readable`; `type`: `"remote"`; \} \| \{ `stream`: `ReadStream`; `type`: `"file"`; \}\>

Defined in: [src/Utils/messages-media.ts:272](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/src/Utils/messages-media.ts#L272)

## Parameters

### item

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### opts?

`AxiosRequestConfig`\<`any`\>

## Returns

`Promise`\<\{ `stream`: `Readable`; `type`: `"buffer"`; \} \| \{ `stream`: `Readable`; `type`: `"readable"`; \} \| \{ `stream`: `Readable`; `type`: `"remote"`; \} \| \{ `stream`: `ReadStream`; `type`: `"file"`; \}\>
