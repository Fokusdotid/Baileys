# Function: extractSyncdPatches()

> **extractSyncdPatches**(`result`, `options`): `Promise`\<\{ `critical_block`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `critical_unblock_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_high`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; \}\>

Defined in: [src/Utils/chat-utils.ts:277](https://github.com/Fokusdotid/Baileys/blob/4cdf75fe48f9b13e8084d341633612ce49e934bd/src/Utils/chat-utils.ts#L277)

## Parameters

### result

[`BinaryNode`](../type-aliases/BinaryNode.md)

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `critical_block`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `critical_unblock_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_high`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; `regular_low`: \{ `hasMorePatches`: `boolean`; `patches`: [`ISyncdPatch`](../namespaces/proto/interfaces/ISyncdPatch.md)[]; `snapshot`: [`ISyncdSnapshot`](../namespaces/proto/interfaces/ISyncdSnapshot.md); \}; \}\>
