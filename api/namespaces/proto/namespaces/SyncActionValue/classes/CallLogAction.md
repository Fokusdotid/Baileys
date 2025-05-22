# Class: CallLogAction

Defined in: [WAProto/index.d.ts:32493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32493)

Represents a CallLogAction.

## Implements

- [`ICallLogAction`](../interfaces/ICallLogAction.md)

## Constructors

### new CallLogAction()

> **new CallLogAction**(`properties`?): [`CallLogAction`](CallLogAction.md)

Defined in: [WAProto/index.d.ts:32499](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32499)

Constructs a new CallLogAction.

#### Parameters

##### properties?

[`ICallLogAction`](../interfaces/ICallLogAction.md)

Properties to set

#### Returns

[`CallLogAction`](CallLogAction.md)

## Properties

### callLogRecord?

> `optional` **callLogRecord**: `null` \| [`ICallLogRecord`](../../../interfaces/ICallLogRecord.md)

Defined in: [WAProto/index.d.ts:32502](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32502)

CallLogAction callLogRecord.

#### Implementation of

[`ICallLogAction`](../interfaces/ICallLogAction.md).[`callLogRecord`](../interfaces/ICallLogAction.md#calllogrecord)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32572](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32572)

Converts this CallLogAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CallLogAction`](CallLogAction.md)

Defined in: [WAProto/index.d.ts:32509](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32509)

Creates a new CallLogAction instance using the specified properties.

#### Parameters

##### properties?

[`ICallLogAction`](../interfaces/ICallLogAction.md)

Properties to set

#### Returns

[`CallLogAction`](CallLogAction.md)

CallLogAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CallLogAction`](CallLogAction.md)

Defined in: [WAProto/index.d.ts:32535](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32535)

Decodes a CallLogAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CallLogAction`](CallLogAction.md)

CallLogAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CallLogAction`](CallLogAction.md)

Defined in: [WAProto/index.d.ts:32544](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32544)

Decodes a CallLogAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CallLogAction`](CallLogAction.md)

CallLogAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32517](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32517)

Encodes the specified CallLogAction message. Does not implicitly [verify](CallLogAction.md#verify) messages.

#### Parameters

##### message

[`ICallLogAction`](../interfaces/ICallLogAction.md)

CallLogAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32525](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32525)

Encodes the specified CallLogAction message, length delimited. Does not implicitly [verify](CallLogAction.md#verify) messages.

#### Parameters

##### message

[`ICallLogAction`](../interfaces/ICallLogAction.md)

CallLogAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CallLogAction`](CallLogAction.md)

Defined in: [WAProto/index.d.ts:32558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32558)

Creates a CallLogAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CallLogAction`](CallLogAction.md)

CallLogAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32579](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32579)

Gets the default type url for CallLogAction

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

Defined in: [WAProto/index.d.ts:32566](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32566)

Creates a plain object from a CallLogAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`CallLogAction`](CallLogAction.md)

CallLogAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32551](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32551)

Verifies a CallLogAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
