# Function: decodeMediaRetryNode()

> **decodeMediaRetryNode**(`node`): `object`

Defined in: [src/Utils/messages-media.ts:722](https://github.com/Fokusdotid/Baileys/blob/039f28db78950e3bac7c407f144ea390dcdf207d/src/Utils/messages-media.ts#L722)

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
