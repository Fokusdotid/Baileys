# Class: QuickReplyAction

Defined in: [WAProto/index.d.ts:35782](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35782)

Represents a QuickReplyAction.

## Implements

- [`IQuickReplyAction`](../interfaces/IQuickReplyAction.md)

## Constructors

### new QuickReplyAction()

> **new QuickReplyAction**(`properties`?): [`QuickReplyAction`](QuickReplyAction.md)

Defined in: [WAProto/index.d.ts:35788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35788)

Constructs a new QuickReplyAction.

#### Parameters

##### properties?

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md)

Properties to set

#### Returns

[`QuickReplyAction`](QuickReplyAction.md)

## Properties

### count

> **count**: `number`

Defined in: [WAProto/index.d.ts:35800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35800)

QuickReplyAction count.

#### Implementation of

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md).[`count`](../interfaces/IQuickReplyAction.md#count)

***

### deleted

> **deleted**: `boolean`

Defined in: [WAProto/index.d.ts:35803](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35803)

QuickReplyAction deleted.

#### Implementation of

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md).[`deleted`](../interfaces/IQuickReplyAction.md#deleted)

***

### keywords

> **keywords**: `string`[]

Defined in: [WAProto/index.d.ts:35797](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35797)

QuickReplyAction keywords.

#### Implementation of

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md).[`keywords`](../interfaces/IQuickReplyAction.md#keywords)

***

### message

> **message**: `string`

Defined in: [WAProto/index.d.ts:35794](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35794)

QuickReplyAction message.

#### Implementation of

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md).[`message`](../interfaces/IQuickReplyAction.md#message)

***

### shortcut

> **shortcut**: `string`

Defined in: [WAProto/index.d.ts:35791](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35791)

QuickReplyAction shortcut.

#### Implementation of

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md).[`shortcut`](../interfaces/IQuickReplyAction.md#shortcut)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35873](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35873)

Converts this QuickReplyAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`QuickReplyAction`](QuickReplyAction.md)

Defined in: [WAProto/index.d.ts:35810](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35810)

Creates a new QuickReplyAction instance using the specified properties.

#### Parameters

##### properties?

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md)

Properties to set

#### Returns

[`QuickReplyAction`](QuickReplyAction.md)

QuickReplyAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`QuickReplyAction`](QuickReplyAction.md)

Defined in: [WAProto/index.d.ts:35836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35836)

Decodes a QuickReplyAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`QuickReplyAction`](QuickReplyAction.md)

QuickReplyAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`QuickReplyAction`](QuickReplyAction.md)

Defined in: [WAProto/index.d.ts:35845](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35845)

Decodes a QuickReplyAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`QuickReplyAction`](QuickReplyAction.md)

QuickReplyAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35818](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35818)

Encodes the specified QuickReplyAction message. Does not implicitly [verify](QuickReplyAction.md#verify) messages.

#### Parameters

##### message

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md)

QuickReplyAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35826](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35826)

Encodes the specified QuickReplyAction message, length delimited. Does not implicitly [verify](QuickReplyAction.md#verify) messages.

#### Parameters

##### message

[`IQuickReplyAction`](../interfaces/IQuickReplyAction.md)

QuickReplyAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`QuickReplyAction`](QuickReplyAction.md)

Defined in: [WAProto/index.d.ts:35859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35859)

Creates a QuickReplyAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`QuickReplyAction`](QuickReplyAction.md)

QuickReplyAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35880](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35880)

Gets the default type url for QuickReplyAction

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

Defined in: [WAProto/index.d.ts:35867](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35867)

Creates a plain object from a QuickReplyAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`QuickReplyAction`](QuickReplyAction.md)

QuickReplyAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35852](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35852)

Verifies a QuickReplyAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
