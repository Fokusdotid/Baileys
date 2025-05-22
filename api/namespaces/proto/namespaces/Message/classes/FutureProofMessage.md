# Class: FutureProofMessage

Defined in: [WAProto/index.d.ts:15044](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15044)

Represents a FutureProofMessage.

## Implements

- [`IFutureProofMessage`](../interfaces/IFutureProofMessage.md)

## Constructors

### new FutureProofMessage()

> **new FutureProofMessage**(`properties`?): [`FutureProofMessage`](FutureProofMessage.md)

Defined in: [WAProto/index.d.ts:15050](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15050)

Constructs a new FutureProofMessage.

#### Parameters

##### properties?

[`IFutureProofMessage`](../interfaces/IFutureProofMessage.md)

Properties to set

#### Returns

[`FutureProofMessage`](FutureProofMessage.md)

## Properties

### message?

> `optional` **message**: `null` \| [`IMessage`](../../../interfaces/IMessage.md)

Defined in: [WAProto/index.d.ts:15053](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15053)

FutureProofMessage message.

#### Implementation of

[`IFutureProofMessage`](../interfaces/IFutureProofMessage.md).[`message`](../interfaces/IFutureProofMessage.md#message)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15123)

Converts this FutureProofMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`FutureProofMessage`](FutureProofMessage.md)

Defined in: [WAProto/index.d.ts:15060](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15060)

Creates a new FutureProofMessage instance using the specified properties.

#### Parameters

##### properties?

[`IFutureProofMessage`](../interfaces/IFutureProofMessage.md)

Properties to set

#### Returns

[`FutureProofMessage`](FutureProofMessage.md)

FutureProofMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`FutureProofMessage`](FutureProofMessage.md)

Defined in: [WAProto/index.d.ts:15086](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15086)

Decodes a FutureProofMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`FutureProofMessage`](FutureProofMessage.md)

FutureProofMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`FutureProofMessage`](FutureProofMessage.md)

Defined in: [WAProto/index.d.ts:15095](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15095)

Decodes a FutureProofMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`FutureProofMessage`](FutureProofMessage.md)

FutureProofMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15068](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15068)

Encodes the specified FutureProofMessage message. Does not implicitly [verify](FutureProofMessage.md#verify) messages.

#### Parameters

##### message

[`IFutureProofMessage`](../interfaces/IFutureProofMessage.md)

FutureProofMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15076](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15076)

Encodes the specified FutureProofMessage message, length delimited. Does not implicitly [verify](FutureProofMessage.md#verify) messages.

#### Parameters

##### message

[`IFutureProofMessage`](../interfaces/IFutureProofMessage.md)

FutureProofMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`FutureProofMessage`](FutureProofMessage.md)

Defined in: [WAProto/index.d.ts:15109](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15109)

Creates a FutureProofMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`FutureProofMessage`](FutureProofMessage.md)

FutureProofMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:15130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15130)

Gets the default type url for FutureProofMessage

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

Defined in: [WAProto/index.d.ts:15117](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15117)

Creates a plain object from a FutureProofMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`FutureProofMessage`](FutureProofMessage.md)

FutureProofMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15102](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15102)

Verifies a FutureProofMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
