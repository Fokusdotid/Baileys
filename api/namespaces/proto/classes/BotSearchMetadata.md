# Class: BotSearchMetadata

Defined in: [WAProto/index.d.ts:1723](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1723)

Represents a BotSearchMetadata.

## Implements

- [`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

## Constructors

### new BotSearchMetadata()

> **new BotSearchMetadata**(`properties`?): [`BotSearchMetadata`](BotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1729](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1729)

Constructs a new BotSearchMetadata.

#### Parameters

##### properties?

[`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

Properties to set

#### Returns

[`BotSearchMetadata`](BotSearchMetadata.md)

## Properties

### sessionId

> **sessionId**: `string`

Defined in: [WAProto/index.d.ts:1732](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1732)

BotSearchMetadata sessionId.

#### Implementation of

[`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md).[`sessionId`](../interfaces/IBotSearchMetadata.md#sessionid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1802)

Converts this BotSearchMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotSearchMetadata`](BotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1739](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1739)

Creates a new BotSearchMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

Properties to set

#### Returns

[`BotSearchMetadata`](BotSearchMetadata.md)

BotSearchMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotSearchMetadata`](BotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1765](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1765)

Decodes a BotSearchMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotSearchMetadata`](BotSearchMetadata.md)

BotSearchMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotSearchMetadata`](BotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1774](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1774)

Decodes a BotSearchMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotSearchMetadata`](BotSearchMetadata.md)

BotSearchMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1747](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1747)

Encodes the specified BotSearchMetadata message. Does not implicitly [verify](BotSearchMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

BotSearchMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1755](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1755)

Encodes the specified BotSearchMetadata message, length delimited. Does not implicitly [verify](BotSearchMetadata.md#verify) messages.

#### Parameters

##### message

[`IBotSearchMetadata`](../interfaces/IBotSearchMetadata.md)

BotSearchMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotSearchMetadata`](BotSearchMetadata.md)

Defined in: [WAProto/index.d.ts:1788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1788)

Creates a BotSearchMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotSearchMetadata`](BotSearchMetadata.md)

BotSearchMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1809](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1809)

Gets the default type url for BotSearchMetadata

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

Defined in: [WAProto/index.d.ts:1796](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1796)

Creates a plain object from a BotSearchMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotSearchMetadata`](BotSearchMetadata.md)

BotSearchMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1781](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1781)

Verifies a BotSearchMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
