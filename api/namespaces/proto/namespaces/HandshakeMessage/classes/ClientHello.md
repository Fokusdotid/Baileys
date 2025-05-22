# Class: ClientHello

Defined in: [WAProto/index.d.ts:8107](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8107)

Represents a ClientHello.

## Implements

- [`IClientHello`](../interfaces/IClientHello.md)

## Constructors

### new ClientHello()

> **new ClientHello**(`properties`?): [`ClientHello`](ClientHello.md)

Defined in: [WAProto/index.d.ts:8113](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8113)

Constructs a new ClientHello.

#### Parameters

##### properties?

[`IClientHello`](../interfaces/IClientHello.md)

Properties to set

#### Returns

[`ClientHello`](ClientHello.md)

## Properties

### ephemeral

> **ephemeral**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8116](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8116)

ClientHello ephemeral.

#### Implementation of

[`IClientHello`](../interfaces/IClientHello.md).[`ephemeral`](../interfaces/IClientHello.md#ephemeral)

***

### payload

> **payload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8122](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8122)

ClientHello payload.

#### Implementation of

[`IClientHello`](../interfaces/IClientHello.md).[`payload`](../interfaces/IClientHello.md#payload)

***

### static

> **static**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8119](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8119)

ClientHello static.

#### Implementation of

[`IClientHello`](../interfaces/IClientHello.md).[`static`](../interfaces/IClientHello.md#static)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8192](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8192)

Converts this ClientHello to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ClientHello`](ClientHello.md)

Defined in: [WAProto/index.d.ts:8129](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8129)

Creates a new ClientHello instance using the specified properties.

#### Parameters

##### properties?

[`IClientHello`](../interfaces/IClientHello.md)

Properties to set

#### Returns

[`ClientHello`](ClientHello.md)

ClientHello instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ClientHello`](ClientHello.md)

Defined in: [WAProto/index.d.ts:8155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8155)

Decodes a ClientHello message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ClientHello`](ClientHello.md)

ClientHello

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ClientHello`](ClientHello.md)

Defined in: [WAProto/index.d.ts:8164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8164)

Decodes a ClientHello message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ClientHello`](ClientHello.md)

ClientHello

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8137)

Encodes the specified ClientHello message. Does not implicitly [verify](ClientHello.md#verify) messages.

#### Parameters

##### message

[`IClientHello`](../interfaces/IClientHello.md)

ClientHello message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8145](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8145)

Encodes the specified ClientHello message, length delimited. Does not implicitly [verify](ClientHello.md#verify) messages.

#### Parameters

##### message

[`IClientHello`](../interfaces/IClientHello.md)

ClientHello message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ClientHello`](ClientHello.md)

Defined in: [WAProto/index.d.ts:8178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8178)

Creates a ClientHello message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ClientHello`](ClientHello.md)

ClientHello

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8199)

Gets the default type url for ClientHello

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

Defined in: [WAProto/index.d.ts:8186](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8186)

Creates a plain object from a ClientHello message. Also converts values to other types if specified.

#### Parameters

##### message

[`ClientHello`](ClientHello.md)

ClientHello

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8171)

Verifies a ClientHello message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
