# Class: HydratedQuickReplyButton

Defined in: [WAProto/index.d.ts:8844](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8844)

Represents a HydratedQuickReplyButton.

## Implements

- [`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md)

## Constructors

### new HydratedQuickReplyButton()

> **new HydratedQuickReplyButton**(`properties`?): [`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:8850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8850)

Constructs a new HydratedQuickReplyButton.

#### Parameters

##### properties?

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md)

Properties to set

#### Returns

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

## Properties

### displayText

> **displayText**: `string`

Defined in: [WAProto/index.d.ts:8853](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8853)

HydratedQuickReplyButton displayText.

#### Implementation of

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md).[`displayText`](../interfaces/IHydratedQuickReplyButton.md#displaytext)

***

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:8856](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8856)

HydratedQuickReplyButton id.

#### Implementation of

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md).[`id`](../interfaces/IHydratedQuickReplyButton.md#id)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8926](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8926)

Converts this HydratedQuickReplyButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:8863](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8863)

Creates a new HydratedQuickReplyButton instance using the specified properties.

#### Parameters

##### properties?

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md)

Properties to set

#### Returns

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

HydratedQuickReplyButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:8889](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8889)

Decodes a HydratedQuickReplyButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

HydratedQuickReplyButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:8898](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8898)

Decodes a HydratedQuickReplyButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

HydratedQuickReplyButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8871](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8871)

Encodes the specified HydratedQuickReplyButton message. Does not implicitly [verify](HydratedQuickReplyButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md)

HydratedQuickReplyButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8879](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8879)

Encodes the specified HydratedQuickReplyButton message, length delimited. Does not implicitly [verify](HydratedQuickReplyButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedQuickReplyButton`](../interfaces/IHydratedQuickReplyButton.md)

HydratedQuickReplyButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

Defined in: [WAProto/index.d.ts:8912](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8912)

Creates a HydratedQuickReplyButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

HydratedQuickReplyButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8933](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8933)

Gets the default type url for HydratedQuickReplyButton

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

Defined in: [WAProto/index.d.ts:8920](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8920)

Creates a plain object from a HydratedQuickReplyButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`HydratedQuickReplyButton`](HydratedQuickReplyButton.md)

HydratedQuickReplyButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8905)

Verifies a HydratedQuickReplyButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
