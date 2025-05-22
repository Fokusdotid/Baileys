# Class: MarketingMessageBroadcastAction

Defined in: [WAProto/index.d.ts:34561](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34561)

Represents a MarketingMessageBroadcastAction.

## Implements

- [`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md)

## Constructors

### new MarketingMessageBroadcastAction()

> **new MarketingMessageBroadcastAction**(`properties`?): [`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

Defined in: [WAProto/index.d.ts:34567](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34567)

Constructs a new MarketingMessageBroadcastAction.

#### Parameters

##### properties?

[`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md)

Properties to set

#### Returns

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

## Properties

### repliedCount

> **repliedCount**: `number`

Defined in: [WAProto/index.d.ts:34570](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34570)

MarketingMessageBroadcastAction repliedCount.

#### Implementation of

[`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md).[`repliedCount`](../interfaces/IMarketingMessageBroadcastAction.md#repliedcount)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34640](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34640)

Converts this MarketingMessageBroadcastAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

Defined in: [WAProto/index.d.ts:34577](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34577)

Creates a new MarketingMessageBroadcastAction instance using the specified properties.

#### Parameters

##### properties?

[`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md)

Properties to set

#### Returns

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

Defined in: [WAProto/index.d.ts:34603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34603)

Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

Defined in: [WAProto/index.d.ts:34612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34612)

Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34585)

Encodes the specified MarketingMessageBroadcastAction message. Does not implicitly [verify](MarketingMessageBroadcastAction.md#verify) messages.

#### Parameters

##### message

[`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34593](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34593)

Encodes the specified MarketingMessageBroadcastAction message, length delimited. Does not implicitly [verify](MarketingMessageBroadcastAction.md#verify) messages.

#### Parameters

##### message

[`IMarketingMessageBroadcastAction`](../interfaces/IMarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

Defined in: [WAProto/index.d.ts:34626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34626)

Creates a MarketingMessageBroadcastAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34647)

Gets the default type url for MarketingMessageBroadcastAction

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

Defined in: [WAProto/index.d.ts:34634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34634)

Creates a plain object from a MarketingMessageBroadcastAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`MarketingMessageBroadcastAction`](MarketingMessageBroadcastAction.md)

MarketingMessageBroadcastAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34619)

Verifies a MarketingMessageBroadcastAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
