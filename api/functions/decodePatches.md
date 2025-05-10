# Function: decodePatches()

> **decodePatches**(`name`, `syncds`, `initial`, `getAppStateSyncKey`, `options`, `minimumVersionNumber`?, `logger`?, `validateMacs`?): `Promise`\<\{ `mutationMap`: [`ChatMutationMap`](../type-aliases/ChatMutationMap.md); `state`: [`LTHashState`](../type-aliases/LTHashState.md); \}\>

Defined in: [src/Utils/chat-utils.ts:406](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Utils/chat-utils.ts#L406)

## Parameters

### name

`"critical_block"` | `"critical_unblock_low"` | `"regular_high"` | `"regular_low"` | `"regular"`

### syncds

[`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]

### initial

[`LTHashState`](../type-aliases/LTHashState.md)

### getAppStateSyncKey

`FetchAppStateSyncKey`

### options

`AxiosRequestConfig`\<\{\}\>

### minimumVersionNumber?

`number`

### logger?

`ILogger`

### validateMacs?

`boolean` = `true`

## Returns

`Promise`\<\{ `mutationMap`: [`ChatMutationMap`](../type-aliases/ChatMutationMap.md); `state`: [`LTHashState`](../type-aliases/LTHashState.md); \}\>
