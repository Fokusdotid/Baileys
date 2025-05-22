# Class: MarketingMessageAction

Defined in: [WAProto/index.d.ts:34438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34438)

Represents a MarketingMessageAction.

## Implements

- [`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md)

## Constructors

### new MarketingMessageAction()

> **new MarketingMessageAction**(`properties`?): [`MarketingMessageAction`](MarketingMessageAction.md)

Defined in: [WAProto/index.d.ts:34444](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34444)

Constructs a new MarketingMessageAction.

#### Parameters

##### properties?

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md)

Properties to set

#### Returns

[`MarketingMessageAction`](MarketingMessageAction.md)

## Properties

### createdAt

> **createdAt**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:34456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34456)

MarketingMessageAction createdAt.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`createdAt`](../interfaces/IMarketingMessageAction.md#createdat)

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [WAProto/index.d.ts:34462](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34462)

MarketingMessageAction isDeleted.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`isDeleted`](../interfaces/IMarketingMessageAction.md#isdeleted)

***

### lastSentAt

> **lastSentAt**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:34459](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34459)

MarketingMessageAction lastSentAt.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`lastSentAt`](../interfaces/IMarketingMessageAction.md#lastsentat)

***

### mediaId

> **mediaId**: `string`

Defined in: [WAProto/index.d.ts:34465](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34465)

MarketingMessageAction mediaId.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`mediaId`](../interfaces/IMarketingMessageAction.md#mediaid)

***

### message

> **message**: `string`

Defined in: [WAProto/index.d.ts:34450](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34450)

MarketingMessageAction message.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`message`](../interfaces/IMarketingMessageAction.md#message)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:34447](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34447)

MarketingMessageAction name.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`name`](../interfaces/IMarketingMessageAction.md#name)

***

### type

> **type**: [`PERSONALIZED`](../namespaces/MarketingMessageAction/enumerations/MarketingMessagePrototypeType.md#personalized)

Defined in: [WAProto/index.d.ts:34453](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34453)

MarketingMessageAction type.

#### Implementation of

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md).[`type`](../interfaces/IMarketingMessageAction.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34535](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34535)

Converts this MarketingMessageAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MarketingMessageAction`](MarketingMessageAction.md)

Defined in: [WAProto/index.d.ts:34472](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34472)

Creates a new MarketingMessageAction instance using the specified properties.

#### Parameters

##### properties?

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md)

Properties to set

#### Returns

[`MarketingMessageAction`](MarketingMessageAction.md)

MarketingMessageAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MarketingMessageAction`](MarketingMessageAction.md)

Defined in: [WAProto/index.d.ts:34498](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34498)

Decodes a MarketingMessageAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MarketingMessageAction`](MarketingMessageAction.md)

MarketingMessageAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MarketingMessageAction`](MarketingMessageAction.md)

Defined in: [WAProto/index.d.ts:34507](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34507)

Decodes a MarketingMessageAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MarketingMessageAction`](MarketingMessageAction.md)

MarketingMessageAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34480](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34480)

Encodes the specified MarketingMessageAction message. Does not implicitly [verify](MarketingMessageAction.md#verify) messages.

#### Parameters

##### message

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md)

MarketingMessageAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34488](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34488)

Encodes the specified MarketingMessageAction message, length delimited. Does not implicitly [verify](MarketingMessageAction.md#verify) messages.

#### Parameters

##### message

[`IMarketingMessageAction`](../interfaces/IMarketingMessageAction.md)

MarketingMessageAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MarketingMessageAction`](MarketingMessageAction.md)

Defined in: [WAProto/index.d.ts:34521](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34521)

Creates a MarketingMessageAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MarketingMessageAction`](MarketingMessageAction.md)

MarketingMessageAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34542](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34542)

Gets the default type url for MarketingMessageAction

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

Defined in: [WAProto/index.d.ts:34529](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34529)

Creates a plain object from a MarketingMessageAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`MarketingMessageAction`](MarketingMessageAction.md)

MarketingMessageAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34514](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34514)

Verifies a MarketingMessageAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
