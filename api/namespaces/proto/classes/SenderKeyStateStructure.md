# Class: SenderKeyStateStructure

Defined in: [WAProto/index.d.ts:29818](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29818)

Represents a SenderKeyStateStructure.

## Implements

- [`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)

## Constructors

### new SenderKeyStateStructure()

> **new SenderKeyStateStructure**(`properties`?): [`SenderKeyStateStructure`](SenderKeyStateStructure.md)

Defined in: [WAProto/index.d.ts:29824](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29824)

Constructs a new SenderKeyStateStructure.

#### Parameters

##### properties?

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)

Properties to set

#### Returns

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

## Properties

### senderChainKey?

> `optional` **senderChainKey**: `null` \| [`ISenderChainKey`](../namespaces/SenderKeyStateStructure/interfaces/ISenderChainKey.md)

Defined in: [WAProto/index.d.ts:29830](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29830)

SenderKeyStateStructure senderChainKey.

#### Implementation of

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md).[`senderChainKey`](../interfaces/ISenderKeyStateStructure.md#senderchainkey)

***

### senderKeyId

> **senderKeyId**: `number`

Defined in: [WAProto/index.d.ts:29827](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29827)

SenderKeyStateStructure senderKeyId.

#### Implementation of

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md).[`senderKeyId`](../interfaces/ISenderKeyStateStructure.md#senderkeyid)

***

### senderMessageKeys

> **senderMessageKeys**: [`ISenderMessageKey`](../namespaces/SenderKeyStateStructure/interfaces/ISenderMessageKey.md)[]

Defined in: [WAProto/index.d.ts:29836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29836)

SenderKeyStateStructure senderMessageKeys.

#### Implementation of

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md).[`senderMessageKeys`](../interfaces/ISenderKeyStateStructure.md#sendermessagekeys)

***

### senderSigningKey?

> `optional` **senderSigningKey**: `null` \| [`ISenderSigningKey`](../namespaces/SenderKeyStateStructure/interfaces/ISenderSigningKey.md)

Defined in: [WAProto/index.d.ts:29833](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29833)

SenderKeyStateStructure senderSigningKey.

#### Implementation of

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md).[`senderSigningKey`](../interfaces/ISenderKeyStateStructure.md#sendersigningkey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29906](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29906)

Converts this SenderKeyStateStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SenderKeyStateStructure`](SenderKeyStateStructure.md)

Defined in: [WAProto/index.d.ts:29843](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29843)

Creates a new SenderKeyStateStructure instance using the specified properties.

#### Parameters

##### properties?

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)

Properties to set

#### Returns

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

SenderKeyStateStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SenderKeyStateStructure`](SenderKeyStateStructure.md)

Defined in: [WAProto/index.d.ts:29869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29869)

Decodes a SenderKeyStateStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

SenderKeyStateStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SenderKeyStateStructure`](SenderKeyStateStructure.md)

Defined in: [WAProto/index.d.ts:29878](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29878)

Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

SenderKeyStateStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29851](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29851)

Encodes the specified SenderKeyStateStructure message. Does not implicitly [verify](SenderKeyStateStructure.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)

SenderKeyStateStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29859)

Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly [verify](SenderKeyStateStructure.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)

SenderKeyStateStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SenderKeyStateStructure`](SenderKeyStateStructure.md)

Defined in: [WAProto/index.d.ts:29892](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29892)

Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

SenderKeyStateStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29913](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29913)

Gets the default type url for SenderKeyStateStructure

#### Parameters

##### typeUrlPrefix?

`string`

your custom typeUrlPrefix(default "type.googleapis.com")

#### Returns

`string`

The default type url

***

### toObject()

> `static` **toObject**(`message`, `options`?): `object`

Defined in: [WAProto/index.d.ts:29900](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29900)

Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`SenderKeyStateStructure`](SenderKeyStateStructure.md)

SenderKeyStateStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29885](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29885)

Verifies a SenderKeyStateStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
