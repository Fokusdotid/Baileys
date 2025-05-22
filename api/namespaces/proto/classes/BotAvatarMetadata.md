# Class: BotAvatarMetadata

Defined in: [WAProto/index.d.ts:1327](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1327)

Represents a BotAvatarMetadata.

## Implements

- [`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

## Constructors

### new BotAvatarMetadata()

> **new BotAvatarMetadata**(`properties`?): [`BotAvatarMetadata`](BotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1333](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1333)

Constructs a new BotAvatarMetadata.

#### Parameters

##### properties?

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

Properties to set

#### Returns

[`BotAvatarMetadata`](BotAvatarMetadata.md)

## Properties

### action

> **action**: `number`

Defined in: [WAProto/index.d.ts:1342](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1342)

BotAvatarMetadata action.

#### Implementation of

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md).[`action`](../interfaces/IBotAvatarMetadata.md#action)

***

### behaviorGraph

> **behaviorGraph**: `string`

Defined in: [WAProto/index.d.ts:1339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1339)

BotAvatarMetadata behaviorGraph.

#### Implementation of

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md).[`behaviorGraph`](../interfaces/IBotAvatarMetadata.md#behaviorgraph)

***

### intensity

> **intensity**: `number`

Defined in: [WAProto/index.d.ts:1345](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1345)

BotAvatarMetadata intensity.

#### Implementation of

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md).[`intensity`](../interfaces/IBotAvatarMetadata.md#intensity)

***

### sentiment

> **sentiment**: `number`

Defined in: [WAProto/index.d.ts:1336](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1336)

BotAvatarMetadata sentiment.

#### Implementation of

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md).[`sentiment`](../interfaces/IBotAvatarMetadata.md#sentiment)

***

### wordCount

> **wordCount**: `number`

Defined in: [WAProto/index.d.ts:1348](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1348)

BotAvatarMetadata wordCount.

#### Implementation of

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md).[`wordCount`](../interfaces/IBotAvatarMetadata.md#wordcount)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1418](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1418)

Converts this BotAvatarMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotAvatarMetadata`](BotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1355](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1355)

Creates a new BotAvatarMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

Properties to set

#### Returns

[`BotAvatarMetadata`](BotAvatarMetadata.md)

BotAvatarMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotAvatarMetadata`](BotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1381)

Decodes a BotAvatarMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotAvatarMetadata`](BotAvatarMetadata.md)

BotAvatarMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotAvatarMetadata`](BotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1390)

Decodes a BotAvatarMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotAvatarMetadata`](BotAvatarMetadata.md)

BotAvatarMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1363](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1363)

Encodes the specified BotAvatarMetadata message. Does not implicitly [verify](BotAvatarMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

BotAvatarMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1371](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1371)

Encodes the specified BotAvatarMetadata message, length delimited. Does not implicitly [verify](BotAvatarMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

BotAvatarMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotAvatarMetadata`](BotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1404](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1404)

Creates a BotAvatarMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotAvatarMetadata`](BotAvatarMetadata.md)

BotAvatarMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1425](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1425)

Gets the default type url for BotAvatarMetadata

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

Defined in: [WAProto/index.d.ts:1412](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1412)

Creates a plain object from a BotAvatarMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotAvatarMetadata`](BotAvatarMetadata.md)

BotAvatarMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1397](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1397)

Verifies a BotAvatarMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
