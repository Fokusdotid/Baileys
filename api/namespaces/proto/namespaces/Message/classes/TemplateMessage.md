# Class: TemplateMessage

Defined in: [WAProto/index.d.ts:24170](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24170)

Represents a TemplateMessage.

## Implements

- [`ITemplateMessage`](../interfaces/ITemplateMessage.md)

## Constructors

### new TemplateMessage()

> **new TemplateMessage**(`properties`?): [`TemplateMessage`](TemplateMessage.md)

Defined in: [WAProto/index.d.ts:24176](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24176)

Constructs a new TemplateMessage.

#### Parameters

##### properties?

[`ITemplateMessage`](../interfaces/ITemplateMessage.md)

Properties to set

#### Returns

[`TemplateMessage`](TemplateMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:24179](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24179)

TemplateMessage contextInfo.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`contextInfo`](../interfaces/ITemplateMessage.md#contextinfo)

***

### format?

> `optional` **format**: `"fourRowTemplate"` \| `"hydratedFourRowTemplate"` \| `"interactiveMessageTemplate"`

Defined in: [WAProto/index.d.ts:24197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24197)

TemplateMessage format.

***

### fourRowTemplate?

> `optional` **fourRowTemplate**: `null` \| [`IFourRowTemplate`](../namespaces/TemplateMessage/interfaces/IFourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24188)

TemplateMessage fourRowTemplate.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`fourRowTemplate`](../interfaces/ITemplateMessage.md#fourrowtemplate)

***

### hydratedFourRowTemplate?

> `optional` **hydratedFourRowTemplate**: `null` \| [`IHydratedFourRowTemplate`](../namespaces/TemplateMessage/interfaces/IHydratedFourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24191](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24191)

TemplateMessage hydratedFourRowTemplate.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`hydratedFourRowTemplate`](../interfaces/ITemplateMessage.md#hydratedfourrowtemplate)

***

### hydratedTemplate?

> `optional` **hydratedTemplate**: `null` \| [`IHydratedFourRowTemplate`](../namespaces/TemplateMessage/interfaces/IHydratedFourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24182](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24182)

TemplateMessage hydratedTemplate.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`hydratedTemplate`](../interfaces/ITemplateMessage.md#hydratedtemplate)

***

### interactiveMessageTemplate?

> `optional` **interactiveMessageTemplate**: `null` \| [`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

Defined in: [WAProto/index.d.ts:24194](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24194)

TemplateMessage interactiveMessageTemplate.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`interactiveMessageTemplate`](../interfaces/ITemplateMessage.md#interactivemessagetemplate)

***

### templateId

> **templateId**: `string`

Defined in: [WAProto/index.d.ts:24185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24185)

TemplateMessage templateId.

#### Implementation of

[`ITemplateMessage`](../interfaces/ITemplateMessage.md).[`templateId`](../interfaces/ITemplateMessage.md#templateid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:24267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24267)

Converts this TemplateMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`TemplateMessage`](TemplateMessage.md)

Defined in: [WAProto/index.d.ts:24204](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24204)

Creates a new TemplateMessage instance using the specified properties.

#### Parameters

##### properties?

[`ITemplateMessage`](../interfaces/ITemplateMessage.md)

Properties to set

#### Returns

[`TemplateMessage`](TemplateMessage.md)

TemplateMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`TemplateMessage`](TemplateMessage.md)

Defined in: [WAProto/index.d.ts:24230](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24230)

Decodes a TemplateMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`TemplateMessage`](TemplateMessage.md)

TemplateMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`TemplateMessage`](TemplateMessage.md)

Defined in: [WAProto/index.d.ts:24239](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24239)

Decodes a TemplateMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`TemplateMessage`](TemplateMessage.md)

TemplateMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24212)

Encodes the specified TemplateMessage message. Does not implicitly [verify](TemplateMessage.md#verify) messages.

#### Parameters

##### message

[`ITemplateMessage`](../interfaces/ITemplateMessage.md)

TemplateMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24220)

Encodes the specified TemplateMessage message, length delimited. Does not implicitly [verify](TemplateMessage.md#verify) messages.

#### Parameters

##### message

[`ITemplateMessage`](../interfaces/ITemplateMessage.md)

TemplateMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`TemplateMessage`](TemplateMessage.md)

Defined in: [WAProto/index.d.ts:24253](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24253)

Creates a TemplateMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`TemplateMessage`](TemplateMessage.md)

TemplateMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:24274](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24274)

Gets the default type url for TemplateMessage

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

Defined in: [WAProto/index.d.ts:24261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24261)

Creates a plain object from a TemplateMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`TemplateMessage`](TemplateMessage.md)

TemplateMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:24246](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24246)

Verifies a TemplateMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
