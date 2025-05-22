# Class: EventMessage

Defined in: [WAProto/index.d.ts:14550](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14550)

Represents an EventMessage.

## Implements

- [`IEventMessage`](../interfaces/IEventMessage.md)

## Constructors

### new EventMessage()

> **new EventMessage**(`properties`?): [`EventMessage`](EventMessage.md)

Defined in: [WAProto/index.d.ts:14556](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14556)

Constructs a new EventMessage.

#### Parameters

##### properties?

[`IEventMessage`](../interfaces/IEventMessage.md)

Properties to set

#### Returns

[`EventMessage`](EventMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:14559](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14559)

EventMessage contextInfo.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`contextInfo`](../interfaces/IEventMessage.md#contextinfo)

***

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:14568](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14568)

EventMessage description.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`description`](../interfaces/IEventMessage.md#description)

***

### isCanceled

> **isCanceled**: `boolean`

Defined in: [WAProto/index.d.ts:14562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14562)

EventMessage isCanceled.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`isCanceled`](../interfaces/IEventMessage.md#iscanceled)

***

### joinLink

> **joinLink**: `string`

Defined in: [WAProto/index.d.ts:14574](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14574)

EventMessage joinLink.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`joinLink`](../interfaces/IEventMessage.md#joinlink)

***

### location?

> `optional` **location**: `null` \| [`ILocationMessage`](../interfaces/ILocationMessage.md)

Defined in: [WAProto/index.d.ts:14571](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14571)

EventMessage location.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`location`](../interfaces/IEventMessage.md#location)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:14565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14565)

EventMessage name.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`name`](../interfaces/IEventMessage.md#name)

***

### startTime

> **startTime**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:14577](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14577)

EventMessage startTime.

#### Implementation of

[`IEventMessage`](../interfaces/IEventMessage.md).[`startTime`](../interfaces/IEventMessage.md#starttime)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:14647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14647)

Converts this EventMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EventMessage`](EventMessage.md)

Defined in: [WAProto/index.d.ts:14584](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14584)

Creates a new EventMessage instance using the specified properties.

#### Parameters

##### properties?

[`IEventMessage`](../interfaces/IEventMessage.md)

Properties to set

#### Returns

[`EventMessage`](EventMessage.md)

EventMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EventMessage`](EventMessage.md)

Defined in: [WAProto/index.d.ts:14610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14610)

Decodes an EventMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EventMessage`](EventMessage.md)

EventMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EventMessage`](EventMessage.md)

Defined in: [WAProto/index.d.ts:14619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14619)

Decodes an EventMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EventMessage`](EventMessage.md)

EventMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14592](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14592)

Encodes the specified EventMessage message. Does not implicitly [verify](EventMessage.md#verify) messages.

#### Parameters

##### message

[`IEventMessage`](../interfaces/IEventMessage.md)

EventMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:14600](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14600)

Encodes the specified EventMessage message, length delimited. Does not implicitly [verify](EventMessage.md#verify) messages.

#### Parameters

##### message

[`IEventMessage`](../interfaces/IEventMessage.md)

EventMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EventMessage`](EventMessage.md)

Defined in: [WAProto/index.d.ts:14633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14633)

Creates an EventMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EventMessage`](EventMessage.md)

EventMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:14654](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14654)

Gets the default type url for EventMessage

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

Defined in: [WAProto/index.d.ts:14641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14641)

Creates a plain object from an EventMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`EventMessage`](EventMessage.md)

EventMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:14626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L14626)

Verifies an EventMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
