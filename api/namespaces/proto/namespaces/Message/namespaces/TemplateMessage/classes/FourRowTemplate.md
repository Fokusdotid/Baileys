# Class: FourRowTemplate

Defined in: [WAProto/index.d.ts:24308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24308)

Represents a FourRowTemplate.

## Implements

- [`IFourRowTemplate`](../interfaces/IFourRowTemplate.md)

## Constructors

### new FourRowTemplate()

> **new FourRowTemplate**(`properties`?): [`FourRowTemplate`](FourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24314](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24314)

Constructs a new FourRowTemplate.

#### Parameters

##### properties?

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md)

Properties to set

#### Returns

[`FourRowTemplate`](FourRowTemplate.md)

## Properties

### buttons

> **buttons**: [`ITemplateButton`](../../../../../interfaces/ITemplateButton.md)[]

Defined in: [WAProto/index.d.ts:24323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24323)

FourRowTemplate buttons.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`buttons`](../interfaces/IFourRowTemplate.md#buttons)

***

### content?

> `optional` **content**: `null` \| [`IHighlyStructuredMessage`](../../../interfaces/IHighlyStructuredMessage.md)

Defined in: [WAProto/index.d.ts:24317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24317)

FourRowTemplate content.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`content`](../interfaces/IFourRowTemplate.md#content)

***

### documentMessage?

> `optional` **documentMessage**: `null` \| [`IDocumentMessage`](../../../interfaces/IDocumentMessage.md)

Defined in: [WAProto/index.d.ts:24326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24326)

FourRowTemplate documentMessage.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`documentMessage`](../interfaces/IFourRowTemplate.md#documentmessage)

***

### footer?

> `optional` **footer**: `null` \| [`IHighlyStructuredMessage`](../../../interfaces/IHighlyStructuredMessage.md)

Defined in: [WAProto/index.d.ts:24320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24320)

FourRowTemplate footer.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`footer`](../interfaces/IFourRowTemplate.md#footer)

***

### highlyStructuredMessage?

> `optional` **highlyStructuredMessage**: `null` \| [`IHighlyStructuredMessage`](../../../interfaces/IHighlyStructuredMessage.md)

Defined in: [WAProto/index.d.ts:24329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24329)

FourRowTemplate highlyStructuredMessage.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`highlyStructuredMessage`](../interfaces/IFourRowTemplate.md#highlystructuredmessage)

***

### imageMessage?

> `optional` **imageMessage**: `null` \| [`IImageMessage`](../../../interfaces/IImageMessage.md)

Defined in: [WAProto/index.d.ts:24332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24332)

FourRowTemplate imageMessage.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`imageMessage`](../interfaces/IFourRowTemplate.md#imagemessage)

***

### locationMessage?

> `optional` **locationMessage**: `null` \| [`ILocationMessage`](../../../interfaces/ILocationMessage.md)

Defined in: [WAProto/index.d.ts:24338](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24338)

FourRowTemplate locationMessage.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`locationMessage`](../interfaces/IFourRowTemplate.md#locationmessage)

***

### title?

> `optional` **title**: `"imageMessage"` \| `"locationMessage"` \| `"documentMessage"` \| `"videoMessage"` \| `"highlyStructuredMessage"`

Defined in: [WAProto/index.d.ts:24341](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24341)

FourRowTemplate title.

***

### videoMessage?

> `optional` **videoMessage**: `null` \| [`IVideoMessage`](../../../interfaces/IVideoMessage.md)

Defined in: [WAProto/index.d.ts:24335](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24335)

FourRowTemplate videoMessage.

#### Implementation of

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md).[`videoMessage`](../interfaces/IFourRowTemplate.md#videomessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:24411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24411)

Converts this FourRowTemplate to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`FourRowTemplate`](FourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24348](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24348)

Creates a new FourRowTemplate instance using the specified properties.

#### Parameters

##### properties?

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md)

Properties to set

#### Returns

[`FourRowTemplate`](FourRowTemplate.md)

FourRowTemplate instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`FourRowTemplate`](FourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24374](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24374)

Decodes a FourRowTemplate message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`FourRowTemplate`](FourRowTemplate.md)

FourRowTemplate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`FourRowTemplate`](FourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24383](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24383)

Decodes a FourRowTemplate message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`FourRowTemplate`](FourRowTemplate.md)

FourRowTemplate

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24356](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24356)

Encodes the specified FourRowTemplate message. Does not implicitly [verify](FourRowTemplate.md#verify) messages.

#### Parameters

##### message

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md)

FourRowTemplate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24364](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24364)

Encodes the specified FourRowTemplate message, length delimited. Does not implicitly [verify](FourRowTemplate.md#verify) messages.

#### Parameters

##### message

[`IFourRowTemplate`](../interfaces/IFourRowTemplate.md)

FourRowTemplate message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`FourRowTemplate`](FourRowTemplate.md)

Defined in: [WAProto/index.d.ts:24397](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24397)

Creates a FourRowTemplate message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`FourRowTemplate`](FourRowTemplate.md)

FourRowTemplate

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:24418](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24418)

Gets the default type url for FourRowTemplate

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

Defined in: [WAProto/index.d.ts:24405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24405)

Creates a plain object from a FourRowTemplate message. Also converts values to other types if specified.

#### Parameters

##### message

[`FourRowTemplate`](FourRowTemplate.md)

FourRowTemplate

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:24390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24390)

Verifies a FourRowTemplate message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
