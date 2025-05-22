# Class: ButtonsResponseMessage

Defined in: [WAProto/index.d.ts:12788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12788)

Represents a ButtonsResponseMessage.

## Implements

- [`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md)

## Constructors

### new ButtonsResponseMessage()

> **new ButtonsResponseMessage**(`properties`?): [`ButtonsResponseMessage`](ButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:12794](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12794)

Constructs a new ButtonsResponseMessage.

#### Parameters

##### properties?

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md)

Properties to set

#### Returns

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:12800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12800)

ButtonsResponseMessage contextInfo.

#### Implementation of

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md).[`contextInfo`](../interfaces/IButtonsResponseMessage.md#contextinfo)

***

### response?

> `optional` **response**: `"selectedDisplayText"`

Defined in: [WAProto/index.d.ts:12809](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12809)

ButtonsResponseMessage response.

***

### selectedButtonId

> **selectedButtonId**: `string`

Defined in: [WAProto/index.d.ts:12797](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12797)

ButtonsResponseMessage selectedButtonId.

#### Implementation of

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md).[`selectedButtonId`](../interfaces/IButtonsResponseMessage.md#selectedbuttonid)

***

### selectedDisplayText?

> `optional` **selectedDisplayText**: `null` \| `string`

Defined in: [WAProto/index.d.ts:12806](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12806)

ButtonsResponseMessage selectedDisplayText.

#### Implementation of

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md).[`selectedDisplayText`](../interfaces/IButtonsResponseMessage.md#selecteddisplaytext)

***

### type

> **type**: [`Type`](../namespaces/ButtonsResponseMessage/enumerations/Type.md)

Defined in: [WAProto/index.d.ts:12803](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12803)

ButtonsResponseMessage type.

#### Implementation of

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md).[`type`](../interfaces/IButtonsResponseMessage.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12879](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12879)

Converts this ButtonsResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ButtonsResponseMessage`](ButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:12816](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12816)

Creates a new ButtonsResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md)

Properties to set

#### Returns

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

ButtonsResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ButtonsResponseMessage`](ButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:12842](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12842)

Decodes a ButtonsResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

ButtonsResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ButtonsResponseMessage`](ButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:12851](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12851)

Decodes a ButtonsResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

ButtonsResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12824](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12824)

Encodes the specified ButtonsResponseMessage message. Does not implicitly [verify](ButtonsResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md)

ButtonsResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12832](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12832)

Encodes the specified ButtonsResponseMessage message, length delimited. Does not implicitly [verify](ButtonsResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IButtonsResponseMessage`](../interfaces/IButtonsResponseMessage.md)

ButtonsResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ButtonsResponseMessage`](ButtonsResponseMessage.md)

Defined in: [WAProto/index.d.ts:12865](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12865)

Creates a ButtonsResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

ButtonsResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12886](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12886)

Gets the default type url for ButtonsResponseMessage

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

Defined in: [WAProto/index.d.ts:12873](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12873)

Creates a plain object from a ButtonsResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ButtonsResponseMessage`](ButtonsResponseMessage.md)

ButtonsResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12858](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12858)

Verifies a ButtonsResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
