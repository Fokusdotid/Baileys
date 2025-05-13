# Function: getStream()

> **getStream**(`item`, `opts`?): `Promise`\<\{ `stream`: `Readable`; `type`: `"buffer"`; \} \| \{ `stream`: `Readable`; `type`: `"readable"`; \} \| \{ `stream`: `Readable`; `type`: `"remote"`; \} \| \{ `stream`: `ReadStream`; `type`: `"file"`; \}\>

Defined in: [src/Utils/messages-media.ts:272](https://github.com/Fokusdotid/Baileys/blob/c2e37a764497a58082d1525ba2f083f341e3eefa/src/Utils/messages-media.ts#L272)

## Parameters

### item

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### opts?

`AxiosRequestConfig`\<`any`\>

## Returns

`Promise`\<\{ `stream`: `Readable`; `type`: `"buffer"`; \} \| \{ `stream`: `Readable`; `type`: `"readable"`; \} \| \{ `stream`: `Readable`; `type`: `"remote"`; \} \| \{ `stream`: `ReadStream`; `type`: `"file"`; \}\>
