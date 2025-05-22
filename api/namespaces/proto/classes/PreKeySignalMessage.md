# Class: PreKeySignalMessage

Defined in: [WAProto/index.d.ts:28311](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28311)

Represents a PreKeySignalMessage.

## Implements

- [`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md)

## Constructors

### new PreKeySignalMessage()

> **new PreKeySignalMessage**(`properties`?): [`PreKeySignalMessage`](PreKeySignalMessage.md)

Defined in: [WAProto/index.d.ts:28317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28317)

Constructs a new PreKeySignalMessage.

#### Parameters

##### properties?

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md)

Properties to set

#### Returns

[`PreKeySignalMessage`](PreKeySignalMessage.md)

## Properties

### baseKey

> **baseKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:28329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28329)

PreKeySignalMessage baseKey.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`baseKey`](../interfaces/IPreKeySignalMessage.md#basekey)

***

### identityKey

> **identityKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:28332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28332)

PreKeySignalMessage identityKey.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`identityKey`](../interfaces/IPreKeySignalMessage.md#identitykey)

***

### message

> **message**: `Uint8Array`

Defined in: [WAProto/index.d.ts:28335](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28335)

PreKeySignalMessage message.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`message`](../interfaces/IPreKeySignalMessage.md#message)

***

### preKeyId

> **preKeyId**: `number`

Defined in: [WAProto/index.d.ts:28323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28323)

PreKeySignalMessage preKeyId.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`preKeyId`](../interfaces/IPreKeySignalMessage.md#prekeyid)

***

### registrationId

> **registrationId**: `number`

Defined in: [WAProto/index.d.ts:28320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28320)

PreKeySignalMessage registrationId.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`registrationId`](../interfaces/IPreKeySignalMessage.md#registrationid)

***

### signedPreKeyId

> **signedPreKeyId**: `number`

Defined in: [WAProto/index.d.ts:28326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28326)

PreKeySignalMessage signedPreKeyId.

#### Implementation of

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md).[`signedPreKeyId`](../interfaces/IPreKeySignalMessage.md#signedprekeyid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28405)

Converts this PreKeySignalMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PreKeySignalMessage`](PreKeySignalMessage.md)

Defined in: [WAProto/index.d.ts:28342](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28342)

Creates a new PreKeySignalMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md)

Properties to set

#### Returns

[`PreKeySignalMessage`](PreKeySignalMessage.md)

PreKeySignalMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PreKeySignalMessage`](PreKeySignalMessage.md)

Defined in: [WAProto/index.d.ts:28368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28368)

Decodes a PreKeySignalMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PreKeySignalMessage`](PreKeySignalMessage.md)

PreKeySignalMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PreKeySignalMessage`](PreKeySignalMessage.md)

Defined in: [WAProto/index.d.ts:28377](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28377)

Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PreKeySignalMessage`](PreKeySignalMessage.md)

PreKeySignalMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28350](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28350)

Encodes the specified PreKeySignalMessage message. Does not implicitly [verify](PreKeySignalMessage.md#verify) messages.

#### Parameters

##### message

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md)

PreKeySignalMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28358](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28358)

Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly [verify](PreKeySignalMessage.md#verify) messages.

#### Parameters

##### message

[`IPreKeySignalMessage`](../interfaces/IPreKeySignalMessage.md)

PreKeySignalMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PreKeySignalMessage`](PreKeySignalMessage.md)

Defined in: [WAProto/index.d.ts:28391](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28391)

Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PreKeySignalMessage`](PreKeySignalMessage.md)

PreKeySignalMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28412](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28412)

Gets the default type url for PreKeySignalMessage

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

Defined in: [WAProto/index.d.ts:28399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28399)

Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PreKeySignalMessage`](PreKeySignalMessage.md)

PreKeySignalMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28384)

Verifies a PreKeySignalMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
