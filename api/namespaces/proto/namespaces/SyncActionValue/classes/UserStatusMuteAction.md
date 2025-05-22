# Class: UserStatusMuteAction

Defined in: [WAProto/index.d.ts:37064](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37064)

Represents a UserStatusMuteAction.

## Implements

- [`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md)

## Constructors

### new UserStatusMuteAction()

> **new UserStatusMuteAction**(`properties`?): [`UserStatusMuteAction`](UserStatusMuteAction.md)

Defined in: [WAProto/index.d.ts:37070](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37070)

Constructs a new UserStatusMuteAction.

#### Parameters

##### properties?

[`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md)

Properties to set

#### Returns

[`UserStatusMuteAction`](UserStatusMuteAction.md)

## Properties

### muted

> **muted**: `boolean`

Defined in: [WAProto/index.d.ts:37073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37073)

UserStatusMuteAction muted.

#### Implementation of

[`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md).[`muted`](../interfaces/IUserStatusMuteAction.md#muted)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37143)

Converts this UserStatusMuteAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`UserStatusMuteAction`](UserStatusMuteAction.md)

Defined in: [WAProto/index.d.ts:37080](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37080)

Creates a new UserStatusMuteAction instance using the specified properties.

#### Parameters

##### properties?

[`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md)

Properties to set

#### Returns

[`UserStatusMuteAction`](UserStatusMuteAction.md)

UserStatusMuteAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`UserStatusMuteAction`](UserStatusMuteAction.md)

Defined in: [WAProto/index.d.ts:37106](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37106)

Decodes a UserStatusMuteAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`UserStatusMuteAction`](UserStatusMuteAction.md)

UserStatusMuteAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`UserStatusMuteAction`](UserStatusMuteAction.md)

Defined in: [WAProto/index.d.ts:37115](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37115)

Decodes a UserStatusMuteAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`UserStatusMuteAction`](UserStatusMuteAction.md)

UserStatusMuteAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37088](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37088)

Encodes the specified UserStatusMuteAction message. Does not implicitly [verify](UserStatusMuteAction.md#verify) messages.

#### Parameters

##### message

[`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md)

UserStatusMuteAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37096)

Encodes the specified UserStatusMuteAction message, length delimited. Does not implicitly [verify](UserStatusMuteAction.md#verify) messages.

#### Parameters

##### message

[`IUserStatusMuteAction`](../interfaces/IUserStatusMuteAction.md)

UserStatusMuteAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`UserStatusMuteAction`](UserStatusMuteAction.md)

Defined in: [WAProto/index.d.ts:37129](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37129)

Creates a UserStatusMuteAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`UserStatusMuteAction`](UserStatusMuteAction.md)

UserStatusMuteAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37150](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37150)

Gets the default type url for UserStatusMuteAction

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

Defined in: [WAProto/index.d.ts:37137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37137)

Creates a plain object from a UserStatusMuteAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`UserStatusMuteAction`](UserStatusMuteAction.md)

UserStatusMuteAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37122](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37122)

Verifies a UserStatusMuteAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
