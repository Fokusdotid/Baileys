# Class: PeerDataOperationRequestMessage

Defined in: [WAProto/index.d.ts:20092](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20092)

Represents a PeerDataOperationRequestMessage.

## Implements

- [`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

## Constructors

### new PeerDataOperationRequestMessage()

> **new PeerDataOperationRequestMessage**(`properties`?): [`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:20098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20098)

Constructs a new PeerDataOperationRequestMessage.

#### Parameters

##### properties?

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

Properties to set

#### Returns

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

## Properties

### historySyncOnDemandRequest?

> `optional` **historySyncOnDemandRequest**: `null` \| [`IHistorySyncOnDemandRequest`](../namespaces/PeerDataOperationRequestMessage/interfaces/IHistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20110](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20110)

PeerDataOperationRequestMessage historySyncOnDemandRequest.

#### Implementation of

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md).[`historySyncOnDemandRequest`](../interfaces/IPeerDataOperationRequestMessage.md#historysyncondemandrequest)

***

### peerDataOperationRequestType

> **peerDataOperationRequestType**: [`PeerDataOperationRequestType`](../enumerations/PeerDataOperationRequestType.md)

Defined in: [WAProto/index.d.ts:20101](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20101)

PeerDataOperationRequestMessage peerDataOperationRequestType.

#### Implementation of

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md).[`peerDataOperationRequestType`](../interfaces/IPeerDataOperationRequestMessage.md#peerdataoperationrequesttype)

***

### placeholderMessageResendRequest

> **placeholderMessageResendRequest**: [`IPlaceholderMessageResendRequest`](../namespaces/PeerDataOperationRequestMessage/interfaces/IPlaceholderMessageResendRequest.md)[]

Defined in: [WAProto/index.d.ts:20113](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20113)

PeerDataOperationRequestMessage placeholderMessageResendRequest.

#### Implementation of

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md).[`placeholderMessageResendRequest`](../interfaces/IPeerDataOperationRequestMessage.md#placeholdermessageresendrequest)

***

### requestStickerReupload

> **requestStickerReupload**: [`IRequestStickerReupload`](../namespaces/PeerDataOperationRequestMessage/interfaces/IRequestStickerReupload.md)[]

Defined in: [WAProto/index.d.ts:20104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20104)

PeerDataOperationRequestMessage requestStickerReupload.

#### Implementation of

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md).[`requestStickerReupload`](../interfaces/IPeerDataOperationRequestMessage.md#requeststickerreupload)

***

### requestUrlPreview

> **requestUrlPreview**: [`IRequestUrlPreview`](../namespaces/PeerDataOperationRequestMessage/interfaces/IRequestUrlPreview.md)[]

Defined in: [WAProto/index.d.ts:20107](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20107)

PeerDataOperationRequestMessage requestUrlPreview.

#### Implementation of

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md).[`requestUrlPreview`](../interfaces/IPeerDataOperationRequestMessage.md#requesturlpreview)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20183](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20183)

Converts this PeerDataOperationRequestMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:20120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20120)

Creates a new PeerDataOperationRequestMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

Properties to set

#### Returns

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:20146](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20146)

Decodes a PeerDataOperationRequestMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:20155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20155)

Decodes a PeerDataOperationRequestMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20128](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20128)

Encodes the specified PeerDataOperationRequestMessage message. Does not implicitly [verify](PeerDataOperationRequestMessage.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20136)

Encodes the specified PeerDataOperationRequestMessage message, length delimited. Does not implicitly [verify](PeerDataOperationRequestMessage.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:20169](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20169)

Creates a PeerDataOperationRequestMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20190)

Gets the default type url for PeerDataOperationRequestMessage

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

Defined in: [WAProto/index.d.ts:20177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20177)

Creates a plain object from a PeerDataOperationRequestMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PeerDataOperationRequestMessage`](PeerDataOperationRequestMessage.md)

PeerDataOperationRequestMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20162)

Verifies a PeerDataOperationRequestMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
