# Function: decodeSyncdMutations()

> **decodeSyncdMutations**(`msgMutations`, `initialState`, `getAppStateSyncKey`, `onMutation`, `validateMacs`): `Promise`\<\{ `hash`: `Buffer`\<`any`\>; `indexValueMap`: \{\}; \}\>

Defined in: [src/Utils/chat-utils.ts:188](https://github.com/Fokusdotid/Baileys/blob/a954da2ee3c892812cf9528a5a214092693c872f/src/Utils/chat-utils.ts#L188)

## Parameters

### msgMutations

([`ISyncdMutation`](../namespaces/proto/interfaces/ISyncdMutation.md) \| [`ISyncdRecord`](../namespaces/proto/interfaces/ISyncdRecord.md))[]

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
