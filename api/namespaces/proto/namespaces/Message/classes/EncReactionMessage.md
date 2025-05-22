# Class: EncReactionMessage

Defined in: [WAProto/index.d.ts:14429](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14429)

Represents an EncReactionMessage.

## Implements

- [`IEncReactionMessage`](../interfaces/IEncReactionMessage.md)

## Constructors

### new EncReactionMessage()

> **new EncReactionMessage**(`properties`?): [`EncReactionMessage`](EncReactionMessage.md)

Defined in: [WAProto/index.d.ts:14435](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14435)

Constructs a new EncReactionMessage.

#### Parameters

##### properties?

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md)

Properties to set

#### Returns

[`EncReactionMessage`](EncReactionMessage.md)

## Properties

### encIv

> **encIv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14444](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14444)

EncReactionMessage encIv.

#### Implementation of

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md).[`encIv`](../interfaces/IEncReactionMessage.md#enciv)

***

### encPayload

> **encPayload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14441](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14441)

EncReactionMessage encPayload.

#### Implementation of

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md).[`encPayload`](../interfaces/IEncReactionMessage.md#encpayload)

***

### targetMessageKey?

> `optional` **targetMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:14438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14438)

EncReactionMessage targetMessageKey.

#### Implementation of

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md).[`targetMessageKey`](../interfaces/IEncReactionMessage.md#targetmessagekey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:14514](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14514)

Converts this EncReactionMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EncReactionMessage`](EncReactionMessage.md)

Defined in: [WAProto/index.d.ts:14451](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14451)

Creates a new EncReactionMessage instance using the specified properties.

#### Parameters

##### properties?

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md)

Properties to set

#### Returns

[`EncReactionMessage`](EncReactionMessage.md)

EncReactionMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EncReactionMessage`](EncReactionMessage.md)

Defined in: [WAProto/index.d.ts:14477](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14477)

Decodes an EncReactionMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EncReactionMessage`](EncReactionMessage.md)

EncReactionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EncReactionMessage`](EncReactionMessage.md)

Defined in: [WAProto/index.d.ts:14486](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14486)

Decodes an EncReactionMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EncReactionMessage`](EncReactionMessage.md)

EncReactionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14459](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14459)

Encodes the specified EncReactionMessage message. Does not implicitly [verify](EncReactionMessage.md#verify) messages.

#### Parameters

##### message

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md)

EncReactionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14467](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14467)

Encodes the specified EncReactionMessage message, length delimited. Does not implicitly [verify](EncReactionMessage.md#verify) messages.

#### Parameters

##### message

[`IEncReactionMessage`](../interfaces/IEncReactionMessage.md)

EncReactionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EncReactionMessage`](EncReactionMessage.md)

Defined in: [WAProto/index.d.ts:14500](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14500)

Creates an EncReactionMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EncReactionMessage`](EncReactionMessage.md)

EncReactionMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:14521](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14521)

Gets the default type url for EncReactionMessage

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

Defined in: [WAProto/index.d.ts:14508](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14508)

Creates a plain object from an EncReactionMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`EncReactionMessage`](EncReactionMessage.md)

EncReactionMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:14493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14493)

Verifies an EncReactionMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
