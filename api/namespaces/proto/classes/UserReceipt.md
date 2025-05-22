# Class: UserReceipt

Defined in: [WAProto/index.d.ts:38915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38915)

Represents a UserReceipt.

## Implements

- [`IUserReceipt`](../interfaces/IUserReceipt.md)

## Constructors

### new UserReceipt()

> **new UserReceipt**(`properties`?): [`UserReceipt`](UserReceipt.md)

Defined in: [WAProto/index.d.ts:38921](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38921)

Constructs a new UserReceipt.

#### Parameters

##### properties?

[`IUserReceipt`](../interfaces/IUserReceipt.md)

Properties to set

#### Returns

[`UserReceipt`](UserReceipt.md)

## Properties

### deliveredDeviceJid

> **deliveredDeviceJid**: `string`[]

Defined in: [WAProto/index.d.ts:38939](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38939)

UserReceipt deliveredDeviceJid.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`deliveredDeviceJid`](../interfaces/IUserReceipt.md#delivereddevicejid)

***

### pendingDeviceJid

> **pendingDeviceJid**: `string`[]

Defined in: [WAProto/index.d.ts:38936](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38936)

UserReceipt pendingDeviceJid.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`pendingDeviceJid`](../interfaces/IUserReceipt.md#pendingdevicejid)

***

### playedTimestamp

> **playedTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:38933](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38933)

UserReceipt playedTimestamp.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`playedTimestamp`](../interfaces/IUserReceipt.md#playedtimestamp)

***

### readTimestamp

> **readTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:38930](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38930)

UserReceipt readTimestamp.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`readTimestamp`](../interfaces/IUserReceipt.md#readtimestamp)

***

### receiptTimestamp

> **receiptTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:38927](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38927)

UserReceipt receiptTimestamp.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`receiptTimestamp`](../interfaces/IUserReceipt.md#receipttimestamp)

***

### userJid

> **userJid**: `string`

Defined in: [WAProto/index.d.ts:38924](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38924)

UserReceipt userJid.

#### Implementation of

[`IUserReceipt`](../interfaces/IUserReceipt.md).[`userJid`](../interfaces/IUserReceipt.md#userjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:39009](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39009)

Converts this UserReceipt to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`UserReceipt`](UserReceipt.md)

Defined in: [WAProto/index.d.ts:38946](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38946)

Creates a new UserReceipt instance using the specified properties.

#### Parameters

##### properties?

[`IUserReceipt`](../interfaces/IUserReceipt.md)

Properties to set

#### Returns

[`UserReceipt`](UserReceipt.md)

UserReceipt instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`UserReceipt`](UserReceipt.md)

Defined in: [WAProto/index.d.ts:38972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38972)

Decodes a UserReceipt message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`UserReceipt`](UserReceipt.md)

UserReceipt

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`UserReceipt`](UserReceipt.md)

Defined in: [WAProto/index.d.ts:38981](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38981)

Decodes a UserReceipt message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`UserReceipt`](UserReceipt.md)

UserReceipt

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38954](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38954)

Encodes the specified UserReceipt message. Does not implicitly [verify](UserReceipt.md#verify) messages.

#### Parameters

##### message

[`IUserReceipt`](../interfaces/IUserReceipt.md)

UserReceipt message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38962)

Encodes the specified UserReceipt message, length delimited. Does not implicitly [verify](UserReceipt.md#verify) messages.

#### Parameters

##### message

[`IUserReceipt`](../interfaces/IUserReceipt.md)

UserReceipt message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`UserReceipt`](UserReceipt.md)

Defined in: [WAProto/index.d.ts:38995](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38995)

Creates a UserReceipt message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`UserReceipt`](UserReceipt.md)

UserReceipt

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:39016](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39016)

Gets the default type url for UserReceipt

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

Defined in: [WAProto/index.d.ts:39003](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L39003)

Creates a plain object from a UserReceipt message. Also converts values to other types if specified.

#### Parameters

##### message

[`UserReceipt`](UserReceipt.md)

UserReceipt

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38988](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38988)

Verifies a UserReceipt message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
