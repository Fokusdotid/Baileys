# Function: decryptMessageNode()

> **decryptMessageNode**(`stanza`, `meId`, `meLid`, `repository`, `logger`): `object`

Defined in: [src/Utils/decode-wa-message.ts:121](https://github.com/Fokusdotid/Baileys/blob/c0c23ce3104b65dfcc64246c9ee8a49ef38993b5/src/Utils/decode-wa-message.ts#L121)

## Parameters

### stanza

[`BinaryNode`](../type-aliases/BinaryNode.md)

### meId

`string`

### meLid

`string`

### repository

[`SignalRepository`](../type-aliases/SignalRepository.md)

### logger

`ILogger`

## Returns

`object`

### author

> **author**: `string`

### category

> **category**: `string` = `stanza.attrs.category`

### fullMessage

> **fullMessage**: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)

### decrypt()

#### Returns

`Promise`\<`void`\>
