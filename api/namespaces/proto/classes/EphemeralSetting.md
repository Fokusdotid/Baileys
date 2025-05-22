# Class: EphemeralSetting

Defined in: [WAProto/index.d.ts:6924](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6924)

Represents an EphemeralSetting.

## Implements

- [`IEphemeralSetting`](../interfaces/IEphemeralSetting.md)

## Constructors

### new EphemeralSetting()

> **new EphemeralSetting**(`properties`?): [`EphemeralSetting`](EphemeralSetting.md)

Defined in: [WAProto/index.d.ts:6930](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6930)

Constructs a new EphemeralSetting.

#### Parameters

##### properties?

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md)

Properties to set

#### Returns

[`EphemeralSetting`](EphemeralSetting.md)

## Properties

### duration

> **duration**: `number`

Defined in: [WAProto/index.d.ts:6933](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6933)

EphemeralSetting duration.

#### Implementation of

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md).[`duration`](../interfaces/IEphemeralSetting.md#duration)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:6936](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6936)

EphemeralSetting timestamp.

#### Implementation of

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md).[`timestamp`](../interfaces/IEphemeralSetting.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7006](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7006)

Converts this EphemeralSetting to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EphemeralSetting`](EphemeralSetting.md)

Defined in: [WAProto/index.d.ts:6943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6943)

Creates a new EphemeralSetting instance using the specified properties.

#### Parameters

##### properties?

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md)

Properties to set

#### Returns

[`EphemeralSetting`](EphemeralSetting.md)

EphemeralSetting instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EphemeralSetting`](EphemeralSetting.md)

Defined in: [WAProto/index.d.ts:6969](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6969)

Decodes an EphemeralSetting message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EphemeralSetting`](EphemeralSetting.md)

EphemeralSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EphemeralSetting`](EphemeralSetting.md)

Defined in: [WAProto/index.d.ts:6978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6978)

Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EphemeralSetting`](EphemeralSetting.md)

EphemeralSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6951](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6951)

Encodes the specified EphemeralSetting message. Does not implicitly [verify](EphemeralSetting.md#verify) messages.

#### Parameters

##### message

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md)

EphemeralSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6959](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6959)

Encodes the specified EphemeralSetting message, length delimited. Does not implicitly [verify](EphemeralSetting.md#verify) messages.

#### Parameters

##### message

[`IEphemeralSetting`](../interfaces/IEphemeralSetting.md)

EphemeralSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EphemeralSetting`](EphemeralSetting.md)

Defined in: [WAProto/index.d.ts:6992](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6992)

Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EphemeralSetting`](EphemeralSetting.md)

EphemeralSetting

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7013)

Gets the default type url for EphemeralSetting

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

Defined in: [WAProto/index.d.ts:7000](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7000)

Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.

#### Parameters

##### message

[`EphemeralSetting`](EphemeralSetting.md)

EphemeralSetting

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6985)

Verifies an EphemeralSetting message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
