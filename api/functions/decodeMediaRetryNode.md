# Function: decodeMediaRetryNode()

> **decodeMediaRetryNode**(`node`): `object`

Defined in: [src/Utils/messages-media.ts:730](https://github.com/Fokusdotid/Baileys/blob/86ad0f8078178c8586062ad3364a59e068f4b3b2/src/Utils/messages-media.ts#L730)

## Parameters

### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

## Returns

`object`

### error?

> `optional` **error**: `Boom`\<`any`\>

### key

> **key**: [`IMessageKey`](../namespaces/proto/interfaces/IMessageKey.md)

### media?

> `optional` **media**: `object`

#### media.ciphertext

> **ciphertext**: `Uint8Array`

#### media.iv

> **iv**: `Uint8Array`
