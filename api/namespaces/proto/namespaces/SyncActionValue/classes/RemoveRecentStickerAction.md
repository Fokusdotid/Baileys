# Class: RemoveRecentStickerAction

Defined in: [WAProto/index.d.ts:35988](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35988)

Represents a RemoveRecentStickerAction.

## Implements

- [`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md)

## Constructors

### new RemoveRecentStickerAction()

> **new RemoveRecentStickerAction**(`properties`?): [`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

Defined in: [WAProto/index.d.ts:35994](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35994)

Constructs a new RemoveRecentStickerAction.

#### Parameters

##### properties?

[`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md)

Properties to set

#### Returns

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

## Properties

### lastStickerSentTs

> **lastStickerSentTs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:35997](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35997)

RemoveRecentStickerAction lastStickerSentTs.

#### Implementation of

[`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md).[`lastStickerSentTs`](../interfaces/IRemoveRecentStickerAction.md#laststickersentts)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36067](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36067)

Converts this RemoveRecentStickerAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

Defined in: [WAProto/index.d.ts:36004](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36004)

Creates a new RemoveRecentStickerAction instance using the specified properties.

#### Parameters

##### properties?

[`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md)

Properties to set

#### Returns

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

RemoveRecentStickerAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

Defined in: [WAProto/index.d.ts:36030](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36030)

Decodes a RemoveRecentStickerAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

RemoveRecentStickerAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

Defined in: [WAProto/index.d.ts:36039](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36039)

Decodes a RemoveRecentStickerAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

RemoveRecentStickerAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36012](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36012)

Encodes the specified RemoveRecentStickerAction message. Does not implicitly [verify](RemoveRecentStickerAction.md#verify) messages.

#### Parameters

##### message

[`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md)

RemoveRecentStickerAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36020)

Encodes the specified RemoveRecentStickerAction message, length delimited. Does not implicitly [verify](RemoveRecentStickerAction.md#verify) messages.

#### Parameters

##### message

[`IRemoveRecentStickerAction`](../interfaces/IRemoveRecentStickerAction.md)

RemoveRecentStickerAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

Defined in: [WAProto/index.d.ts:36053](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36053)

Creates a RemoveRecentStickerAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

RemoveRecentStickerAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36074](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36074)

Gets the default type url for RemoveRecentStickerAction

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

Defined in: [WAProto/index.d.ts:36061](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36061)

Creates a plain object from a RemoveRecentStickerAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`RemoveRecentStickerAction`](RemoveRecentStickerAction.md)

RemoveRecentStickerAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36046)

Verifies a RemoveRecentStickerAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
