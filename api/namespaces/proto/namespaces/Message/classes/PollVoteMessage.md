# Class: PollVoteMessage

Defined in: [WAProto/index.d.ts:21987](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21987)

Represents a PollVoteMessage.

## Implements

- [`IPollVoteMessage`](../interfaces/IPollVoteMessage.md)

## Constructors

### new PollVoteMessage()

> **new PollVoteMessage**(`properties`?): [`PollVoteMessage`](PollVoteMessage.md)

Defined in: [WAProto/index.d.ts:21993](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21993)

Constructs a new PollVoteMessage.

#### Parameters

##### properties?

[`IPollVoteMessage`](../interfaces/IPollVoteMessage.md)

Properties to set

#### Returns

[`PollVoteMessage`](PollVoteMessage.md)

## Properties

### selectedOptions

> **selectedOptions**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [WAProto/index.d.ts:21996](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21996)

PollVoteMessage selectedOptions.

#### Implementation of

[`IPollVoteMessage`](../interfaces/IPollVoteMessage.md).[`selectedOptions`](../interfaces/IPollVoteMessage.md#selectedoptions)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:22066](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22066)

Converts this PollVoteMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollVoteMessage`](PollVoteMessage.md)

Defined in: [WAProto/index.d.ts:22003](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22003)

Creates a new PollVoteMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPollVoteMessage`](../interfaces/IPollVoteMessage.md)

Properties to set

#### Returns

[`PollVoteMessage`](PollVoteMessage.md)

PollVoteMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollVoteMessage`](PollVoteMessage.md)

Defined in: [WAProto/index.d.ts:22029](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22029)

Decodes a PollVoteMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollVoteMessage`](PollVoteMessage.md)

PollVoteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollVoteMessage`](PollVoteMessage.md)

Defined in: [WAProto/index.d.ts:22038](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22038)

Decodes a PollVoteMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollVoteMessage`](PollVoteMessage.md)

PollVoteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22011](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22011)

Encodes the specified PollVoteMessage message. Does not implicitly [verify](PollVoteMessage.md#verify) messages.

#### Parameters

##### message

[`IPollVoteMessage`](../interfaces/IPollVoteMessage.md)

PollVoteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22019](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22019)

Encodes the specified PollVoteMessage message, length delimited. Does not implicitly [verify](PollVoteMessage.md#verify) messages.

#### Parameters

##### message

[`IPollVoteMessage`](../interfaces/IPollVoteMessage.md)

PollVoteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollVoteMessage`](PollVoteMessage.md)

Defined in: [WAProto/index.d.ts:22052](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22052)

Creates a PollVoteMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollVoteMessage`](PollVoteMessage.md)

PollVoteMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:22073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22073)

Gets the default type url for PollVoteMessage

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

Defined in: [WAProto/index.d.ts:22060](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22060)

Creates a plain object from a PollVoteMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollVoteMessage`](PollVoteMessage.md)

PollVoteMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:22045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22045)

Verifies a PollVoteMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
