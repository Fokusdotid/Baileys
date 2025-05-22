# Class: AutoDownloadSettings

Defined in: [WAProto/index.d.ts:707](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L707)

Represents an AutoDownloadSettings.

## Implements

- [`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md)

## Constructors

### new AutoDownloadSettings()

> **new AutoDownloadSettings**(`properties`?): [`AutoDownloadSettings`](AutoDownloadSettings.md)

Defined in: [WAProto/index.d.ts:713](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L713)

Constructs a new AutoDownloadSettings.

#### Parameters

##### properties?

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md)

Properties to set

#### Returns

[`AutoDownloadSettings`](AutoDownloadSettings.md)

## Properties

### downloadAudio

> **downloadAudio**: `boolean`

Defined in: [WAProto/index.d.ts:719](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L719)

AutoDownloadSettings downloadAudio.

#### Implementation of

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md).[`downloadAudio`](../interfaces/IAutoDownloadSettings.md#downloadaudio)

***

### downloadDocuments

> **downloadDocuments**: `boolean`

Defined in: [WAProto/index.d.ts:725](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L725)

AutoDownloadSettings downloadDocuments.

#### Implementation of

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md).[`downloadDocuments`](../interfaces/IAutoDownloadSettings.md#downloaddocuments)

***

### downloadImages

> **downloadImages**: `boolean`

Defined in: [WAProto/index.d.ts:716](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L716)

AutoDownloadSettings downloadImages.

#### Implementation of

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md).[`downloadImages`](../interfaces/IAutoDownloadSettings.md#downloadimages)

***

### downloadVideo

> **downloadVideo**: `boolean`

Defined in: [WAProto/index.d.ts:722](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L722)

AutoDownloadSettings downloadVideo.

#### Implementation of

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md).[`downloadVideo`](../interfaces/IAutoDownloadSettings.md#downloadvideo)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:795](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L795)

Converts this AutoDownloadSettings to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AutoDownloadSettings`](AutoDownloadSettings.md)

Defined in: [WAProto/index.d.ts:732](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L732)

Creates a new AutoDownloadSettings instance using the specified properties.

#### Parameters

##### properties?

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md)

Properties to set

#### Returns

[`AutoDownloadSettings`](AutoDownloadSettings.md)

AutoDownloadSettings instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AutoDownloadSettings`](AutoDownloadSettings.md)

Defined in: [WAProto/index.d.ts:758](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L758)

Decodes an AutoDownloadSettings message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AutoDownloadSettings`](AutoDownloadSettings.md)

AutoDownloadSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AutoDownloadSettings`](AutoDownloadSettings.md)

Defined in: [WAProto/index.d.ts:767](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L767)

Decodes an AutoDownloadSettings message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AutoDownloadSettings`](AutoDownloadSettings.md)

AutoDownloadSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:740](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L740)

Encodes the specified AutoDownloadSettings message. Does not implicitly [verify](AutoDownloadSettings.md#verify) messages.

#### Parameters

##### message

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md)

AutoDownloadSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:748](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L748)

Encodes the specified AutoDownloadSettings message, length delimited. Does not implicitly [verify](AutoDownloadSettings.md#verify) messages.

#### Parameters

##### message

[`IAutoDownloadSettings`](../interfaces/IAutoDownloadSettings.md)

AutoDownloadSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AutoDownloadSettings`](AutoDownloadSettings.md)

Defined in: [WAProto/index.d.ts:781](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L781)

Creates an AutoDownloadSettings message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AutoDownloadSettings`](AutoDownloadSettings.md)

AutoDownloadSettings

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L802)

Gets the default type url for AutoDownloadSettings

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

Defined in: [WAProto/index.d.ts:789](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L789)

Creates a plain object from an AutoDownloadSettings message. Also converts values to other types if specified.

#### Parameters

##### message

[`AutoDownloadSettings`](AutoDownloadSettings.md)

AutoDownloadSettings

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:774](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L774)

Verifies an AutoDownloadSettings message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
