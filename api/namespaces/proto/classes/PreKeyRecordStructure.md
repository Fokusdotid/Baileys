# Class: PreKeyRecordStructure

Defined in: [WAProto/index.d.ts:28193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28193)

Represents a PreKeyRecordStructure.

## Implements

- [`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md)

## Constructors

### new PreKeyRecordStructure()

> **new PreKeyRecordStructure**(`properties`?): [`PreKeyRecordStructure`](PreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:28199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28199)

Constructs a new PreKeyRecordStructure.

#### Parameters

##### properties?

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md)

Properties to set

#### Returns

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

## Properties

### id

> **id**: `number`

Defined in: [WAProto/index.d.ts:28202](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28202)

PreKeyRecordStructure id.

#### Implementation of

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md).[`id`](../interfaces/IPreKeyRecordStructure.md#id)

***

### privateKey

> **privateKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:28208](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28208)

PreKeyRecordStructure privateKey.

#### Implementation of

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md).[`privateKey`](../interfaces/IPreKeyRecordStructure.md#privatekey)

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:28205](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28205)

PreKeyRecordStructure publicKey.

#### Implementation of

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md).[`publicKey`](../interfaces/IPreKeyRecordStructure.md#publickey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28278)

Converts this PreKeyRecordStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PreKeyRecordStructure`](PreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:28215](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28215)

Creates a new PreKeyRecordStructure instance using the specified properties.

#### Parameters

##### properties?

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md)

Properties to set

#### Returns

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

PreKeyRecordStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PreKeyRecordStructure`](PreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:28241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28241)

Decodes a PreKeyRecordStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

PreKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PreKeyRecordStructure`](PreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:28250](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28250)

Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

PreKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28223)

Encodes the specified PreKeyRecordStructure message. Does not implicitly [verify](PreKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md)

PreKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28231)

Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly [verify](PreKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`IPreKeyRecordStructure`](../interfaces/IPreKeyRecordStructure.md)

PreKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PreKeyRecordStructure`](PreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:28264](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28264)

Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

PreKeyRecordStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28285](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28285)

Gets the default type url for PreKeyRecordStructure

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

Defined in: [WAProto/index.d.ts:28272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28272)

Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`PreKeyRecordStructure`](PreKeyRecordStructure.md)

PreKeyRecordStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28257](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28257)

Verifies a PreKeyRecordStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
