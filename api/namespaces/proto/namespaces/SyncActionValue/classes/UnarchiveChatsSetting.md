# Class: UnarchiveChatsSetting

Defined in: [WAProto/index.d.ts:36967](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36967)

Represents an UnarchiveChatsSetting.

## Implements

- [`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md)

## Constructors

### new UnarchiveChatsSetting()

> **new UnarchiveChatsSetting**(`properties`?): [`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

Defined in: [WAProto/index.d.ts:36973](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36973)

Constructs a new UnarchiveChatsSetting.

#### Parameters

##### properties?

[`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md)

Properties to set

#### Returns

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

## Properties

### unarchiveChats

> **unarchiveChats**: `boolean`

Defined in: [WAProto/index.d.ts:36976](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36976)

UnarchiveChatsSetting unarchiveChats.

#### Implementation of

[`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md).[`unarchiveChats`](../interfaces/IUnarchiveChatsSetting.md#unarchivechats)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37046)

Converts this UnarchiveChatsSetting to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

Defined in: [WAProto/index.d.ts:36983](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36983)

Creates a new UnarchiveChatsSetting instance using the specified properties.

#### Parameters

##### properties?

[`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md)

Properties to set

#### Returns

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

UnarchiveChatsSetting instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

Defined in: [WAProto/index.d.ts:37009](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37009)

Decodes an UnarchiveChatsSetting message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

UnarchiveChatsSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

Defined in: [WAProto/index.d.ts:37018](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37018)

Decodes an UnarchiveChatsSetting message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

UnarchiveChatsSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36991](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36991)

Encodes the specified UnarchiveChatsSetting message. Does not implicitly [verify](UnarchiveChatsSetting.md#verify) messages.

#### Parameters

##### message

[`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md)

UnarchiveChatsSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36999](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36999)

Encodes the specified UnarchiveChatsSetting message, length delimited. Does not implicitly [verify](UnarchiveChatsSetting.md#verify) messages.

#### Parameters

##### message

[`IUnarchiveChatsSetting`](../interfaces/IUnarchiveChatsSetting.md)

UnarchiveChatsSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

Defined in: [WAProto/index.d.ts:37032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37032)

Creates an UnarchiveChatsSetting message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

UnarchiveChatsSetting

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37053](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37053)

Gets the default type url for UnarchiveChatsSetting

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

Defined in: [WAProto/index.d.ts:37040](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37040)

Creates a plain object from an UnarchiveChatsSetting message. Also converts values to other types if specified.

#### Parameters

##### message

[`UnarchiveChatsSetting`](UnarchiveChatsSetting.md)

UnarchiveChatsSetting

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37025](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37025)

Verifies an UnarchiveChatsSetting message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
