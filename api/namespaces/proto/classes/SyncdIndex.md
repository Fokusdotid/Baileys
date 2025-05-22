# Class: SyncdIndex

Defined in: [WAProto/index.d.ts:37259](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37259)

Represents a SyncdIndex.

## Implements

- [`ISyncdIndex`](../interfaces/ISyncdIndex.md)

## Constructors

### new SyncdIndex()

> **new SyncdIndex**(`properties`?): [`SyncdIndex`](SyncdIndex.md)

Defined in: [WAProto/index.d.ts:37265](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37265)

Constructs a new SyncdIndex.

#### Parameters

##### properties?

[`ISyncdIndex`](../interfaces/ISyncdIndex.md)

Properties to set

#### Returns

[`SyncdIndex`](SyncdIndex.md)

## Properties

### blob

> **blob**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37268](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37268)

SyncdIndex blob.

#### Implementation of

[`ISyncdIndex`](../interfaces/ISyncdIndex.md).[`blob`](../interfaces/ISyncdIndex.md#blob)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37338](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37338)

Converts this SyncdIndex to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdIndex`](SyncdIndex.md)

Defined in: [WAProto/index.d.ts:37275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37275)

Creates a new SyncdIndex instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdIndex`](../interfaces/ISyncdIndex.md)

Properties to set

#### Returns

[`SyncdIndex`](SyncdIndex.md)

SyncdIndex instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdIndex`](SyncdIndex.md)

Defined in: [WAProto/index.d.ts:37301](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37301)

Decodes a SyncdIndex message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdIndex`](SyncdIndex.md)

SyncdIndex

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdIndex`](SyncdIndex.md)

Defined in: [WAProto/index.d.ts:37310](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37310)

Decodes a SyncdIndex message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdIndex`](SyncdIndex.md)

SyncdIndex

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37283](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37283)

Encodes the specified SyncdIndex message. Does not implicitly [verify](SyncdIndex.md#verify) messages.

#### Parameters

##### message

[`ISyncdIndex`](../interfaces/ISyncdIndex.md)

SyncdIndex message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37291](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37291)

Encodes the specified SyncdIndex message, length delimited. Does not implicitly [verify](SyncdIndex.md#verify) messages.

#### Parameters

##### message

[`ISyncdIndex`](../interfaces/ISyncdIndex.md)

SyncdIndex message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdIndex`](SyncdIndex.md)

Defined in: [WAProto/index.d.ts:37324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37324)

Creates a SyncdIndex message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdIndex`](SyncdIndex.md)

SyncdIndex

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37345](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37345)

Gets the default type url for SyncdIndex

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

Defined in: [WAProto/index.d.ts:37332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37332)

Creates a plain object from a SyncdIndex message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdIndex`](SyncdIndex.md)

SyncdIndex

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37317)

Verifies a SyncdIndex message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
