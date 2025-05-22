# Class: BotPluginMetadata

Defined in: [WAProto/index.d.ts:1587](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1587)

Represents a BotPluginMetadata.

## Implements

- [`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

## Constructors

### new BotPluginMetadata()

> **new BotPluginMetadata**(`properties`?): [`BotPluginMetadata`](BotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1593](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1593)

Constructs a new BotPluginMetadata.

#### Parameters

##### properties?

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

Properties to set

#### Returns

[`BotPluginMetadata`](BotPluginMetadata.md)

## Properties

### expectedLinksCount

> **expectedLinksCount**: `number`

Defined in: [WAProto/index.d.ts:1614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1614)

BotPluginMetadata expectedLinksCount.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`expectedLinksCount`](../interfaces/IBotPluginMetadata.md#expectedlinkscount)

***

### parentPluginMessageKey?

> `optional` **parentPluginMessageKey**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:1620](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1620)

BotPluginMetadata parentPluginMessageKey.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`parentPluginMessageKey`](../interfaces/IBotPluginMetadata.md#parentpluginmessagekey)

***

### pluginType

> **pluginType**: [`PluginType`](../namespaces/BotPluginMetadata/enumerations/PluginType.md)

Defined in: [WAProto/index.d.ts:1599](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1599)

BotPluginMetadata pluginType.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`pluginType`](../interfaces/IBotPluginMetadata.md#plugintype)

***

### profilePhotoCdnUrl

> **profilePhotoCdnUrl**: `string`

Defined in: [WAProto/index.d.ts:1605](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1605)

BotPluginMetadata profilePhotoCdnUrl.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`profilePhotoCdnUrl`](../interfaces/IBotPluginMetadata.md#profilephotocdnurl)

***

### provider

> **provider**: [`SearchProvider`](../namespaces/BotPluginMetadata/enumerations/SearchProvider.md)

Defined in: [WAProto/index.d.ts:1596](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1596)

BotPluginMetadata provider.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`provider`](../interfaces/IBotPluginMetadata.md#provider)

***

### referenceIndex

> **referenceIndex**: `number`

Defined in: [WAProto/index.d.ts:1611](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1611)

BotPluginMetadata referenceIndex.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`referenceIndex`](../interfaces/IBotPluginMetadata.md#referenceindex)

***

### searchProviderUrl

> **searchProviderUrl**: `string`

Defined in: [WAProto/index.d.ts:1608](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1608)

BotPluginMetadata searchProviderUrl.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`searchProviderUrl`](../interfaces/IBotPluginMetadata.md#searchproviderurl)

***

### searchQuery

> **searchQuery**: `string`

Defined in: [WAProto/index.d.ts:1617](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1617)

BotPluginMetadata searchQuery.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`searchQuery`](../interfaces/IBotPluginMetadata.md#searchquery)

***

### thumbnailCdnUrl

> **thumbnailCdnUrl**: `string`

Defined in: [WAProto/index.d.ts:1602](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1602)

BotPluginMetadata thumbnailCdnUrl.

#### Implementation of

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md).[`thumbnailCdnUrl`](../interfaces/IBotPluginMetadata.md#thumbnailcdnurl)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1690](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1690)

Converts this BotPluginMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotPluginMetadata`](BotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1627](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1627)

Creates a new BotPluginMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

Properties to set

#### Returns

[`BotPluginMetadata`](BotPluginMetadata.md)

BotPluginMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotPluginMetadata`](BotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1653](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1653)

Decodes a BotPluginMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotPluginMetadata`](BotPluginMetadata.md)

BotPluginMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotPluginMetadata`](BotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1662](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1662)

Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotPluginMetadata`](BotPluginMetadata.md)

BotPluginMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1635](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1635)

Encodes the specified BotPluginMetadata message. Does not implicitly [verify](BotPluginMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

BotPluginMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1643](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1643)

Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly [verify](BotPluginMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotPluginMetadata`](../interfaces/IBotPluginMetadata.md)

BotPluginMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotPluginMetadata`](BotPluginMetadata.md)

Defined in: [WAProto/index.d.ts:1676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1676)

Creates a BotPluginMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotPluginMetadata`](BotPluginMetadata.md)

BotPluginMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1697](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1697)

Gets the default type url for BotPluginMetadata

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

Defined in: [WAProto/index.d.ts:1684](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1684)

Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotPluginMetadata`](BotPluginMetadata.md)

BotPluginMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1669](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1669)

Verifies a BotPluginMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
