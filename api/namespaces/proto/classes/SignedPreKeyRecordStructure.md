# Class: SignedPreKeyRecordStructure

Defined in: [WAProto/index.d.ts:31210](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31210)

Represents a SignedPreKeyRecordStructure.

## Implements

- [`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md)

## Constructors

### new SignedPreKeyRecordStructure()

> **new SignedPreKeyRecordStructure**(`properties`?): [`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:31216](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31216)

Constructs a new SignedPreKeyRecordStructure.

#### Parameters

##### properties?

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md)

Properties to set

#### Returns

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

## Properties

### id

> **id**: `number`

Defined in: [WAProto/index.d.ts:31219](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31219)

SignedPreKeyRecordStructure id.

#### Implementation of

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md).[`id`](../interfaces/ISignedPreKeyRecordStructure.md#id)

***

### privateKey

> **privateKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31225)

SignedPreKeyRecordStructure privateKey.

#### Implementation of

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md).[`privateKey`](../interfaces/ISignedPreKeyRecordStructure.md#privatekey)

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31222](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31222)

SignedPreKeyRecordStructure publicKey.

#### Implementation of

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md).[`publicKey`](../interfaces/ISignedPreKeyRecordStructure.md#publickey)

***

### signature

> **signature**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31228)

SignedPreKeyRecordStructure signature.

#### Implementation of

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md).[`signature`](../interfaces/ISignedPreKeyRecordStructure.md#signature)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:31231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31231)

SignedPreKeyRecordStructure timestamp.

#### Implementation of

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md).[`timestamp`](../interfaces/ISignedPreKeyRecordStructure.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:31301](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31301)

Converts this SignedPreKeyRecordStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:31238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31238)

Creates a new SignedPreKeyRecordStructure instance using the specified properties.

#### Parameters

##### properties?

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md)

Properties to set

#### Returns

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:31264](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31264)

Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:31273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31273)

Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31246](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31246)

Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly [verify](SignedPreKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31254)

Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly [verify](SignedPreKeyRecordStructure.md#verify) messages.

#### Parameters

##### message

[`ISignedPreKeyRecordStructure`](../interfaces/ISignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

Defined in: [WAProto/index.d.ts:31287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31287)

Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:31308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31308)

Gets the default type url for SignedPreKeyRecordStructure

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

Defined in: [WAProto/index.d.ts:31295](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31295)

Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`SignedPreKeyRecordStructure`](SignedPreKeyRecordStructure.md)

SignedPreKeyRecordStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:31280](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31280)

Verifies a SignedPreKeyRecordStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
