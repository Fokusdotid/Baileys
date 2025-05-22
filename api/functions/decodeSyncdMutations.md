# Function: decodeSyncdMutations()

> **decodeSyncdMutations**(`msgMutations`, `initialState`, `getAppStateSyncKey`, `onMutation`, `validateMacs`): `Promise`\<\{ `hash`: `Buffer`\<`any`\>; `indexValueMap`: \{\}; \}\>

Defined in: [src/Utils/chat-utils.ts:188](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Utils/chat-utils.ts#L188)

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
