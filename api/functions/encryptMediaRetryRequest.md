# Function: encryptMediaRetryRequest()

> **encryptMediaRetryRequest**(`key`, `mediaKey`, `meId`): `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

Defined in: [src/Utils/messages-media.ts:684](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Utils/messages-media.ts#L684)

Generate a binary node that will request the phone to re-upload the media & return the newly uploaded URL

## Parameters

### key

[`IMessageKey`](../namespaces/proto/interfaces/IMessageKey.md)

### mediaKey

`Uint8Array`\<`ArrayBufferLike`\> | `Buffer`\<`ArrayBufferLike`\>

### meId

`string`

## Returns

`Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>
