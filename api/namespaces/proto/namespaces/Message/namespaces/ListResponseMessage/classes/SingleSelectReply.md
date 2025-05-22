# Class: SingleSelectReply

Defined in: [WAProto/index.d.ts:19098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19098)

Represents a SingleSelectReply.

## Implements

- [`ISingleSelectReply`](../interfaces/ISingleSelectReply.md)

## Constructors

### new SingleSelectReply()

> **new SingleSelectReply**(`properties`?): [`SingleSelectReply`](SingleSelectReply.md)

Defined in: [WAProto/index.d.ts:19104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19104)

Constructs a new SingleSelectReply.

#### Parameters

##### properties?

[`ISingleSelectReply`](../interfaces/ISingleSelectReply.md)

Properties to set

#### Returns

[`SingleSelectReply`](SingleSelectReply.md)

## Properties

### selectedRowId

> **selectedRowId**: `string`

Defined in: [WAProto/index.d.ts:19107](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19107)

SingleSelectReply selectedRowId.

#### Implementation of

[`ISingleSelectReply`](../interfaces/ISingleSelectReply.md).[`selectedRowId`](../interfaces/ISingleSelectReply.md#selectedrowid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:19177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19177)

Converts this SingleSelectReply to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SingleSelectReply`](SingleSelectReply.md)

Defined in: [WAProto/index.d.ts:19114](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19114)

Creates a new SingleSelectReply instance using the specified properties.

#### Parameters

##### properties?

[`ISingleSelectReply`](../interfaces/ISingleSelectReply.md)

Properties to set

#### Returns

[`SingleSelectReply`](SingleSelectReply.md)

SingleSelectReply instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SingleSelectReply`](SingleSelectReply.md)

Defined in: [WAProto/index.d.ts:19140](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19140)

Decodes a SingleSelectReply message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SingleSelectReply`](SingleSelectReply.md)

SingleSelectReply

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SingleSelectReply`](SingleSelectReply.md)

Defined in: [WAProto/index.d.ts:19149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19149)

Decodes a SingleSelectReply message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SingleSelectReply`](SingleSelectReply.md)

SingleSelectReply

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19122](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19122)

Encodes the specified SingleSelectReply message. Does not implicitly [verify](SingleSelectReply.md#verify) messages.

#### Parameters

##### message

[`ISingleSelectReply`](../interfaces/ISingleSelectReply.md)

SingleSelectReply message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19130)

Encodes the specified SingleSelectReply message, length delimited. Does not implicitly [verify](SingleSelectReply.md#verify) messages.

#### Parameters

##### message

[`ISingleSelectReply`](../interfaces/ISingleSelectReply.md)

SingleSelectReply message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SingleSelectReply`](SingleSelectReply.md)

Defined in: [WAProto/index.d.ts:19163](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19163)

Creates a SingleSelectReply message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SingleSelectReply`](SingleSelectReply.md)

SingleSelectReply

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:19184](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19184)

Gets the default type url for SingleSelectReply

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

Defined in: [WAProto/index.d.ts:19171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19171)

Creates a plain object from a SingleSelectReply message. Also converts values to other types if specified.

#### Parameters

##### message

[`SingleSelectReply`](SingleSelectReply.md)

SingleSelectReply

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:19156](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19156)

Verifies a SingleSelectReply message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
