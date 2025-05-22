# Class: LabelReorderingAction

Defined in: [WAProto/index.d.ts:34026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34026)

Represents a LabelReorderingAction.

## Implements

- [`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md)

## Constructors

### new LabelReorderingAction()

> **new LabelReorderingAction**(`properties`?): [`LabelReorderingAction`](LabelReorderingAction.md)

Defined in: [WAProto/index.d.ts:34032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34032)

Constructs a new LabelReorderingAction.

#### Parameters

##### properties?

[`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md)

Properties to set

#### Returns

[`LabelReorderingAction`](LabelReorderingAction.md)

## Properties

### sortedLabelIds

> **sortedLabelIds**: `number`[]

Defined in: [WAProto/index.d.ts:34035](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34035)

LabelReorderingAction sortedLabelIds.

#### Implementation of

[`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md).[`sortedLabelIds`](../interfaces/ILabelReorderingAction.md#sortedlabelids)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34105)

Converts this LabelReorderingAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`LabelReorderingAction`](LabelReorderingAction.md)

Defined in: [WAProto/index.d.ts:34042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34042)

Creates a new LabelReorderingAction instance using the specified properties.

#### Parameters

##### properties?

[`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md)

Properties to set

#### Returns

[`LabelReorderingAction`](LabelReorderingAction.md)

LabelReorderingAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`LabelReorderingAction`](LabelReorderingAction.md)

Defined in: [WAProto/index.d.ts:34068](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34068)

Decodes a LabelReorderingAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`LabelReorderingAction`](LabelReorderingAction.md)

LabelReorderingAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`LabelReorderingAction`](LabelReorderingAction.md)

Defined in: [WAProto/index.d.ts:34077](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34077)

Decodes a LabelReorderingAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`LabelReorderingAction`](LabelReorderingAction.md)

LabelReorderingAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34050](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34050)

Encodes the specified LabelReorderingAction message. Does not implicitly [verify](LabelReorderingAction.md#verify) messages.

#### Parameters

##### message

[`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md)

LabelReorderingAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34058](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34058)

Encodes the specified LabelReorderingAction message, length delimited. Does not implicitly [verify](LabelReorderingAction.md#verify) messages.

#### Parameters

##### message

[`ILabelReorderingAction`](../interfaces/ILabelReorderingAction.md)

LabelReorderingAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`LabelReorderingAction`](LabelReorderingAction.md)

Defined in: [WAProto/index.d.ts:34091](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34091)

Creates a LabelReorderingAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`LabelReorderingAction`](LabelReorderingAction.md)

LabelReorderingAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34112](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34112)

Gets the default type url for LabelReorderingAction

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

Defined in: [WAProto/index.d.ts:34099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34099)

Creates a plain object from a LabelReorderingAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`LabelReorderingAction`](LabelReorderingAction.md)

LabelReorderingAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34084](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34084)

Verifies a LabelReorderingAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
