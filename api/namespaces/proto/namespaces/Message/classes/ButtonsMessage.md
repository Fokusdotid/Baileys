# Class: ButtonsMessage

Defined in: [WAProto/index.d.ts:12313](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12313)

Represents a ButtonsMessage.

## Implements

- [`IButtonsMessage`](../interfaces/IButtonsMessage.md)

## Constructors

### new ButtonsMessage()

> **new ButtonsMessage**(`properties`?): [`ButtonsMessage`](ButtonsMessage.md)

Defined in: [WAProto/index.d.ts:12319](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12319)

Constructs a new ButtonsMessage.

#### Parameters

##### properties?

[`IButtonsMessage`](../interfaces/IButtonsMessage.md)

Properties to set

#### Returns

[`ButtonsMessage`](ButtonsMessage.md)

## Properties

### buttons

> **buttons**: [`IButton`](../namespaces/ButtonsMessage/interfaces/IButton.md)[]

Defined in: [WAProto/index.d.ts:12331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12331)

ButtonsMessage buttons.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`buttons`](../interfaces/IButtonsMessage.md#buttons)

***

### contentText

> **contentText**: `string`

Defined in: [WAProto/index.d.ts:12322](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12322)

ButtonsMessage contentText.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`contentText`](../interfaces/IButtonsMessage.md#contenttext)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:12328](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12328)

ButtonsMessage contextInfo.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`contextInfo`](../interfaces/IButtonsMessage.md#contextinfo)

***

### documentMessage?

> `optional` **documentMessage**: `null` \| [`IDocumentMessage`](../interfaces/IDocumentMessage.md)

Defined in: [WAProto/index.d.ts:12340](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12340)

ButtonsMessage documentMessage.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`documentMessage`](../interfaces/IButtonsMessage.md#documentmessage)

***

### footerText

> **footerText**: `string`

Defined in: [WAProto/index.d.ts:12325](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12325)

ButtonsMessage footerText.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`footerText`](../interfaces/IButtonsMessage.md#footertext)

***

### header?

> `optional` **header**: `"text"` \| `"imageMessage"` \| `"locationMessage"` \| `"documentMessage"` \| `"videoMessage"`

Defined in: [WAProto/index.d.ts:12352](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12352)

ButtonsMessage header.

***

### headerType

> **headerType**: [`HeaderType`](../namespaces/ButtonsMessage/enumerations/HeaderType.md)

Defined in: [WAProto/index.d.ts:12334](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12334)

ButtonsMessage headerType.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`headerType`](../interfaces/IButtonsMessage.md#headertype)

***

### imageMessage?

> `optional` **imageMessage**: `null` \| [`IImageMessage`](../interfaces/IImageMessage.md)

Defined in: [WAProto/index.d.ts:12343](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12343)

ButtonsMessage imageMessage.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`imageMessage`](../interfaces/IButtonsMessage.md#imagemessage)

***

### locationMessage?

> `optional` **locationMessage**: `null` \| [`ILocationMessage`](../interfaces/ILocationMessage.md)

Defined in: [WAProto/index.d.ts:12349](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12349)

ButtonsMessage locationMessage.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`locationMessage`](../interfaces/IButtonsMessage.md#locationmessage)

***

### text?

> `optional` **text**: `null` \| `string`

Defined in: [WAProto/index.d.ts:12337](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12337)

ButtonsMessage text.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`text`](../interfaces/IButtonsMessage.md#text)

***

### videoMessage?

> `optional` **videoMessage**: `null` \| [`IVideoMessage`](../interfaces/IVideoMessage.md)

Defined in: [WAProto/index.d.ts:12346](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12346)

ButtonsMessage videoMessage.

#### Implementation of

[`IButtonsMessage`](../interfaces/IButtonsMessage.md).[`videoMessage`](../interfaces/IButtonsMessage.md#videomessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12422](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12422)

Converts this ButtonsMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ButtonsMessage`](ButtonsMessage.md)

Defined in: [WAProto/index.d.ts:12359](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12359)

Creates a new ButtonsMessage instance using the specified properties.

#### Parameters

##### properties?

[`IButtonsMessage`](../interfaces/IButtonsMessage.md)

Properties to set

#### Returns

[`ButtonsMessage`](ButtonsMessage.md)

ButtonsMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ButtonsMessage`](ButtonsMessage.md)

Defined in: [WAProto/index.d.ts:12385](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12385)

Decodes a ButtonsMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ButtonsMessage`](ButtonsMessage.md)

ButtonsMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ButtonsMessage`](ButtonsMessage.md)

Defined in: [WAProto/index.d.ts:12394](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12394)

Decodes a ButtonsMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ButtonsMessage`](ButtonsMessage.md)

ButtonsMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12367](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12367)

Encodes the specified ButtonsMessage message. Does not implicitly [verify](ButtonsMessage.md#verify) messages.

#### Parameters

##### message

[`IButtonsMessage`](../interfaces/IButtonsMessage.md)

ButtonsMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12375)

Encodes the specified ButtonsMessage message, length delimited. Does not implicitly [verify](ButtonsMessage.md#verify) messages.

#### Parameters

##### message

[`IButtonsMessage`](../interfaces/IButtonsMessage.md)

ButtonsMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ButtonsMessage`](ButtonsMessage.md)

Defined in: [WAProto/index.d.ts:12408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12408)

Creates a ButtonsMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ButtonsMessage`](ButtonsMessage.md)

ButtonsMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12429](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12429)

Gets the default type url for ButtonsMessage

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

Defined in: [WAProto/index.d.ts:12416](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12416)

Creates a plain object from a ButtonsMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ButtonsMessage`](ButtonsMessage.md)

ButtonsMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12401](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12401)

Verifies a ButtonsMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
