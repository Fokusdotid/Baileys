# Class: SyncdValue

Defined in: [WAProto/index.d.ts:37934](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37934)

Represents a SyncdValue.

## Implements

- [`ISyncdValue`](../interfaces/ISyncdValue.md)

## Constructors

### new SyncdValue()

> **new SyncdValue**(`properties`?): [`SyncdValue`](SyncdValue.md)

Defined in: [WAProto/index.d.ts:37940](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37940)

Constructs a new SyncdValue.

#### Parameters

##### properties?

[`ISyncdValue`](../interfaces/ISyncdValue.md)

Properties to set

#### Returns

[`SyncdValue`](SyncdValue.md)

## Properties

### blob

> **blob**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37943)

SyncdValue blob.

#### Implementation of

[`ISyncdValue`](../interfaces/ISyncdValue.md).[`blob`](../interfaces/ISyncdValue.md#blob)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38013)

Converts this SyncdValue to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdValue`](SyncdValue.md)

Defined in: [WAProto/index.d.ts:37950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37950)

Creates a new SyncdValue instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdValue`](../interfaces/ISyncdValue.md)

Properties to set

#### Returns

[`SyncdValue`](SyncdValue.md)

SyncdValue instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdValue`](SyncdValue.md)

Defined in: [WAProto/index.d.ts:37976](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37976)

Decodes a SyncdValue message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdValue`](SyncdValue.md)

SyncdValue

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdValue`](SyncdValue.md)

Defined in: [WAProto/index.d.ts:37985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37985)

Decodes a SyncdValue message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdValue`](SyncdValue.md)

SyncdValue

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37958](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37958)

Encodes the specified SyncdValue message. Does not implicitly [verify](SyncdValue.md#verify) messages.

#### Parameters

##### message

[`ISyncdValue`](../interfaces/ISyncdValue.md)

SyncdValue message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37966](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37966)

Encodes the specified SyncdValue message, length delimited. Does not implicitly [verify](SyncdValue.md#verify) messages.

#### Parameters

##### message

[`ISyncdValue`](../interfaces/ISyncdValue.md)

SyncdValue message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdValue`](SyncdValue.md)

Defined in: [WAProto/index.d.ts:37999](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37999)

Creates a SyncdValue message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdValue`](SyncdValue.md)

SyncdValue

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38020)

Gets the default type url for SyncdValue

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

Defined in: [WAProto/index.d.ts:38007](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38007)

Creates a plain object from a SyncdValue message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdValue`](SyncdValue.md)

SyncdValue

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37992](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37992)

Verifies a SyncdValue message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
