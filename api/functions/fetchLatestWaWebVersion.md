# Function: fetchLatestWaWebVersion()

> **fetchLatestWaWebVersion**(`options`): `Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>

Defined in: [src/Utils/generics.ts:275](https://github.com/Fokusdotid/Baileys/blob/eb819228f591f9a29a091aefc3a8c91a38d77089/src/Utils/generics.ts#L275)

A utility that fetches the latest web version of whatsapp.
Use to ensure your WA connection is always on the latest version

## Parameters

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>
