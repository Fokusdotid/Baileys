# Function: decodeMessageNode()

> **decodeMessageNode**(`stanza`, `meId`, `meLid`): `object`

Defined in: [src/Utils/decode-wa-message.ts:33](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Utils/decode-wa-message.ts#L33)

Decode the received node as a message.

## Parameters

### stanza

[`BinaryNode`](../type-aliases/BinaryNode.md)

### meId

`string`

### meLid

`string`

## Returns

`object`

### author

> **author**: `string`

### fullMessage

> **fullMessage**: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)

### sender

> **sender**: `string`

## Note

this will only parse the message, not decrypt it
