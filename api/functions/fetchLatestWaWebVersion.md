# Function: fetchLatestWaWebVersion()

> **fetchLatestWaWebVersion**(`options`): `Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>

Defined in: [src/Utils/generics.ts:275](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Utils/generics.ts#L275)

A utility that fetches the latest web version of whatsapp.
Use to ensure your WA connection is always on the latest version

## Parameters

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>
