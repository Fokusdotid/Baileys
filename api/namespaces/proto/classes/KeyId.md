# Class: KeyId

Defined in: [WAProto/index.d.ts:9546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9546)

Represents a KeyId.

## Implements

- [`IKeyId`](../interfaces/IKeyId.md)

## Constructors

### new KeyId()

> **new KeyId**(`properties`?): [`KeyId`](KeyId.md)

Defined in: [WAProto/index.d.ts:9552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9552)

Constructs a new KeyId.

#### Parameters

##### properties?

[`IKeyId`](../interfaces/IKeyId.md)

Properties to set

#### Returns

[`KeyId`](KeyId.md)

## Properties

### id

> **id**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9555)

KeyId id.

#### Implementation of

[`IKeyId`](../interfaces/IKeyId.md).[`id`](../interfaces/IKeyId.md#id)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9625](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9625)

Converts this KeyId to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`KeyId`](KeyId.md)

Defined in: [WAProto/index.d.ts:9562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9562)

Creates a new KeyId instance using the specified properties.

#### Parameters

##### properties?

[`IKeyId`](../interfaces/IKeyId.md)

Properties to set

#### Returns

[`KeyId`](KeyId.md)

KeyId instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`KeyId`](KeyId.md)

Defined in: [WAProto/index.d.ts:9588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9588)

Decodes a KeyId message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`KeyId`](KeyId.md)

KeyId

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`KeyId`](KeyId.md)

Defined in: [WAProto/index.d.ts:9597](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9597)

Decodes a KeyId message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`KeyId`](KeyId.md)

KeyId

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9570](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9570)

Encodes the specified KeyId message. Does not implicitly [verify](KeyId.md#verify) messages.

#### Parameters

##### message

[`IKeyId`](../interfaces/IKeyId.md)

KeyId message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9578](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9578)

Encodes the specified KeyId message, length delimited. Does not implicitly [verify](KeyId.md#verify) messages.

#### Parameters

##### message

[`IKeyId`](../interfaces/IKeyId.md)

KeyId message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`KeyId`](KeyId.md)

Defined in: [WAProto/index.d.ts:9611](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9611)

Creates a KeyId message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`KeyId`](KeyId.md)

KeyId

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9632](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9632)

Gets the default type url for KeyId

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

Defined in: [WAProto/index.d.ts:9619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9619)

Creates a plain object from a KeyId message. Also converts values to other types if specified.

#### Parameters

##### message

[`KeyId`](KeyId.md)

KeyId

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9604](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9604)

Verifies a KeyId message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
