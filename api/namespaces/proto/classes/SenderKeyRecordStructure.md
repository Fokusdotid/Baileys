# Class: SenderKeyRecordStructure

Defined in: [WAProto/index.d.ts:29712](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29712)

Represents a SenderKeyRecordStructure.

## Implements

- [`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md)

## Constructors

### new SenderKeyRecordStructure()

> **new SenderKeyRecordStructure**(`properties`?): [`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:29718](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29718)

Constructs a new SenderKeyRecordStructure.

#### Parameters

##### properties?

[`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md)

Properties to set

#### Returns

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

## Properties

### senderKeyStates

> **senderKeyStates**: [`ISenderKeyStateStructure`](../interfaces/ISenderKeyStateStructure.md)[]

Defined in: [WAProto/index.d.ts:29721](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29721)

SenderKeyRecordStructure senderKeyStates.

#### Implementation of

[`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md).[`senderKeyStates`](../interfaces/ISenderKeyRecordStructure.md#senderkeystates)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29791](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29791)

Converts this SenderKeyRecordStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:29728](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29728)

Creates a new SenderKeyRecordStructure instance using the specified properties.

#### Parameters

##### properties?

[`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md)

Properties to set

#### Returns

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

SenderKeyRecordStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:29754](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29754)

Decodes a SenderKeyRecordStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

SenderKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:29763](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29763)

Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

SenderKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29736](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29736)

Encodes the specified SenderKeyRecordStructure message. Does not implicitly [verify](SenderKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md)

SenderKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29744](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29744)

Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly [verify](SenderKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`ISenderKeyRecordStructure`](../interfaces/ISenderKeyRecordStructure.md)

SenderKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:29777](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29777)

Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

SenderKeyRecordStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29798](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29798)

Gets the default type url for SenderKeyRecordStructure

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

Defined in: [WAProto/index.d.ts:29785](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29785)

Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`SenderKeyRecordStructure`](SenderKeyRecordStructure.md)

SenderKeyRecordStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29770](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29770)

Verifies a SenderKeyRecordStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
