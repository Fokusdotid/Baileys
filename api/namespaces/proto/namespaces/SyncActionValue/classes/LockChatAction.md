# Class: LockChatAction

Defined in: [WAProto/index.d.ts:34220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34220)

Represents a LockChatAction.

## Implements

- [`ILockChatAction`](../interfaces/ILockChatAction.md)

## Constructors

### new LockChatAction()

> **new LockChatAction**(`properties`?): [`LockChatAction`](LockChatAction.md)

Defined in: [WAProto/index.d.ts:34226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34226)

Constructs a new LockChatAction.

#### Parameters

##### properties?

[`ILockChatAction`](../interfaces/ILockChatAction.md)

Properties to set

#### Returns

[`LockChatAction`](LockChatAction.md)

## Properties

### locked

> **locked**: `boolean`

Defined in: [WAProto/index.d.ts:34229](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34229)

LockChatAction locked.

#### Implementation of

[`ILockChatAction`](../interfaces/ILockChatAction.md).[`locked`](../interfaces/ILockChatAction.md#locked)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34299](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34299)

Converts this LockChatAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`LockChatAction`](LockChatAction.md)

Defined in: [WAProto/index.d.ts:34236](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34236)

Creates a new LockChatAction instance using the specified properties.

#### Parameters

##### properties?

[`ILockChatAction`](../interfaces/ILockChatAction.md)

Properties to set

#### Returns

[`LockChatAction`](LockChatAction.md)

LockChatAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`LockChatAction`](LockChatAction.md)

Defined in: [WAProto/index.d.ts:34262](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34262)

Decodes a LockChatAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`LockChatAction`](LockChatAction.md)

LockChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`LockChatAction`](LockChatAction.md)

Defined in: [WAProto/index.d.ts:34271](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34271)

Decodes a LockChatAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`LockChatAction`](LockChatAction.md)

LockChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34244)

Encodes the specified LockChatAction message. Does not implicitly [verify](LockChatAction.md#verify) messages.

#### Parameters

##### message

[`ILockChatAction`](../interfaces/ILockChatAction.md)

LockChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34252](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34252)

Encodes the specified LockChatAction message, length delimited. Does not implicitly [verify](LockChatAction.md#verify) messages.

#### Parameters

##### message

[`ILockChatAction`](../interfaces/ILockChatAction.md)

LockChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`LockChatAction`](LockChatAction.md)

Defined in: [WAProto/index.d.ts:34285](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34285)

Creates a LockChatAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`LockChatAction`](LockChatAction.md)

LockChatAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34306](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34306)

Gets the default type url for LockChatAction

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

Defined in: [WAProto/index.d.ts:34293](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34293)

Creates a plain object from a LockChatAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`LockChatAction`](LockChatAction.md)

LockChatAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34278)

Verifies a LockChatAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
