# Class: ProductSection

Defined in: [WAProto/index.d.ts:18656](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18656)

Represents a ProductSection.

## Implements

- [`IProductSection`](../interfaces/IProductSection.md)

## Constructors

### new ProductSection()

> **new ProductSection**(`properties`?): [`ProductSection`](ProductSection.md)

Defined in: [WAProto/index.d.ts:18662](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18662)

Constructs a new ProductSection.

#### Parameters

##### properties?

[`IProductSection`](../interfaces/IProductSection.md)

Properties to set

#### Returns

[`ProductSection`](ProductSection.md)

## Properties

### products

> **products**: [`IProduct`](../interfaces/IProduct.md)[]

Defined in: [WAProto/index.d.ts:18668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18668)

ProductSection products.

#### Implementation of

[`IProductSection`](../interfaces/IProductSection.md).[`products`](../interfaces/IProductSection.md#products)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:18665](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18665)

ProductSection title.

#### Implementation of

[`IProductSection`](../interfaces/IProductSection.md).[`title`](../interfaces/IProductSection.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18738)

Converts this ProductSection to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProductSection`](ProductSection.md)

Defined in: [WAProto/index.d.ts:18675](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18675)

Creates a new ProductSection instance using the specified properties.

#### Parameters

##### properties?

[`IProductSection`](../interfaces/IProductSection.md)

Properties to set

#### Returns

[`ProductSection`](ProductSection.md)

ProductSection instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProductSection`](ProductSection.md)

Defined in: [WAProto/index.d.ts:18701](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18701)

Decodes a ProductSection message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProductSection`](ProductSection.md)

ProductSection

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProductSection`](ProductSection.md)

Defined in: [WAProto/index.d.ts:18710](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18710)

Decodes a ProductSection message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProductSection`](ProductSection.md)

ProductSection

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18683](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18683)

Encodes the specified ProductSection message. Does not implicitly [verify](ProductSection.md#verify) messages.

#### Parameters

##### message

[`IProductSection`](../interfaces/IProductSection.md)

ProductSection message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18691](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18691)

Encodes the specified ProductSection message, length delimited. Does not implicitly [verify](ProductSection.md#verify) messages.

#### Parameters

##### message

[`IProductSection`](../interfaces/IProductSection.md)

ProductSection message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProductSection`](ProductSection.md)

Defined in: [WAProto/index.d.ts:18724](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18724)

Creates a ProductSection message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProductSection`](ProductSection.md)

ProductSection

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18745](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18745)

Gets the default type url for ProductSection

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

Defined in: [WAProto/index.d.ts:18732](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18732)

Creates a plain object from a ProductSection message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProductSection`](ProductSection.md)

ProductSection

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18717](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18717)

Verifies a ProductSection message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
