# Class: BotSuggestedPromptMetadata

Defined in: [WAProto/index.d.ts:1823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1823)

Represents a BotSuggestedPromptMetadata.

## Implements

- [`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

## Constructors

### new BotSuggestedPromptMetadata()

> **new BotSuggestedPromptMetadata**(`properties`?): [`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1829](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1829)

Constructs a new BotSuggestedPromptMetadata.

#### Parameters

##### properties?

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

Properties to set

#### Returns

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

## Properties

### selectedPromptIndex

> **selectedPromptIndex**: `number`

Defined in: [WAProto/index.d.ts:1835](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1835)

BotSuggestedPromptMetadata selectedPromptIndex.

#### Implementation of

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md).[`selectedPromptIndex`](../interfaces/IBotSuggestedPromptMetadata.md#selectedpromptindex)

***

### suggestedPrompts

> **suggestedPrompts**: `string`[]

Defined in: [WAProto/index.d.ts:1832](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1832)

BotSuggestedPromptMetadata suggestedPrompts.

#### Implementation of

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md).[`suggestedPrompts`](../interfaces/IBotSuggestedPromptMetadata.md#suggestedprompts)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1905)

Converts this BotSuggestedPromptMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1842](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1842)

Creates a new BotSuggestedPromptMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

Properties to set

#### Returns

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1868](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1868)

Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1877)

Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1850)

Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly [verify](BotSuggestedPromptMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1858](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1858)

Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly [verify](BotSuggestedPromptMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotSuggestedPromptMetadata`](../interfaces/IBotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

Defined in: [WAProto/index.d.ts:1891](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1891)

Creates a BotSuggestedPromptMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1912](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1912)

Gets the default type url for BotSuggestedPromptMetadata

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

Defined in: [WAProto/index.d.ts:1899](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1899)

Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotSuggestedPromptMetadata`](BotSuggestedPromptMetadata.md)

BotSuggestedPromptMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1884](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1884)

Verifies a BotSuggestedPromptMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
