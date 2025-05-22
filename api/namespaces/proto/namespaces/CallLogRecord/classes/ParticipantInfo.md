# Class: ParticipantInfo

Defined in: [WAProto/index.d.ts:2131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2131)

Represents a ParticipantInfo.

## Implements

- [`IParticipantInfo`](../interfaces/IParticipantInfo.md)

## Constructors

### new ParticipantInfo()

> **new ParticipantInfo**(`properties`?): [`ParticipantInfo`](ParticipantInfo.md)

Defined in: [WAProto/index.d.ts:2137](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2137)

Constructs a new ParticipantInfo.

#### Parameters

##### properties?

[`IParticipantInfo`](../interfaces/IParticipantInfo.md)

Properties to set

#### Returns

[`ParticipantInfo`](ParticipantInfo.md)

## Properties

### callResult

> **callResult**: [`CallResult`](../enumerations/CallResult.md)

Defined in: [WAProto/index.d.ts:2143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2143)

ParticipantInfo callResult.

#### Implementation of

[`IParticipantInfo`](../interfaces/IParticipantInfo.md).[`callResult`](../interfaces/IParticipantInfo.md#callresult)

***

### userJid

> **userJid**: `string`

Defined in: [WAProto/index.d.ts:2140](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2140)

ParticipantInfo userJid.

#### Implementation of

[`IParticipantInfo`](../interfaces/IParticipantInfo.md).[`userJid`](../interfaces/IParticipantInfo.md#userjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:2213](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2213)

Converts this ParticipantInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ParticipantInfo`](ParticipantInfo.md)

Defined in: [WAProto/index.d.ts:2150](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2150)

Creates a new ParticipantInfo instance using the specified properties.

#### Parameters

##### properties?

[`IParticipantInfo`](../interfaces/IParticipantInfo.md)

Properties to set

#### Returns

[`ParticipantInfo`](ParticipantInfo.md)

ParticipantInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ParticipantInfo`](ParticipantInfo.md)

Defined in: [WAProto/index.d.ts:2176](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2176)

Decodes a ParticipantInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ParticipantInfo`](ParticipantInfo.md)

ParticipantInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ParticipantInfo`](ParticipantInfo.md)

Defined in: [WAProto/index.d.ts:2185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2185)

Decodes a ParticipantInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ParticipantInfo`](ParticipantInfo.md)

ParticipantInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2158](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2158)

Encodes the specified ParticipantInfo message. Does not implicitly [verify](ParticipantInfo.md#verify) messages.

#### Parameters

##### message

[`IParticipantInfo`](../interfaces/IParticipantInfo.md)

ParticipantInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2166](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2166)

Encodes the specified ParticipantInfo message, length delimited. Does not implicitly [verify](ParticipantInfo.md#verify) messages.

#### Parameters

##### message

[`IParticipantInfo`](../interfaces/IParticipantInfo.md)

ParticipantInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ParticipantInfo`](ParticipantInfo.md)

Defined in: [WAProto/index.d.ts:2199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2199)

Creates a ParticipantInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ParticipantInfo`](ParticipantInfo.md)

ParticipantInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:2220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2220)

Gets the default type url for ParticipantInfo

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

Defined in: [WAProto/index.d.ts:2207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2207)

Creates a plain object from a ParticipantInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`ParticipantInfo`](ParticipantInfo.md)

ParticipantInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:2192](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2192)

Verifies a ParticipantInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
