# Class: SyncdRecord

Defined in: [WAProto/index.d.ts:37716](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37716)

Represents a SyncdRecord.

## Implements

- [`ISyncdRecord`](../interfaces/ISyncdRecord.md)

## Constructors

### new SyncdRecord()

> **new SyncdRecord**(`properties`?): [`SyncdRecord`](SyncdRecord.md)

Defined in: [WAProto/index.d.ts:37722](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37722)

Constructs a new SyncdRecord.

#### Parameters

##### properties?

[`ISyncdRecord`](../interfaces/ISyncdRecord.md)

Properties to set

#### Returns

[`SyncdRecord`](SyncdRecord.md)

## Properties

### index?

> `optional` **index**: `null` \| [`ISyncdIndex`](../interfaces/ISyncdIndex.md)

Defined in: [WAProto/index.d.ts:37725](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37725)

SyncdRecord index.

#### Implementation of

[`ISyncdRecord`](../interfaces/ISyncdRecord.md).[`index`](../interfaces/ISyncdRecord.md#index)

***

### keyId?

> `optional` **keyId**: `null` \| [`IKeyId`](../interfaces/IKeyId.md)

Defined in: [WAProto/index.d.ts:37731](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37731)

SyncdRecord keyId.

#### Implementation of

[`ISyncdRecord`](../interfaces/ISyncdRecord.md).[`keyId`](../interfaces/ISyncdRecord.md#keyid)

***

### value?

> `optional` **value**: `null` \| [`ISyncdValue`](../interfaces/ISyncdValue.md)

Defined in: [WAProto/index.d.ts:37728](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37728)

SyncdRecord value.

#### Implementation of

[`ISyncdRecord`](../interfaces/ISyncdRecord.md).[`value`](../interfaces/ISyncdRecord.md#value)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37801](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37801)

Converts this SyncdRecord to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdRecord`](SyncdRecord.md)

Defined in: [WAProto/index.d.ts:37738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37738)

Creates a new SyncdRecord instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdRecord`](../interfaces/ISyncdRecord.md)

Properties to set

#### Returns

[`SyncdRecord`](SyncdRecord.md)

SyncdRecord instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdRecord`](SyncdRecord.md)

Defined in: [WAProto/index.d.ts:37764](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37764)

Decodes a SyncdRecord message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdRecord`](SyncdRecord.md)

SyncdRecord

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdRecord`](SyncdRecord.md)

Defined in: [WAProto/index.d.ts:37773](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37773)

Decodes a SyncdRecord message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdRecord`](SyncdRecord.md)

SyncdRecord

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37746](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37746)

Encodes the specified SyncdRecord message. Does not implicitly [verify](SyncdRecord.md#verify) messages.

#### Parameters

##### message

[`ISyncdRecord`](../interfaces/ISyncdRecord.md)

SyncdRecord message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37754](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37754)

Encodes the specified SyncdRecord message, length delimited. Does not implicitly [verify](SyncdRecord.md#verify) messages.

#### Parameters

##### message

[`ISyncdRecord`](../interfaces/ISyncdRecord.md)

SyncdRecord message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdRecord`](SyncdRecord.md)

Defined in: [WAProto/index.d.ts:37787](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37787)

Creates a SyncdRecord message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdRecord`](SyncdRecord.md)

SyncdRecord

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37808](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37808)

Gets the default type url for SyncdRecord

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

Defined in: [WAProto/index.d.ts:37795](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37795)

Creates a plain object from a SyncdRecord message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdRecord`](SyncdRecord.md)

SyncdRecord

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37780](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37780)

Verifies a SyncdRecord message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
