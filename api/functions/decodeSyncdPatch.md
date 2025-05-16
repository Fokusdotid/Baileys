# Function: decodeSyncdPatch()

> **decodeSyncdPatch**(`msg`, `name`, `initialState`, `getAppStateSyncKey`, `onMutation`, `validateMacs`): `Promise`\<\{ `hash`: `Buffer`\<`any`\>; `indexValueMap`: \{\}; \}\>

Defined in: [src/Utils/chat-utils.ts:249](https://github.com/Fokusdotid/Baileys/blob/49e815e65b8f4aea31725e09dcf4815734557e39/src/Utils/chat-utils.ts#L249)

## Parameters

### msg

[`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)

### name

`"critical_block"` | `"critical_unblock_low"` | `"regular_high"` | `"regular_low"` | `"regular"`

### initialState

[`LTHashState`](../type-aliases/LTHashState.md)

### getAppStateSyncKey

`FetchAppStateSyncKey`

### onMutation

(`mutation`) => `void`

### validateMacs

`boolean`

## Returns

`Promise`\<\{ `hash`: `Buffer`\<`any`\>; `indexValueMap`: \{\}; \}\>
