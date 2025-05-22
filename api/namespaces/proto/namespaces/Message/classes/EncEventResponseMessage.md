# Class: EncEventResponseMessage

Defined in: [WAProto/index.d.ts:14320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14320)

Represents an EncEventResponseMessage.

## Implements

- [`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md)

## Constructors

### new EncEventResponseMessage()

> **new EncEventResponseMessage**(`properties`?): [`EncEventResponseMessage`](EncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:14326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14326)

Constructs a new EncEventResponseMessage.

#### Parameters

##### properties?

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md)

Properties to set

#### Returns

[`EncEventResponseMessage`](EncEventResponseMessage.md)

## Properties

### encIv

> **encIv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14335](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14335)

EncEventResponseMessage encIv.

#### Implementation of

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md).[`encIv`](../interfaces/IEncEventResponseMessage.md#enciv)

***

### encPayload

> **encPayload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14332)

EncEventResponseMessage encPayload.

#### Implementation of

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md).[`encPayload`](../interfaces/IEncEventResponseMessage.md#encpayload)

***

### eventCreationMessageKey?

> `optional` **eventCreationMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:14329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14329)

EncEventResponseMessage eventCreationMessageKey.

#### Implementation of

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md).[`eventCreationMessageKey`](../interfaces/IEncEventResponseMessage.md#eventcreationmessagekey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:14405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14405)

Converts this EncEventResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EncEventResponseMessage`](EncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:14342](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14342)

Creates a new EncEventResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md)

Properties to set

#### Returns

[`EncEventResponseMessage`](EncEventResponseMessage.md)

EncEventResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EncEventResponseMessage`](EncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:14368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14368)

Decodes an EncEventResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EncEventResponseMessage`](EncEventResponseMessage.md)

EncEventResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EncEventResponseMessage`](EncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:14377](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14377)

Decodes an EncEventResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EncEventResponseMessage`](EncEventResponseMessage.md)

EncEventResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14350](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14350)

Encodes the specified EncEventResponseMessage message. Does not implicitly [verify](EncEventResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md)

EncEventResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14358](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14358)

Encodes the specified EncEventResponseMessage message, length delimited. Does not implicitly [verify](EncEventResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IEncEventResponseMessage`](../interfaces/IEncEventResponseMessage.md)

EncEventResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EncEventResponseMessage`](EncEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:14391](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14391)

Creates an EncEventResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EncEventResponseMessage`](EncEventResponseMessage.md)

EncEventResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:14412](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14412)

Gets the default type url for EncEventResponseMessage

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

Defined in: [WAProto/index.d.ts:14399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14399)

Creates a plain object from an EncEventResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`EncEventResponseMessage`](EncEventResponseMessage.md)

EncEventResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:14384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14384)

Verifies an EncEventResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
