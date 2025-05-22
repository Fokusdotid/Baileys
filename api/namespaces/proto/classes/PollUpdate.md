# Class: PollUpdate

Defined in: [WAProto/index.d.ts:28078](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28078)

Represents a PollUpdate.

## Implements

- [`IPollUpdate`](../interfaces/IPollUpdate.md)

## Constructors

### new PollUpdate()

> **new PollUpdate**(`properties`?): [`PollUpdate`](PollUpdate.md)

Defined in: [WAProto/index.d.ts:28084](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28084)

Constructs a new PollUpdate.

#### Parameters

##### properties?

[`IPollUpdate`](../interfaces/IPollUpdate.md)

Properties to set

#### Returns

[`PollUpdate`](PollUpdate.md)

## Properties

### pollUpdateMessageKey?

> `optional` **pollUpdateMessageKey**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:28087](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28087)

PollUpdate pollUpdateMessageKey.

#### Implementation of

[`IPollUpdate`](../interfaces/IPollUpdate.md).[`pollUpdateMessageKey`](../interfaces/IPollUpdate.md#pollupdatemessagekey)

***

### senderTimestampMs

> **senderTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:28093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28093)

PollUpdate senderTimestampMs.

#### Implementation of

[`IPollUpdate`](../interfaces/IPollUpdate.md).[`senderTimestampMs`](../interfaces/IPollUpdate.md#sendertimestampms)

***

### serverTimestampMs

> **serverTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:28096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28096)

PollUpdate serverTimestampMs.

#### Implementation of

[`IPollUpdate`](../interfaces/IPollUpdate.md).[`serverTimestampMs`](../interfaces/IPollUpdate.md#servertimestampms)

***

### unread

> **unread**: `boolean`

Defined in: [WAProto/index.d.ts:28099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28099)

PollUpdate unread.

#### Implementation of

[`IPollUpdate`](../interfaces/IPollUpdate.md).[`unread`](../interfaces/IPollUpdate.md#unread)

***

### vote?

> `optional` **vote**: `null` \| [`IPollVoteMessage`](../namespaces/Message/interfaces/IPollVoteMessage.md)

Defined in: [WAProto/index.d.ts:28090](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28090)

PollUpdate vote.

#### Implementation of

[`IPollUpdate`](../interfaces/IPollUpdate.md).[`vote`](../interfaces/IPollUpdate.md#vote)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28169](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28169)

Converts this PollUpdate to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollUpdate`](PollUpdate.md)

Defined in: [WAProto/index.d.ts:28106](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28106)

Creates a new PollUpdate instance using the specified properties.

#### Parameters

##### properties?

[`IPollUpdate`](../interfaces/IPollUpdate.md)

Properties to set

#### Returns

[`PollUpdate`](PollUpdate.md)

PollUpdate instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollUpdate`](PollUpdate.md)

Defined in: [WAProto/index.d.ts:28132](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28132)

Decodes a PollUpdate message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollUpdate`](PollUpdate.md)

PollUpdate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollUpdate`](PollUpdate.md)

Defined in: [WAProto/index.d.ts:28141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28141)

Decodes a PollUpdate message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollUpdate`](PollUpdate.md)

PollUpdate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28114](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28114)

Encodes the specified PollUpdate message. Does not implicitly [verify](PollUpdate.md#verify) messages.

#### Parameters

##### message

[`IPollUpdate`](../interfaces/IPollUpdate.md)

PollUpdate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28122](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28122)

Encodes the specified PollUpdate message, length delimited. Does not implicitly [verify](PollUpdate.md#verify) messages.

#### Parameters

##### message

[`IPollUpdate`](../interfaces/IPollUpdate.md)

PollUpdate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollUpdate`](PollUpdate.md)

Defined in: [WAProto/index.d.ts:28155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28155)

Creates a PollUpdate message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollUpdate`](PollUpdate.md)

PollUpdate

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28176](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28176)

Gets the default type url for PollUpdate

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

Defined in: [WAProto/index.d.ts:28163](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28163)

Creates a plain object from a PollUpdate message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollUpdate`](PollUpdate.md)

PollUpdate

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28148](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28148)

Verifies a PollUpdate message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
