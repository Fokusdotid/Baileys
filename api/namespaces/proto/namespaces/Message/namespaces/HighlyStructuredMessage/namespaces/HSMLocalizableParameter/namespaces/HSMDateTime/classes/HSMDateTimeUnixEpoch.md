# Class: HSMDateTimeUnixEpoch

Defined in: [WAProto/index.d.ts:15914](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15914)

Represents a HSMDateTimeUnixEpoch.

## Implements

- [`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md)

## Constructors

### new HSMDateTimeUnixEpoch()

> **new HSMDateTimeUnixEpoch**(`properties`?): [`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

Defined in: [WAProto/index.d.ts:15920](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15920)

Constructs a new HSMDateTimeUnixEpoch.

#### Parameters

##### properties?

[`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md)

Properties to set

#### Returns

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

## Properties

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:15923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15923)

HSMDateTimeUnixEpoch timestamp.

#### Implementation of

[`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md).[`timestamp`](../interfaces/IHSMDateTimeUnixEpoch.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15993](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15993)

Converts this HSMDateTimeUnixEpoch to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

Defined in: [WAProto/index.d.ts:15930](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15930)

Creates a new HSMDateTimeUnixEpoch instance using the specified properties.

#### Parameters

##### properties?

[`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md)

Properties to set

#### Returns

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

Defined in: [WAProto/index.d.ts:15956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15956)

Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

Defined in: [WAProto/index.d.ts:15965](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15965)

Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15938](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15938)

Encodes the specified HSMDateTimeUnixEpoch message. Does not implicitly [verify](HSMDateTimeUnixEpoch.md#verify) messages.

#### Parameters

##### message

[`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15946](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15946)

Encodes the specified HSMDateTimeUnixEpoch message, length delimited. Does not implicitly [verify](HSMDateTimeUnixEpoch.md#verify) messages.

#### Parameters

##### message

[`IHSMDateTimeUnixEpoch`](../interfaces/IHSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

Defined in: [WAProto/index.d.ts:15979](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15979)

Creates a HSMDateTimeUnixEpoch message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:16000](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16000)

Gets the default type url for HSMDateTimeUnixEpoch

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

Defined in: [WAProto/index.d.ts:15987](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15987)

Creates a plain object from a HSMDateTimeUnixEpoch message. Also converts values to other types if specified.

#### Parameters

##### message

[`HSMDateTimeUnixEpoch`](HSMDateTimeUnixEpoch.md)

HSMDateTimeUnixEpoch

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15972)

Verifies a HSMDateTimeUnixEpoch message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
