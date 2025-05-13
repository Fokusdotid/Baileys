# Function: encryptMediaRetryRequest()

> **encryptMediaRetryRequest**(`key`, `mediaKey`, `meId`): `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

Defined in: [src/Utils/messages-media.ts:676](https://github.com/Fokusdotid/Baileys/blob/c2e37a764497a58082d1525ba2f083f341e3eefa/src/Utils/messages-media.ts#L676)

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
