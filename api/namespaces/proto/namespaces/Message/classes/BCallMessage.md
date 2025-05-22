# Class: BCallMessage

Defined in: [WAProto/index.d.ts:12014](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12014)

Represents a BCallMessage.

## Implements

- [`IBCallMessage`](../interfaces/IBCallMessage.md)

## Constructors

### new BCallMessage()

> **new BCallMessage**(`properties`?): [`BCallMessage`](BCallMessage.md)

Defined in: [WAProto/index.d.ts:12020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12020)

Constructs a new BCallMessage.

#### Parameters

##### properties?

[`IBCallMessage`](../interfaces/IBCallMessage.md)

Properties to set

#### Returns

[`BCallMessage`](BCallMessage.md)

## Properties

### caption

> **caption**: `string`

Defined in: [WAProto/index.d.ts:12032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12032)

BCallMessage caption.

#### Implementation of

[`IBCallMessage`](../interfaces/IBCallMessage.md).[`caption`](../interfaces/IBCallMessage.md#caption)

***

### masterKey

> **masterKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:12029](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12029)

BCallMessage masterKey.

#### Implementation of

[`IBCallMessage`](../interfaces/IBCallMessage.md).[`masterKey`](../interfaces/IBCallMessage.md#masterkey)

***

### mediaType

> **mediaType**: [`MediaType`](../namespaces/BCallMessage/enumerations/MediaType.md)

Defined in: [WAProto/index.d.ts:12026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12026)

BCallMessage mediaType.

#### Implementation of

[`IBCallMessage`](../interfaces/IBCallMessage.md).[`mediaType`](../interfaces/IBCallMessage.md#mediatype)

***

### sessionId

> **sessionId**: `string`

Defined in: [WAProto/index.d.ts:12023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12023)

BCallMessage sessionId.

#### Implementation of

[`IBCallMessage`](../interfaces/IBCallMessage.md).[`sessionId`](../interfaces/IBCallMessage.md#sessionid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12102](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12102)

Converts this BCallMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BCallMessage`](BCallMessage.md)

Defined in: [WAProto/index.d.ts:12039](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12039)

Creates a new BCallMessage instance using the specified properties.

#### Parameters

##### properties?

[`IBCallMessage`](../interfaces/IBCallMessage.md)

Properties to set

#### Returns

[`BCallMessage`](BCallMessage.md)

BCallMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BCallMessage`](BCallMessage.md)

Defined in: [WAProto/index.d.ts:12065](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12065)

Decodes a BCallMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BCallMessage`](BCallMessage.md)

BCallMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BCallMessage`](BCallMessage.md)

Defined in: [WAProto/index.d.ts:12074](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12074)

Decodes a BCallMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BCallMessage`](BCallMessage.md)

BCallMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12047](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12047)

Encodes the specified BCallMessage message. Does not implicitly [verify](BCallMessage.md#verify) messages.

#### Parameters

##### message

[`IBCallMessage`](../interfaces/IBCallMessage.md)

BCallMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12055)

Encodes the specified BCallMessage message, length delimited. Does not implicitly [verify](BCallMessage.md#verify) messages.

#### Parameters

##### message

[`IBCallMessage`](../interfaces/IBCallMessage.md)

BCallMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BCallMessage`](BCallMessage.md)

Defined in: [WAProto/index.d.ts:12088](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12088)

Creates a BCallMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BCallMessage`](BCallMessage.md)

BCallMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12109](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12109)

Gets the default type url for BCallMessage

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

Defined in: [WAProto/index.d.ts:12096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12096)

Creates a plain object from a BCallMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`BCallMessage`](BCallMessage.md)

BCallMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12081](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12081)

Verifies a BCallMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
