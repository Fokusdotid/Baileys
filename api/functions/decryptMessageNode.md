# Function: decryptMessageNode()

> **decryptMessageNode**(`stanza`, `meId`, `meLid`, `repository`, `logger`): `object`

Defined in: [src/Utils/decode-wa-message.ts:121](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Utils/decode-wa-message.ts#L121)

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
