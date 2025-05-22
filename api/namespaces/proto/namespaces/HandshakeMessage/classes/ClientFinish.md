# Class: ClientFinish

Defined in: [WAProto/index.d.ts:8001](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8001)

Represents a ClientFinish.

## Implements

- [`IClientFinish`](../interfaces/IClientFinish.md)

## Constructors

### new ClientFinish()

> **new ClientFinish**(`properties`?): [`ClientFinish`](ClientFinish.md)

Defined in: [WAProto/index.d.ts:8007](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8007)

Constructs a new ClientFinish.

#### Parameters

##### properties?

[`IClientFinish`](../interfaces/IClientFinish.md)

Properties to set

#### Returns

[`ClientFinish`](ClientFinish.md)

## Properties

### payload

> **payload**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8013)

ClientFinish payload.

#### Implementation of

[`IClientFinish`](../interfaces/IClientFinish.md).[`payload`](../interfaces/IClientFinish.md#payload)

***

### static

> **static**: `Uint8Array`

Defined in: [WAProto/index.d.ts:8010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8010)

ClientFinish static.

#### Implementation of

[`IClientFinish`](../interfaces/IClientFinish.md).[`static`](../interfaces/IClientFinish.md#static)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8083](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8083)

Converts this ClientFinish to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ClientFinish`](ClientFinish.md)

Defined in: [WAProto/index.d.ts:8020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8020)

Creates a new ClientFinish instance using the specified properties.

#### Parameters

##### properties?

[`IClientFinish`](../interfaces/IClientFinish.md)

Properties to set

#### Returns

[`ClientFinish`](ClientFinish.md)

ClientFinish instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ClientFinish`](ClientFinish.md)

Defined in: [WAProto/index.d.ts:8046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8046)

Decodes a ClientFinish message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ClientFinish`](ClientFinish.md)

ClientFinish

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ClientFinish`](ClientFinish.md)

Defined in: [WAProto/index.d.ts:8055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8055)

Decodes a ClientFinish message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ClientFinish`](ClientFinish.md)

ClientFinish

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8028](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8028)

Encodes the specified ClientFinish message. Does not implicitly [verify](ClientFinish.md#verify) messages.

#### Parameters

##### message

[`IClientFinish`](../interfaces/IClientFinish.md)

ClientFinish message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8036](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8036)

Encodes the specified ClientFinish message, length delimited. Does not implicitly [verify](ClientFinish.md#verify) messages.

#### Parameters

##### message

[`IClientFinish`](../interfaces/IClientFinish.md)

ClientFinish message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ClientFinish`](ClientFinish.md)

Defined in: [WAProto/index.d.ts:8069](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8069)

Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ClientFinish`](ClientFinish.md)

ClientFinish

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8090](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8090)

Gets the default type url for ClientFinish

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

Defined in: [WAProto/index.d.ts:8077](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8077)

Creates a plain object from a ClientFinish message. Also converts values to other types if specified.

#### Parameters

##### message

[`ClientFinish`](ClientFinish.md)

ClientFinish

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8062](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8062)

Verifies a ClientFinish message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
