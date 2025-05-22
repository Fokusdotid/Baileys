# Class: AdReplyInfo

Defined in: [WAProto/index.d.ts:4907](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4907)

Represents an AdReplyInfo.

## Implements

- [`IAdReplyInfo`](../interfaces/IAdReplyInfo.md)

## Constructors

### new AdReplyInfo()

> **new AdReplyInfo**(`properties`?): [`AdReplyInfo`](AdReplyInfo.md)

Defined in: [WAProto/index.d.ts:4913](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4913)

Constructs a new AdReplyInfo.

#### Parameters

##### properties?

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md)

Properties to set

#### Returns

[`AdReplyInfo`](AdReplyInfo.md)

## Properties

### advertiserName

> **advertiserName**: `string`

Defined in: [WAProto/index.d.ts:4916](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4916)

AdReplyInfo advertiserName.

#### Implementation of

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md).[`advertiserName`](../interfaces/IAdReplyInfo.md#advertisername)

***

### caption

> **caption**: `string`

Defined in: [WAProto/index.d.ts:4925](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4925)

AdReplyInfo caption.

#### Implementation of

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md).[`caption`](../interfaces/IAdReplyInfo.md#caption)

***

### jpegThumbnail

> **jpegThumbnail**: `Uint8Array`

Defined in: [WAProto/index.d.ts:4922](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4922)

AdReplyInfo jpegThumbnail.

#### Implementation of

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md).[`jpegThumbnail`](../interfaces/IAdReplyInfo.md#jpegthumbnail)

***

### mediaType

> **mediaType**: [`MediaType`](../namespaces/AdReplyInfo/enumerations/MediaType.md)

Defined in: [WAProto/index.d.ts:4919](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4919)

AdReplyInfo mediaType.

#### Implementation of

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md).[`mediaType`](../interfaces/IAdReplyInfo.md#mediatype)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:4995](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4995)

Converts this AdReplyInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AdReplyInfo`](AdReplyInfo.md)

Defined in: [WAProto/index.d.ts:4932](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4932)

Creates a new AdReplyInfo instance using the specified properties.

#### Parameters

##### properties?

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md)

Properties to set

#### Returns

[`AdReplyInfo`](AdReplyInfo.md)

AdReplyInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AdReplyInfo`](AdReplyInfo.md)

Defined in: [WAProto/index.d.ts:4958](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4958)

Decodes an AdReplyInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AdReplyInfo`](AdReplyInfo.md)

AdReplyInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AdReplyInfo`](AdReplyInfo.md)

Defined in: [WAProto/index.d.ts:4967](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4967)

Decodes an AdReplyInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AdReplyInfo`](AdReplyInfo.md)

AdReplyInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4940](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4940)

Encodes the specified AdReplyInfo message. Does not implicitly [verify](AdReplyInfo.md#verify) messages.

#### Parameters

##### message

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md)

AdReplyInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4948)

Encodes the specified AdReplyInfo message, length delimited. Does not implicitly [verify](AdReplyInfo.md#verify) messages.

#### Parameters

##### message

[`IAdReplyInfo`](../interfaces/IAdReplyInfo.md)

AdReplyInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AdReplyInfo`](AdReplyInfo.md)

Defined in: [WAProto/index.d.ts:4981](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4981)

Creates an AdReplyInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AdReplyInfo`](AdReplyInfo.md)

AdReplyInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:5002](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5002)

Gets the default type url for AdReplyInfo

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

Defined in: [WAProto/index.d.ts:4989](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4989)

Creates a plain object from an AdReplyInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`AdReplyInfo`](AdReplyInfo.md)

AdReplyInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:4974](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4974)

Verifies an AdReplyInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
