# Function: extractSyncdPatches()

> **extractSyncdPatches**(`result`, `options`): `Promise`\<\{ `critical_block`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `critical_unblock_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_high`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; \}\>

Defined in: [src/Utils/chat-utils.ts:277](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Utils/chat-utils.ts#L277)

## Parameters

### result

[`BinaryNode`](../type-aliases/BinaryNode.md)

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `critical_block`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `critical_unblock_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_high`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; \}\>
