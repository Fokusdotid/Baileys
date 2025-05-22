# Class: ShopMessage

Defined in: [WAProto/index.d.ts:17476](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17476)

Represents a ShopMessage.

## Implements

- [`IShopMessage`](../interfaces/IShopMessage.md)

## Constructors

### new ShopMessage()

> **new ShopMessage**(`properties`?): [`ShopMessage`](ShopMessage.md)

Defined in: [WAProto/index.d.ts:17482](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17482)

Constructs a new ShopMessage.

#### Parameters

##### properties?

[`IShopMessage`](../interfaces/IShopMessage.md)

Properties to set

#### Returns

[`ShopMessage`](ShopMessage.md)

## Properties

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:17485](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17485)

ShopMessage id.

#### Implementation of

[`IShopMessage`](../interfaces/IShopMessage.md).[`id`](../interfaces/IShopMessage.md#id)

***

### messageVersion

> **messageVersion**: `number`

Defined in: [WAProto/index.d.ts:17491](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17491)

ShopMessage messageVersion.

#### Implementation of

[`IShopMessage`](../interfaces/IShopMessage.md).[`messageVersion`](../interfaces/IShopMessage.md#messageversion)

***

### surface

> **surface**: [`Surface`](../namespaces/ShopMessage/enumerations/Surface.md)

Defined in: [WAProto/index.d.ts:17488](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17488)

ShopMessage surface.

#### Implementation of

[`IShopMessage`](../interfaces/IShopMessage.md).[`surface`](../interfaces/IShopMessage.md#surface)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17561](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17561)

Converts this ShopMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ShopMessage`](ShopMessage.md)

Defined in: [WAProto/index.d.ts:17498](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17498)

Creates a new ShopMessage instance using the specified properties.

#### Parameters

##### properties?

[`IShopMessage`](../interfaces/IShopMessage.md)

Properties to set

#### Returns

[`ShopMessage`](ShopMessage.md)

ShopMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ShopMessage`](ShopMessage.md)

Defined in: [WAProto/index.d.ts:17524](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17524)

Decodes a ShopMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ShopMessage`](ShopMessage.md)

ShopMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ShopMessage`](ShopMessage.md)

Defined in: [WAProto/index.d.ts:17533](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17533)

Decodes a ShopMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ShopMessage`](ShopMessage.md)

ShopMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17506](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17506)

Encodes the specified ShopMessage message. Does not implicitly [verify](ShopMessage.md#verify) messages.

#### Parameters

##### message

[`IShopMessage`](../interfaces/IShopMessage.md)

ShopMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17514](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17514)

Encodes the specified ShopMessage message, length delimited. Does not implicitly [verify](ShopMessage.md#verify) messages.

#### Parameters

##### message

[`IShopMessage`](../interfaces/IShopMessage.md)

ShopMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ShopMessage`](ShopMessage.md)

Defined in: [WAProto/index.d.ts:17547](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17547)

Creates a ShopMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ShopMessage`](ShopMessage.md)

ShopMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17568](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17568)

Gets the default type url for ShopMessage

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

Defined in: [WAProto/index.d.ts:17555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17555)

Creates a plain object from a ShopMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ShopMessage`](ShopMessage.md)

ShopMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17540](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17540)

Verifies a ShopMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
