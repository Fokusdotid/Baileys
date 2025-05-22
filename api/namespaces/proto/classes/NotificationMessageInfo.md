# Class: NotificationMessageInfo

Defined in: [WAProto/index.d.ts:26272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26272)

Represents a NotificationMessageInfo.

## Implements

- [`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md)

## Constructors

### new NotificationMessageInfo()

> **new NotificationMessageInfo**(`properties`?): [`NotificationMessageInfo`](NotificationMessageInfo.md)

Defined in: [WAProto/index.d.ts:26278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26278)

Constructs a new NotificationMessageInfo.

#### Parameters

##### properties?

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md)

Properties to set

#### Returns

[`NotificationMessageInfo`](NotificationMessageInfo.md)

## Properties

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:26281](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26281)

NotificationMessageInfo key.

#### Implementation of

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md).[`key`](../interfaces/INotificationMessageInfo.md#key)

***

### message?

> `optional` **message**: `null` \| [`IMessage`](../interfaces/IMessage.md)

Defined in: [WAProto/index.d.ts:26284](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26284)

NotificationMessageInfo message.

#### Implementation of

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md).[`message`](../interfaces/INotificationMessageInfo.md#message)

***

### messageTimestamp

> **messageTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:26287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26287)

NotificationMessageInfo messageTimestamp.

#### Implementation of

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md).[`messageTimestamp`](../interfaces/INotificationMessageInfo.md#messagetimestamp)

***

### participant

> **participant**: `string`

Defined in: [WAProto/index.d.ts:26290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26290)

NotificationMessageInfo participant.

#### Implementation of

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md).[`participant`](../interfaces/INotificationMessageInfo.md#participant)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:26360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26360)

Converts this NotificationMessageInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NotificationMessageInfo`](NotificationMessageInfo.md)

Defined in: [WAProto/index.d.ts:26297](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26297)

Creates a new NotificationMessageInfo instance using the specified properties.

#### Parameters

##### properties?

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md)

Properties to set

#### Returns

[`NotificationMessageInfo`](NotificationMessageInfo.md)

NotificationMessageInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NotificationMessageInfo`](NotificationMessageInfo.md)

Defined in: [WAProto/index.d.ts:26323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26323)

Decodes a NotificationMessageInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NotificationMessageInfo`](NotificationMessageInfo.md)

NotificationMessageInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NotificationMessageInfo`](NotificationMessageInfo.md)

Defined in: [WAProto/index.d.ts:26332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26332)

Decodes a NotificationMessageInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NotificationMessageInfo`](NotificationMessageInfo.md)

NotificationMessageInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26305](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26305)

Encodes the specified NotificationMessageInfo message. Does not implicitly [verify](NotificationMessageInfo.md#verify) messages.

#### Parameters

##### message

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md)

NotificationMessageInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26313](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26313)

Encodes the specified NotificationMessageInfo message, length delimited. Does not implicitly [verify](NotificationMessageInfo.md#verify) messages.

#### Parameters

##### message

[`INotificationMessageInfo`](../interfaces/INotificationMessageInfo.md)

NotificationMessageInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NotificationMessageInfo`](NotificationMessageInfo.md)

Defined in: [WAProto/index.d.ts:26346](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26346)

Creates a NotificationMessageInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NotificationMessageInfo`](NotificationMessageInfo.md)

NotificationMessageInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:26367](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26367)

Gets the default type url for NotificationMessageInfo

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

Defined in: [WAProto/index.d.ts:26354](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26354)

Creates a plain object from a NotificationMessageInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`NotificationMessageInfo`](NotificationMessageInfo.md)

NotificationMessageInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:26339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26339)

Verifies a NotificationMessageInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
