# Function: fetchLatestBaileysVersion()

> **fetchLatestBaileysVersion**(`options`): `Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>

Defined in: [src/Utils/generics.ts:248](https://github.com/Fokusdotid/Baileys/blob/86ad0f8078178c8586062ad3364a59e068f4b3b2/src/Utils/generics.ts#L248)

utility that fetches latest baileys version from the master branch.
Use to ensure your WA connection is always on the latest version

## Parameters

### options

`AxiosRequestConfig`\<\{\}\> = `{}`

## Returns

`Promise`\<\{ `error`: `undefined`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \} \| \{ `error`: `any`; `isLatest`: `boolean`; `version`: [`WAVersion`](../type-aliases/WAVersion.md); \}\>
