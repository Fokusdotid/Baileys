# Class: SyncdMutation

Defined in: [WAProto/index.d.ts:37359](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37359)

Represents a SyncdMutation.

## Implements

- [`ISyncdMutation`](../interfaces/ISyncdMutation.md)

## Constructors

### new SyncdMutation()

> **new SyncdMutation**(`properties`?): [`SyncdMutation`](SyncdMutation.md)

Defined in: [WAProto/index.d.ts:37365](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37365)

Constructs a new SyncdMutation.

#### Parameters

##### properties?

[`ISyncdMutation`](../interfaces/ISyncdMutation.md)

Properties to set

#### Returns

[`SyncdMutation`](SyncdMutation.md)

## Properties

### operation

> **operation**: [`SyncdOperation`](../namespaces/SyncdMutation/enumerations/SyncdOperation.md)

Defined in: [WAProto/index.d.ts:37368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37368)

SyncdMutation operation.

#### Implementation of

[`ISyncdMutation`](../interfaces/ISyncdMutation.md).[`operation`](../interfaces/ISyncdMutation.md#operation)

***

### record?

> `optional` **record**: `null` \| [`ISyncdRecord`](../interfaces/ISyncdRecord.md)

Defined in: [WAProto/index.d.ts:37371](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37371)

SyncdMutation record.

#### Implementation of

[`ISyncdMutation`](../interfaces/ISyncdMutation.md).[`record`](../interfaces/ISyncdMutation.md#record)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37441](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37441)

Converts this SyncdMutation to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdMutation`](SyncdMutation.md)

Defined in: [WAProto/index.d.ts:37378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37378)

Creates a new SyncdMutation instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdMutation`](../interfaces/ISyncdMutation.md)

Properties to set

#### Returns

[`SyncdMutation`](SyncdMutation.md)

SyncdMutation instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdMutation`](SyncdMutation.md)

Defined in: [WAProto/index.d.ts:37404](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37404)

Decodes a SyncdMutation message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdMutation`](SyncdMutation.md)

SyncdMutation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdMutation`](SyncdMutation.md)

Defined in: [WAProto/index.d.ts:37413](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37413)

Decodes a SyncdMutation message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdMutation`](SyncdMutation.md)

SyncdMutation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37386](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37386)

Encodes the specified SyncdMutation message. Does not implicitly [verify](SyncdMutation.md#verify) messages.

#### Parameters

##### message

[`ISyncdMutation`](../interfaces/ISyncdMutation.md)

SyncdMutation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37394](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37394)

Encodes the specified SyncdMutation message, length delimited. Does not implicitly [verify](SyncdMutation.md#verify) messages.

#### Parameters

##### message

[`ISyncdMutation`](../interfaces/ISyncdMutation.md)

SyncdMutation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdMutation`](SyncdMutation.md)

Defined in: [WAProto/index.d.ts:37427](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37427)

Creates a SyncdMutation message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdMutation`](SyncdMutation.md)

SyncdMutation

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37448](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37448)

Gets the default type url for SyncdMutation

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

Defined in: [WAProto/index.d.ts:37435](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37435)

Creates a plain object from a SyncdMutation message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdMutation`](SyncdMutation.md)

SyncdMutation

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37420)

Verifies a SyncdMutation message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
