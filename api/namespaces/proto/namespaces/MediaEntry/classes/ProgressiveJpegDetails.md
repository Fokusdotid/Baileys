# Class: ProgressiveJpegDetails

Defined in: [WAProto/index.d.ts:10271](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10271)

Represents a ProgressiveJpegDetails.

## Implements

- [`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md)

## Constructors

### new ProgressiveJpegDetails()

> **new ProgressiveJpegDetails**(`properties`?): [`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

Defined in: [WAProto/index.d.ts:10277](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10277)

Constructs a new ProgressiveJpegDetails.

#### Parameters

##### properties?

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md)

Properties to set

#### Returns

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

## Properties

### scanLengths

> **scanLengths**: `number`[]

Defined in: [WAProto/index.d.ts:10280](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10280)

ProgressiveJpegDetails scanLengths.

#### Implementation of

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md).[`scanLengths`](../interfaces/IProgressiveJpegDetails.md#scanlengths)

***

### sidecar

> **sidecar**: `Uint8Array`

Defined in: [WAProto/index.d.ts:10283](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10283)

ProgressiveJpegDetails sidecar.

#### Implementation of

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md).[`sidecar`](../interfaces/IProgressiveJpegDetails.md#sidecar)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:10353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10353)

Converts this ProgressiveJpegDetails to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

Defined in: [WAProto/index.d.ts:10290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10290)

Creates a new ProgressiveJpegDetails instance using the specified properties.

#### Parameters

##### properties?

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md)

Properties to set

#### Returns

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

ProgressiveJpegDetails instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

Defined in: [WAProto/index.d.ts:10316](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10316)

Decodes a ProgressiveJpegDetails message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

ProgressiveJpegDetails

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

Defined in: [WAProto/index.d.ts:10325](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10325)

Decodes a ProgressiveJpegDetails message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

ProgressiveJpegDetails

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10298](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10298)

Encodes the specified ProgressiveJpegDetails message. Does not implicitly [verify](ProgressiveJpegDetails.md#verify) messages.

#### Parameters

##### message

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md)

ProgressiveJpegDetails message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10306](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10306)

Encodes the specified ProgressiveJpegDetails message, length delimited. Does not implicitly [verify](ProgressiveJpegDetails.md#verify) messages.

#### Parameters

##### message

[`IProgressiveJpegDetails`](../interfaces/IProgressiveJpegDetails.md)

ProgressiveJpegDetails message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

Defined in: [WAProto/index.d.ts:10339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10339)

Creates a ProgressiveJpegDetails message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

ProgressiveJpegDetails

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:10360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10360)

Gets the default type url for ProgressiveJpegDetails

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

Defined in: [WAProto/index.d.ts:10347](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10347)

Creates a plain object from a ProgressiveJpegDetails message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProgressiveJpegDetails`](ProgressiveJpegDetails.md)

ProgressiveJpegDetails

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:10332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10332)

Verifies a ProgressiveJpegDetails message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
