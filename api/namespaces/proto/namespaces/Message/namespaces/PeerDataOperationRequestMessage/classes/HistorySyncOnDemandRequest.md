# Class: HistorySyncOnDemandRequest

Defined in: [WAProto/index.d.ts:20215](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20215)

Represents a HistorySyncOnDemandRequest.

## Implements

- [`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md)

## Constructors

### new HistorySyncOnDemandRequest()

> **new HistorySyncOnDemandRequest**(`properties`?): [`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20221](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20221)

Constructs a new HistorySyncOnDemandRequest.

#### Parameters

##### properties?

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md)

Properties to set

#### Returns

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

## Properties

### chatJid

> **chatJid**: `string`

Defined in: [WAProto/index.d.ts:20224](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20224)

HistorySyncOnDemandRequest chatJid.

#### Implementation of

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md).[`chatJid`](../interfaces/IHistorySyncOnDemandRequest.md#chatjid)

***

### oldestMsgFromMe

> **oldestMsgFromMe**: `boolean`

Defined in: [WAProto/index.d.ts:20230](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20230)

HistorySyncOnDemandRequest oldestMsgFromMe.

#### Implementation of

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md).[`oldestMsgFromMe`](../interfaces/IHistorySyncOnDemandRequest.md#oldestmsgfromme)

***

### oldestMsgId

> **oldestMsgId**: `string`

Defined in: [WAProto/index.d.ts:20227](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20227)

HistorySyncOnDemandRequest oldestMsgId.

#### Implementation of

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md).[`oldestMsgId`](../interfaces/IHistorySyncOnDemandRequest.md#oldestmsgid)

***

### oldestMsgTimestampMs

> **oldestMsgTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:20236](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20236)

HistorySyncOnDemandRequest oldestMsgTimestampMs.

#### Implementation of

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md).[`oldestMsgTimestampMs`](../interfaces/IHistorySyncOnDemandRequest.md#oldestmsgtimestampms)

***

### onDemandMsgCount

> **onDemandMsgCount**: `number`

Defined in: [WAProto/index.d.ts:20233](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20233)

HistorySyncOnDemandRequest onDemandMsgCount.

#### Implementation of

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md).[`onDemandMsgCount`](../interfaces/IHistorySyncOnDemandRequest.md#ondemandmsgcount)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20306](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20306)

Converts this HistorySyncOnDemandRequest to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20243](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20243)

Creates a new HistorySyncOnDemandRequest instance using the specified properties.

#### Parameters

##### properties?

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md)

Properties to set

#### Returns

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20269)

Decodes a HistorySyncOnDemandRequest message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20278)

Decodes a HistorySyncOnDemandRequest message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20251)

Encodes the specified HistorySyncOnDemandRequest message. Does not implicitly [verify](HistorySyncOnDemandRequest.md#verify) messages.

#### Parameters

##### message

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20259](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20259)

Encodes the specified HistorySyncOnDemandRequest message, length delimited. Does not implicitly [verify](HistorySyncOnDemandRequest.md#verify) messages.

#### Parameters

##### message

[`IHistorySyncOnDemandRequest`](../interfaces/IHistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

Defined in: [WAProto/index.d.ts:20292](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20292)

Creates a HistorySyncOnDemandRequest message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20313](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20313)

Gets the default type url for HistorySyncOnDemandRequest

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

Defined in: [WAProto/index.d.ts:20300](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20300)

Creates a plain object from a HistorySyncOnDemandRequest message. Also converts values to other types if specified.

#### Parameters

##### message

[`HistorySyncOnDemandRequest`](HistorySyncOnDemandRequest.md)

HistorySyncOnDemandRequest

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20285](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20285)

Verifies a HistorySyncOnDemandRequest message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
