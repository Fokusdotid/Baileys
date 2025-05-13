# Function: encryptMediaRetryRequest()

> **encryptMediaRetryRequest**(`key`, `mediaKey`, `meId`): `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

Defined in: [src/Utils/messages-media.ts:676](https://github.com/Fokusdotid/Baileys/blob/58a03b5a49cf326e1050515994499cb0bb76662f/src/Utils/messages-media.ts#L676)

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
