# Class: ProductListHeaderImage

Defined in: [WAProto/index.d.ts:18444](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18444)

Represents a ProductListHeaderImage.

## Implements

- [`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

## Constructors

### new ProductListHeaderImage()

> **new ProductListHeaderImage**(`properties`?): [`ProductListHeaderImage`](ProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18450](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18450)

Constructs a new ProductListHeaderImage.

#### Parameters

##### properties?

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

Properties to set

#### Returns

[`ProductListHeaderImage`](ProductListHeaderImage.md)

## Properties

### jpegThumbnail

> **jpegThumbnail**: `Uint8Array`

Defined in: [WAProto/index.d.ts:18456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18456)

ProductListHeaderImage jpegThumbnail.

#### Implementation of

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md).[`jpegThumbnail`](../interfaces/IProductListHeaderImage.md#jpegthumbnail)

***

### productId

> **productId**: `string`

Defined in: [WAProto/index.d.ts:18453](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18453)

ProductListHeaderImage productId.

#### Implementation of

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md).[`productId`](../interfaces/IProductListHeaderImage.md#productid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18526](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18526)

Converts this ProductListHeaderImage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProductListHeaderImage`](ProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18463](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18463)

Creates a new ProductListHeaderImage instance using the specified properties.

#### Parameters

##### properties?

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

Properties to set

#### Returns

[`ProductListHeaderImage`](ProductListHeaderImage.md)

ProductListHeaderImage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProductListHeaderImage`](ProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18489](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18489)

Decodes a ProductListHeaderImage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProductListHeaderImage`](ProductListHeaderImage.md)

ProductListHeaderImage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProductListHeaderImage`](ProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18498](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18498)

Decodes a ProductListHeaderImage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProductListHeaderImage`](ProductListHeaderImage.md)

ProductListHeaderImage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18471](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18471)

Encodes the specified ProductListHeaderImage message. Does not implicitly [verify](ProductListHeaderImage.md#verify) messages.

#### Parameters

##### message

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

ProductListHeaderImage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18479](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18479)

Encodes the specified ProductListHeaderImage message, length delimited. Does not implicitly [verify](ProductListHeaderImage.md#verify) messages.

#### Parameters

##### message

[`IProductListHeaderImage`](../interfaces/IProductListHeaderImage.md)

ProductListHeaderImage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProductListHeaderImage`](ProductListHeaderImage.md)

Defined in: [WAProto/index.d.ts:18512](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18512)

Creates a ProductListHeaderImage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProductListHeaderImage`](ProductListHeaderImage.md)

ProductListHeaderImage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18533](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18533)

Gets the default type url for ProductListHeaderImage

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

Defined in: [WAProto/index.d.ts:18520](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18520)

Creates a plain object from a ProductListHeaderImage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProductListHeaderImage`](ProductListHeaderImage.md)

ProductListHeaderImage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18505](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18505)

Verifies a ProductListHeaderImage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
