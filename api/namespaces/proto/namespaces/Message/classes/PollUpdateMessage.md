# Class: PollUpdateMessage

Defined in: [WAProto/index.d.ts:21790](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21790)

Represents a PollUpdateMessage.

## Implements

- [`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md)

## Constructors

### new PollUpdateMessage()

> **new PollUpdateMessage**(`properties`?): [`PollUpdateMessage`](PollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:21796](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21796)

Constructs a new PollUpdateMessage.

#### Parameters

##### properties?

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md)

Properties to set

#### Returns

[`PollUpdateMessage`](PollUpdateMessage.md)

## Properties

### metadata?

> `optional` **metadata**: `null` \| [`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21805](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21805)

PollUpdateMessage metadata.

#### Implementation of

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md).[`metadata`](../interfaces/IPollUpdateMessage.md#metadata)

***

### pollCreationMessageKey?

> `optional` **pollCreationMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:21799](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21799)

PollUpdateMessage pollCreationMessageKey.

#### Implementation of

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md).[`pollCreationMessageKey`](../interfaces/IPollUpdateMessage.md#pollcreationmessagekey)

***

### senderTimestampMs

> **senderTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:21808](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21808)

PollUpdateMessage senderTimestampMs.

#### Implementation of

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md).[`senderTimestampMs`](../interfaces/IPollUpdateMessage.md#sendertimestampms)

***

### vote?

> `optional` **vote**: `null` \| [`IPollEncValue`](../interfaces/IPollEncValue.md)

Defined in: [WAProto/index.d.ts:21802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21802)

PollUpdateMessage vote.

#### Implementation of

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md).[`vote`](../interfaces/IPollUpdateMessage.md#vote)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21878](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21878)

Converts this PollUpdateMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollUpdateMessage`](PollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:21815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21815)

Creates a new PollUpdateMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md)

Properties to set

#### Returns

[`PollUpdateMessage`](PollUpdateMessage.md)

PollUpdateMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollUpdateMessage`](PollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:21841](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21841)

Decodes a PollUpdateMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollUpdateMessage`](PollUpdateMessage.md)

PollUpdateMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollUpdateMessage`](PollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:21850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21850)

Decodes a PollUpdateMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollUpdateMessage`](PollUpdateMessage.md)

PollUpdateMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21823)

Encodes the specified PollUpdateMessage message. Does not implicitly [verify](PollUpdateMessage.md#verify) messages.

#### Parameters

##### message

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md)

PollUpdateMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21831](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21831)

Encodes the specified PollUpdateMessage message, length delimited. Does not implicitly [verify](PollUpdateMessage.md#verify) messages.

#### Parameters

##### message

[`IPollUpdateMessage`](../interfaces/IPollUpdateMessage.md)

PollUpdateMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollUpdateMessage`](PollUpdateMessage.md)

Defined in: [WAProto/index.d.ts:21864](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21864)

Creates a PollUpdateMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollUpdateMessage`](PollUpdateMessage.md)

PollUpdateMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21885](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21885)

Gets the default type url for PollUpdateMessage

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

Defined in: [WAProto/index.d.ts:21872](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21872)

Creates a plain object from a PollUpdateMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollUpdateMessage`](PollUpdateMessage.md)

PollUpdateMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21857](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21857)

Verifies a PollUpdateMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
