# Class: StickerSyncRMRMessage

Defined in: [WAProto/index.d.ts:23931](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23931)

Represents a StickerSyncRMRMessage.

## Implements

- [`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md)

## Constructors

### new StickerSyncRMRMessage()

> **new StickerSyncRMRMessage**(`properties`?): [`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:23937](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23937)

Constructs a new StickerSyncRMRMessage.

#### Parameters

##### properties?

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md)

Properties to set

#### Returns

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

## Properties

### filehash

> **filehash**: `string`[]

Defined in: [WAProto/index.d.ts:23940](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23940)

StickerSyncRMRMessage filehash.

#### Implementation of

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md).[`filehash`](../interfaces/IStickerSyncRMRMessage.md#filehash)

***

### requestTimestamp

> **requestTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:23946](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23946)

StickerSyncRMRMessage requestTimestamp.

#### Implementation of

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md).[`requestTimestamp`](../interfaces/IStickerSyncRMRMessage.md#requesttimestamp)

***

### rmrSource

> **rmrSource**: `string`

Defined in: [WAProto/index.d.ts:23943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23943)

StickerSyncRMRMessage rmrSource.

#### Implementation of

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md).[`rmrSource`](../interfaces/IStickerSyncRMRMessage.md#rmrsource)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:24016](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24016)

Converts this StickerSyncRMRMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:23953](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23953)

Creates a new StickerSyncRMRMessage instance using the specified properties.

#### Parameters

##### properties?

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md)

Properties to set

#### Returns

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

StickerSyncRMRMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:23979](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23979)

Decodes a StickerSyncRMRMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

StickerSyncRMRMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:23988](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23988)

Decodes a StickerSyncRMRMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

StickerSyncRMRMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23961](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23961)

Encodes the specified StickerSyncRMRMessage message. Does not implicitly [verify](StickerSyncRMRMessage.md#verify) messages.

#### Parameters

##### message

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md)

StickerSyncRMRMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23969](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23969)

Encodes the specified StickerSyncRMRMessage message, length delimited. Does not implicitly [verify](StickerSyncRMRMessage.md#verify) messages.

#### Parameters

##### message

[`IStickerSyncRMRMessage`](../interfaces/IStickerSyncRMRMessage.md)

StickerSyncRMRMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

Defined in: [WAProto/index.d.ts:24002](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24002)

Creates a StickerSyncRMRMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

StickerSyncRMRMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:24023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24023)

Gets the default type url for StickerSyncRMRMessage

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

Defined in: [WAProto/index.d.ts:24010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24010)

Creates a plain object from a StickerSyncRMRMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`StickerSyncRMRMessage`](StickerSyncRMRMessage.md)

StickerSyncRMRMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23995](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23995)

Verifies a StickerSyncRMRMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
