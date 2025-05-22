# Class: VerifiedNameCertificate

Defined in: [WAProto/index.d.ts:39033](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39033)

Represents a VerifiedNameCertificate.

## Implements

- [`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

## Constructors

### new VerifiedNameCertificate()

> **new VerifiedNameCertificate**(`properties`?): [`VerifiedNameCertificate`](VerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:39039](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39039)

Constructs a new VerifiedNameCertificate.

#### Parameters

##### properties?

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

Properties to set

#### Returns

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

## Properties

### details

> **details**: `Uint8Array`

Defined in: [WAProto/index.d.ts:39042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39042)

VerifiedNameCertificate details.

#### Implementation of

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md).[`details`](../interfaces/IVerifiedNameCertificate.md#details)

***

### serverSignature

> **serverSignature**: `Uint8Array`

Defined in: [WAProto/index.d.ts:39048](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39048)

VerifiedNameCertificate serverSignature.

#### Implementation of

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md).[`serverSignature`](../interfaces/IVerifiedNameCertificate.md#serversignature)

***

### signature

> **signature**: `Uint8Array`

Defined in: [WAProto/index.d.ts:39045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39045)

VerifiedNameCertificate signature.

#### Implementation of

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md).[`signature`](../interfaces/IVerifiedNameCertificate.md#signature)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:39118](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39118)

Converts this VerifiedNameCertificate to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`VerifiedNameCertificate`](VerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:39055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39055)

Creates a new VerifiedNameCertificate instance using the specified properties.

#### Parameters

##### properties?

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

Properties to set

#### Returns

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

VerifiedNameCertificate instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`VerifiedNameCertificate`](VerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:39081](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39081)

Decodes a VerifiedNameCertificate message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

VerifiedNameCertificate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`VerifiedNameCertificate`](VerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:39090](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39090)

Decodes a VerifiedNameCertificate message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

VerifiedNameCertificate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:39063](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39063)

Encodes the specified VerifiedNameCertificate message. Does not implicitly [verify](VerifiedNameCertificate.md#verify) messages.

#### Parameters

##### message

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

VerifiedNameCertificate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:39071](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39071)

Encodes the specified VerifiedNameCertificate message, length delimited. Does not implicitly [verify](VerifiedNameCertificate.md#verify) messages.

#### Parameters

##### message

[`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

VerifiedNameCertificate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`VerifiedNameCertificate`](VerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:39104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39104)

Creates a VerifiedNameCertificate message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

VerifiedNameCertificate

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:39125](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39125)

Gets the default type url for VerifiedNameCertificate

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

Defined in: [WAProto/index.d.ts:39112](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39112)

Creates a plain object from a VerifiedNameCertificate message. Also converts values to other types if specified.

#### Parameters

##### message

[`VerifiedNameCertificate`](VerifiedNameCertificate.md)

VerifiedNameCertificate

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:39097](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39097)

Verifies a VerifiedNameCertificate message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
