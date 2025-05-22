# Class: Filter

Defined in: [WAProto/index.d.ts:28732](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28732)

Represents a Filter.

## Implements

- [`IFilter`](../interfaces/IFilter.md)

## Constructors

### new Filter()

> **new Filter**(`properties`?): [`Filter`](Filter.md)

Defined in: [WAProto/index.d.ts:28738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28738)

Constructs a new Filter.

#### Parameters

##### properties?

[`IFilter`](../interfaces/IFilter.md)

Properties to set

#### Returns

[`Filter`](Filter.md)

## Properties

### clientNotSupportedConfig

> **clientNotSupportedConfig**: [`FilterClientNotSupportedConfig`](../enumerations/FilterClientNotSupportedConfig.md)

Defined in: [WAProto/index.d.ts:28750](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28750)

Filter clientNotSupportedConfig.

#### Implementation of

[`IFilter`](../interfaces/IFilter.md).[`clientNotSupportedConfig`](../interfaces/IFilter.md#clientnotsupportedconfig)

***

### filterName

> **filterName**: `string`

Defined in: [WAProto/index.d.ts:28741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28741)

Filter filterName.

#### Implementation of

[`IFilter`](../interfaces/IFilter.md).[`filterName`](../interfaces/IFilter.md#filtername)

***

### filterResult

> **filterResult**: [`FilterResult`](../enumerations/FilterResult.md)

Defined in: [WAProto/index.d.ts:28747](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28747)

Filter filterResult.

#### Implementation of

[`IFilter`](../interfaces/IFilter.md).[`filterResult`](../interfaces/IFilter.md#filterresult)

***

### parameters

> **parameters**: [`IFilterParameters`](../interfaces/IFilterParameters.md)[]

Defined in: [WAProto/index.d.ts:28744](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28744)

Filter parameters.

#### Implementation of

[`IFilter`](../interfaces/IFilter.md).[`parameters`](../interfaces/IFilter.md#parameters)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28820](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28820)

Converts this Filter to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Filter`](Filter.md)

Defined in: [WAProto/index.d.ts:28757](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28757)

Creates a new Filter instance using the specified properties.

#### Parameters

##### properties?

[`IFilter`](../interfaces/IFilter.md)

Properties to set

#### Returns

[`Filter`](Filter.md)

Filter instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Filter`](Filter.md)

Defined in: [WAProto/index.d.ts:28783](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28783)

Decodes a Filter message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Filter`](Filter.md)

Filter

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Filter`](Filter.md)

Defined in: [WAProto/index.d.ts:28792](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28792)

Decodes a Filter message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Filter`](Filter.md)

Filter

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28765](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28765)

Encodes the specified Filter message. Does not implicitly [verify](Filter.md#verify) messages.

#### Parameters

##### message

[`IFilter`](../interfaces/IFilter.md)

Filter message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28773](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28773)

Encodes the specified Filter message, length delimited. Does not implicitly [verify](Filter.md#verify) messages.

#### Parameters

##### message

[`IFilter`](../interfaces/IFilter.md)

Filter message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Filter`](Filter.md)

Defined in: [WAProto/index.d.ts:28806](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28806)

Creates a Filter message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Filter`](Filter.md)

Filter

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28827](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28827)

Gets the default type url for Filter

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

Defined in: [WAProto/index.d.ts:28814](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28814)

Creates a plain object from a Filter message. Also converts values to other types if specified.

#### Parameters

##### message

[`Filter`](Filter.md)

Filter

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28799](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28799)

Verifies a Filter message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
