# Class: ScheduledCallCreationMessage

Defined in: [WAProto/index.d.ts:23159](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23159)

Represents a ScheduledCallCreationMessage.

## Implements

- [`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md)

## Constructors

### new ScheduledCallCreationMessage()

> **new ScheduledCallCreationMessage**(`properties`?): [`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:23165](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23165)

Constructs a new ScheduledCallCreationMessage.

#### Parameters

##### properties?

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md)

Properties to set

#### Returns

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

## Properties

### callType

> **callType**: [`CallType`](../namespaces/ScheduledCallCreationMessage/enumerations/CallType.md)

Defined in: [WAProto/index.d.ts:23171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23171)

ScheduledCallCreationMessage callType.

#### Implementation of

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md).[`callType`](../interfaces/IScheduledCallCreationMessage.md#calltype)

***

### scheduledTimestampMs

> **scheduledTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:23168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23168)

ScheduledCallCreationMessage scheduledTimestampMs.

#### Implementation of

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md).[`scheduledTimestampMs`](../interfaces/IScheduledCallCreationMessage.md#scheduledtimestampms)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:23174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23174)

ScheduledCallCreationMessage title.

#### Implementation of

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md).[`title`](../interfaces/IScheduledCallCreationMessage.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23244)

Converts this ScheduledCallCreationMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:23181](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23181)

Creates a new ScheduledCallCreationMessage instance using the specified properties.

#### Parameters

##### properties?

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md)

Properties to set

#### Returns

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

ScheduledCallCreationMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:23207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23207)

Decodes a ScheduledCallCreationMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

ScheduledCallCreationMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:23216](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23216)

Decodes a ScheduledCallCreationMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

ScheduledCallCreationMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23189](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23189)

Encodes the specified ScheduledCallCreationMessage message. Does not implicitly [verify](ScheduledCallCreationMessage.md#verify) messages.

#### Parameters

##### message

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md)

ScheduledCallCreationMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23197)

Encodes the specified ScheduledCallCreationMessage message, length delimited. Does not implicitly [verify](ScheduledCallCreationMessage.md#verify) messages.

#### Parameters

##### message

[`IScheduledCallCreationMessage`](../interfaces/IScheduledCallCreationMessage.md)

ScheduledCallCreationMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

Defined in: [WAProto/index.d.ts:23230](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23230)

Creates a ScheduledCallCreationMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

ScheduledCallCreationMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23251)

Gets the default type url for ScheduledCallCreationMessage

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

Defined in: [WAProto/index.d.ts:23238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23238)

Creates a plain object from a ScheduledCallCreationMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ScheduledCallCreationMessage`](ScheduledCallCreationMessage.md)

ScheduledCallCreationMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23223)

Verifies a ScheduledCallCreationMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
