# Class: SyncdSnapshot

Defined in: [WAProto/index.d.ts:37828](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37828)

Represents a SyncdSnapshot.

## Implements

- [`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md)

## Constructors

### new SyncdSnapshot()

> **new SyncdSnapshot**(`properties`?): [`SyncdSnapshot`](SyncdSnapshot.md)

Defined in: [WAProto/index.d.ts:37834](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37834)

Constructs a new SyncdSnapshot.

#### Parameters

##### properties?

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md)

Properties to set

#### Returns

[`SyncdSnapshot`](SyncdSnapshot.md)

## Properties

### keyId?

> `optional` **keyId**: `null` \| [`IKeyId`](../interfaces/IKeyId.md)

Defined in: [WAProto/index.d.ts:37846](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37846)

SyncdSnapshot keyId.

#### Implementation of

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md).[`keyId`](../interfaces/ISyncdSnapshot.md#keyid)

***

### mac

> **mac**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37843](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37843)

SyncdSnapshot mac.

#### Implementation of

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md).[`mac`](../interfaces/ISyncdSnapshot.md#mac)

***

### records

> **records**: [`ISyncdRecord`](../interfaces/ISyncdRecord.md)[]

Defined in: [WAProto/index.d.ts:37840](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37840)

SyncdSnapshot records.

#### Implementation of

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md).[`records`](../interfaces/ISyncdSnapshot.md#records)

***

### version?

> `optional` **version**: `null` \| [`ISyncdVersion`](../interfaces/ISyncdVersion.md)

Defined in: [WAProto/index.d.ts:37837](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37837)

SyncdSnapshot version.

#### Implementation of

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md).[`version`](../interfaces/ISyncdSnapshot.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37916](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37916)

Converts this SyncdSnapshot to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdSnapshot`](SyncdSnapshot.md)

Defined in: [WAProto/index.d.ts:37853](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37853)

Creates a new SyncdSnapshot instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md)

Properties to set

#### Returns

[`SyncdSnapshot`](SyncdSnapshot.md)

SyncdSnapshot instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdSnapshot`](SyncdSnapshot.md)

Defined in: [WAProto/index.d.ts:37879](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37879)

Decodes a SyncdSnapshot message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdSnapshot`](SyncdSnapshot.md)

SyncdSnapshot

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdSnapshot`](SyncdSnapshot.md)

Defined in: [WAProto/index.d.ts:37888](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37888)

Decodes a SyncdSnapshot message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdSnapshot`](SyncdSnapshot.md)

SyncdSnapshot

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37861](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37861)

Encodes the specified SyncdSnapshot message. Does not implicitly [verify](SyncdSnapshot.md#verify) messages.

#### Parameters

##### message

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md)

SyncdSnapshot message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37869)

Encodes the specified SyncdSnapshot message, length delimited. Does not implicitly [verify](SyncdSnapshot.md#verify) messages.

#### Parameters

##### message

[`ISyncdSnapshot`](../interfaces/ISyncdSnapshot.md)

SyncdSnapshot message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdSnapshot`](SyncdSnapshot.md)

Defined in: [WAProto/index.d.ts:37902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37902)

Creates a SyncdSnapshot message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdSnapshot`](SyncdSnapshot.md)

SyncdSnapshot

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37923)

Gets the default type url for SyncdSnapshot

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

Defined in: [WAProto/index.d.ts:37910](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37910)

Creates a plain object from a SyncdSnapshot message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdSnapshot`](SyncdSnapshot.md)

SyncdSnapshot

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37895](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37895)

Verifies a SyncdSnapshot message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
