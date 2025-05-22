# Class: PeerDataOperationRequestResponseMessage

Defined in: [WAProto/index.d.ts:20628](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20628)

Represents a PeerDataOperationRequestResponseMessage.

## Implements

- [`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

## Constructors

### new PeerDataOperationRequestResponseMessage()

> **new PeerDataOperationRequestResponseMessage**(`properties`?): [`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:20634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20634)

Constructs a new PeerDataOperationRequestResponseMessage.

#### Parameters

##### properties?

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

Properties to set

#### Returns

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

## Properties

### peerDataOperationRequestType

> **peerDataOperationRequestType**: [`PeerDataOperationRequestType`](../enumerations/PeerDataOperationRequestType.md)

Defined in: [WAProto/index.d.ts:20637](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20637)

PeerDataOperationRequestResponseMessage peerDataOperationRequestType.

#### Implementation of

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md).[`peerDataOperationRequestType`](../interfaces/IPeerDataOperationRequestResponseMessage.md#peerdataoperationrequesttype)

***

### peerDataOperationResult

> **peerDataOperationResult**: [`IPeerDataOperationResult`](../namespaces/PeerDataOperationRequestResponseMessage/interfaces/IPeerDataOperationResult.md)[]

Defined in: [WAProto/index.d.ts:20643](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20643)

PeerDataOperationRequestResponseMessage peerDataOperationResult.

#### Implementation of

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md).[`peerDataOperationResult`](../interfaces/IPeerDataOperationRequestResponseMessage.md#peerdataoperationresult)

***

### stanzaId

> **stanzaId**: `string`

Defined in: [WAProto/index.d.ts:20640](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20640)

PeerDataOperationRequestResponseMessage stanzaId.

#### Implementation of

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md).[`stanzaId`](../interfaces/IPeerDataOperationRequestResponseMessage.md#stanzaid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20713](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20713)

Converts this PeerDataOperationRequestResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:20650](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20650)

Creates a new PeerDataOperationRequestResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

Properties to set

#### Returns

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:20676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20676)

Decodes a PeerDataOperationRequestResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:20685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20685)

Decodes a PeerDataOperationRequestResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20658](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20658)

Encodes the specified PeerDataOperationRequestResponseMessage message. Does not implicitly [verify](PeerDataOperationRequestResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20666](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20666)

Encodes the specified PeerDataOperationRequestResponseMessage message, length delimited. Does not implicitly [verify](PeerDataOperationRequestResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:20699](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20699)

Creates a PeerDataOperationRequestResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20720](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20720)

Gets the default type url for PeerDataOperationRequestResponseMessage

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

Defined in: [WAProto/index.d.ts:20707](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20707)

Creates a plain object from a PeerDataOperationRequestResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PeerDataOperationRequestResponseMessage`](PeerDataOperationRequestResponseMessage.md)

PeerDataOperationRequestResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20692](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20692)

Verifies a PeerDataOperationRequestResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
