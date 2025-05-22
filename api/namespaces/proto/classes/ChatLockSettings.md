# Class: ChatLockSettings

Defined in: [WAProto/index.d.ts:2576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2576)

Represents a ChatLockSettings.

## Implements

- [`IChatLockSettings`](../interfaces/IChatLockSettings.md)

## Constructors

### new ChatLockSettings()

> **new ChatLockSettings**(`properties`?): [`ChatLockSettings`](ChatLockSettings.md)

Defined in: [WAProto/index.d.ts:2582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2582)

Constructs a new ChatLockSettings.

#### Parameters

##### properties?

[`IChatLockSettings`](../interfaces/IChatLockSettings.md)

Properties to set

#### Returns

[`ChatLockSettings`](ChatLockSettings.md)

## Properties

### hideLockedChats

> **hideLockedChats**: `boolean`

Defined in: [WAProto/index.d.ts:2585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2585)

ChatLockSettings hideLockedChats.

#### Implementation of

[`IChatLockSettings`](../interfaces/IChatLockSettings.md).[`hideLockedChats`](../interfaces/IChatLockSettings.md#hidelockedchats)

***

### secretCode?

> `optional` **secretCode**: `null` \| [`IUserPassword`](../interfaces/IUserPassword.md)

Defined in: [WAProto/index.d.ts:2588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2588)

ChatLockSettings secretCode.

#### Implementation of

[`IChatLockSettings`](../interfaces/IChatLockSettings.md).[`secretCode`](../interfaces/IChatLockSettings.md#secretcode)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:2658](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2658)

Converts this ChatLockSettings to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ChatLockSettings`](ChatLockSettings.md)

Defined in: [WAProto/index.d.ts:2595](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2595)

Creates a new ChatLockSettings instance using the specified properties.

#### Parameters

##### properties?

[`IChatLockSettings`](../interfaces/IChatLockSettings.md)

Properties to set

#### Returns

[`ChatLockSettings`](ChatLockSettings.md)

ChatLockSettings instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ChatLockSettings`](ChatLockSettings.md)

Defined in: [WAProto/index.d.ts:2621](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2621)

Decodes a ChatLockSettings message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ChatLockSettings`](ChatLockSettings.md)

ChatLockSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ChatLockSettings`](ChatLockSettings.md)

Defined in: [WAProto/index.d.ts:2630](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2630)

Decodes a ChatLockSettings message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ChatLockSettings`](ChatLockSettings.md)

ChatLockSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2603)

Encodes the specified ChatLockSettings message. Does not implicitly [verify](ChatLockSettings.md#verify) messages.

#### Parameters

##### message

[`IChatLockSettings`](../interfaces/IChatLockSettings.md)

ChatLockSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2611](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2611)

Encodes the specified ChatLockSettings message, length delimited. Does not implicitly [verify](ChatLockSettings.md#verify) messages.

#### Parameters

##### message

[`IChatLockSettings`](../interfaces/IChatLockSettings.md)

ChatLockSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ChatLockSettings`](ChatLockSettings.md)

Defined in: [WAProto/index.d.ts:2644](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2644)

Creates a ChatLockSettings message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ChatLockSettings`](ChatLockSettings.md)

ChatLockSettings

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:2665](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2665)

Gets the default type url for ChatLockSettings

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

Defined in: [WAProto/index.d.ts:2652](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2652)

Creates a plain object from a ChatLockSettings message. Also converts values to other types if specified.

#### Parameters

##### message

[`ChatLockSettings`](ChatLockSettings.md)

ChatLockSettings

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:2637](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2637)

Verifies a ChatLockSettings message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
