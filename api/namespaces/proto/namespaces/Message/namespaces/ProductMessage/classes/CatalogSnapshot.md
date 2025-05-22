# Class: CatalogSnapshot

Defined in: [WAProto/index.d.ts:22219](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22219)

Represents a CatalogSnapshot.

## Implements

- [`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md)

## Constructors

### new CatalogSnapshot()

> **new CatalogSnapshot**(`properties`?): [`CatalogSnapshot`](CatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22225)

Constructs a new CatalogSnapshot.

#### Parameters

##### properties?

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md)

Properties to set

#### Returns

[`CatalogSnapshot`](CatalogSnapshot.md)

## Properties

### catalogImage?

> `optional` **catalogImage**: `null` \| [`IImageMessage`](../../../interfaces/IImageMessage.md)

Defined in: [WAProto/index.d.ts:22228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22228)

CatalogSnapshot catalogImage.

#### Implementation of

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md).[`catalogImage`](../interfaces/ICatalogSnapshot.md#catalogimage)

***

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:22234](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22234)

CatalogSnapshot description.

#### Implementation of

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md).[`description`](../interfaces/ICatalogSnapshot.md#description)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:22231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22231)

CatalogSnapshot title.

#### Implementation of

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md).[`title`](../interfaces/ICatalogSnapshot.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:22304](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22304)

Converts this CatalogSnapshot to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CatalogSnapshot`](CatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22241)

Creates a new CatalogSnapshot instance using the specified properties.

#### Parameters

##### properties?

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md)

Properties to set

#### Returns

[`CatalogSnapshot`](CatalogSnapshot.md)

CatalogSnapshot instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CatalogSnapshot`](CatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22267)

Decodes a CatalogSnapshot message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CatalogSnapshot`](CatalogSnapshot.md)

CatalogSnapshot

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CatalogSnapshot`](CatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22276](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22276)

Decodes a CatalogSnapshot message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CatalogSnapshot`](CatalogSnapshot.md)

CatalogSnapshot

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22249](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22249)

Encodes the specified CatalogSnapshot message. Does not implicitly [verify](CatalogSnapshot.md#verify) messages.

#### Parameters

##### message

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md)

CatalogSnapshot message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22257](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22257)

Encodes the specified CatalogSnapshot message, length delimited. Does not implicitly [verify](CatalogSnapshot.md#verify) messages.

#### Parameters

##### message

[`ICatalogSnapshot`](../interfaces/ICatalogSnapshot.md)

CatalogSnapshot message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CatalogSnapshot`](CatalogSnapshot.md)

Defined in: [WAProto/index.d.ts:22290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22290)

Creates a CatalogSnapshot message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CatalogSnapshot`](CatalogSnapshot.md)

CatalogSnapshot

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:22311](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22311)

Gets the default type url for CatalogSnapshot

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

Defined in: [WAProto/index.d.ts:22298](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22298)

Creates a plain object from a CatalogSnapshot message. Also converts values to other types if specified.

#### Parameters

##### message

[`CatalogSnapshot`](CatalogSnapshot.md)

CatalogSnapshot

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:22283](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22283)

Verifies a CatalogSnapshot message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
