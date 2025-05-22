# Class: ProductListInfo

Defined in: [WAProto/index.d.ts:18550](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18550)

Represents a ProductListInfo.

## Implements

- [`IProductListInfo`](../interfaces/IProductListInfo.md)

## Constructors

### new ProductListInfo()

> **new ProductListInfo**(`properties`?): [`ProductListInfo`](ProductListInfo.md)

Defined in: [WAProto/index.d.ts:18556](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18556)

Constructs a new ProductListInfo.

#### Parameters

##### properties?

[`IProductListInfo`](../interfaces/IProductListInfo.md)

Properties to set

#### Returns

[`ProductListInfo`](ProductListInfo.md)

## Properties

### businessOwnerJid

> **businessOwnerJid**: `string`

Defined in: [WAProto/index.d.ts:18565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18565)

ProductListInfo businessOwnerJid.

#### Implementation of

[`IProductListInfo`](../interfaces/IProductListInfo.md).[`businessOwnerJid`](../interfaces/IProductListInfo.md#businessownerjid)

***

### headerImage?

> `optional` **headerImage**: `null` \| [`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18562)

ProductListInfo headerImage.

#### Implementation of

[`IProductListInfo`](../interfaces/IProductListInfo.md).[`headerImage`](../interfaces/IProductListInfo.md#headerimage)

***

### productSections

> **productSections**: [`IProductSection`](../interfaces/IProductSection.md)[]

Defined in: [WAProto/index.d.ts:18559](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18559)

ProductListInfo productSections.

#### Implementation of

[`IProductListInfo`](../interfaces/IProductListInfo.md).[`productSections`](../interfaces/IProductListInfo.md#productsections)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18635](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18635)

Converts this ProductListInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProductListInfo`](ProductListInfo.md)

Defined in: [WAProto/index.d.ts:18572](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18572)

Creates a new ProductListInfo instance using the specified properties.

#### Parameters

##### properties?

[`IProductListInfo`](../interfaces/IProductListInfo.md)

Properties to set

#### Returns

[`ProductListInfo`](ProductListInfo.md)

ProductListInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProductListInfo`](ProductListInfo.md)

Defined in: [WAProto/index.d.ts:18598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18598)

Decodes a ProductListInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProductListInfo`](ProductListInfo.md)

ProductListInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProductListInfo`](ProductListInfo.md)

Defined in: [WAProto/index.d.ts:18607](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18607)

Decodes a ProductListInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProductListInfo`](ProductListInfo.md)

ProductListInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18580](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18580)

Encodes the specified ProductListInfo message. Does not implicitly [verify](ProductListInfo.md#verify) messages.

#### Parameters

##### message

[`IProductListInfo`](../interfaces/IProductListInfo.md)

ProductListInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18588)

Encodes the specified ProductListInfo message, length delimited. Does not implicitly [verify](ProductListInfo.md#verify) messages.

#### Parameters

##### message

[`IProductListInfo`](../interfaces/IProductListInfo.md)

ProductListInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProductListInfo`](ProductListInfo.md)

Defined in: [WAProto/index.d.ts:18621](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18621)

Creates a ProductListInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProductListInfo`](ProductListInfo.md)

ProductListInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18642](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18642)

Gets the default type url for ProductListInfo

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

Defined in: [WAProto/index.d.ts:18629](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18629)

Creates a plain object from a ProductListInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProductListInfo`](ProductListInfo.md)

ProductListInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18614)

Verifies a ProductListInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
