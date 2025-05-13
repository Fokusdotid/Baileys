# Type Alias: BinaryNode

> **BinaryNode**: `object`

Defined in: [src/WABinary/types.ts:9](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/WABinary/types.ts#L9)

the binary node WA uses internally for communication

this is manipulated soley as an object and it does not have any functions.
This is done for easy serialization, to prevent running into issues with prototypes &
to maintain functional code structure

## Type declaration

### attrs

> **attrs**: `object`

#### Index Signature

\[`key`: `string`\]: `string`

### content?

> `optional` **content**: [`BinaryNode`](BinaryNode.md)[] \| `string` \| `Uint8Array`

### tag

> **tag**: `string`
