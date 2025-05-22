# Class: BotWelcomeRequestAction

Defined in: [WAProto/index.d.ts:32396](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32396)

Represents a BotWelcomeRequestAction.

## Implements

- [`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md)

## Constructors

### new BotWelcomeRequestAction()

> **new BotWelcomeRequestAction**(`properties`?): [`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

Defined in: [WAProto/index.d.ts:32402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32402)

Constructs a new BotWelcomeRequestAction.

#### Parameters

##### properties?

[`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md)

Properties to set

#### Returns

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

## Properties

### isSent

> **isSent**: `boolean`

Defined in: [WAProto/index.d.ts:32405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32405)

BotWelcomeRequestAction isSent.

#### Implementation of

[`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md).[`isSent`](../interfaces/IBotWelcomeRequestAction.md#issent)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32475](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32475)

Converts this BotWelcomeRequestAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

Defined in: [WAProto/index.d.ts:32412](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32412)

Creates a new BotWelcomeRequestAction instance using the specified properties.

#### Parameters

##### properties?

[`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md)

Properties to set

#### Returns

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

BotWelcomeRequestAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

Defined in: [WAProto/index.d.ts:32438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32438)

Decodes a BotWelcomeRequestAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

BotWelcomeRequestAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

Defined in: [WAProto/index.d.ts:32447](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32447)

Decodes a BotWelcomeRequestAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

BotWelcomeRequestAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32420)

Encodes the specified BotWelcomeRequestAction message. Does not implicitly [verify](BotWelcomeRequestAction.md#verify) messages.

#### Parameters

##### message

[`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md)

BotWelcomeRequestAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32428](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32428)

Encodes the specified BotWelcomeRequestAction message, length delimited. Does not implicitly [verify](BotWelcomeRequestAction.md#verify) messages.

#### Parameters

##### message

[`IBotWelcomeRequestAction`](../interfaces/IBotWelcomeRequestAction.md)

BotWelcomeRequestAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

Defined in: [WAProto/index.d.ts:32461](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32461)

Creates a BotWelcomeRequestAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

BotWelcomeRequestAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32482](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32482)

Gets the default type url for BotWelcomeRequestAction

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

Defined in: [WAProto/index.d.ts:32469](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32469)

Creates a plain object from a BotWelcomeRequestAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotWelcomeRequestAction`](BotWelcomeRequestAction.md)

BotWelcomeRequestAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32454](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32454)

Verifies a BotWelcomeRequestAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
