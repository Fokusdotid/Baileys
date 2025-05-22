# Class: HandshakeMessage

Defined in: [WAProto/index.d.ts:7893](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7893)

Represents a HandshakeMessage.

## Implements

- [`IHandshakeMessage`](../interfaces/IHandshakeMessage.md)

## Constructors

### new HandshakeMessage()

> **new HandshakeMessage**(`properties`?): [`HandshakeMessage`](HandshakeMessage.md)

Defined in: [WAProto/index.d.ts:7899](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7899)

Constructs a new HandshakeMessage.

#### Parameters

##### properties?

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md)

Properties to set

#### Returns

[`HandshakeMessage`](HandshakeMessage.md)

## Properties

### clientFinish?

> `optional` **clientFinish**: `null` \| [`IClientFinish`](../namespaces/HandshakeMessage/interfaces/IClientFinish.md)

Defined in: [WAProto/index.d.ts:7908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7908)

HandshakeMessage clientFinish.

#### Implementation of

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md).[`clientFinish`](../interfaces/IHandshakeMessage.md#clientfinish)

***

### clientHello?

> `optional` **clientHello**: `null` \| [`IClientHello`](../namespaces/HandshakeMessage/interfaces/IClientHello.md)

Defined in: [WAProto/index.d.ts:7902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7902)

HandshakeMessage clientHello.

#### Implementation of

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md).[`clientHello`](../interfaces/IHandshakeMessage.md#clienthello)

***

### serverHello?

> `optional` **serverHello**: `null` \| [`IServerHello`](../namespaces/HandshakeMessage/interfaces/IServerHello.md)

Defined in: [WAProto/index.d.ts:7905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7905)

HandshakeMessage serverHello.

#### Implementation of

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md).[`serverHello`](../interfaces/IHandshakeMessage.md#serverhello)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7978)

Converts this HandshakeMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HandshakeMessage`](HandshakeMessage.md)

Defined in: [WAProto/index.d.ts:7915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7915)

Creates a new HandshakeMessage instance using the specified properties.

#### Parameters

##### properties?

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md)

Properties to set

#### Returns

[`HandshakeMessage`](HandshakeMessage.md)

HandshakeMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HandshakeMessage`](HandshakeMessage.md)

Defined in: [WAProto/index.d.ts:7941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7941)

Decodes a HandshakeMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HandshakeMessage`](HandshakeMessage.md)

HandshakeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HandshakeMessage`](HandshakeMessage.md)

Defined in: [WAProto/index.d.ts:7950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7950)

Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HandshakeMessage`](HandshakeMessage.md)

HandshakeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7923)

Encodes the specified HandshakeMessage message. Does not implicitly [verify](HandshakeMessage.md#verify) messages.

#### Parameters

##### message

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md)

HandshakeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7931](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7931)

Encodes the specified HandshakeMessage message, length delimited. Does not implicitly [verify](HandshakeMessage.md#verify) messages.

#### Parameters

##### message

[`IHandshakeMessage`](../interfaces/IHandshakeMessage.md)

HandshakeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HandshakeMessage`](HandshakeMessage.md)

Defined in: [WAProto/index.d.ts:7964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7964)

Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HandshakeMessage`](HandshakeMessage.md)

HandshakeMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7985)

Gets the default type url for HandshakeMessage

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

Defined in: [WAProto/index.d.ts:7972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7972)

Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`HandshakeMessage`](HandshakeMessage.md)

HandshakeMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7957](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7957)

Verifies a HandshakeMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
