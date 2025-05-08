# Function: decodeSyncdSnapshot()

> **decodeSyncdSnapshot**(`name`, `snapshot`, `getAppStateSyncKey`, `minimumVersionNumber`, `validateMacs`): `Promise`\<\{ `mutationMap`: [`ChatMutationMap`](../type-aliases/ChatMutationMap.md); `state`: [`LTHashState`](../type-aliases/LTHashState.md); \}\>

Defined in: [src/Utils/chat-utils.ts:357](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Utils/chat-utils.ts#L357)

## Parameters

### name

`"critical_block"` | `"critical_unblock_low"` | `"regular_high"` | `"regular_low"` | `"regular"`

### snapshot

[`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md)

### getAppStateSyncKey

`FetchAppStateSyncKey`

### minimumVersionNumber

`undefined` | `number`

### validateMacs

`boolean` = `true`

## Returns

`Promise`\<\{ `mutationMap`: [`ChatMutationMap`](../type-aliases/ChatMutationMap.md); `state`: [`LTHashState`](../type-aliases/LTHashState.md); \}\>
