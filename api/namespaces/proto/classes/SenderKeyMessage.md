# Class: SenderKeyMessage

Defined in: [WAProto/index.d.ts:29609](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29609)

Represents a SenderKeyMessage.

## Implements

- [`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md)

## Constructors

### new SenderKeyMessage()

> **new SenderKeyMessage**(`properties`?): [`SenderKeyMessage`](SenderKeyMessage.md)

Defined in: [WAProto/index.d.ts:29615](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29615)

Constructs a new SenderKeyMessage.

#### Parameters

##### properties?

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md)

Properties to set

#### Returns

[`SenderKeyMessage`](SenderKeyMessage.md)

## Properties

### ciphertext

> **ciphertext**: `Uint8Array`

Defined in: [WAProto/index.d.ts:29624](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29624)

SenderKeyMessage ciphertext.

#### Implementation of

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md).[`ciphertext`](../interfaces/ISenderKeyMessage.md#ciphertext)

***

### id

> **id**: `number`

Defined in: [WAProto/index.d.ts:29618](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29618)

SenderKeyMessage id.

#### Implementation of

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md).[`id`](../interfaces/ISenderKeyMessage.md#id)

***

### iteration

> **iteration**: `number`

Defined in: [WAProto/index.d.ts:29621](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29621)

SenderKeyMessage iteration.

#### Implementation of

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md).[`iteration`](../interfaces/ISenderKeyMessage.md#iteration)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29694](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29694)

Converts this SenderKeyMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SenderKeyMessage`](SenderKeyMessage.md)

Defined in: [WAProto/index.d.ts:29631](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29631)

Creates a new SenderKeyMessage instance using the specified properties.

#### Parameters

##### properties?

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md)

Properties to set

#### Returns

[`SenderKeyMessage`](SenderKeyMessage.md)

SenderKeyMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SenderKeyMessage`](SenderKeyMessage.md)

Defined in: [WAProto/index.d.ts:29657](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29657)

Decodes a SenderKeyMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SenderKeyMessage`](SenderKeyMessage.md)

SenderKeyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SenderKeyMessage`](SenderKeyMessage.md)

Defined in: [WAProto/index.d.ts:29666](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29666)

Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SenderKeyMessage`](SenderKeyMessage.md)

SenderKeyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29639](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29639)

Encodes the specified SenderKeyMessage message. Does not implicitly [verify](SenderKeyMessage.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md)

SenderKeyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29647)

Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly [verify](SenderKeyMessage.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyMessage`](../interfaces/ISenderKeyMessage.md)

SenderKeyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SenderKeyMessage`](SenderKeyMessage.md)

Defined in: [WAProto/index.d.ts:29680](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29680)

Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SenderKeyMessage`](SenderKeyMessage.md)

SenderKeyMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29701](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29701)

Gets the default type url for SenderKeyMessage

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

Defined in: [WAProto/index.d.ts:29688](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29688)

Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`SenderKeyMessage`](SenderKeyMessage.md)

SenderKeyMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29673](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29673)

Verifies a SenderKeyMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
