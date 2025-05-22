# Class: ServerHello

Defined in: [WAProto/index.d.ts:8216](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8216)

Represents a ServerHello.

## Implements

- [`IServerHello`](../interfaces/IServerHello.md)

## Constructors

### new ServerHello()

> **new ServerHello**(`properties`?): [`ServerHello`](ServerHello.md)

Defined in: [WAProto/index.d.ts:8222](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8222)

Constructs a new ServerHello.

#### Parameters

##### properties?

[`IServerHello`](../interfaces/IServerHello.md)

Properties to set

#### Returns

[`ServerHello`](ServerHello.md)

## Properties

### ephemeral

> **ephemeral**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8225)

ServerHello ephemeral.

#### Implementation of

[`IServerHello`](../interfaces/IServerHello.md).[`ephemeral`](../interfaces/IServerHello.md#ephemeral)

***

### payload

> **payload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8231)

ServerHello payload.

#### Implementation of

[`IServerHello`](../interfaces/IServerHello.md).[`payload`](../interfaces/IServerHello.md#payload)

***

### static

> **static**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8228)

ServerHello static.

#### Implementation of

[`IServerHello`](../interfaces/IServerHello.md).[`static`](../interfaces/IServerHello.md#static)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8301](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8301)

Converts this ServerHello to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ServerHello`](ServerHello.md)

Defined in: [WAProto/index.d.ts:8238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8238)

Creates a new ServerHello instance using the specified properties.

#### Parameters

##### properties?

[`IServerHello`](../interfaces/IServerHello.md)

Properties to set

#### Returns

[`ServerHello`](ServerHello.md)

ServerHello instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ServerHello`](ServerHello.md)

Defined in: [WAProto/index.d.ts:8264](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8264)

Decodes a ServerHello message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ServerHello`](ServerHello.md)

ServerHello

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ServerHello`](ServerHello.md)

Defined in: [WAProto/index.d.ts:8273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8273)

Decodes a ServerHello message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ServerHello`](ServerHello.md)

ServerHello

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8246](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8246)

Encodes the specified ServerHello message. Does not implicitly [verify](ServerHello.md#verify) messages.

#### Parameters

##### message

[`IServerHello`](../interfaces/IServerHello.md)

ServerHello message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8254)

Encodes the specified ServerHello message, length delimited. Does not implicitly [verify](ServerHello.md#verify) messages.

#### Parameters

##### message

[`IServerHello`](../interfaces/IServerHello.md)

ServerHello message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ServerHello`](ServerHello.md)

Defined in: [WAProto/index.d.ts:8287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8287)

Creates a ServerHello message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ServerHello`](ServerHello.md)

ServerHello

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8308)

Gets the default type url for ServerHello

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

Defined in: [WAProto/index.d.ts:8295](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8295)

Creates a plain object from a ServerHello message. Also converts values to other types if specified.

#### Parameters

##### message

[`ServerHello`](ServerHello.md)

ServerHello

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8280](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8280)

Verifies a ServerHello message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
