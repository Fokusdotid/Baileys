# Class: QP

Defined in: [WAProto/index.d.ts:28620](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28620)

Represents a QP.

## Implements

- [`IQP`](../interfaces/IQP.md)

## Constructors

### new QP()

> **new QP**(`properties`?): [`QP`](QP.md)

Defined in: [WAProto/index.d.ts:28626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28626)

Constructs a new QP.

#### Parameters

##### properties?

[`IQP`](../interfaces/IQP.md)

Properties to set

#### Returns

[`QP`](QP.md)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28696](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28696)

Converts this QP to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`QP`](QP.md)

Defined in: [WAProto/index.d.ts:28633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28633)

Creates a new QP instance using the specified properties.

#### Parameters

##### properties?

[`IQP`](../interfaces/IQP.md)

Properties to set

#### Returns

[`QP`](QP.md)

QP instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`QP`](QP.md)

Defined in: [WAProto/index.d.ts:28659](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28659)

Decodes a QP message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`QP`](QP.md)

QP

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`QP`](QP.md)

Defined in: [WAProto/index.d.ts:28668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28668)

Decodes a QP message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`QP`](QP.md)

QP

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28641)

Encodes the specified QP message. Does not implicitly [verify](QP.md#verify) messages.

#### Parameters

##### message

[`IQP`](../interfaces/IQP.md)

QP message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28649](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28649)

Encodes the specified QP message, length delimited. Does not implicitly [verify](QP.md#verify) messages.

#### Parameters

##### message

[`IQP`](../interfaces/IQP.md)

QP message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`QP`](QP.md)

Defined in: [WAProto/index.d.ts:28682](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28682)

Creates a QP message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`QP`](QP.md)

QP

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28703](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28703)

Gets the default type url for QP

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

Defined in: [WAProto/index.d.ts:28690](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28690)

Creates a plain object from a QP message. Also converts values to other types if specified.

#### Parameters

##### message

[`QP`](QP.md)

QP

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28675](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28675)

Verifies a QP message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
