# Class: ChatAssignmentOpenedStatusAction

Defined in: [WAProto/index.d.ts:32687](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32687)

Represents a ChatAssignmentOpenedStatusAction.

## Implements

- [`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md)

## Constructors

### new ChatAssignmentOpenedStatusAction()

> **new ChatAssignmentOpenedStatusAction**(`properties`?): [`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

Defined in: [WAProto/index.d.ts:32693](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32693)

Constructs a new ChatAssignmentOpenedStatusAction.

#### Parameters

##### properties?

[`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md)

Properties to set

#### Returns

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

## Properties

### chatOpened

> **chatOpened**: `boolean`

Defined in: [WAProto/index.d.ts:32696](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32696)

ChatAssignmentOpenedStatusAction chatOpened.

#### Implementation of

[`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md).[`chatOpened`](../interfaces/IChatAssignmentOpenedStatusAction.md#chatopened)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32766](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32766)

Converts this ChatAssignmentOpenedStatusAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

Defined in: [WAProto/index.d.ts:32703](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32703)

Creates a new ChatAssignmentOpenedStatusAction instance using the specified properties.

#### Parameters

##### properties?

[`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md)

Properties to set

#### Returns

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

Defined in: [WAProto/index.d.ts:32729](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32729)

Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

Defined in: [WAProto/index.d.ts:32738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32738)

Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32711](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32711)

Encodes the specified ChatAssignmentOpenedStatusAction message. Does not implicitly [verify](ChatAssignmentOpenedStatusAction.md#verify) messages.

#### Parameters

##### message

[`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32719](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32719)

Encodes the specified ChatAssignmentOpenedStatusAction message, length delimited. Does not implicitly [verify](ChatAssignmentOpenedStatusAction.md#verify) messages.

#### Parameters

##### message

[`IChatAssignmentOpenedStatusAction`](../interfaces/IChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

Defined in: [WAProto/index.d.ts:32752](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32752)

Creates a ChatAssignmentOpenedStatusAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32773](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32773)

Gets the default type url for ChatAssignmentOpenedStatusAction

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

Defined in: [WAProto/index.d.ts:32760](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32760)

Creates a plain object from a ChatAssignmentOpenedStatusAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`ChatAssignmentOpenedStatusAction`](ChatAssignmentOpenedStatusAction.md)

ChatAssignmentOpenedStatusAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32745](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32745)

Verifies a ChatAssignmentOpenedStatusAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
