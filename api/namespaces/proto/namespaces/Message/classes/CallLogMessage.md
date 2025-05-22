# Class: CallLogMessage

Defined in: [WAProto/index.d.ts:13033](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13033)

Represents a CallLogMessage.

## Implements

- [`ICallLogMessage`](../interfaces/ICallLogMessage.md)

## Constructors

### new CallLogMessage()

> **new CallLogMessage**(`properties`?): [`CallLogMessage`](CallLogMessage.md)

Defined in: [WAProto/index.d.ts:13039](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13039)

Constructs a new CallLogMessage.

#### Parameters

##### properties?

[`ICallLogMessage`](../interfaces/ICallLogMessage.md)

Properties to set

#### Returns

[`CallLogMessage`](CallLogMessage.md)

## Properties

### callOutcome

> **callOutcome**: [`CallOutcome`](../namespaces/CallLogMessage/enumerations/CallOutcome.md)

Defined in: [WAProto/index.d.ts:13045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13045)

CallLogMessage callOutcome.

#### Implementation of

[`ICallLogMessage`](../interfaces/ICallLogMessage.md).[`callOutcome`](../interfaces/ICallLogMessage.md#calloutcome)

***

### callType

> **callType**: [`CallType`](../namespaces/CallLogMessage/enumerations/CallType.md)

Defined in: [WAProto/index.d.ts:13051](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13051)

CallLogMessage callType.

#### Implementation of

[`ICallLogMessage`](../interfaces/ICallLogMessage.md).[`callType`](../interfaces/ICallLogMessage.md#calltype)

***

### durationSecs

> **durationSecs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:13048](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13048)

CallLogMessage durationSecs.

#### Implementation of

[`ICallLogMessage`](../interfaces/ICallLogMessage.md).[`durationSecs`](../interfaces/ICallLogMessage.md#durationsecs)

***

### isVideo

> **isVideo**: `boolean`

Defined in: [WAProto/index.d.ts:13042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13042)

CallLogMessage isVideo.

#### Implementation of

[`ICallLogMessage`](../interfaces/ICallLogMessage.md).[`isVideo`](../interfaces/ICallLogMessage.md#isvideo)

***

### participants

> **participants**: [`ICallParticipant`](../namespaces/CallLogMessage/interfaces/ICallParticipant.md)[]

Defined in: [WAProto/index.d.ts:13054](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13054)

CallLogMessage participants.

#### Implementation of

[`ICallLogMessage`](../interfaces/ICallLogMessage.md).[`participants`](../interfaces/ICallLogMessage.md#participants)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13124](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13124)

Converts this CallLogMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CallLogMessage`](CallLogMessage.md)

Defined in: [WAProto/index.d.ts:13061](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13061)

Creates a new CallLogMessage instance using the specified properties.

#### Parameters

##### properties?

[`ICallLogMessage`](../interfaces/ICallLogMessage.md)

Properties to set

#### Returns

[`CallLogMessage`](CallLogMessage.md)

CallLogMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CallLogMessage`](CallLogMessage.md)

Defined in: [WAProto/index.d.ts:13087](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13087)

Decodes a CallLogMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CallLogMessage`](CallLogMessage.md)

CallLogMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CallLogMessage`](CallLogMessage.md)

Defined in: [WAProto/index.d.ts:13096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13096)

Decodes a CallLogMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CallLogMessage`](CallLogMessage.md)

CallLogMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13069](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13069)

Encodes the specified CallLogMessage message. Does not implicitly [verify](CallLogMessage.md#verify) messages.

#### Parameters

##### message

[`ICallLogMessage`](../interfaces/ICallLogMessage.md)

CallLogMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13077](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13077)

Encodes the specified CallLogMessage message, length delimited. Does not implicitly [verify](CallLogMessage.md#verify) messages.

#### Parameters

##### message

[`ICallLogMessage`](../interfaces/ICallLogMessage.md)

CallLogMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CallLogMessage`](CallLogMessage.md)

Defined in: [WAProto/index.d.ts:13110](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13110)

Creates a CallLogMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CallLogMessage`](CallLogMessage.md)

CallLogMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13131)

Gets the default type url for CallLogMessage

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

Defined in: [WAProto/index.d.ts:13118](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13118)

Creates a plain object from a CallLogMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`CallLogMessage`](CallLogMessage.md)

CallLogMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:13103](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13103)

Verifies a CallLogMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
