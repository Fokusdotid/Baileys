# Class: ExternalBlobReference

Defined in: [WAProto/index.d.ts:7354](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7354)

Represents an ExternalBlobReference.

## Implements

- [`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

## Constructors

### new ExternalBlobReference()

> **new ExternalBlobReference**(`properties`?): [`ExternalBlobReference`](ExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:7360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7360)

Constructs a new ExternalBlobReference.

#### Parameters

##### properties?

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

Properties to set

#### Returns

[`ExternalBlobReference`](ExternalBlobReference.md)

## Properties

### directPath

> **directPath**: `string`

Defined in: [WAProto/index.d.ts:7366](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7366)

ExternalBlobReference directPath.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`directPath`](../interfaces/IExternalBlobReference.md#directpath)

***

### fileEncSha256

> **fileEncSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:7378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7378)

ExternalBlobReference fileEncSha256.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`fileEncSha256`](../interfaces/IExternalBlobReference.md#fileencsha256)

***

### fileSha256

> **fileSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:7375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7375)

ExternalBlobReference fileSha256.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`fileSha256`](../interfaces/IExternalBlobReference.md#filesha256)

***

### fileSizeBytes

> **fileSizeBytes**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:7372](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7372)

ExternalBlobReference fileSizeBytes.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`fileSizeBytes`](../interfaces/IExternalBlobReference.md#filesizebytes)

***

### handle

> **handle**: `string`

Defined in: [WAProto/index.d.ts:7369](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7369)

ExternalBlobReference handle.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`handle`](../interfaces/IExternalBlobReference.md#handle)

***

### mediaKey

> **mediaKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:7363](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7363)

ExternalBlobReference mediaKey.

#### Implementation of

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md).[`mediaKey`](../interfaces/IExternalBlobReference.md#mediakey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7448](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7448)

Converts this ExternalBlobReference to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ExternalBlobReference`](ExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:7385](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7385)

Creates a new ExternalBlobReference instance using the specified properties.

#### Parameters

##### properties?

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

Properties to set

#### Returns

[`ExternalBlobReference`](ExternalBlobReference.md)

ExternalBlobReference instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ExternalBlobReference`](ExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:7411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7411)

Decodes an ExternalBlobReference message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ExternalBlobReference`](ExternalBlobReference.md)

ExternalBlobReference

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ExternalBlobReference`](ExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:7420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7420)

Decodes an ExternalBlobReference message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ExternalBlobReference`](ExternalBlobReference.md)

ExternalBlobReference

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7393)

Encodes the specified ExternalBlobReference message. Does not implicitly [verify](ExternalBlobReference.md#verify) messages.

#### Parameters

##### message

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

ExternalBlobReference message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7401](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7401)

Encodes the specified ExternalBlobReference message, length delimited. Does not implicitly [verify](ExternalBlobReference.md#verify) messages.

#### Parameters

##### message

[`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

ExternalBlobReference message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ExternalBlobReference`](ExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:7434](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7434)

Creates an ExternalBlobReference message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ExternalBlobReference`](ExternalBlobReference.md)

ExternalBlobReference

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7455](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7455)

Gets the default type url for ExternalBlobReference

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

Defined in: [WAProto/index.d.ts:7442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7442)

Creates a plain object from an ExternalBlobReference message. Also converts values to other types if specified.

#### Parameters

##### message

[`ExternalBlobReference`](ExternalBlobReference.md)

ExternalBlobReference

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7427](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7427)

Verifies an ExternalBlobReference message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
