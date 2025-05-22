# Class: AvatarUserSettings

Defined in: [WAProto/index.d.ts:816](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L816)

Represents an AvatarUserSettings.

## Implements

- [`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md)

## Constructors

### new AvatarUserSettings()

> **new AvatarUserSettings**(`properties`?): [`AvatarUserSettings`](AvatarUserSettings.md)

Defined in: [WAProto/index.d.ts:822](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L822)

Constructs a new AvatarUserSettings.

#### Parameters

##### properties?

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md)

Properties to set

#### Returns

[`AvatarUserSettings`](AvatarUserSettings.md)

## Properties

### fbid

> **fbid**: `string`

Defined in: [WAProto/index.d.ts:825](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L825)

AvatarUserSettings fbid.

#### Implementation of

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md).[`fbid`](../interfaces/IAvatarUserSettings.md#fbid)

***

### password

> **password**: `string`

Defined in: [WAProto/index.d.ts:828](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L828)

AvatarUserSettings password.

#### Implementation of

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md).[`password`](../interfaces/IAvatarUserSettings.md#password)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:898](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L898)

Converts this AvatarUserSettings to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AvatarUserSettings`](AvatarUserSettings.md)

Defined in: [WAProto/index.d.ts:835](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L835)

Creates a new AvatarUserSettings instance using the specified properties.

#### Parameters

##### properties?

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md)

Properties to set

#### Returns

[`AvatarUserSettings`](AvatarUserSettings.md)

AvatarUserSettings instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AvatarUserSettings`](AvatarUserSettings.md)

Defined in: [WAProto/index.d.ts:861](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L861)

Decodes an AvatarUserSettings message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AvatarUserSettings`](AvatarUserSettings.md)

AvatarUserSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AvatarUserSettings`](AvatarUserSettings.md)

Defined in: [WAProto/index.d.ts:870](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L870)

Decodes an AvatarUserSettings message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AvatarUserSettings`](AvatarUserSettings.md)

AvatarUserSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:843](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L843)

Encodes the specified AvatarUserSettings message. Does not implicitly [verify](AvatarUserSettings.md#verify) messages.

#### Parameters

##### message

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md)

AvatarUserSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:851](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L851)

Encodes the specified AvatarUserSettings message, length delimited. Does not implicitly [verify](AvatarUserSettings.md#verify) messages.

#### Parameters

##### message

[`IAvatarUserSettings`](../interfaces/IAvatarUserSettings.md)

AvatarUserSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AvatarUserSettings`](AvatarUserSettings.md)

Defined in: [WAProto/index.d.ts:884](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L884)

Creates an AvatarUserSettings message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AvatarUserSettings`](AvatarUserSettings.md)

AvatarUserSettings

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L905)

Gets the default type url for AvatarUserSettings

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

Defined in: [WAProto/index.d.ts:892](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L892)

Creates a plain object from an AvatarUserSettings message. Also converts values to other types if specified.

#### Parameters

##### message

[`AvatarUserSettings`](AvatarUserSettings.md)

AvatarUserSettings

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L877)

Verifies an AvatarUserSettings message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
