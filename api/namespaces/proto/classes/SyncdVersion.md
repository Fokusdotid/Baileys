# Class: SyncdVersion

Defined in: [WAProto/index.d.ts:38031](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38031)

Represents a SyncdVersion.

## Implements

- [`ISyncdVersion`](../interfaces/ISyncdVersion.md)

## Constructors

### new SyncdVersion()

> **new SyncdVersion**(`properties`?): [`SyncdVersion`](SyncdVersion.md)

Defined in: [WAProto/index.d.ts:38037](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38037)

Constructs a new SyncdVersion.

#### Parameters

##### properties?

[`ISyncdVersion`](../interfaces/ISyncdVersion.md)

Properties to set

#### Returns

[`SyncdVersion`](SyncdVersion.md)

## Properties

### version

> **version**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:38040](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38040)

SyncdVersion version.

#### Implementation of

[`ISyncdVersion`](../interfaces/ISyncdVersion.md).[`version`](../interfaces/ISyncdVersion.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38110](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38110)

Converts this SyncdVersion to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdVersion`](SyncdVersion.md)

Defined in: [WAProto/index.d.ts:38047](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38047)

Creates a new SyncdVersion instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdVersion`](../interfaces/ISyncdVersion.md)

Properties to set

#### Returns

[`SyncdVersion`](SyncdVersion.md)

SyncdVersion instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdVersion`](SyncdVersion.md)

Defined in: [WAProto/index.d.ts:38073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38073)

Decodes a SyncdVersion message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdVersion`](SyncdVersion.md)

SyncdVersion

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdVersion`](SyncdVersion.md)

Defined in: [WAProto/index.d.ts:38082](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38082)

Decodes a SyncdVersion message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdVersion`](SyncdVersion.md)

SyncdVersion

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38055)

Encodes the specified SyncdVersion message. Does not implicitly [verify](SyncdVersion.md#verify) messages.

#### Parameters

##### message

[`ISyncdVersion`](../interfaces/ISyncdVersion.md)

SyncdVersion message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38063](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38063)

Encodes the specified SyncdVersion message, length delimited. Does not implicitly [verify](SyncdVersion.md#verify) messages.

#### Parameters

##### message

[`ISyncdVersion`](../interfaces/ISyncdVersion.md)

SyncdVersion message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdVersion`](SyncdVersion.md)

Defined in: [WAProto/index.d.ts:38096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38096)

Creates a SyncdVersion message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdVersion`](SyncdVersion.md)

SyncdVersion

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38117](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38117)

Gets the default type url for SyncdVersion

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

Defined in: [WAProto/index.d.ts:38104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38104)

Creates a plain object from a SyncdVersion message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdVersion`](SyncdVersion.md)

SyncdVersion

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38089)

Verifies a SyncdVersion message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
