# Class: RequestWelcomeMessageMetadata

Defined in: [WAProto/index.d.ts:23047](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23047)

Represents a RequestWelcomeMessageMetadata.

## Implements

- [`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

## Constructors

### new RequestWelcomeMessageMetadata()

> **new RequestWelcomeMessageMetadata**(`properties`?): [`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:23053](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23053)

Constructs a new RequestWelcomeMessageMetadata.

#### Parameters

##### properties?

[`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

Properties to set

#### Returns

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

## Properties

### localChatState

> **localChatState**: [`LocalChatState`](../namespaces/RequestWelcomeMessageMetadata/enumerations/LocalChatState.md)

Defined in: [WAProto/index.d.ts:23056](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23056)

RequestWelcomeMessageMetadata localChatState.

#### Implementation of

[`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md).[`localChatState`](../interfaces/IRequestWelcomeMessageMetadata.md#localchatstate)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23126](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23126)

Converts this RequestWelcomeMessageMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:23063](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23063)

Creates a new RequestWelcomeMessageMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

Properties to set

#### Returns

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:23089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23089)

Decodes a RequestWelcomeMessageMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:23098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23098)

Decodes a RequestWelcomeMessageMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23071](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23071)

Encodes the specified RequestWelcomeMessageMetadata message. Does not implicitly [verify](RequestWelcomeMessageMetadata.md#verify) messages.

#### Parameters

##### message

[`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23079](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23079)

Encodes the specified RequestWelcomeMessageMetadata message, length delimited. Does not implicitly [verify](RequestWelcomeMessageMetadata.md#verify) messages.

#### Parameters

##### message

[`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:23112](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23112)

Creates a RequestWelcomeMessageMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23133](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23133)

Gets the default type url for RequestWelcomeMessageMetadata

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

Defined in: [WAProto/index.d.ts:23120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23120)

Creates a plain object from a RequestWelcomeMessageMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`RequestWelcomeMessageMetadata`](RequestWelcomeMessageMetadata.md)

RequestWelcomeMessageMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23105)

Verifies a RequestWelcomeMessageMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
