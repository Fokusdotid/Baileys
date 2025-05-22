# Class: MediaNotifyMessage

Defined in: [WAProto/index.d.ts:10378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10378)

Represents a MediaNotifyMessage.

## Implements

- [`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md)

## Constructors

### new MediaNotifyMessage()

> **new MediaNotifyMessage**(`properties`?): [`MediaNotifyMessage`](MediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:10384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10384)

Constructs a new MediaNotifyMessage.

#### Parameters

##### properties?

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md)

Properties to set

#### Returns

[`MediaNotifyMessage`](MediaNotifyMessage.md)

## Properties

### expressPathUrl

> **expressPathUrl**: `string`

Defined in: [WAProto/index.d.ts:10387](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10387)

MediaNotifyMessage expressPathUrl.

#### Implementation of

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md).[`expressPathUrl`](../interfaces/IMediaNotifyMessage.md#expresspathurl)

***

### fileEncSha256

> **fileEncSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:10390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10390)

MediaNotifyMessage fileEncSha256.

#### Implementation of

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md).[`fileEncSha256`](../interfaces/IMediaNotifyMessage.md#fileencsha256)

***

### fileLength

> **fileLength**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:10393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10393)

MediaNotifyMessage fileLength.

#### Implementation of

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md).[`fileLength`](../interfaces/IMediaNotifyMessage.md#filelength)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:10463](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10463)

Converts this MediaNotifyMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MediaNotifyMessage`](MediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:10400](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10400)

Creates a new MediaNotifyMessage instance using the specified properties.

#### Parameters

##### properties?

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md)

Properties to set

#### Returns

[`MediaNotifyMessage`](MediaNotifyMessage.md)

MediaNotifyMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MediaNotifyMessage`](MediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:10426](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10426)

Decodes a MediaNotifyMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MediaNotifyMessage`](MediaNotifyMessage.md)

MediaNotifyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MediaNotifyMessage`](MediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:10435](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10435)

Decodes a MediaNotifyMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MediaNotifyMessage`](MediaNotifyMessage.md)

MediaNotifyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10408)

Encodes the specified MediaNotifyMessage message. Does not implicitly [verify](MediaNotifyMessage.md#verify) messages.

#### Parameters

##### message

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md)

MediaNotifyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:10416](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10416)

Encodes the specified MediaNotifyMessage message, length delimited. Does not implicitly [verify](MediaNotifyMessage.md#verify) messages.

#### Parameters

##### message

[`IMediaNotifyMessage`](../interfaces/IMediaNotifyMessage.md)

MediaNotifyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MediaNotifyMessage`](MediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:10449](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10449)

Creates a MediaNotifyMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MediaNotifyMessage`](MediaNotifyMessage.md)

MediaNotifyMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:10470](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10470)

Gets the default type url for MediaNotifyMessage

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

Defined in: [WAProto/index.d.ts:10457](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10457)

Creates a plain object from a MediaNotifyMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`MediaNotifyMessage`](MediaNotifyMessage.md)

MediaNotifyMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:10442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L10442)

Verifies a MediaNotifyMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
