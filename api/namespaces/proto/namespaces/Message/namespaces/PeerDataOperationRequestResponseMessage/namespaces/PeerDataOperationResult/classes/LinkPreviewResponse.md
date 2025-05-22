# Class: LinkPreviewResponse

Defined in: [WAProto/index.d.ts:20871](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20871)

Represents a LinkPreviewResponse.

## Implements

- [`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md)

## Constructors

### new LinkPreviewResponse()

> **new LinkPreviewResponse**(`properties`?): [`LinkPreviewResponse`](LinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20877)

Constructs a new LinkPreviewResponse.

#### Parameters

##### properties?

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md)

Properties to set

#### Returns

[`LinkPreviewResponse`](LinkPreviewResponse.md)

## Properties

### canonicalUrl

> **canonicalUrl**: `string`

Defined in: [WAProto/index.d.ts:20892](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20892)

LinkPreviewResponse canonicalUrl.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`canonicalUrl`](../interfaces/ILinkPreviewResponse.md#canonicalurl)

***

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:20886](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20886)

LinkPreviewResponse description.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`description`](../interfaces/ILinkPreviewResponse.md#description)

***

### hqThumbnail?

> `optional` **hqThumbnail**: `null` \| [`ILinkPreviewHighQualityThumbnail`](../namespaces/LinkPreviewResponse/interfaces/ILinkPreviewHighQualityThumbnail.md)

Defined in: [WAProto/index.d.ts:20901](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20901)

LinkPreviewResponse hqThumbnail.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`hqThumbnail`](../interfaces/ILinkPreviewResponse.md#hqthumbnail)

***

### matchText

> **matchText**: `string`

Defined in: [WAProto/index.d.ts:20895](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20895)

LinkPreviewResponse matchText.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`matchText`](../interfaces/ILinkPreviewResponse.md#matchtext)

***

### previewType

> **previewType**: `string`

Defined in: [WAProto/index.d.ts:20898](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20898)

LinkPreviewResponse previewType.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`previewType`](../interfaces/ILinkPreviewResponse.md#previewtype)

***

### thumbData

> **thumbData**: `Uint8Array`

Defined in: [WAProto/index.d.ts:20889](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20889)

LinkPreviewResponse thumbData.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`thumbData`](../interfaces/ILinkPreviewResponse.md#thumbdata)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:20883](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20883)

LinkPreviewResponse title.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`title`](../interfaces/ILinkPreviewResponse.md#title)

***

### url

> **url**: `string`

Defined in: [WAProto/index.d.ts:20880](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20880)

LinkPreviewResponse url.

#### Implementation of

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md).[`url`](../interfaces/ILinkPreviewResponse.md#url)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20971)

Converts this LinkPreviewResponse to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`LinkPreviewResponse`](LinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20908)

Creates a new LinkPreviewResponse instance using the specified properties.

#### Parameters

##### properties?

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md)

Properties to set

#### Returns

[`LinkPreviewResponse`](LinkPreviewResponse.md)

LinkPreviewResponse instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`LinkPreviewResponse`](LinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20934](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20934)

Decodes a LinkPreviewResponse message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`LinkPreviewResponse`](LinkPreviewResponse.md)

LinkPreviewResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`LinkPreviewResponse`](LinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20943)

Decodes a LinkPreviewResponse message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`LinkPreviewResponse`](LinkPreviewResponse.md)

LinkPreviewResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20916](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20916)

Encodes the specified LinkPreviewResponse message. Does not implicitly [verify](LinkPreviewResponse.md#verify) messages.

#### Parameters

##### message

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md)

LinkPreviewResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20924](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20924)

Encodes the specified LinkPreviewResponse message, length delimited. Does not implicitly [verify](LinkPreviewResponse.md#verify) messages.

#### Parameters

##### message

[`ILinkPreviewResponse`](../interfaces/ILinkPreviewResponse.md)

LinkPreviewResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`LinkPreviewResponse`](LinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20957](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20957)

Creates a LinkPreviewResponse message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`LinkPreviewResponse`](LinkPreviewResponse.md)

LinkPreviewResponse

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20978)

Gets the default type url for LinkPreviewResponse

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

Defined in: [WAProto/index.d.ts:20965](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20965)

Creates a plain object from a LinkPreviewResponse message. Also converts values to other types if specified.

#### Parameters

##### message

[`LinkPreviewResponse`](LinkPreviewResponse.md)

LinkPreviewResponse

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20950)

Verifies a LinkPreviewResponse message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
