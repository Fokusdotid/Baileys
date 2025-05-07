# Function: decodeMessageNode()

> **decodeMessageNode**(`stanza`, `meId`, `meLid`): `object`

Defined in: [src/Utils/decode-wa-message.ts:33](https://github.com/Fokusdotid/Baileys/blob/4cdf75fe48f9b13e8084d341633612ce49e934bd/src/Utils/decode-wa-message.ts#L33)

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
