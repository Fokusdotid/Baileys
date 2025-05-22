# Class: RequestUrlPreview

Defined in: [WAProto/index.d.ts:20521](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20521)

Represents a RequestUrlPreview.

## Implements

- [`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md)

## Constructors

### new RequestUrlPreview()

> **new RequestUrlPreview**(`properties`?): [`RequestUrlPreview`](RequestUrlPreview.md)

Defined in: [WAProto/index.d.ts:20527](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20527)

Constructs a new RequestUrlPreview.

#### Parameters

##### properties?

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md)

Properties to set

#### Returns

[`RequestUrlPreview`](RequestUrlPreview.md)

## Properties

### includeHqThumbnail

> **includeHqThumbnail**: `boolean`

Defined in: [WAProto/index.d.ts:20533](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20533)

RequestUrlPreview includeHqThumbnail.

#### Implementation of

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md).[`includeHqThumbnail`](../interfaces/IRequestUrlPreview.md#includehqthumbnail)

***

### url

> **url**: `string`

Defined in: [WAProto/index.d.ts:20530](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20530)

RequestUrlPreview url.

#### Implementation of

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md).[`url`](../interfaces/IRequestUrlPreview.md#url)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20603)

Converts this RequestUrlPreview to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RequestUrlPreview`](RequestUrlPreview.md)

Defined in: [WAProto/index.d.ts:20540](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20540)

Creates a new RequestUrlPreview instance using the specified properties.

#### Parameters

##### properties?

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md)

Properties to set

#### Returns

[`RequestUrlPreview`](RequestUrlPreview.md)

RequestUrlPreview instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RequestUrlPreview`](RequestUrlPreview.md)

Defined in: [WAProto/index.d.ts:20566](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20566)

Decodes a RequestUrlPreview message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RequestUrlPreview`](RequestUrlPreview.md)

RequestUrlPreview

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RequestUrlPreview`](RequestUrlPreview.md)

Defined in: [WAProto/index.d.ts:20575](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20575)

Decodes a RequestUrlPreview message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RequestUrlPreview`](RequestUrlPreview.md)

RequestUrlPreview

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20548](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20548)

Encodes the specified RequestUrlPreview message. Does not implicitly [verify](RequestUrlPreview.md#verify) messages.

#### Parameters

##### message

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md)

RequestUrlPreview message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20556](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20556)

Encodes the specified RequestUrlPreview message, length delimited. Does not implicitly [verify](RequestUrlPreview.md#verify) messages.

#### Parameters

##### message

[`IRequestUrlPreview`](../interfaces/IRequestUrlPreview.md)

RequestUrlPreview message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RequestUrlPreview`](RequestUrlPreview.md)

Defined in: [WAProto/index.d.ts:20589](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20589)

Creates a RequestUrlPreview message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RequestUrlPreview`](RequestUrlPreview.md)

RequestUrlPreview

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20610)

Gets the default type url for RequestUrlPreview

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

Defined in: [WAProto/index.d.ts:20597](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20597)

Creates a plain object from a RequestUrlPreview message. Also converts values to other types if specified.

#### Parameters

##### message

[`RequestUrlPreview`](RequestUrlPreview.md)

RequestUrlPreview

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20582)

Verifies a RequestUrlPreview message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
