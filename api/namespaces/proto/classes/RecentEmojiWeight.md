# Class: RecentEmojiWeight

Defined in: [WAProto/index.d.ts:29188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29188)

Represents a RecentEmojiWeight.

## Implements

- [`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md)

## Constructors

### new RecentEmojiWeight()

> **new RecentEmojiWeight**(`properties`?): [`RecentEmojiWeight`](RecentEmojiWeight.md)

Defined in: [WAProto/index.d.ts:29194](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29194)

Constructs a new RecentEmojiWeight.

#### Parameters

##### properties?

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md)

Properties to set

#### Returns

[`RecentEmojiWeight`](RecentEmojiWeight.md)

## Properties

### emoji

> **emoji**: `string`

Defined in: [WAProto/index.d.ts:29197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29197)

RecentEmojiWeight emoji.

#### Implementation of

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md).[`emoji`](../interfaces/IRecentEmojiWeight.md#emoji)

***

### weight

> **weight**: `number`

Defined in: [WAProto/index.d.ts:29200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29200)

RecentEmojiWeight weight.

#### Implementation of

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md).[`weight`](../interfaces/IRecentEmojiWeight.md#weight)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29270](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29270)

Converts this RecentEmojiWeight to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RecentEmojiWeight`](RecentEmojiWeight.md)

Defined in: [WAProto/index.d.ts:29207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29207)

Creates a new RecentEmojiWeight instance using the specified properties.

#### Parameters

##### properties?

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md)

Properties to set

#### Returns

[`RecentEmojiWeight`](RecentEmojiWeight.md)

RecentEmojiWeight instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RecentEmojiWeight`](RecentEmojiWeight.md)

Defined in: [WAProto/index.d.ts:29233](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29233)

Decodes a RecentEmojiWeight message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RecentEmojiWeight`](RecentEmojiWeight.md)

RecentEmojiWeight

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RecentEmojiWeight`](RecentEmojiWeight.md)

Defined in: [WAProto/index.d.ts:29242](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29242)

Decodes a RecentEmojiWeight message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RecentEmojiWeight`](RecentEmojiWeight.md)

RecentEmojiWeight

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29215](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29215)

Encodes the specified RecentEmojiWeight message. Does not implicitly [verify](RecentEmojiWeight.md#verify) messages.

#### Parameters

##### message

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md)

RecentEmojiWeight message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29223)

Encodes the specified RecentEmojiWeight message, length delimited. Does not implicitly [verify](RecentEmojiWeight.md#verify) messages.

#### Parameters

##### message

[`IRecentEmojiWeight`](../interfaces/IRecentEmojiWeight.md)

RecentEmojiWeight message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RecentEmojiWeight`](RecentEmojiWeight.md)

Defined in: [WAProto/index.d.ts:29256](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29256)

Creates a RecentEmojiWeight message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RecentEmojiWeight`](RecentEmojiWeight.md)

RecentEmojiWeight

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29277](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29277)

Gets the default type url for RecentEmojiWeight

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

Defined in: [WAProto/index.d.ts:29264](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29264)

Creates a plain object from a RecentEmojiWeight message. Also converts values to other types if specified.

#### Parameters

##### message

[`RecentEmojiWeight`](RecentEmojiWeight.md)

RecentEmojiWeight

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29249](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29249)

Verifies a RecentEmojiWeight message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
