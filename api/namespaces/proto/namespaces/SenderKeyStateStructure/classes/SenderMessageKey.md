# Class: SenderMessageKey

Defined in: [WAProto/index.d.ts:30032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30032)

Represents a SenderMessageKey.

## Implements

- [`ISenderMessageKey`](../interfaces/ISenderMessageKey.md)

## Constructors

### new SenderMessageKey()

> **new SenderMessageKey**(`properties`?): [`SenderMessageKey`](SenderMessageKey.md)

Defined in: [WAProto/index.d.ts:30038](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30038)

Constructs a new SenderMessageKey.

#### Parameters

##### properties?

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md)

Properties to set

#### Returns

[`SenderMessageKey`](SenderMessageKey.md)

## Properties

### iteration

> **iteration**: `number`

Defined in: [WAProto/index.d.ts:30041](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30041)

SenderMessageKey iteration.

#### Implementation of

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md).[`iteration`](../interfaces/ISenderMessageKey.md#iteration)

***

### seed

> **seed**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30044](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30044)

SenderMessageKey seed.

#### Implementation of

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md).[`seed`](../interfaces/ISenderMessageKey.md#seed)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30114](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30114)

Converts this SenderMessageKey to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SenderMessageKey`](SenderMessageKey.md)

Defined in: [WAProto/index.d.ts:30051](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30051)

Creates a new SenderMessageKey instance using the specified properties.

#### Parameters

##### properties?

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md)

Properties to set

#### Returns

[`SenderMessageKey`](SenderMessageKey.md)

SenderMessageKey instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SenderMessageKey`](SenderMessageKey.md)

Defined in: [WAProto/index.d.ts:30077](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30077)

Decodes a SenderMessageKey message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SenderMessageKey`](SenderMessageKey.md)

SenderMessageKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SenderMessageKey`](SenderMessageKey.md)

Defined in: [WAProto/index.d.ts:30086](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30086)

Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SenderMessageKey`](SenderMessageKey.md)

SenderMessageKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30059](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30059)

Encodes the specified SenderMessageKey message. Does not implicitly [verify](SenderMessageKey.md#verify) messages.

#### Parameters

##### message

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md)

SenderMessageKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30067](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30067)

Encodes the specified SenderMessageKey message, length delimited. Does not implicitly [verify](SenderMessageKey.md#verify) messages.

#### Parameters

##### message

[`ISenderMessageKey`](../interfaces/ISenderMessageKey.md)

SenderMessageKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SenderMessageKey`](SenderMessageKey.md)

Defined in: [WAProto/index.d.ts:30100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30100)

Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SenderMessageKey`](SenderMessageKey.md)

SenderMessageKey

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30121](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30121)

Gets the default type url for SenderMessageKey

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

Defined in: [WAProto/index.d.ts:30108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30108)

Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.

#### Parameters

##### message

[`SenderMessageKey`](SenderMessageKey.md)

SenderMessageKey

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30093)

Verifies a SenderMessageKey message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
