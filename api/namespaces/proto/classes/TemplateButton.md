# Class: TemplateButton

Defined in: [WAProto/index.d.ts:38137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38137)

Represents a TemplateButton.

## Implements

- [`ITemplateButton`](../interfaces/ITemplateButton.md)

## Constructors

### new TemplateButton()

> **new TemplateButton**(`properties`?): [`TemplateButton`](TemplateButton.md)

Defined in: [WAProto/index.d.ts:38143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38143)

Constructs a new TemplateButton.

#### Parameters

##### properties?

[`ITemplateButton`](../interfaces/ITemplateButton.md)

Properties to set

#### Returns

[`TemplateButton`](TemplateButton.md)

## Properties

### button?

> `optional` **button**: `"quickReplyButton"` \| `"urlButton"` \| `"callButton"`

Defined in: [WAProto/index.d.ts:38158](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38158)

TemplateButton button.

***

### callButton?

> `optional` **callButton**: `null` \| [`ICallButton`](../namespaces/TemplateButton/interfaces/ICallButton.md)

Defined in: [WAProto/index.d.ts:38155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38155)

TemplateButton callButton.

#### Implementation of

[`ITemplateButton`](../interfaces/ITemplateButton.md).[`callButton`](../interfaces/ITemplateButton.md#callbutton)

***

### index

> **index**: `number`

Defined in: [WAProto/index.d.ts:38146](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38146)

TemplateButton index.

#### Implementation of

[`ITemplateButton`](../interfaces/ITemplateButton.md).[`index`](../interfaces/ITemplateButton.md#index)

***

### quickReplyButton?

> `optional` **quickReplyButton**: `null` \| [`IQuickReplyButton`](../namespaces/TemplateButton/interfaces/IQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38149)

TemplateButton quickReplyButton.

#### Implementation of

[`ITemplateButton`](../interfaces/ITemplateButton.md).[`quickReplyButton`](../interfaces/ITemplateButton.md#quickreplybutton)

***

### urlButton?

> `optional` **urlButton**: `null` \| [`IURLButton`](../namespaces/TemplateButton/interfaces/IURLButton.md)

Defined in: [WAProto/index.d.ts:38152](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38152)

TemplateButton urlButton.

#### Implementation of

[`ITemplateButton`](../interfaces/ITemplateButton.md).[`urlButton`](../interfaces/ITemplateButton.md#urlbutton)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38228)

Converts this TemplateButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`TemplateButton`](TemplateButton.md)

Defined in: [WAProto/index.d.ts:38165](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38165)

Creates a new TemplateButton instance using the specified properties.

#### Parameters

##### properties?

[`ITemplateButton`](../interfaces/ITemplateButton.md)

Properties to set

#### Returns

[`TemplateButton`](TemplateButton.md)

TemplateButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`TemplateButton`](TemplateButton.md)

Defined in: [WAProto/index.d.ts:38191](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38191)

Decodes a TemplateButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`TemplateButton`](TemplateButton.md)

TemplateButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`TemplateButton`](TemplateButton.md)

Defined in: [WAProto/index.d.ts:38200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38200)

Decodes a TemplateButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`TemplateButton`](TemplateButton.md)

TemplateButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38173](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38173)

Encodes the specified TemplateButton message. Does not implicitly [verify](TemplateButton.md#verify) messages.

#### Parameters

##### message

[`ITemplateButton`](../interfaces/ITemplateButton.md)

TemplateButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38181](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38181)

Encodes the specified TemplateButton message, length delimited. Does not implicitly [verify](TemplateButton.md#verify) messages.

#### Parameters

##### message

[`ITemplateButton`](../interfaces/ITemplateButton.md)

TemplateButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`TemplateButton`](TemplateButton.md)

Defined in: [WAProto/index.d.ts:38214](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38214)

Creates a TemplateButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`TemplateButton`](TemplateButton.md)

TemplateButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38235](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38235)

Gets the default type url for TemplateButton

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

Defined in: [WAProto/index.d.ts:38222](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38222)

Creates a plain object from a TemplateButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`TemplateButton`](TemplateButton.md)

TemplateButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38207)

Verifies a TemplateButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
