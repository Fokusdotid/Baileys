# Class: SecretEncryptedMessage

Defined in: [WAProto/index.d.ts:23393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23393)

Represents a SecretEncryptedMessage.

## Implements

- [`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md)

## Constructors

### new SecretEncryptedMessage()

> **new SecretEncryptedMessage**(`properties`?): [`SecretEncryptedMessage`](SecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:23399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23399)

Constructs a new SecretEncryptedMessage.

#### Parameters

##### properties?

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md)

Properties to set

#### Returns

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

## Properties

### encIv

> **encIv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:23408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23408)

SecretEncryptedMessage encIv.

#### Implementation of

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md).[`encIv`](../interfaces/ISecretEncryptedMessage.md#enciv)

***

### encPayload

> **encPayload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:23405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23405)

SecretEncryptedMessage encPayload.

#### Implementation of

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md).[`encPayload`](../interfaces/ISecretEncryptedMessage.md#encpayload)

***

### secretEncType

> **secretEncType**: [`SecretEncType`](../namespaces/SecretEncryptedMessage/enumerations/SecretEncType.md)

Defined in: [WAProto/index.d.ts:23411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23411)

SecretEncryptedMessage secretEncType.

#### Implementation of

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md).[`secretEncType`](../interfaces/ISecretEncryptedMessage.md#secretenctype)

***

### targetMessageKey?

> `optional` **targetMessageKey**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:23402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23402)

SecretEncryptedMessage targetMessageKey.

#### Implementation of

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md).[`targetMessageKey`](../interfaces/ISecretEncryptedMessage.md#targetmessagekey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23481](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23481)

Converts this SecretEncryptedMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SecretEncryptedMessage`](SecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:23418](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23418)

Creates a new SecretEncryptedMessage instance using the specified properties.

#### Parameters

##### properties?

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md)

Properties to set

#### Returns

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

SecretEncryptedMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SecretEncryptedMessage`](SecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:23444](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23444)

Decodes a SecretEncryptedMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

SecretEncryptedMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SecretEncryptedMessage`](SecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:23453](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23453)

Decodes a SecretEncryptedMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

SecretEncryptedMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23426](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23426)

Encodes the specified SecretEncryptedMessage message. Does not implicitly [verify](SecretEncryptedMessage.md#verify) messages.

#### Parameters

##### message

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md)

SecretEncryptedMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23434](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23434)

Encodes the specified SecretEncryptedMessage message, length delimited. Does not implicitly [verify](SecretEncryptedMessage.md#verify) messages.

#### Parameters

##### message

[`ISecretEncryptedMessage`](../interfaces/ISecretEncryptedMessage.md)

SecretEncryptedMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SecretEncryptedMessage`](SecretEncryptedMessage.md)

Defined in: [WAProto/index.d.ts:23467](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23467)

Creates a SecretEncryptedMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

SecretEncryptedMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23488](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23488)

Gets the default type url for SecretEncryptedMessage

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

Defined in: [WAProto/index.d.ts:23475](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23475)

Creates a plain object from a SecretEncryptedMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`SecretEncryptedMessage`](SecretEncryptedMessage.md)

SecretEncryptedMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23460](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23460)

Verifies a SecretEncryptedMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
