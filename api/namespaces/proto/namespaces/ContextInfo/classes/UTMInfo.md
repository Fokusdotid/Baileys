# Class: UTMInfo

Defined in: [WAProto/index.d.ts:5536](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5536)

Represents a UTMInfo.

## Implements

- [`IUTMInfo`](../interfaces/IUTMInfo.md)

## Constructors

### new UTMInfo()

> **new UTMInfo**(`properties`?): [`UTMInfo`](UTMInfo.md)

Defined in: [WAProto/index.d.ts:5542](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5542)

Constructs a new UTMInfo.

#### Parameters

##### properties?

[`IUTMInfo`](../interfaces/IUTMInfo.md)

Properties to set

#### Returns

[`UTMInfo`](UTMInfo.md)

## Properties

### utmCampaign

> **utmCampaign**: `string`

Defined in: [WAProto/index.d.ts:5548](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5548)

UTMInfo utmCampaign.

#### Implementation of

[`IUTMInfo`](../interfaces/IUTMInfo.md).[`utmCampaign`](../interfaces/IUTMInfo.md#utmcampaign)

***

### utmSource

> **utmSource**: `string`

Defined in: [WAProto/index.d.ts:5545](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5545)

UTMInfo utmSource.

#### Implementation of

[`IUTMInfo`](../interfaces/IUTMInfo.md).[`utmSource`](../interfaces/IUTMInfo.md#utmsource)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:5618](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5618)

Converts this UTMInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`UTMInfo`](UTMInfo.md)

Defined in: [WAProto/index.d.ts:5555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5555)

Creates a new UTMInfo instance using the specified properties.

#### Parameters

##### properties?

[`IUTMInfo`](../interfaces/IUTMInfo.md)

Properties to set

#### Returns

[`UTMInfo`](UTMInfo.md)

UTMInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`UTMInfo`](UTMInfo.md)

Defined in: [WAProto/index.d.ts:5581](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5581)

Decodes a UTMInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`UTMInfo`](UTMInfo.md)

UTMInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`UTMInfo`](UTMInfo.md)

Defined in: [WAProto/index.d.ts:5590](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5590)

Decodes a UTMInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`UTMInfo`](UTMInfo.md)

UTMInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5563](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5563)

Encodes the specified UTMInfo message. Does not implicitly [verify](UTMInfo.md#verify) messages.

#### Parameters

##### message

[`IUTMInfo`](../interfaces/IUTMInfo.md)

UTMInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5571](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5571)

Encodes the specified UTMInfo message, length delimited. Does not implicitly [verify](UTMInfo.md#verify) messages.

#### Parameters

##### message

[`IUTMInfo`](../interfaces/IUTMInfo.md)

UTMInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`UTMInfo`](UTMInfo.md)

Defined in: [WAProto/index.d.ts:5604](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5604)

Creates a UTMInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`UTMInfo`](UTMInfo.md)

UTMInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:5625](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5625)

Gets the default type url for UTMInfo

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

Defined in: [WAProto/index.d.ts:5612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5612)

Creates a plain object from a UTMInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`UTMInfo`](UTMInfo.md)

UTMInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:5597](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5597)

Verifies a UTMInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
