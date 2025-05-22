# Class: ChatRowOpaqueData

Defined in: [WAProto/index.d.ts:2676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2676)

Represents a ChatRowOpaqueData.

## Implements

- [`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md)

## Constructors

### new ChatRowOpaqueData()

> **new ChatRowOpaqueData**(`properties`?): [`ChatRowOpaqueData`](ChatRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:2682](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2682)

Constructs a new ChatRowOpaqueData.

#### Parameters

##### properties?

[`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md)

Properties to set

#### Returns

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

## Properties

### draftMessage?

> `optional` **draftMessage**: `null` \| [`IDraftMessage`](../namespaces/ChatRowOpaqueData/interfaces/IDraftMessage.md)

Defined in: [WAProto/index.d.ts:2685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2685)

ChatRowOpaqueData draftMessage.

#### Implementation of

[`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md).[`draftMessage`](../interfaces/IChatRowOpaqueData.md#draftmessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:2755](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2755)

Converts this ChatRowOpaqueData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ChatRowOpaqueData`](ChatRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:2692](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2692)

Creates a new ChatRowOpaqueData instance using the specified properties.

#### Parameters

##### properties?

[`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md)

Properties to set

#### Returns

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

ChatRowOpaqueData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ChatRowOpaqueData`](ChatRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:2718](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2718)

Decodes a ChatRowOpaqueData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

ChatRowOpaqueData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ChatRowOpaqueData`](ChatRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:2727](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2727)

Decodes a ChatRowOpaqueData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

ChatRowOpaqueData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2700](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2700)

Encodes the specified ChatRowOpaqueData message. Does not implicitly [verify](ChatRowOpaqueData.md#verify) messages.

#### Parameters

##### message

[`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md)

ChatRowOpaqueData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2708](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2708)

Encodes the specified ChatRowOpaqueData message, length delimited. Does not implicitly [verify](ChatRowOpaqueData.md#verify) messages.

#### Parameters

##### message

[`IChatRowOpaqueData`](../interfaces/IChatRowOpaqueData.md)

ChatRowOpaqueData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ChatRowOpaqueData`](ChatRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:2741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2741)

Creates a ChatRowOpaqueData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

ChatRowOpaqueData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:2762](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2762)

Gets the default type url for ChatRowOpaqueData

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

Defined in: [WAProto/index.d.ts:2749](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2749)

Creates a plain object from a ChatRowOpaqueData message. Also converts values to other types if specified.

#### Parameters

##### message

[`ChatRowOpaqueData`](ChatRowOpaqueData.md)

ChatRowOpaqueData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:2734](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2734)

Verifies a ChatRowOpaqueData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
