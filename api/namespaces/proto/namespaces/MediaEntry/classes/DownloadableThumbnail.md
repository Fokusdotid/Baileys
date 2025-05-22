# Class: DownloadableThumbnail

Defined in: [WAProto/index.d.ts:10156](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10156)

Represents a DownloadableThumbnail.

## Implements

- [`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md)

## Constructors

### new DownloadableThumbnail()

> **new DownloadableThumbnail**(`properties`?): [`DownloadableThumbnail`](DownloadableThumbnail.md)

Defined in: [WAProto/index.d.ts:10162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10162)

Constructs a new DownloadableThumbnail.

#### Parameters

##### properties?

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md)

Properties to set

#### Returns

[`DownloadableThumbnail`](DownloadableThumbnail.md)

## Properties

### directPath

> **directPath**: `string`

Defined in: [WAProto/index.d.ts:10171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10171)

DownloadableThumbnail directPath.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`directPath`](../interfaces/IDownloadableThumbnail.md#directpath)

***

### fileEncSha256

> **fileEncSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:10168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10168)

DownloadableThumbnail fileEncSha256.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`fileEncSha256`](../interfaces/IDownloadableThumbnail.md#fileencsha256)

***

### fileSha256

> **fileSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:10165](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10165)

DownloadableThumbnail fileSha256.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`fileSha256`](../interfaces/IDownloadableThumbnail.md#filesha256)

***

### mediaKey

> **mediaKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:10174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10174)

DownloadableThumbnail mediaKey.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`mediaKey`](../interfaces/IDownloadableThumbnail.md#mediakey)

***

### mediaKeyTimestamp

> **mediaKeyTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:10177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10177)

DownloadableThumbnail mediaKeyTimestamp.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`mediaKeyTimestamp`](../interfaces/IDownloadableThumbnail.md#mediakeytimestamp)

***

### objectId

> **objectId**: `string`

Defined in: [WAProto/index.d.ts:10180](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10180)

DownloadableThumbnail objectId.

#### Implementation of

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md).[`objectId`](../interfaces/IDownloadableThumbnail.md#objectid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:10250](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10250)

Converts this DownloadableThumbnail to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DownloadableThumbnail`](DownloadableThumbnail.md)

Defined in: [WAProto/index.d.ts:10187](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10187)

Creates a new DownloadableThumbnail instance using the specified properties.

#### Parameters

##### properties?

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md)

Properties to set

#### Returns

[`DownloadableThumbnail`](DownloadableThumbnail.md)

DownloadableThumbnail instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DownloadableThumbnail`](DownloadableThumbnail.md)

Defined in: [WAProto/index.d.ts:10213](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10213)

Decodes a DownloadableThumbnail message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DownloadableThumbnail`](DownloadableThumbnail.md)

DownloadableThumbnail

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DownloadableThumbnail`](DownloadableThumbnail.md)

Defined in: [WAProto/index.d.ts:10222](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10222)

Decodes a DownloadableThumbnail message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DownloadableThumbnail`](DownloadableThumbnail.md)

DownloadableThumbnail

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10195](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10195)

Encodes the specified DownloadableThumbnail message. Does not implicitly [verify](DownloadableThumbnail.md#verify) messages.

#### Parameters

##### message

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md)

DownloadableThumbnail message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10203](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10203)

Encodes the specified DownloadableThumbnail message, length delimited. Does not implicitly [verify](DownloadableThumbnail.md#verify) messages.

#### Parameters

##### message

[`IDownloadableThumbnail`](../interfaces/IDownloadableThumbnail.md)

DownloadableThumbnail message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DownloadableThumbnail`](DownloadableThumbnail.md)

Defined in: [WAProto/index.d.ts:10236](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10236)

Creates a DownloadableThumbnail message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DownloadableThumbnail`](DownloadableThumbnail.md)

DownloadableThumbnail

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:10257](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10257)

Gets the default type url for DownloadableThumbnail

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

Defined in: [WAProto/index.d.ts:10244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10244)

Creates a plain object from a DownloadableThumbnail message. Also converts values to other types if specified.

#### Parameters

##### message

[`DownloadableThumbnail`](DownloadableThumbnail.md)

DownloadableThumbnail

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:10229](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10229)

Verifies a DownloadableThumbnail message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
