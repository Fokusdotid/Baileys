# Class: Header

Defined in: [WAProto/index.d.ts:17131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17131)

Represents a Header.

## Implements

- [`IHeader`](../interfaces/IHeader.md)

## Constructors

### new Header()

> **new Header**(`properties`?): [`Header`](Header.md)

Defined in: [WAProto/index.d.ts:17137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17137)

Constructs a new Header.

#### Parameters

##### properties?

[`IHeader`](../interfaces/IHeader.md)

Properties to set

#### Returns

[`Header`](Header.md)

## Properties

### documentMessage?

> `optional` **documentMessage**: `null` \| [`IDocumentMessage`](../../../interfaces/IDocumentMessage.md)

Defined in: [WAProto/index.d.ts:17149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17149)

Header documentMessage.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`documentMessage`](../interfaces/IHeader.md#documentmessage)

***

### hasMediaAttachment

> **hasMediaAttachment**: `boolean`

Defined in: [WAProto/index.d.ts:17146](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17146)

Header hasMediaAttachment.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`hasMediaAttachment`](../interfaces/IHeader.md#hasmediaattachment)

***

### imageMessage?

> `optional` **imageMessage**: `null` \| [`IImageMessage`](../../../interfaces/IImageMessage.md)

Defined in: [WAProto/index.d.ts:17152](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17152)

Header imageMessage.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`imageMessage`](../interfaces/IHeader.md#imagemessage)

***

### jpegThumbnail?

> `optional` **jpegThumbnail**: `null` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [WAProto/index.d.ts:17155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17155)

Header jpegThumbnail.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`jpegThumbnail`](../interfaces/IHeader.md#jpegthumbnail)

***

### locationMessage?

> `optional` **locationMessage**: `null` \| [`ILocationMessage`](../../../interfaces/ILocationMessage.md)

Defined in: [WAProto/index.d.ts:17161](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17161)

Header locationMessage.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`locationMessage`](../interfaces/IHeader.md#locationmessage)

***

### media?

> `optional` **media**: `"imageMessage"` \| `"locationMessage"` \| `"documentMessage"` \| `"videoMessage"` \| `"productMessage"` \| `"jpegThumbnail"`

Defined in: [WAProto/index.d.ts:17167](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17167)

Header media.

***

### productMessage?

> `optional` **productMessage**: `null` \| [`IProductMessage`](../../../interfaces/IProductMessage.md)

Defined in: [WAProto/index.d.ts:17164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17164)

Header productMessage.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`productMessage`](../interfaces/IHeader.md#productmessage)

***

### subtitle

> **subtitle**: `string`

Defined in: [WAProto/index.d.ts:17143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17143)

Header subtitle.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`subtitle`](../interfaces/IHeader.md#subtitle)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:17140](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17140)

Header title.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`title`](../interfaces/IHeader.md#title)

***

### videoMessage?

> `optional` **videoMessage**: `null` \| [`IVideoMessage`](../../../interfaces/IVideoMessage.md)

Defined in: [WAProto/index.d.ts:17158](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17158)

Header videoMessage.

#### Implementation of

[`IHeader`](../interfaces/IHeader.md).[`videoMessage`](../interfaces/IHeader.md#videomessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17237](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17237)

Converts this Header to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Header`](Header.md)

Defined in: [WAProto/index.d.ts:17174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17174)

Creates a new Header instance using the specified properties.

#### Parameters

##### properties?

[`IHeader`](../interfaces/IHeader.md)

Properties to set

#### Returns

[`Header`](Header.md)

Header instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Header`](Header.md)

Defined in: [WAProto/index.d.ts:17200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17200)

Decodes a Header message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Header`](Header.md)

Header

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Header`](Header.md)

Defined in: [WAProto/index.d.ts:17209](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17209)

Decodes a Header message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Header`](Header.md)

Header

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17182](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17182)

Encodes the specified Header message. Does not implicitly [verify](Header.md#verify) messages.

#### Parameters

##### message

[`IHeader`](../interfaces/IHeader.md)

Header message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17190)

Encodes the specified Header message, length delimited. Does not implicitly [verify](Header.md#verify) messages.

#### Parameters

##### message

[`IHeader`](../interfaces/IHeader.md)

Header message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Header`](Header.md)

Defined in: [WAProto/index.d.ts:17223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17223)

Creates a Header message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Header`](Header.md)

Header

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17244)

Gets the default type url for Header

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

Defined in: [WAProto/index.d.ts:17231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17231)

Creates a plain object from a Header message. Also converts values to other types if specified.

#### Parameters

##### message

[`Header`](Header.md)

Header

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17216](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17216)

Verifies a Header message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
