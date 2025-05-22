# Class: RecentEmojiWeightsAction

Defined in: [WAProto/index.d.ts:35891](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35891)

Represents a RecentEmojiWeightsAction.

## Implements

- [`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md)

## Constructors

### new RecentEmojiWeightsAction()

> **new RecentEmojiWeightsAction**(`properties`?): [`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

Defined in: [WAProto/index.d.ts:35897](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35897)

Constructs a new RecentEmojiWeightsAction.

#### Parameters

##### properties?

[`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md)

Properties to set

#### Returns

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

## Properties

### weights

> **weights**: [`IRecentEmojiWeight`](../../../interfaces/IRecentEmojiWeight.md)[]

Defined in: [WAProto/index.d.ts:35900](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35900)

RecentEmojiWeightsAction weights.

#### Implementation of

[`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md).[`weights`](../interfaces/IRecentEmojiWeightsAction.md#weights)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35970](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35970)

Converts this RecentEmojiWeightsAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

Defined in: [WAProto/index.d.ts:35907](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35907)

Creates a new RecentEmojiWeightsAction instance using the specified properties.

#### Parameters

##### properties?

[`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md)

Properties to set

#### Returns

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

RecentEmojiWeightsAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

Defined in: [WAProto/index.d.ts:35933](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35933)

Decodes a RecentEmojiWeightsAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

RecentEmojiWeightsAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

Defined in: [WAProto/index.d.ts:35942](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35942)

Decodes a RecentEmojiWeightsAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

RecentEmojiWeightsAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35915)

Encodes the specified RecentEmojiWeightsAction message. Does not implicitly [verify](RecentEmojiWeightsAction.md#verify) messages.

#### Parameters

##### message

[`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md)

RecentEmojiWeightsAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35923)

Encodes the specified RecentEmojiWeightsAction message, length delimited. Does not implicitly [verify](RecentEmojiWeightsAction.md#verify) messages.

#### Parameters

##### message

[`IRecentEmojiWeightsAction`](../interfaces/IRecentEmojiWeightsAction.md)

RecentEmojiWeightsAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

Defined in: [WAProto/index.d.ts:35956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35956)

Creates a RecentEmojiWeightsAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

RecentEmojiWeightsAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35977](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35977)

Gets the default type url for RecentEmojiWeightsAction

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

Defined in: [WAProto/index.d.ts:35964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35964)

Creates a plain object from a RecentEmojiWeightsAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`RecentEmojiWeightsAction`](RecentEmojiWeightsAction.md)

RecentEmojiWeightsAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35949](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35949)

Verifies a RecentEmojiWeightsAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
