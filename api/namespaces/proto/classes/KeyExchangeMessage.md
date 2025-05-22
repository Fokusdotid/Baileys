# Class: KeyExchangeMessage

Defined in: [WAProto/index.d.ts:9437](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9437)

Represents a KeyExchangeMessage.

## Implements

- [`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md)

## Constructors

### new KeyExchangeMessage()

> **new KeyExchangeMessage**(`properties`?): [`KeyExchangeMessage`](KeyExchangeMessage.md)

Defined in: [WAProto/index.d.ts:9443](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9443)

Constructs a new KeyExchangeMessage.

#### Parameters

##### properties?

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md)

Properties to set

#### Returns

[`KeyExchangeMessage`](KeyExchangeMessage.md)

## Properties

### baseKey

> **baseKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9449](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9449)

KeyExchangeMessage baseKey.

#### Implementation of

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md).[`baseKey`](../interfaces/IKeyExchangeMessage.md#basekey)

***

### baseKeySignature

> **baseKeySignature**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9458](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9458)

KeyExchangeMessage baseKeySignature.

#### Implementation of

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md).[`baseKeySignature`](../interfaces/IKeyExchangeMessage.md#basekeysignature)

***

### id

> **id**: `number`

Defined in: [WAProto/index.d.ts:9446](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9446)

KeyExchangeMessage id.

#### Implementation of

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md).[`id`](../interfaces/IKeyExchangeMessage.md#id)

***

### identityKey

> **identityKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9455](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9455)

KeyExchangeMessage identityKey.

#### Implementation of

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md).[`identityKey`](../interfaces/IKeyExchangeMessage.md#identitykey)

***

### ratchetKey

> **ratchetKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9452](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9452)

KeyExchangeMessage ratchetKey.

#### Implementation of

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md).[`ratchetKey`](../interfaces/IKeyExchangeMessage.md#ratchetkey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9528](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9528)

Converts this KeyExchangeMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`KeyExchangeMessage`](KeyExchangeMessage.md)

Defined in: [WAProto/index.d.ts:9465](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9465)

Creates a new KeyExchangeMessage instance using the specified properties.

#### Parameters

##### properties?

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md)

Properties to set

#### Returns

[`KeyExchangeMessage`](KeyExchangeMessage.md)

KeyExchangeMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`KeyExchangeMessage`](KeyExchangeMessage.md)

Defined in: [WAProto/index.d.ts:9491](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9491)

Decodes a KeyExchangeMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`KeyExchangeMessage`](KeyExchangeMessage.md)

KeyExchangeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`KeyExchangeMessage`](KeyExchangeMessage.md)

Defined in: [WAProto/index.d.ts:9500](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9500)

Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`KeyExchangeMessage`](KeyExchangeMessage.md)

KeyExchangeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9473](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9473)

Encodes the specified KeyExchangeMessage message. Does not implicitly [verify](KeyExchangeMessage.md#verify) messages.

#### Parameters

##### message

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md)

KeyExchangeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9481](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9481)

Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly [verify](KeyExchangeMessage.md#verify) messages.

#### Parameters

##### message

[`IKeyExchangeMessage`](../interfaces/IKeyExchangeMessage.md)

KeyExchangeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`KeyExchangeMessage`](KeyExchangeMessage.md)

Defined in: [WAProto/index.d.ts:9514](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9514)

Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`KeyExchangeMessage`](KeyExchangeMessage.md)

KeyExchangeMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9535](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9535)

Gets the default type url for KeyExchangeMessage

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

Defined in: [WAProto/index.d.ts:9522](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9522)

Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`KeyExchangeMessage`](KeyExchangeMessage.md)

KeyExchangeMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9507](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9507)

Verifies a KeyExchangeMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
