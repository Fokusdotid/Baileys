# Class: WebNotificationsInfo

Defined in: [WAProto/index.d.ts:40383](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40383)

Represents a WebNotificationsInfo.

## Implements

- [`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md)

## Constructors

### new WebNotificationsInfo()

> **new WebNotificationsInfo**(`properties`?): [`WebNotificationsInfo`](WebNotificationsInfo.md)

Defined in: [WAProto/index.d.ts:40389](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40389)

Constructs a new WebNotificationsInfo.

#### Parameters

##### properties?

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md)

Properties to set

#### Returns

[`WebNotificationsInfo`](WebNotificationsInfo.md)

## Properties

### notifyMessageCount

> **notifyMessageCount**: `number`

Defined in: [WAProto/index.d.ts:40398](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40398)

WebNotificationsInfo notifyMessageCount.

#### Implementation of

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md).[`notifyMessageCount`](../interfaces/IWebNotificationsInfo.md#notifymessagecount)

***

### notifyMessages

> **notifyMessages**: [`IWebMessageInfo`](../interfaces/IWebMessageInfo.md)[]

Defined in: [WAProto/index.d.ts:40401](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40401)

WebNotificationsInfo notifyMessages.

#### Implementation of

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md).[`notifyMessages`](../interfaces/IWebNotificationsInfo.md#notifymessages)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:40392](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40392)

WebNotificationsInfo timestamp.

#### Implementation of

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md).[`timestamp`](../interfaces/IWebNotificationsInfo.md#timestamp)

***

### unreadChats

> **unreadChats**: `number`

Defined in: [WAProto/index.d.ts:40395](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40395)

WebNotificationsInfo unreadChats.

#### Implementation of

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md).[`unreadChats`](../interfaces/IWebNotificationsInfo.md#unreadchats)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:40471](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40471)

Converts this WebNotificationsInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`WebNotificationsInfo`](WebNotificationsInfo.md)

Defined in: [WAProto/index.d.ts:40408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40408)

Creates a new WebNotificationsInfo instance using the specified properties.

#### Parameters

##### properties?

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md)

Properties to set

#### Returns

[`WebNotificationsInfo`](WebNotificationsInfo.md)

WebNotificationsInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`WebNotificationsInfo`](WebNotificationsInfo.md)

Defined in: [WAProto/index.d.ts:40434](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40434)

Decodes a WebNotificationsInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`WebNotificationsInfo`](WebNotificationsInfo.md)

WebNotificationsInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`WebNotificationsInfo`](WebNotificationsInfo.md)

Defined in: [WAProto/index.d.ts:40443](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40443)

Decodes a WebNotificationsInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`WebNotificationsInfo`](WebNotificationsInfo.md)

WebNotificationsInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:40416](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40416)

Encodes the specified WebNotificationsInfo message. Does not implicitly [verify](WebNotificationsInfo.md#verify) messages.

#### Parameters

##### message

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md)

WebNotificationsInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:40424](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40424)

Encodes the specified WebNotificationsInfo message, length delimited. Does not implicitly [verify](WebNotificationsInfo.md#verify) messages.

#### Parameters

##### message

[`IWebNotificationsInfo`](../interfaces/IWebNotificationsInfo.md)

WebNotificationsInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`WebNotificationsInfo`](WebNotificationsInfo.md)

Defined in: [WAProto/index.d.ts:40457](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40457)

Creates a WebNotificationsInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`WebNotificationsInfo`](WebNotificationsInfo.md)

WebNotificationsInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:40478](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40478)

Gets the default type url for WebNotificationsInfo

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

Defined in: [WAProto/index.d.ts:40465](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40465)

Creates a plain object from a WebNotificationsInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`WebNotificationsInfo`](WebNotificationsInfo.md)

WebNotificationsInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:40450](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L40450)

Verifies a WebNotificationsInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
