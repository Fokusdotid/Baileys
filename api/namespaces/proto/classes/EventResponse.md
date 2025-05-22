# Class: EventResponse

Defined in: [WAProto/index.d.ts:7130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7130)

Represents an EventResponse.

## Implements

- [`IEventResponse`](../interfaces/IEventResponse.md)

## Constructors

### new EventResponse()

> **new EventResponse**(`properties`?): [`EventResponse`](EventResponse.md)

Defined in: [WAProto/index.d.ts:7136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7136)

Constructs a new EventResponse.

#### Parameters

##### properties?

[`IEventResponse`](../interfaces/IEventResponse.md)

Properties to set

#### Returns

[`EventResponse`](EventResponse.md)

## Properties

### eventResponseMessage?

> `optional` **eventResponseMessage**: `null` \| [`IEventResponseMessage`](../namespaces/Message/interfaces/IEventResponseMessage.md)

Defined in: [WAProto/index.d.ts:7145](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7145)

EventResponse eventResponseMessage.

#### Implementation of

[`IEventResponse`](../interfaces/IEventResponse.md).[`eventResponseMessage`](../interfaces/IEventResponse.md#eventresponsemessage)

***

### eventResponseMessageKey?

> `optional` **eventResponseMessageKey**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:7139](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7139)

EventResponse eventResponseMessageKey.

#### Implementation of

[`IEventResponse`](../interfaces/IEventResponse.md).[`eventResponseMessageKey`](../interfaces/IEventResponse.md#eventresponsemessagekey)

***

### timestampMs

> **timestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:7142](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7142)

EventResponse timestampMs.

#### Implementation of

[`IEventResponse`](../interfaces/IEventResponse.md).[`timestampMs`](../interfaces/IEventResponse.md#timestampms)

***

### unread

> **unread**: `boolean`

Defined in: [WAProto/index.d.ts:7148](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7148)

EventResponse unread.

#### Implementation of

[`IEventResponse`](../interfaces/IEventResponse.md).[`unread`](../interfaces/IEventResponse.md#unread)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7218](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7218)

Converts this EventResponse to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EventResponse`](EventResponse.md)

Defined in: [WAProto/index.d.ts:7155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7155)

Creates a new EventResponse instance using the specified properties.

#### Parameters

##### properties?

[`IEventResponse`](../interfaces/IEventResponse.md)

Properties to set

#### Returns

[`EventResponse`](EventResponse.md)

EventResponse instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EventResponse`](EventResponse.md)

Defined in: [WAProto/index.d.ts:7181](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7181)

Decodes an EventResponse message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EventResponse`](EventResponse.md)

EventResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EventResponse`](EventResponse.md)

Defined in: [WAProto/index.d.ts:7190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7190)

Decodes an EventResponse message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EventResponse`](EventResponse.md)

EventResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7163](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7163)

Encodes the specified EventResponse message. Does not implicitly [verify](EventResponse.md#verify) messages.

#### Parameters

##### message

[`IEventResponse`](../interfaces/IEventResponse.md)

EventResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7171)

Encodes the specified EventResponse message, length delimited. Does not implicitly [verify](EventResponse.md#verify) messages.

#### Parameters

##### message

[`IEventResponse`](../interfaces/IEventResponse.md)

EventResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EventResponse`](EventResponse.md)

Defined in: [WAProto/index.d.ts:7204](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7204)

Creates an EventResponse message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EventResponse`](EventResponse.md)

EventResponse

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7225](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7225)

Gets the default type url for EventResponse

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

Defined in: [WAProto/index.d.ts:7212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7212)

Creates a plain object from an EventResponse message. Also converts values to other types if specified.

#### Parameters

##### message

[`EventResponse`](EventResponse.md)

EventResponse

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7197)

Verifies an EventResponse message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
