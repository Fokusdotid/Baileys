# Class: MessageSecretMessage

Defined in: [WAProto/index.d.ts:25187](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25187)

Represents a MessageSecretMessage.

## Implements

- [`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md)

## Constructors

### new MessageSecretMessage()

> **new MessageSecretMessage**(`properties`?): [`MessageSecretMessage`](MessageSecretMessage.md)

Defined in: [WAProto/index.d.ts:25193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25193)

Constructs a new MessageSecretMessage.

#### Parameters

##### properties?

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md)

Properties to set

#### Returns

[`MessageSecretMessage`](MessageSecretMessage.md)

## Properties

### encIv

> **encIv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:25199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25199)

MessageSecretMessage encIv.

#### Implementation of

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md).[`encIv`](../interfaces/IMessageSecretMessage.md#enciv)

***

### encPayload

> **encPayload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:25202](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25202)

MessageSecretMessage encPayload.

#### Implementation of

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md).[`encPayload`](../interfaces/IMessageSecretMessage.md#encpayload)

***

### version

> **version**: `number`

Defined in: [WAProto/index.d.ts:25196](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25196)

MessageSecretMessage version.

#### Implementation of

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md).[`version`](../interfaces/IMessageSecretMessage.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:25272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25272)

Converts this MessageSecretMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MessageSecretMessage`](MessageSecretMessage.md)

Defined in: [WAProto/index.d.ts:25209](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25209)

Creates a new MessageSecretMessage instance using the specified properties.

#### Parameters

##### properties?

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md)

Properties to set

#### Returns

[`MessageSecretMessage`](MessageSecretMessage.md)

MessageSecretMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MessageSecretMessage`](MessageSecretMessage.md)

Defined in: [WAProto/index.d.ts:25235](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25235)

Decodes a MessageSecretMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MessageSecretMessage`](MessageSecretMessage.md)

MessageSecretMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MessageSecretMessage`](MessageSecretMessage.md)

Defined in: [WAProto/index.d.ts:25244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25244)

Decodes a MessageSecretMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MessageSecretMessage`](MessageSecretMessage.md)

MessageSecretMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25217](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25217)

Encodes the specified MessageSecretMessage message. Does not implicitly [verify](MessageSecretMessage.md#verify) messages.

#### Parameters

##### message

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md)

MessageSecretMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25225)

Encodes the specified MessageSecretMessage message, length delimited. Does not implicitly [verify](MessageSecretMessage.md#verify) messages.

#### Parameters

##### message

[`IMessageSecretMessage`](../interfaces/IMessageSecretMessage.md)

MessageSecretMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MessageSecretMessage`](MessageSecretMessage.md)

Defined in: [WAProto/index.d.ts:25258](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25258)

Creates a MessageSecretMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MessageSecretMessage`](MessageSecretMessage.md)

MessageSecretMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:25279](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25279)

Gets the default type url for MessageSecretMessage

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

Defined in: [WAProto/index.d.ts:25266](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25266)

Creates a plain object from a MessageSecretMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`MessageSecretMessage`](MessageSecretMessage.md)

MessageSecretMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25251)

Verifies a MessageSecretMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
