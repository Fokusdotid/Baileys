# Class: BusinessMessageForwardInfo

Defined in: [WAProto/index.d.ts:5023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5023)

Represents a BusinessMessageForwardInfo.

## Implements

- [`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md)

## Constructors

### new BusinessMessageForwardInfo()

> **new BusinessMessageForwardInfo**(`properties`?): [`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

Defined in: [WAProto/index.d.ts:5029](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5029)

Constructs a new BusinessMessageForwardInfo.

#### Parameters

##### properties?

[`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md)

Properties to set

#### Returns

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

## Properties

### businessOwnerJid

> **businessOwnerJid**: `string`

Defined in: [WAProto/index.d.ts:5032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5032)

BusinessMessageForwardInfo businessOwnerJid.

#### Implementation of

[`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md).[`businessOwnerJid`](../interfaces/IBusinessMessageForwardInfo.md#businessownerjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:5102](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5102)

Converts this BusinessMessageForwardInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

Defined in: [WAProto/index.d.ts:5039](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5039)

Creates a new BusinessMessageForwardInfo instance using the specified properties.

#### Parameters

##### properties?

[`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md)

Properties to set

#### Returns

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

BusinessMessageForwardInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

Defined in: [WAProto/index.d.ts:5065](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5065)

Decodes a BusinessMessageForwardInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

BusinessMessageForwardInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

Defined in: [WAProto/index.d.ts:5074](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5074)

Decodes a BusinessMessageForwardInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

BusinessMessageForwardInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5047](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5047)

Encodes the specified BusinessMessageForwardInfo message. Does not implicitly [verify](BusinessMessageForwardInfo.md#verify) messages.

#### Parameters

##### message

[`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md)

BusinessMessageForwardInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5055)

Encodes the specified BusinessMessageForwardInfo message, length delimited. Does not implicitly [verify](BusinessMessageForwardInfo.md#verify) messages.

#### Parameters

##### message

[`IBusinessMessageForwardInfo`](../interfaces/IBusinessMessageForwardInfo.md)

BusinessMessageForwardInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

Defined in: [WAProto/index.d.ts:5088](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5088)

Creates a BusinessMessageForwardInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

BusinessMessageForwardInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:5109](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5109)

Gets the default type url for BusinessMessageForwardInfo

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

Defined in: [WAProto/index.d.ts:5096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5096)

Creates a plain object from a BusinessMessageForwardInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`BusinessMessageForwardInfo`](BusinessMessageForwardInfo.md)

BusinessMessageForwardInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:5081](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5081)

Verifies a BusinessMessageForwardInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
