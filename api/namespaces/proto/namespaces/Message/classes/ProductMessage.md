# Class: ProductMessage

Defined in: [WAProto/index.d.ts:22099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22099)

Represents a ProductMessage.

## Implements

- [`IProductMessage`](../interfaces/IProductMessage.md)

## Constructors

### new ProductMessage()

> **new ProductMessage**(`properties`?): [`ProductMessage`](ProductMessage.md)

Defined in: [WAProto/index.d.ts:22105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22105)

Constructs a new ProductMessage.

#### Parameters

##### properties?

[`IProductMessage`](../interfaces/IProductMessage.md)

Properties to set

#### Returns

[`ProductMessage`](ProductMessage.md)

## Properties

### body

> **body**: `string`

Defined in: [WAProto/index.d.ts:22117](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22117)

ProductMessage body.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`body`](../interfaces/IProductMessage.md#body)

***

### businessOwnerJid

> **businessOwnerJid**: `string`

Defined in: [WAProto/index.d.ts:22111](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22111)

ProductMessage businessOwnerJid.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`businessOwnerJid`](../interfaces/IProductMessage.md#businessownerjid)

***

### catalog?

> `optional` **catalog**: `null` \| [`ICatalogSnapshot`](../namespaces/ProductMessage/interfaces/ICatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22114](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22114)

ProductMessage catalog.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`catalog`](../interfaces/IProductMessage.md#catalog)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:22123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22123)

ProductMessage contextInfo.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`contextInfo`](../interfaces/IProductMessage.md#contextinfo)

***

### footer

> **footer**: `string`

Defined in: [WAProto/index.d.ts:22120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22120)

ProductMessage footer.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`footer`](../interfaces/IProductMessage.md#footer)

***

### product?

> `optional` **product**: `null` \| [`IProductSnapshot`](../namespaces/ProductMessage/interfaces/IProductSnapshot.md)

Defined in: [WAProto/index.d.ts:22108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22108)

ProductMessage product.

#### Implementation of

[`IProductMessage`](../interfaces/IProductMessage.md).[`product`](../interfaces/IProductMessage.md#product)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:22193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22193)

Converts this ProductMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProductMessage`](ProductMessage.md)

Defined in: [WAProto/index.d.ts:22130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22130)

Creates a new ProductMessage instance using the specified properties.

#### Parameters

##### properties?

[`IProductMessage`](../interfaces/IProductMessage.md)

Properties to set

#### Returns

[`ProductMessage`](ProductMessage.md)

ProductMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProductMessage`](ProductMessage.md)

Defined in: [WAProto/index.d.ts:22156](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22156)

Decodes a ProductMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProductMessage`](ProductMessage.md)

ProductMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProductMessage`](ProductMessage.md)

Defined in: [WAProto/index.d.ts:22165](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22165)

Decodes a ProductMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProductMessage`](ProductMessage.md)

ProductMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22138](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22138)

Encodes the specified ProductMessage message. Does not implicitly [verify](ProductMessage.md#verify) messages.

#### Parameters

##### message

[`IProductMessage`](../interfaces/IProductMessage.md)

ProductMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22146](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22146)

Encodes the specified ProductMessage message, length delimited. Does not implicitly [verify](ProductMessage.md#verify) messages.

#### Parameters

##### message

[`IProductMessage`](../interfaces/IProductMessage.md)

ProductMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProductMessage`](ProductMessage.md)

Defined in: [WAProto/index.d.ts:22179](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22179)

Creates a ProductMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProductMessage`](ProductMessage.md)

ProductMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:22200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22200)

Gets the default type url for ProductMessage

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

Defined in: [WAProto/index.d.ts:22187](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22187)

Creates a plain object from a ProductMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProductMessage`](ProductMessage.md)

ProductMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:22172](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22172)

Verifies a ProductMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
