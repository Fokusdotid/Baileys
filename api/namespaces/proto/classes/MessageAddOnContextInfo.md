# Class: MessageAddOnContextInfo

Defined in: [WAProto/index.d.ts:24830](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24830)

Represents a MessageAddOnContextInfo.

## Implements

- [`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

## Constructors

### new MessageAddOnContextInfo()

> **new MessageAddOnContextInfo**(`properties`?): [`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:24836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24836)

Constructs a new MessageAddOnContextInfo.

#### Parameters

##### properties?

[`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

Properties to set

#### Returns

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

## Properties

### messageAddOnDurationInSecs

> **messageAddOnDurationInSecs**: `number`

Defined in: [WAProto/index.d.ts:24839](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24839)

MessageAddOnContextInfo messageAddOnDurationInSecs.

#### Implementation of

[`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md).[`messageAddOnDurationInSecs`](../interfaces/IMessageAddOnContextInfo.md#messageaddondurationinsecs)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:24909](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24909)

Converts this MessageAddOnContextInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:24846](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24846)

Creates a new MessageAddOnContextInfo instance using the specified properties.

#### Parameters

##### properties?

[`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

Properties to set

#### Returns

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

MessageAddOnContextInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:24872](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24872)

Decodes a MessageAddOnContextInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

MessageAddOnContextInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:24881](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24881)

Decodes a MessageAddOnContextInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

MessageAddOnContextInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24854](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24854)

Encodes the specified MessageAddOnContextInfo message. Does not implicitly [verify](MessageAddOnContextInfo.md#verify) messages.

#### Parameters

##### message

[`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

MessageAddOnContextInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24862](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24862)

Encodes the specified MessageAddOnContextInfo message, length delimited. Does not implicitly [verify](MessageAddOnContextInfo.md#verify) messages.

#### Parameters

##### message

[`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

MessageAddOnContextInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:24895](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24895)

Creates a MessageAddOnContextInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

MessageAddOnContextInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:24916](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24916)

Gets the default type url for MessageAddOnContextInfo

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

Defined in: [WAProto/index.d.ts:24903](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24903)

Creates a plain object from a MessageAddOnContextInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`MessageAddOnContextInfo`](MessageAddOnContextInfo.md)

MessageAddOnContextInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:24888](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24888)

Verifies a MessageAddOnContextInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
