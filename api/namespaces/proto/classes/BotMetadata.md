# Class: BotMetadata

Defined in: [WAProto/index.d.ts:1451](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1451)

Represents a BotMetadata.

## Implements

- [`IBotMetadata`](../interfaces/IBotMetadata.md)

## Constructors

### new BotMetadata()

> **new BotMetadata**(`properties`?): [`BotMetadata`](BotMetadata.md)

Defined in: [WAProto/index.d.ts:1457](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1457)

Constructs a new BotMetadata.

#### Parameters

##### properties?

[`IBotMetadata`](../interfaces/IBotMetadata.md)

Properties to set

#### Returns

[`BotMetadata`](BotMetadata.md)

## Properties

### avatarMetadata?

> `optional` **avatarMetadata**: `null` \| [`IBotAvatarMetadata`](../interfaces/IBotAvatarMetadata.md)

Defined in: [WAProto/index.d.ts:1460](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1460)

BotMetadata avatarMetadata.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`avatarMetadata`](../interfaces/IBotMetadata.md#avatarmetadata)

***

### invokerJid

> **invokerJid**: `string`

Defined in: [WAProto/index.d.ts:1472](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1472)

BotMetadata invokerJid.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`invokerJid`](../interfaces/IBotMetadata.md#invokerjid)

***

### personaId

> **personaId**: `string`

Defined in: [WAProto/index.d.ts:1463](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1463)

BotMetadata personaId.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`personaId`](../interfaces/IBotMetadata.md#personaid)

***

### pluginMetadata?

> `optional` **pluginMetadata**: `null` \| [`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1466](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1466)

BotMetadata pluginMetadata.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`pluginMetadata`](../interfaces/IBotMetadata.md#pluginmetadata)

***

### searchMetadata?

> `optional` **searchMetadata**: `null` \| [`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1475](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1475)

BotMetadata searchMetadata.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`searchMetadata`](../interfaces/IBotMetadata.md#searchmetadata)

***

### suggestedPromptMetadata?

> `optional` **suggestedPromptMetadata**: `null` \| [`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1469](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1469)

BotMetadata suggestedPromptMetadata.

#### Implementation of

[`IBotMetadata`](../interfaces/IBotMetadata.md).[`suggestedPromptMetadata`](../interfaces/IBotMetadata.md#suggestedpromptmetadata)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1545](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1545)

Converts this BotMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotMetadata`](BotMetadata.md)

Defined in: [WAProto/index.d.ts:1482](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1482)

Creates a new BotMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IBotMetadata`](../interfaces/IBotMetadata.md)

Properties to set

#### Returns

[`BotMetadata`](BotMetadata.md)

BotMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotMetadata`](BotMetadata.md)

Defined in: [WAProto/index.d.ts:1508](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1508)

Decodes a BotMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotMetadata`](BotMetadata.md)

BotMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotMetadata`](BotMetadata.md)

Defined in: [WAProto/index.d.ts:1517](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1517)

Decodes a BotMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotMetadata`](BotMetadata.md)

BotMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1490](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1490)

Encodes the specified BotMetadata message. Does not implicitly [verify](BotMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotMetadata`](../interfaces/IBotMetadata.md)

BotMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1498](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1498)

Encodes the specified BotMetadata message, length delimited. Does not implicitly [verify](BotMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotMetadata`](../interfaces/IBotMetadata.md)

BotMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotMetadata`](BotMetadata.md)

Defined in: [WAProto/index.d.ts:1531](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1531)

Creates a BotMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotMetadata`](BotMetadata.md)

BotMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1552)

Gets the default type url for BotMetadata

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

Defined in: [WAProto/index.d.ts:1539](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1539)

Creates a plain object from a BotMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotMetadata`](BotMetadata.md)

BotMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1524](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1524)

Verifies a BotMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
