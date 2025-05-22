# Class: TemplateButtonReplyMessage

Defined in: [WAProto/index.d.ts:24046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24046)

Represents a TemplateButtonReplyMessage.

## Implements

- [`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md)

## Constructors

### new TemplateButtonReplyMessage()

> **new TemplateButtonReplyMessage**(`properties`?): [`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:24052](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24052)

Constructs a new TemplateButtonReplyMessage.

#### Parameters

##### properties?

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md)

Properties to set

#### Returns

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:24061](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24061)

TemplateButtonReplyMessage contextInfo.

#### Implementation of

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md).[`contextInfo`](../interfaces/ITemplateButtonReplyMessage.md#contextinfo)

***

### selectedCarouselCardIndex

> **selectedCarouselCardIndex**: `number`

Defined in: [WAProto/index.d.ts:24067](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24067)

TemplateButtonReplyMessage selectedCarouselCardIndex.

#### Implementation of

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md).[`selectedCarouselCardIndex`](../interfaces/ITemplateButtonReplyMessage.md#selectedcarouselcardindex)

***

### selectedDisplayText

> **selectedDisplayText**: `string`

Defined in: [WAProto/index.d.ts:24058](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24058)

TemplateButtonReplyMessage selectedDisplayText.

#### Implementation of

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md).[`selectedDisplayText`](../interfaces/ITemplateButtonReplyMessage.md#selecteddisplaytext)

***

### selectedId

> **selectedId**: `string`

Defined in: [WAProto/index.d.ts:24055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24055)

TemplateButtonReplyMessage selectedId.

#### Implementation of

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md).[`selectedId`](../interfaces/ITemplateButtonReplyMessage.md#selectedid)

***

### selectedIndex

> **selectedIndex**: `number`

Defined in: [WAProto/index.d.ts:24064](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24064)

TemplateButtonReplyMessage selectedIndex.

#### Implementation of

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md).[`selectedIndex`](../interfaces/ITemplateButtonReplyMessage.md#selectedindex)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:24137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24137)

Converts this TemplateButtonReplyMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:24074](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24074)

Creates a new TemplateButtonReplyMessage instance using the specified properties.

#### Parameters

##### properties?

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md)

Properties to set

#### Returns

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

TemplateButtonReplyMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:24100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24100)

Decodes a TemplateButtonReplyMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

TemplateButtonReplyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:24109](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24109)

Decodes a TemplateButtonReplyMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

TemplateButtonReplyMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24082](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24082)

Encodes the specified TemplateButtonReplyMessage message. Does not implicitly [verify](TemplateButtonReplyMessage.md#verify) messages.

#### Parameters

##### message

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md)

TemplateButtonReplyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24090](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24090)

Encodes the specified TemplateButtonReplyMessage message, length delimited. Does not implicitly [verify](TemplateButtonReplyMessage.md#verify) messages.

#### Parameters

##### message

[`ITemplateButtonReplyMessage`](../interfaces/ITemplateButtonReplyMessage.md)

TemplateButtonReplyMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

Defined in: [WAProto/index.d.ts:24123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24123)

Creates a TemplateButtonReplyMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

TemplateButtonReplyMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:24144](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24144)

Gets the default type url for TemplateButtonReplyMessage

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

Defined in: [WAProto/index.d.ts:24131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24131)

Creates a plain object from a TemplateButtonReplyMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`TemplateButtonReplyMessage`](TemplateButtonReplyMessage.md)

TemplateButtonReplyMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:24116](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24116)

Verifies a TemplateButtonReplyMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
