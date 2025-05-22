# Class: PlaceholderMessage

Defined in: [WAProto/index.d.ts:21352](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21352)

Represents a PlaceholderMessage.

## Implements

- [`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md)

## Constructors

### new PlaceholderMessage()

> **new PlaceholderMessage**(`properties`?): [`PlaceholderMessage`](PlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:21358](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21358)

Constructs a new PlaceholderMessage.

#### Parameters

##### properties?

[`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md)

Properties to set

#### Returns

[`PlaceholderMessage`](PlaceholderMessage.md)

## Properties

### type

> **type**: [`MASK_LINKED_DEVICES`](../namespaces/PlaceholderMessage/enumerations/PlaceholderType.md#mask_linked_devices)

Defined in: [WAProto/index.d.ts:21361](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21361)

PlaceholderMessage type.

#### Implementation of

[`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md).[`type`](../interfaces/IPlaceholderMessage.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21431](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21431)

Converts this PlaceholderMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PlaceholderMessage`](PlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:21368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21368)

Creates a new PlaceholderMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md)

Properties to set

#### Returns

[`PlaceholderMessage`](PlaceholderMessage.md)

PlaceholderMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PlaceholderMessage`](PlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:21394](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21394)

Decodes a PlaceholderMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PlaceholderMessage`](PlaceholderMessage.md)

PlaceholderMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PlaceholderMessage`](PlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:21403](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21403)

Decodes a PlaceholderMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PlaceholderMessage`](PlaceholderMessage.md)

PlaceholderMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21376](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21376)

Encodes the specified PlaceholderMessage message. Does not implicitly [verify](PlaceholderMessage.md#verify) messages.

#### Parameters

##### message

[`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md)

PlaceholderMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21384)

Encodes the specified PlaceholderMessage message, length delimited. Does not implicitly [verify](PlaceholderMessage.md#verify) messages.

#### Parameters

##### message

[`IPlaceholderMessage`](../interfaces/IPlaceholderMessage.md)

PlaceholderMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PlaceholderMessage`](PlaceholderMessage.md)

Defined in: [WAProto/index.d.ts:21417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21417)

Creates a PlaceholderMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PlaceholderMessage`](PlaceholderMessage.md)

PlaceholderMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21438)

Gets the default type url for PlaceholderMessage

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

Defined in: [WAProto/index.d.ts:21425](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21425)

Creates a plain object from a PlaceholderMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PlaceholderMessage`](PlaceholderMessage.md)

PlaceholderMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21410](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21410)

Verifies a PlaceholderMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
