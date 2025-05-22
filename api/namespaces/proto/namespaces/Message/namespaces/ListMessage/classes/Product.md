# Class: Product

Defined in: [WAProto/index.d.ts:18344](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18344)

Represents a Product.

## Implements

- [`IProduct`](../interfaces/IProduct.md)

## Constructors

### new Product()

> **new Product**(`properties`?): [`Product`](Product.md)

Defined in: [WAProto/index.d.ts:18350](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18350)

Constructs a new Product.

#### Parameters

##### properties?

[`IProduct`](../interfaces/IProduct.md)

Properties to set

#### Returns

[`Product`](Product.md)

## Properties

### productId

> **productId**: `string`

Defined in: [WAProto/index.d.ts:18353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18353)

Product productId.

#### Implementation of

[`IProduct`](../interfaces/IProduct.md).[`productId`](../interfaces/IProduct.md#productid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18423)

Converts this Product to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Product`](Product.md)

Defined in: [WAProto/index.d.ts:18360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18360)

Creates a new Product instance using the specified properties.

#### Parameters

##### properties?

[`IProduct`](../interfaces/IProduct.md)

Properties to set

#### Returns

[`Product`](Product.md)

Product instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Product`](Product.md)

Defined in: [WAProto/index.d.ts:18386](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18386)

Decodes a Product message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Product`](Product.md)

Product

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Product`](Product.md)

Defined in: [WAProto/index.d.ts:18395](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18395)

Decodes a Product message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Product`](Product.md)

Product

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18368)

Encodes the specified Product message. Does not implicitly [verify](Product.md#verify) messages.

#### Parameters

##### message

[`IProduct`](../interfaces/IProduct.md)

Product message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18376](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18376)

Encodes the specified Product message, length delimited. Does not implicitly [verify](Product.md#verify) messages.

#### Parameters

##### message

[`IProduct`](../interfaces/IProduct.md)

Product message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Product`](Product.md)

Defined in: [WAProto/index.d.ts:18409](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18409)

Creates a Product message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Product`](Product.md)

Product

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18430)

Gets the default type url for Product

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

Defined in: [WAProto/index.d.ts:18417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18417)

Creates a plain object from a Product message. Also converts values to other types if specified.

#### Parameters

##### message

[`Product`](Product.md)

Product

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18402)

Verifies a Product message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
