# Class: QuickReplyButton

Defined in: [WAProto/index.d.ts:38354](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38354)

Represents a QuickReplyButton.

## Implements

- [`IQuickReplyButton`](../interfaces/IQuickReplyButton.md)

## Constructors

### new QuickReplyButton()

> **new QuickReplyButton**(`properties`?): [`QuickReplyButton`](QuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38360)

Constructs a new QuickReplyButton.

#### Parameters

##### properties?

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md)

Properties to set

#### Returns

[`QuickReplyButton`](QuickReplyButton.md)

## Properties

### displayText?

> `optional` **displayText**: `null` \| [`IHighlyStructuredMessage`](../../Message/interfaces/IHighlyStructuredMessage.md)

Defined in: [WAProto/index.d.ts:38363](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38363)

QuickReplyButton displayText.

#### Implementation of

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md).[`displayText`](../interfaces/IQuickReplyButton.md#displaytext)

***

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:38366](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38366)

QuickReplyButton id.

#### Implementation of

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md).[`id`](../interfaces/IQuickReplyButton.md#id)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38436](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38436)

Converts this QuickReplyButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`QuickReplyButton`](QuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38373](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38373)

Creates a new QuickReplyButton instance using the specified properties.

#### Parameters

##### properties?

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md)

Properties to set

#### Returns

[`QuickReplyButton`](QuickReplyButton.md)

QuickReplyButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`QuickReplyButton`](QuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38399)

Decodes a QuickReplyButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`QuickReplyButton`](QuickReplyButton.md)

QuickReplyButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`QuickReplyButton`](QuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38408)

Decodes a QuickReplyButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`QuickReplyButton`](QuickReplyButton.md)

QuickReplyButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38381)

Encodes the specified QuickReplyButton message. Does not implicitly [verify](QuickReplyButton.md#verify) messages.

#### Parameters

##### message

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md)

QuickReplyButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38389](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38389)

Encodes the specified QuickReplyButton message, length delimited. Does not implicitly [verify](QuickReplyButton.md#verify) messages.

#### Parameters

##### message

[`IQuickReplyButton`](../interfaces/IQuickReplyButton.md)

QuickReplyButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`QuickReplyButton`](QuickReplyButton.md)

Defined in: [WAProto/index.d.ts:38422](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38422)

Creates a QuickReplyButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`QuickReplyButton`](QuickReplyButton.md)

QuickReplyButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38443](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38443)

Gets the default type url for QuickReplyButton

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

Defined in: [WAProto/index.d.ts:38430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38430)

Creates a plain object from a QuickReplyButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`QuickReplyButton`](QuickReplyButton.md)

QuickReplyButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38415](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38415)

Verifies a QuickReplyButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
