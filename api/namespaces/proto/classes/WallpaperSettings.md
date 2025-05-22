# Class: WallpaperSettings

Defined in: [WAProto/index.d.ts:39263](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39263)

Represents a WallpaperSettings.

## Implements

- [`IWallpaperSettings`](../interfaces/IWallpaperSettings.md)

## Constructors

### new WallpaperSettings()

> **new WallpaperSettings**(`properties`?): [`WallpaperSettings`](WallpaperSettings.md)

Defined in: [WAProto/index.d.ts:39269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39269)

Constructs a new WallpaperSettings.

#### Parameters

##### properties?

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md)

Properties to set

#### Returns

[`WallpaperSettings`](WallpaperSettings.md)

## Properties

### filename

> **filename**: `string`

Defined in: [WAProto/index.d.ts:39272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39272)

WallpaperSettings filename.

#### Implementation of

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md).[`filename`](../interfaces/IWallpaperSettings.md#filename)

***

### opacity

> **opacity**: `number`

Defined in: [WAProto/index.d.ts:39275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39275)

WallpaperSettings opacity.

#### Implementation of

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md).[`opacity`](../interfaces/IWallpaperSettings.md#opacity)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:39345](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39345)

Converts this WallpaperSettings to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`WallpaperSettings`](WallpaperSettings.md)

Defined in: [WAProto/index.d.ts:39282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39282)

Creates a new WallpaperSettings instance using the specified properties.

#### Parameters

##### properties?

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md)

Properties to set

#### Returns

[`WallpaperSettings`](WallpaperSettings.md)

WallpaperSettings instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`WallpaperSettings`](WallpaperSettings.md)

Defined in: [WAProto/index.d.ts:39308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39308)

Decodes a WallpaperSettings message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`WallpaperSettings`](WallpaperSettings.md)

WallpaperSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`WallpaperSettings`](WallpaperSettings.md)

Defined in: [WAProto/index.d.ts:39317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39317)

Decodes a WallpaperSettings message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`WallpaperSettings`](WallpaperSettings.md)

WallpaperSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:39290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39290)

Encodes the specified WallpaperSettings message. Does not implicitly [verify](WallpaperSettings.md#verify) messages.

#### Parameters

##### message

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md)

WallpaperSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:39298](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39298)

Encodes the specified WallpaperSettings message, length delimited. Does not implicitly [verify](WallpaperSettings.md#verify) messages.

#### Parameters

##### message

[`IWallpaperSettings`](../interfaces/IWallpaperSettings.md)

WallpaperSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`WallpaperSettings`](WallpaperSettings.md)

Defined in: [WAProto/index.d.ts:39331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39331)

Creates a WallpaperSettings message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`WallpaperSettings`](WallpaperSettings.md)

WallpaperSettings

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:39352](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39352)

Gets the default type url for WallpaperSettings

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

Defined in: [WAProto/index.d.ts:39339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39339)

Creates a plain object from a WallpaperSettings message. Also converts values to other types if specified.

#### Parameters

##### message

[`WallpaperSettings`](WallpaperSettings.md)

WallpaperSettings

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:39324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39324)

Verifies a WallpaperSettings message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
