# Class: HistorySyncMsg

Defined in: [WAProto/index.d.ts:8518](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8518)

Represents a HistorySyncMsg.

## Implements

- [`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md)

## Constructors

### new HistorySyncMsg()

> **new HistorySyncMsg**(`properties`?): [`HistorySyncMsg`](HistorySyncMsg.md)

Defined in: [WAProto/index.d.ts:8524](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8524)

Constructs a new HistorySyncMsg.

#### Parameters

##### properties?

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md)

Properties to set

#### Returns

[`HistorySyncMsg`](HistorySyncMsg.md)

## Properties

### message?

> `optional` **message**: `null` \| [`IWebMessageInfo`](../interfaces/IWebMessageInfo.md)

Defined in: [WAProto/index.d.ts:8527](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8527)

HistorySyncMsg message.

#### Implementation of

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md).[`message`](../interfaces/IHistorySyncMsg.md#message)

***

### msgOrderId

> **msgOrderId**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:8530](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8530)

HistorySyncMsg msgOrderId.

#### Implementation of

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md).[`msgOrderId`](../interfaces/IHistorySyncMsg.md#msgorderid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:8600](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8600)

Converts this HistorySyncMsg to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HistorySyncMsg`](HistorySyncMsg.md)

Defined in: [WAProto/index.d.ts:8537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8537)

Creates a new HistorySyncMsg instance using the specified properties.

#### Parameters

##### properties?

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md)

Properties to set

#### Returns

[`HistorySyncMsg`](HistorySyncMsg.md)

HistorySyncMsg instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HistorySyncMsg`](HistorySyncMsg.md)

Defined in: [WAProto/index.d.ts:8563](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8563)

Decodes a HistorySyncMsg message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HistorySyncMsg`](HistorySyncMsg.md)

HistorySyncMsg

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HistorySyncMsg`](HistorySyncMsg.md)

Defined in: [WAProto/index.d.ts:8572](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8572)

Decodes a HistorySyncMsg message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HistorySyncMsg`](HistorySyncMsg.md)

HistorySyncMsg

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8545](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8545)

Encodes the specified HistorySyncMsg message. Does not implicitly [verify](HistorySyncMsg.md#verify) messages.

#### Parameters

##### message

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md)

HistorySyncMsg message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8553](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8553)

Encodes the specified HistorySyncMsg message, length delimited. Does not implicitly [verify](HistorySyncMsg.md#verify) messages.

#### Parameters

##### message

[`IHistorySyncMsg`](../interfaces/IHistorySyncMsg.md)

HistorySyncMsg message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HistorySyncMsg`](HistorySyncMsg.md)

Defined in: [WAProto/index.d.ts:8586](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8586)

Creates a HistorySyncMsg message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HistorySyncMsg`](HistorySyncMsg.md)

HistorySyncMsg

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:8607](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8607)

Gets the default type url for HistorySyncMsg

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

Defined in: [WAProto/index.d.ts:8594](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8594)

Creates a plain object from a HistorySyncMsg message. Also converts values to other types if specified.

#### Parameters

##### message

[`HistorySyncMsg`](HistorySyncMsg.md)

HistorySyncMsg

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:8579](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8579)

Verifies a HistorySyncMsg message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
