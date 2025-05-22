# Class: HydratedCallButton

Defined in: [WAProto/index.d.ts:8741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8741)

Represents a HydratedCallButton.

## Implements

- [`IHydratedCallButton`](../interfaces/IHydratedCallButton.md)

## Constructors

### new HydratedCallButton()

> **new HydratedCallButton**(`properties`?): [`HydratedCallButton`](HydratedCallButton.md)

Defined in: [WAProto/index.d.ts:8747](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8747)

Constructs a new HydratedCallButton.

#### Parameters

##### properties?

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md)

Properties to set

#### Returns

[`HydratedCallButton`](HydratedCallButton.md)

## Properties

### displayText

> **displayText**: `string`

Defined in: [WAProto/index.d.ts:8750](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8750)

HydratedCallButton displayText.

#### Implementation of

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md).[`displayText`](../interfaces/IHydratedCallButton.md#displaytext)

***

### phoneNumber

> **phoneNumber**: `string`

Defined in: [WAProto/index.d.ts:8753](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8753)

HydratedCallButton phoneNumber.

#### Implementation of

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md).[`phoneNumber`](../interfaces/IHydratedCallButton.md#phonenumber)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8823)

Converts this HydratedCallButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HydratedCallButton`](HydratedCallButton.md)

Defined in: [WAProto/index.d.ts:8760](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8760)

Creates a new HydratedCallButton instance using the specified properties.

#### Parameters

##### properties?

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md)

Properties to set

#### Returns

[`HydratedCallButton`](HydratedCallButton.md)

HydratedCallButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HydratedCallButton`](HydratedCallButton.md)

Defined in: [WAProto/index.d.ts:8786](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8786)

Decodes a HydratedCallButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HydratedCallButton`](HydratedCallButton.md)

HydratedCallButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HydratedCallButton`](HydratedCallButton.md)

Defined in: [WAProto/index.d.ts:8795](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8795)

Decodes a HydratedCallButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HydratedCallButton`](HydratedCallButton.md)

HydratedCallButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8768](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8768)

Encodes the specified HydratedCallButton message. Does not implicitly [verify](HydratedCallButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md)

HydratedCallButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8776](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8776)

Encodes the specified HydratedCallButton message, length delimited. Does not implicitly [verify](HydratedCallButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedCallButton`](../interfaces/IHydratedCallButton.md)

HydratedCallButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HydratedCallButton`](HydratedCallButton.md)

Defined in: [WAProto/index.d.ts:8809](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8809)

Creates a HydratedCallButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HydratedCallButton`](HydratedCallButton.md)

HydratedCallButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8830](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8830)

Gets the default type url for HydratedCallButton

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

Defined in: [WAProto/index.d.ts:8817](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8817)

Creates a plain object from a HydratedCallButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`HydratedCallButton`](HydratedCallButton.md)

HydratedCallButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8802)

Verifies a HydratedCallButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
