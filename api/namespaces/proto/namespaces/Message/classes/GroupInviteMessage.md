# Class: GroupInviteMessage

Defined in: [WAProto/index.d.ts:15162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15162)

Represents a GroupInviteMessage.

## Implements

- [`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md)

## Constructors

### new GroupInviteMessage()

> **new GroupInviteMessage**(`properties`?): [`GroupInviteMessage`](GroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:15168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15168)

Constructs a new GroupInviteMessage.

#### Parameters

##### properties?

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md)

Properties to set

#### Returns

[`GroupInviteMessage`](GroupInviteMessage.md)

## Properties

### caption

> **caption**: `string`

Defined in: [WAProto/index.d.ts:15186](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15186)

GroupInviteMessage caption.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`caption`](../interfaces/IGroupInviteMessage.md#caption)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:15189](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15189)

GroupInviteMessage contextInfo.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`contextInfo`](../interfaces/IGroupInviteMessage.md#contextinfo)

***

### groupJid

> **groupJid**: `string`

Defined in: [WAProto/index.d.ts:15171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15171)

GroupInviteMessage groupJid.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`groupJid`](../interfaces/IGroupInviteMessage.md#groupjid)

***

### groupName

> **groupName**: `string`

Defined in: [WAProto/index.d.ts:15180](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15180)

GroupInviteMessage groupName.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`groupName`](../interfaces/IGroupInviteMessage.md#groupname)

***

### groupType

> **groupType**: [`GroupType`](../namespaces/GroupInviteMessage/enumerations/GroupType.md)

Defined in: [WAProto/index.d.ts:15192](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15192)

GroupInviteMessage groupType.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`groupType`](../interfaces/IGroupInviteMessage.md#grouptype)

***

### inviteCode

> **inviteCode**: `string`

Defined in: [WAProto/index.d.ts:15174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15174)

GroupInviteMessage inviteCode.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`inviteCode`](../interfaces/IGroupInviteMessage.md#invitecode)

***

### inviteExpiration

> **inviteExpiration**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:15177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15177)

GroupInviteMessage inviteExpiration.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`inviteExpiration`](../interfaces/IGroupInviteMessage.md#inviteexpiration)

***

### jpegThumbnail

> **jpegThumbnail**: `Uint8Array`

Defined in: [WAProto/index.d.ts:15183](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15183)

GroupInviteMessage jpegThumbnail.

#### Implementation of

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md).[`jpegThumbnail`](../interfaces/IGroupInviteMessage.md#jpegthumbnail)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15262](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15262)

Converts this GroupInviteMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`GroupInviteMessage`](GroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:15199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15199)

Creates a new GroupInviteMessage instance using the specified properties.

#### Parameters

##### properties?

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md)

Properties to set

#### Returns

[`GroupInviteMessage`](GroupInviteMessage.md)

GroupInviteMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`GroupInviteMessage`](GroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:15225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15225)

Decodes a GroupInviteMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`GroupInviteMessage`](GroupInviteMessage.md)

GroupInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`GroupInviteMessage`](GroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:15234](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15234)

Decodes a GroupInviteMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`GroupInviteMessage`](GroupInviteMessage.md)

GroupInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15207)

Encodes the specified GroupInviteMessage message. Does not implicitly [verify](GroupInviteMessage.md#verify) messages.

#### Parameters

##### message

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md)

GroupInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15215](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15215)

Encodes the specified GroupInviteMessage message, length delimited. Does not implicitly [verify](GroupInviteMessage.md#verify) messages.

#### Parameters

##### message

[`IGroupInviteMessage`](../interfaces/IGroupInviteMessage.md)

GroupInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`GroupInviteMessage`](GroupInviteMessage.md)

Defined in: [WAProto/index.d.ts:15248](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15248)

Creates a GroupInviteMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`GroupInviteMessage`](GroupInviteMessage.md)

GroupInviteMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:15269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15269)

Gets the default type url for GroupInviteMessage

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

Defined in: [WAProto/index.d.ts:15256](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15256)

Creates a plain object from a GroupInviteMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`GroupInviteMessage`](GroupInviteMessage.md)

GroupInviteMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15241)

Verifies a GroupInviteMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
