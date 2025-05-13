# Function: decryptMessageNode()

> **decryptMessageNode**(`stanza`, `meId`, `meLid`, `repository`, `logger`): `object`

Defined in: [src/Utils/decode-wa-message.ts:121](https://github.com/Fokusdotid/Baileys/blob/4c54e9ae0a9f37422d51e97c3454891bf06f36e1/src/Utils/decode-wa-message.ts#L121)

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
