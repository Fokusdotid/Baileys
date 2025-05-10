# Function: decodePatches()

> **decodePatches**(`name`, `syncds`, `initial`, `getAppStateSyncKey`, `options`, `minimumVersionNumber`?, `logger`?, `validateMacs`?): `Promise`\<\{ `mutationMap`: [`ChatMutationMap`](../type-aliases/ChatMutationMap.md); `state`: [`LTHashState`](../type-aliases/LTHashState.md); \}\>

Defined in: [src/Utils/chat-utils.ts:406](https://github.com/Fokusdotid/Baileys/blob/6a8e2076fa4119b2d5152250d579a4fbed394533/src/Utils/chat-utils.ts#L406)

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
