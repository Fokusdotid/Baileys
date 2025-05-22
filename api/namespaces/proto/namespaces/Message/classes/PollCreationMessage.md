# Class: PollCreationMessage

Defined in: [WAProto/index.d.ts:21469](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21469)

Represents a PollCreationMessage.

## Implements

- [`IPollCreationMessage`](../interfaces/IPollCreationMessage.md)

## Constructors

### new PollCreationMessage()

> **new PollCreationMessage**(`properties`?): [`PollCreationMessage`](PollCreationMessage.md)

Defined in: [WAProto/index.d.ts:21475](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21475)

Constructs a new PollCreationMessage.

#### Parameters

##### properties?

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md)

Properties to set

#### Returns

[`PollCreationMessage`](PollCreationMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:21490](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21490)

PollCreationMessage contextInfo.

#### Implementation of

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md).[`contextInfo`](../interfaces/IPollCreationMessage.md#contextinfo)

***

### encKey

> **encKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:21478](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21478)

PollCreationMessage encKey.

#### Implementation of

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md).[`encKey`](../interfaces/IPollCreationMessage.md#enckey)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:21481](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21481)

PollCreationMessage name.

#### Implementation of

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md).[`name`](../interfaces/IPollCreationMessage.md#name)

***

### options

> **options**: [`IOption`](../namespaces/PollCreationMessage/interfaces/IOption.md)[]

Defined in: [WAProto/index.d.ts:21484](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21484)

PollCreationMessage options.

#### Implementation of

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md).[`options`](../interfaces/IPollCreationMessage.md#options)

***

### selectableOptionsCount

> **selectableOptionsCount**: `number`

Defined in: [WAProto/index.d.ts:21487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21487)

PollCreationMessage selectableOptionsCount.

#### Implementation of

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md).[`selectableOptionsCount`](../interfaces/IPollCreationMessage.md#selectableoptionscount)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21560](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21560)

Converts this PollCreationMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollCreationMessage`](PollCreationMessage.md)

Defined in: [WAProto/index.d.ts:21497](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21497)

Creates a new PollCreationMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md)

Properties to set

#### Returns

[`PollCreationMessage`](PollCreationMessage.md)

PollCreationMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollCreationMessage`](PollCreationMessage.md)

Defined in: [WAProto/index.d.ts:21523](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21523)

Decodes a PollCreationMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollCreationMessage`](PollCreationMessage.md)

PollCreationMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollCreationMessage`](PollCreationMessage.md)

Defined in: [WAProto/index.d.ts:21532](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21532)

Decodes a PollCreationMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollCreationMessage`](PollCreationMessage.md)

PollCreationMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21505](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21505)

Encodes the specified PollCreationMessage message. Does not implicitly [verify](PollCreationMessage.md#verify) messages.

#### Parameters

##### message

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md)

PollCreationMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21513](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21513)

Encodes the specified PollCreationMessage message, length delimited. Does not implicitly [verify](PollCreationMessage.md#verify) messages.

#### Parameters

##### message

[`IPollCreationMessage`](../interfaces/IPollCreationMessage.md)

PollCreationMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollCreationMessage`](PollCreationMessage.md)

Defined in: [WAProto/index.d.ts:21546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21546)

Creates a PollCreationMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollCreationMessage`](PollCreationMessage.md)

PollCreationMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21567](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21567)

Gets the default type url for PollCreationMessage

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

Defined in: [WAProto/index.d.ts:21554](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21554)

Creates a plain object from a PollCreationMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollCreationMessage`](PollCreationMessage.md)

PollCreationMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21539](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21539)

Verifies a PollCreationMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
