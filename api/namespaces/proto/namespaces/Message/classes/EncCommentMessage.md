# Class: EncCommentMessage

Defined in: [WAProto/index.d.ts:14211](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14211)

Represents an EncCommentMessage.

## Implements

- [`IEncCommentMessage`](../interfaces/IEncCommentMessage.md)

## Constructors

### new EncCommentMessage()

> **new EncCommentMessage**(`properties`?): [`EncCommentMessage`](EncCommentMessage.md)

Defined in: [WAProto/index.d.ts:14217](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14217)

Constructs a new EncCommentMessage.

#### Parameters

##### properties?

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md)

Properties to set

#### Returns

[`EncCommentMessage`](EncCommentMessage.md)

## Properties

### encIv

> **encIv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14226)

EncCommentMessage encIv.

#### Implementation of

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md).[`encIv`](../interfaces/IEncCommentMessage.md#enciv)

***

### encPayload

> **encPayload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:14223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14223)

EncCommentMessage encPayload.

#### Implementation of

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md).[`encPayload`](../interfaces/IEncCommentMessage.md#encpayload)

***

### targetMessageKey?

> `optional` **targetMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:14220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14220)

EncCommentMessage targetMessageKey.

#### Implementation of

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md).[`targetMessageKey`](../interfaces/IEncCommentMessage.md#targetmessagekey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:14296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14296)

Converts this EncCommentMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EncCommentMessage`](EncCommentMessage.md)

Defined in: [WAProto/index.d.ts:14233](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14233)

Creates a new EncCommentMessage instance using the specified properties.

#### Parameters

##### properties?

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md)

Properties to set

#### Returns

[`EncCommentMessage`](EncCommentMessage.md)

EncCommentMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EncCommentMessage`](EncCommentMessage.md)

Defined in: [WAProto/index.d.ts:14259](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14259)

Decodes an EncCommentMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EncCommentMessage`](EncCommentMessage.md)

EncCommentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EncCommentMessage`](EncCommentMessage.md)

Defined in: [WAProto/index.d.ts:14268](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14268)

Decodes an EncCommentMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EncCommentMessage`](EncCommentMessage.md)

EncCommentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14241)

Encodes the specified EncCommentMessage message. Does not implicitly [verify](EncCommentMessage.md#verify) messages.

#### Parameters

##### message

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md)

EncCommentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14249](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14249)

Encodes the specified EncCommentMessage message, length delimited. Does not implicitly [verify](EncCommentMessage.md#verify) messages.

#### Parameters

##### message

[`IEncCommentMessage`](../interfaces/IEncCommentMessage.md)

EncCommentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EncCommentMessage`](EncCommentMessage.md)

Defined in: [WAProto/index.d.ts:14282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14282)

Creates an EncCommentMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EncCommentMessage`](EncCommentMessage.md)

EncCommentMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:14303](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14303)

Gets the default type url for EncCommentMessage

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

Defined in: [WAProto/index.d.ts:14290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14290)

Creates a plain object from an EncCommentMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`EncCommentMessage`](EncCommentMessage.md)

EncCommentMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:14275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14275)

Verifies an EncCommentMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
