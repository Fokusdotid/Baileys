# Class: BotFeedbackMessage

Defined in: [WAProto/index.d.ts:12142](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12142)

Represents a BotFeedbackMessage.

## Implements

- [`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

## Constructors

### new BotFeedbackMessage()

> **new BotFeedbackMessage**(`properties`?): [`BotFeedbackMessage`](BotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:12148](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12148)

Constructs a new BotFeedbackMessage.

#### Parameters

##### properties?

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

Properties to set

#### Returns

[`BotFeedbackMessage`](BotFeedbackMessage.md)

## Properties

### kind

> **kind**: [`BotFeedbackKind`](../namespaces/BotFeedbackMessage/enumerations/BotFeedbackKind.md)

Defined in: [WAProto/index.d.ts:12154](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12154)

BotFeedbackMessage kind.

#### Implementation of

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md).[`kind`](../interfaces/IBotFeedbackMessage.md#kind)

***

### kindNegative

> **kindNegative**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:12160](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12160)

BotFeedbackMessage kindNegative.

#### Implementation of

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md).[`kindNegative`](../interfaces/IBotFeedbackMessage.md#kindnegative)

***

### kindPositive

> **kindPositive**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:12163](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12163)

BotFeedbackMessage kindPositive.

#### Implementation of

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md).[`kindPositive`](../interfaces/IBotFeedbackMessage.md#kindpositive)

***

### messageKey?

> `optional` **messageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:12151](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12151)

BotFeedbackMessage messageKey.

#### Implementation of

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md).[`messageKey`](../interfaces/IBotFeedbackMessage.md#messagekey)

***

### text

> **text**: `string`

Defined in: [WAProto/index.d.ts:12157](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12157)

BotFeedbackMessage text.

#### Implementation of

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md).[`text`](../interfaces/IBotFeedbackMessage.md#text)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12233](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12233)

Converts this BotFeedbackMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BotFeedbackMessage`](BotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:12170](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12170)

Creates a new BotFeedbackMessage instance using the specified properties.

#### Parameters

##### properties?

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

Properties to set

#### Returns

[`BotFeedbackMessage`](BotFeedbackMessage.md)

BotFeedbackMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BotFeedbackMessage`](BotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:12196](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12196)

Decodes a BotFeedbackMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BotFeedbackMessage`](BotFeedbackMessage.md)

BotFeedbackMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BotFeedbackMessage`](BotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:12205](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12205)

Decodes a BotFeedbackMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BotFeedbackMessage`](BotFeedbackMessage.md)

BotFeedbackMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12178)

Encodes the specified BotFeedbackMessage message. Does not implicitly [verify](BotFeedbackMessage.md#verify) messages.

#### Parameters

##### message

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

BotFeedbackMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12186](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12186)

Encodes the specified BotFeedbackMessage message, length delimited. Does not implicitly [verify](BotFeedbackMessage.md#verify) messages.

#### Parameters

##### message

[`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

BotFeedbackMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BotFeedbackMessage`](BotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:12219](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12219)

Creates a BotFeedbackMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BotFeedbackMessage`](BotFeedbackMessage.md)

BotFeedbackMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12240](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12240)

Gets the default type url for BotFeedbackMessage

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

Defined in: [WAProto/index.d.ts:12227](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12227)

Creates a plain object from a BotFeedbackMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`BotFeedbackMessage`](BotFeedbackMessage.md)

BotFeedbackMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12212)

Verifies a BotFeedbackMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
