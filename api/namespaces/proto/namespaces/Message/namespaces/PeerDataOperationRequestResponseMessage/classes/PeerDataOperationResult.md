# Class: PeerDataOperationResult

Defined in: [WAProto/index.d.ts:20742](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20742)

Represents a PeerDataOperationResult.

## Implements

- [`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md)

## Constructors

### new PeerDataOperationResult()

> **new PeerDataOperationResult**(`properties`?): [`PeerDataOperationResult`](PeerDataOperationResult.md)

Defined in: [WAProto/index.d.ts:20748](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20748)

Constructs a new PeerDataOperationResult.

#### Parameters

##### properties?

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md)

Properties to set

#### Returns

[`PeerDataOperationResult`](PeerDataOperationResult.md)

## Properties

### linkPreviewResponse?

> `optional` **linkPreviewResponse**: `null` \| [`ILinkPreviewResponse`](../namespaces/PeerDataOperationResult/interfaces/ILinkPreviewResponse.md)

Defined in: [WAProto/index.d.ts:20757](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20757)

PeerDataOperationResult linkPreviewResponse.

#### Implementation of

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md).[`linkPreviewResponse`](../interfaces/IPeerDataOperationResult.md#linkpreviewresponse)

***

### mediaUploadResult

> **mediaUploadResult**: [`ResultType`](../../../../MediaRetryNotification/enumerations/ResultType.md)

Defined in: [WAProto/index.d.ts:20751](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20751)

PeerDataOperationResult mediaUploadResult.

#### Implementation of

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md).[`mediaUploadResult`](../interfaces/IPeerDataOperationResult.md#mediauploadresult)

***

### placeholderMessageResendResponse?

> `optional` **placeholderMessageResendResponse**: `null` \| [`IPlaceholderMessageResendResponse`](../namespaces/PeerDataOperationResult/interfaces/IPlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:20760](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20760)

PeerDataOperationResult placeholderMessageResendResponse.

#### Implementation of

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md).[`placeholderMessageResendResponse`](../interfaces/IPeerDataOperationResult.md#placeholdermessageresendresponse)

***

### stickerMessage?

> `optional` **stickerMessage**: `null` \| [`IStickerMessage`](../../../interfaces/IStickerMessage.md)

Defined in: [WAProto/index.d.ts:20754](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20754)

PeerDataOperationResult stickerMessage.

#### Implementation of

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md).[`stickerMessage`](../interfaces/IPeerDataOperationResult.md#stickermessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20830](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20830)

Converts this PeerDataOperationResult to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PeerDataOperationResult`](PeerDataOperationResult.md)

Defined in: [WAProto/index.d.ts:20767](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20767)

Creates a new PeerDataOperationResult instance using the specified properties.

#### Parameters

##### properties?

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md)

Properties to set

#### Returns

[`PeerDataOperationResult`](PeerDataOperationResult.md)

PeerDataOperationResult instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PeerDataOperationResult`](PeerDataOperationResult.md)

Defined in: [WAProto/index.d.ts:20793](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20793)

Decodes a PeerDataOperationResult message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PeerDataOperationResult`](PeerDataOperationResult.md)

PeerDataOperationResult

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PeerDataOperationResult`](PeerDataOperationResult.md)

Defined in: [WAProto/index.d.ts:20802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20802)

Decodes a PeerDataOperationResult message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PeerDataOperationResult`](PeerDataOperationResult.md)

PeerDataOperationResult

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20775](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20775)

Encodes the specified PeerDataOperationResult message. Does not implicitly [verify](PeerDataOperationResult.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md)

PeerDataOperationResult message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20783](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20783)

Encodes the specified PeerDataOperationResult message, length delimited. Does not implicitly [verify](PeerDataOperationResult.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationResult`](../interfaces/IPeerDataOperationResult.md)

PeerDataOperationResult message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PeerDataOperationResult`](PeerDataOperationResult.md)

Defined in: [WAProto/index.d.ts:20816](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20816)

Creates a PeerDataOperationResult message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PeerDataOperationResult`](PeerDataOperationResult.md)

PeerDataOperationResult

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20837](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20837)

Gets the default type url for PeerDataOperationResult

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

Defined in: [WAProto/index.d.ts:20824](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20824)

Creates a plain object from a PeerDataOperationResult message. Also converts values to other types if specified.

#### Parameters

##### message

[`PeerDataOperationResult`](PeerDataOperationResult.md)

PeerDataOperationResult

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20809](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20809)

Verifies a PeerDataOperationResult message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
