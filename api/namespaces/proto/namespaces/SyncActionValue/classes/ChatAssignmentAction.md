# Class: ChatAssignmentAction

Defined in: [WAProto/index.d.ts:32590](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32590)

Represents a ChatAssignmentAction.

## Implements

- [`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md)

## Constructors

### new ChatAssignmentAction()

> **new ChatAssignmentAction**(`properties`?): [`ChatAssignmentAction`](ChatAssignmentAction.md)

Defined in: [WAProto/index.d.ts:32596](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32596)

Constructs a new ChatAssignmentAction.

#### Parameters

##### properties?

[`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md)

Properties to set

#### Returns

[`ChatAssignmentAction`](ChatAssignmentAction.md)

## Properties

### deviceAgentID

> **deviceAgentID**: `string`

Defined in: [WAProto/index.d.ts:32599](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32599)

ChatAssignmentAction deviceAgentID.

#### Implementation of

[`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md).[`deviceAgentID`](../interfaces/IChatAssignmentAction.md#deviceagentid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32669](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32669)

Converts this ChatAssignmentAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ChatAssignmentAction`](ChatAssignmentAction.md)

Defined in: [WAProto/index.d.ts:32606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32606)

Creates a new ChatAssignmentAction instance using the specified properties.

#### Parameters

##### properties?

[`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md)

Properties to set

#### Returns

[`ChatAssignmentAction`](ChatAssignmentAction.md)

ChatAssignmentAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ChatAssignmentAction`](ChatAssignmentAction.md)

Defined in: [WAProto/index.d.ts:32632](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32632)

Decodes a ChatAssignmentAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ChatAssignmentAction`](ChatAssignmentAction.md)

ChatAssignmentAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ChatAssignmentAction`](ChatAssignmentAction.md)

Defined in: [WAProto/index.d.ts:32641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32641)

Decodes a ChatAssignmentAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ChatAssignmentAction`](ChatAssignmentAction.md)

ChatAssignmentAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32614)

Encodes the specified ChatAssignmentAction message. Does not implicitly [verify](ChatAssignmentAction.md#verify) messages.

#### Parameters

##### message

[`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md)

ChatAssignmentAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32622](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32622)

Encodes the specified ChatAssignmentAction message, length delimited. Does not implicitly [verify](ChatAssignmentAction.md#verify) messages.

#### Parameters

##### message

[`IChatAssignmentAction`](../interfaces/IChatAssignmentAction.md)

ChatAssignmentAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ChatAssignmentAction`](ChatAssignmentAction.md)

Defined in: [WAProto/index.d.ts:32655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32655)

Creates a ChatAssignmentAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ChatAssignmentAction`](ChatAssignmentAction.md)

ChatAssignmentAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32676)

Gets the default type url for ChatAssignmentAction

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

Defined in: [WAProto/index.d.ts:32663](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32663)

Creates a plain object from a ChatAssignmentAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`ChatAssignmentAction`](ChatAssignmentAction.md)

ChatAssignmentAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32648](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32648)

Verifies a ChatAssignmentAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
