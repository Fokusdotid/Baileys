# Class: SendPaymentMessage

Defined in: [WAProto/index.d.ts:23514](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23514)

Represents a SendPaymentMessage.

## Implements

- [`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md)

## Constructors

### new SendPaymentMessage()

> **new SendPaymentMessage**(`properties`?): [`SendPaymentMessage`](SendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:23520](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23520)

Constructs a new SendPaymentMessage.

#### Parameters

##### properties?

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md)

Properties to set

#### Returns

[`SendPaymentMessage`](SendPaymentMessage.md)

## Properties

### background?

> `optional` **background**: `null` \| [`IPaymentBackground`](../../../interfaces/IPaymentBackground.md)

Defined in: [WAProto/index.d.ts:23529](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23529)

SendPaymentMessage background.

#### Implementation of

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md).[`background`](../interfaces/ISendPaymentMessage.md#background)

***

### noteMessage?

> `optional` **noteMessage**: `null` \| [`IMessage`](../../../interfaces/IMessage.md)

Defined in: [WAProto/index.d.ts:23523](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23523)

SendPaymentMessage noteMessage.

#### Implementation of

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md).[`noteMessage`](../interfaces/ISendPaymentMessage.md#notemessage)

***

### requestMessageKey?

> `optional` **requestMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:23526](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23526)

SendPaymentMessage requestMessageKey.

#### Implementation of

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md).[`requestMessageKey`](../interfaces/ISendPaymentMessage.md#requestmessagekey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23599](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23599)

Converts this SendPaymentMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SendPaymentMessage`](SendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:23536](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23536)

Creates a new SendPaymentMessage instance using the specified properties.

#### Parameters

##### properties?

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md)

Properties to set

#### Returns

[`SendPaymentMessage`](SendPaymentMessage.md)

SendPaymentMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SendPaymentMessage`](SendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:23562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23562)

Decodes a SendPaymentMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SendPaymentMessage`](SendPaymentMessage.md)

SendPaymentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SendPaymentMessage`](SendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:23571](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23571)

Decodes a SendPaymentMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SendPaymentMessage`](SendPaymentMessage.md)

SendPaymentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23544](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23544)

Encodes the specified SendPaymentMessage message. Does not implicitly [verify](SendPaymentMessage.md#verify) messages.

#### Parameters

##### message

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md)

SendPaymentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23552)

Encodes the specified SendPaymentMessage message, length delimited. Does not implicitly [verify](SendPaymentMessage.md#verify) messages.

#### Parameters

##### message

[`ISendPaymentMessage`](../interfaces/ISendPaymentMessage.md)

SendPaymentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SendPaymentMessage`](SendPaymentMessage.md)

Defined in: [WAProto/index.d.ts:23585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23585)

Creates a SendPaymentMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SendPaymentMessage`](SendPaymentMessage.md)

SendPaymentMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23606)

Gets the default type url for SendPaymentMessage

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

Defined in: [WAProto/index.d.ts:23593](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23593)

Creates a plain object from a SendPaymentMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`SendPaymentMessage`](SendPaymentMessage.md)

SendPaymentMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23578](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23578)

Verifies a SendPaymentMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
