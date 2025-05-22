# Class: NotificationSettings

Defined in: [WAProto/index.d.ts:26393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26393)

Represents a NotificationSettings.

## Implements

- [`INotificationSettings`](../interfaces/INotificationSettings.md)

## Constructors

### new NotificationSettings()

> **new NotificationSettings**(`properties`?): [`NotificationSettings`](NotificationSettings.md)

Defined in: [WAProto/index.d.ts:26399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26399)

Constructs a new NotificationSettings.

#### Parameters

##### properties?

[`INotificationSettings`](../interfaces/INotificationSettings.md)

Properties to set

#### Returns

[`NotificationSettings`](NotificationSettings.md)

## Properties

### callVibrate

> **callVibrate**: `string`

Defined in: [WAProto/index.d.ts:26417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26417)

NotificationSettings callVibrate.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`callVibrate`](../interfaces/INotificationSettings.md#callvibrate)

***

### lowPriorityNotifications

> **lowPriorityNotifications**: `boolean`

Defined in: [WAProto/index.d.ts:26411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26411)

NotificationSettings lowPriorityNotifications.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`lowPriorityNotifications`](../interfaces/INotificationSettings.md#lowprioritynotifications)

***

### messageLight

> **messageLight**: `string`

Defined in: [WAProto/index.d.ts:26408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26408)

NotificationSettings messageLight.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`messageLight`](../interfaces/INotificationSettings.md#messagelight)

***

### messagePopup

> **messagePopup**: `string`

Defined in: [WAProto/index.d.ts:26405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26405)

NotificationSettings messagePopup.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`messagePopup`](../interfaces/INotificationSettings.md#messagepopup)

***

### messageVibrate

> **messageVibrate**: `string`

Defined in: [WAProto/index.d.ts:26402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26402)

NotificationSettings messageVibrate.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`messageVibrate`](../interfaces/INotificationSettings.md#messagevibrate)

***

### reactionsMuted

> **reactionsMuted**: `boolean`

Defined in: [WAProto/index.d.ts:26414](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26414)

NotificationSettings reactionsMuted.

#### Implementation of

[`INotificationSettings`](../interfaces/INotificationSettings.md).[`reactionsMuted`](../interfaces/INotificationSettings.md#reactionsmuted)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:26487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26487)

Converts this NotificationSettings to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NotificationSettings`](NotificationSettings.md)

Defined in: [WAProto/index.d.ts:26424](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26424)

Creates a new NotificationSettings instance using the specified properties.

#### Parameters

##### properties?

[`INotificationSettings`](../interfaces/INotificationSettings.md)

Properties to set

#### Returns

[`NotificationSettings`](NotificationSettings.md)

NotificationSettings instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NotificationSettings`](NotificationSettings.md)

Defined in: [WAProto/index.d.ts:26450](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26450)

Decodes a NotificationSettings message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NotificationSettings`](NotificationSettings.md)

NotificationSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NotificationSettings`](NotificationSettings.md)

Defined in: [WAProto/index.d.ts:26459](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26459)

Decodes a NotificationSettings message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NotificationSettings`](NotificationSettings.md)

NotificationSettings

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26432](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26432)

Encodes the specified NotificationSettings message. Does not implicitly [verify](NotificationSettings.md#verify) messages.

#### Parameters

##### message

[`INotificationSettings`](../interfaces/INotificationSettings.md)

NotificationSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26440](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26440)

Encodes the specified NotificationSettings message, length delimited. Does not implicitly [verify](NotificationSettings.md#verify) messages.

#### Parameters

##### message

[`INotificationSettings`](../interfaces/INotificationSettings.md)

NotificationSettings message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NotificationSettings`](NotificationSettings.md)

Defined in: [WAProto/index.d.ts:26473](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26473)

Creates a NotificationSettings message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NotificationSettings`](NotificationSettings.md)

NotificationSettings

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:26494](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26494)

Gets the default type url for NotificationSettings

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

Defined in: [WAProto/index.d.ts:26481](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26481)

Creates a plain object from a NotificationSettings message. Also converts values to other types if specified.

#### Parameters

##### message

[`NotificationSettings`](NotificationSettings.md)

NotificationSettings

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:26466](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26466)

Verifies a NotificationSettings message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
