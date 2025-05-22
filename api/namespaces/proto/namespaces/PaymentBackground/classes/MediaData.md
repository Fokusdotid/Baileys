# Class: MediaData

Defined in: [WAProto/index.d.ts:27062](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27062)

Represents a MediaData.

## Implements

- [`IMediaData`](../interfaces/IMediaData.md)

## Constructors

### new MediaData()

> **new MediaData**(`properties`?): [`MediaData`](MediaData.md)

Defined in: [WAProto/index.d.ts:27068](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27068)

Constructs a new MediaData.

#### Parameters

##### properties?

[`IMediaData`](../interfaces/IMediaData.md)

Properties to set

#### Returns

[`MediaData`](MediaData.md)

## Properties

### directPath

> **directPath**: `string`

Defined in: [WAProto/index.d.ts:27083](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27083)

MediaData directPath.

#### Implementation of

[`IMediaData`](../interfaces/IMediaData.md).[`directPath`](../interfaces/IMediaData.md#directpath)

***

### fileEncSha256

> **fileEncSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:27080](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27080)

MediaData fileEncSha256.

#### Implementation of

[`IMediaData`](../interfaces/IMediaData.md).[`fileEncSha256`](../interfaces/IMediaData.md#fileencsha256)

***

### fileSha256

> **fileSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:27077](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27077)

MediaData fileSha256.

#### Implementation of

[`IMediaData`](../interfaces/IMediaData.md).[`fileSha256`](../interfaces/IMediaData.md#filesha256)

***

### mediaKey

> **mediaKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:27071](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27071)

MediaData mediaKey.

#### Implementation of

[`IMediaData`](../interfaces/IMediaData.md).[`mediaKey`](../interfaces/IMediaData.md#mediakey)

***

### mediaKeyTimestamp

> **mediaKeyTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27074](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27074)

MediaData mediaKeyTimestamp.

#### Implementation of

[`IMediaData`](../interfaces/IMediaData.md).[`mediaKeyTimestamp`](../interfaces/IMediaData.md#mediakeytimestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27153](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27153)

Converts this MediaData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MediaData`](MediaData.md)

Defined in: [WAProto/index.d.ts:27090](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27090)

Creates a new MediaData instance using the specified properties.

#### Parameters

##### properties?

[`IMediaData`](../interfaces/IMediaData.md)

Properties to set

#### Returns

[`MediaData`](MediaData.md)

MediaData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MediaData`](MediaData.md)

Defined in: [WAProto/index.d.ts:27116](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27116)

Decodes a MediaData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MediaData`](MediaData.md)

MediaData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MediaData`](MediaData.md)

Defined in: [WAProto/index.d.ts:27125](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27125)

Decodes a MediaData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MediaData`](MediaData.md)

MediaData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27098)

Encodes the specified MediaData message. Does not implicitly [verify](MediaData.md#verify) messages.

#### Parameters

##### message

[`IMediaData`](../interfaces/IMediaData.md)

MediaData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27106](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27106)

Encodes the specified MediaData message, length delimited. Does not implicitly [verify](MediaData.md#verify) messages.

#### Parameters

##### message

[`IMediaData`](../interfaces/IMediaData.md)

MediaData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MediaData`](MediaData.md)

Defined in: [WAProto/index.d.ts:27139](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27139)

Creates a MediaData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MediaData`](MediaData.md)

MediaData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27160](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27160)

Gets the default type url for MediaData

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

Defined in: [WAProto/index.d.ts:27147](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27147)

Creates a plain object from a MediaData message. Also converts values to other types if specified.

#### Parameters

##### message

[`MediaData`](MediaData.md)

MediaData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27132](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27132)

Verifies a MediaData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
