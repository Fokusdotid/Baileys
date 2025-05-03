# Function: fetchLatestBaileysVersion()

> **fetchLatestBaileysVersion**(`options`): `Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>

Defined in: [src/Utils/generics.ts:248](https://github.com/Fokusdotid/Baileys/blob/8399cb6fd4e55090cdf57b06ffaae3e8a88880fe/src/Utils/generics.ts#L248)

utility that fetches latest baileys version from the master branch.
Use to ensure your WA connection is always on the latest version

## Parameters

### options

`AxiosRequestConfig`\<\{\}\> = `{}`

## Returns

`Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>
