# Class: CommentMetadata

Defined in: [WAProto/index.d.ts:4501](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4501)

Represents a CommentMetadata.

## Implements

- [`ICommentMetadata`](../interfaces/ICommentMetadata.md)

## Constructors

### new CommentMetadata()

> **new CommentMetadata**(`properties`?): [`CommentMetadata`](CommentMetadata.md)

Defined in: [WAProto/index.d.ts:4507](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4507)

Constructs a new CommentMetadata.

#### Parameters

##### properties?

[`ICommentMetadata`](../interfaces/ICommentMetadata.md)

Properties to set

#### Returns

[`CommentMetadata`](CommentMetadata.md)

## Properties

### commentParentKey?

> `optional` **commentParentKey**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:4510](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4510)

CommentMetadata commentParentKey.

#### Implementation of

[`ICommentMetadata`](../interfaces/ICommentMetadata.md).[`commentParentKey`](../interfaces/ICommentMetadata.md#commentparentkey)

***

### replyCount

> **replyCount**: `number`

Defined in: [WAProto/index.d.ts:4513](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4513)

CommentMetadata replyCount.

#### Implementation of

[`ICommentMetadata`](../interfaces/ICommentMetadata.md).[`replyCount`](../interfaces/ICommentMetadata.md#replycount)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:4583](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4583)

Converts this CommentMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CommentMetadata`](CommentMetadata.md)

Defined in: [WAProto/index.d.ts:4520](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4520)

Creates a new CommentMetadata instance using the specified properties.

#### Parameters

##### properties?

[`ICommentMetadata`](../interfaces/ICommentMetadata.md)

Properties to set

#### Returns

[`CommentMetadata`](CommentMetadata.md)

CommentMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CommentMetadata`](CommentMetadata.md)

Defined in: [WAProto/index.d.ts:4546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4546)

Decodes a CommentMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CommentMetadata`](CommentMetadata.md)

CommentMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CommentMetadata`](CommentMetadata.md)

Defined in: [WAProto/index.d.ts:4555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4555)

Decodes a CommentMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CommentMetadata`](CommentMetadata.md)

CommentMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4528](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4528)

Encodes the specified CommentMetadata message. Does not implicitly [verify](CommentMetadata.md#verify) messages.

#### Parameters

##### message

[`ICommentMetadata`](../interfaces/ICommentMetadata.md)

CommentMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4536](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4536)

Encodes the specified CommentMetadata message, length delimited. Does not implicitly [verify](CommentMetadata.md#verify) messages.

#### Parameters

##### message

[`ICommentMetadata`](../interfaces/ICommentMetadata.md)

CommentMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CommentMetadata`](CommentMetadata.md)

Defined in: [WAProto/index.d.ts:4569](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4569)

Creates a CommentMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CommentMetadata`](CommentMetadata.md)

CommentMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:4590](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4590)

Gets the default type url for CommentMetadata

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

Defined in: [WAProto/index.d.ts:4577](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4577)

Creates a plain object from a CommentMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`CommentMetadata`](CommentMetadata.md)

CommentMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:4562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4562)

Verifies a CommentMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
