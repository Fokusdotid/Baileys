# Class: DisappearingMode

Defined in: [WAProto/index.d.ts:6795](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6795)

Represents a DisappearingMode.

## Implements

- [`IDisappearingMode`](../interfaces/IDisappearingMode.md)

## Constructors

### new DisappearingMode()

> **new DisappearingMode**(`properties`?): [`DisappearingMode`](DisappearingMode.md)

Defined in: [WAProto/index.d.ts:6801](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6801)

Constructs a new DisappearingMode.

#### Parameters

##### properties?

[`IDisappearingMode`](../interfaces/IDisappearingMode.md)

Properties to set

#### Returns

[`DisappearingMode`](DisappearingMode.md)

## Properties

### initiatedByMe

> **initiatedByMe**: `boolean`

Defined in: [WAProto/index.d.ts:6813](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6813)

DisappearingMode initiatedByMe.

#### Implementation of

[`IDisappearingMode`](../interfaces/IDisappearingMode.md).[`initiatedByMe`](../interfaces/IDisappearingMode.md#initiatedbyme)

***

### initiator

> **initiator**: [`Initiator`](../namespaces/DisappearingMode/enumerations/Initiator.md)

Defined in: [WAProto/index.d.ts:6804](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6804)

DisappearingMode initiator.

#### Implementation of

[`IDisappearingMode`](../interfaces/IDisappearingMode.md).[`initiator`](../interfaces/IDisappearingMode.md#initiator)

***

### initiatorDeviceJid

> **initiatorDeviceJid**: `string`

Defined in: [WAProto/index.d.ts:6810](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6810)

DisappearingMode initiatorDeviceJid.

#### Implementation of

[`IDisappearingMode`](../interfaces/IDisappearingMode.md).[`initiatorDeviceJid`](../interfaces/IDisappearingMode.md#initiatordevicejid)

***

### trigger

> **trigger**: [`Trigger`](../namespaces/DisappearingMode/enumerations/Trigger.md)

Defined in: [WAProto/index.d.ts:6807](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6807)

DisappearingMode trigger.

#### Implementation of

[`IDisappearingMode`](../interfaces/IDisappearingMode.md).[`trigger`](../interfaces/IDisappearingMode.md#trigger)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:6883](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6883)

Converts this DisappearingMode to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DisappearingMode`](DisappearingMode.md)

Defined in: [WAProto/index.d.ts:6820](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6820)

Creates a new DisappearingMode instance using the specified properties.

#### Parameters

##### properties?

[`IDisappearingMode`](../interfaces/IDisappearingMode.md)

Properties to set

#### Returns

[`DisappearingMode`](DisappearingMode.md)

DisappearingMode instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DisappearingMode`](DisappearingMode.md)

Defined in: [WAProto/index.d.ts:6846](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6846)

Decodes a DisappearingMode message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DisappearingMode`](DisappearingMode.md)

DisappearingMode

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DisappearingMode`](DisappearingMode.md)

Defined in: [WAProto/index.d.ts:6855](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6855)

Decodes a DisappearingMode message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DisappearingMode`](DisappearingMode.md)

DisappearingMode

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6828](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6828)

Encodes the specified DisappearingMode message. Does not implicitly [verify](DisappearingMode.md#verify) messages.

#### Parameters

##### message

[`IDisappearingMode`](../interfaces/IDisappearingMode.md)

DisappearingMode message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6836)

Encodes the specified DisappearingMode message, length delimited. Does not implicitly [verify](DisappearingMode.md#verify) messages.

#### Parameters

##### message

[`IDisappearingMode`](../interfaces/IDisappearingMode.md)

DisappearingMode message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DisappearingMode`](DisappearingMode.md)

Defined in: [WAProto/index.d.ts:6869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6869)

Creates a DisappearingMode message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DisappearingMode`](DisappearingMode.md)

DisappearingMode

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:6890](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6890)

Gets the default type url for DisappearingMode

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

Defined in: [WAProto/index.d.ts:6877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6877)

Creates a plain object from a DisappearingMode message. Also converts values to other types if specified.

#### Parameters

##### message

[`DisappearingMode`](DisappearingMode.md)

DisappearingMode

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6862](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6862)

Verifies a DisappearingMode message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
