# Class: MediaRetryNotification

Defined in: [WAProto/index.d.ts:10487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10487)

Represents a MediaRetryNotification.

## Implements

- [`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md)

## Constructors

### new MediaRetryNotification()

> **new MediaRetryNotification**(`properties`?): [`MediaRetryNotification`](MediaRetryNotification.md)

Defined in: [WAProto/index.d.ts:10493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10493)

Constructs a new MediaRetryNotification.

#### Parameters

##### properties?

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md)

Properties to set

#### Returns

[`MediaRetryNotification`](MediaRetryNotification.md)

## Properties

### directPath

> **directPath**: `string`

Defined in: [WAProto/index.d.ts:10499](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10499)

MediaRetryNotification directPath.

#### Implementation of

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md).[`directPath`](../interfaces/IMediaRetryNotification.md#directpath)

***

### result

> **result**: [`ResultType`](../namespaces/MediaRetryNotification/enumerations/ResultType.md)

Defined in: [WAProto/index.d.ts:10502](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10502)

MediaRetryNotification result.

#### Implementation of

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md).[`result`](../interfaces/IMediaRetryNotification.md#result)

***

### stanzaId

> **stanzaId**: `string`

Defined in: [WAProto/index.d.ts:10496](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10496)

MediaRetryNotification stanzaId.

#### Implementation of

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md).[`stanzaId`](../interfaces/IMediaRetryNotification.md#stanzaid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:10572](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10572)

Converts this MediaRetryNotification to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MediaRetryNotification`](MediaRetryNotification.md)

Defined in: [WAProto/index.d.ts:10509](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10509)

Creates a new MediaRetryNotification instance using the specified properties.

#### Parameters

##### properties?

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md)

Properties to set

#### Returns

[`MediaRetryNotification`](MediaRetryNotification.md)

MediaRetryNotification instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MediaRetryNotification`](MediaRetryNotification.md)

Defined in: [WAProto/index.d.ts:10535](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10535)

Decodes a MediaRetryNotification message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MediaRetryNotification`](MediaRetryNotification.md)

MediaRetryNotification

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MediaRetryNotification`](MediaRetryNotification.md)

Defined in: [WAProto/index.d.ts:10544](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10544)

Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MediaRetryNotification`](MediaRetryNotification.md)

MediaRetryNotification

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10517](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10517)

Encodes the specified MediaRetryNotification message. Does not implicitly [verify](MediaRetryNotification.md#verify) messages.

#### Parameters

##### message

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md)

MediaRetryNotification message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10525](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10525)

Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly [verify](MediaRetryNotification.md#verify) messages.

#### Parameters

##### message

[`IMediaRetryNotification`](../interfaces/IMediaRetryNotification.md)

MediaRetryNotification message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MediaRetryNotification`](MediaRetryNotification.md)

Defined in: [WAProto/index.d.ts:10558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10558)

Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MediaRetryNotification`](MediaRetryNotification.md)

MediaRetryNotification

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:10579](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10579)

Gets the default type url for MediaRetryNotification

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

Defined in: [WAProto/index.d.ts:10566](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10566)

Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.

#### Parameters

##### message

[`MediaRetryNotification`](MediaRetryNotification.md)

MediaRetryNotification

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:10551](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10551)

Verifies a MediaRetryNotification message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
