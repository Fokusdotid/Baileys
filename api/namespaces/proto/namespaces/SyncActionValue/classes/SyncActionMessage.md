# Class: SyncActionMessage

Defined in: [WAProto/index.d.ts:36661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36661)

Represents a SyncActionMessage.

## Implements

- [`ISyncActionMessage`](../interfaces/ISyncActionMessage.md)

## Constructors

### new SyncActionMessage()

> **new SyncActionMessage**(`properties`?): [`SyncActionMessage`](SyncActionMessage.md)

Defined in: [WAProto/index.d.ts:36667](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36667)

Constructs a new SyncActionMessage.

#### Parameters

##### properties?

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md)

Properties to set

#### Returns

[`SyncActionMessage`](SyncActionMessage.md)

## Properties

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:36670](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36670)

SyncActionMessage key.

#### Implementation of

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md).[`key`](../interfaces/ISyncActionMessage.md#key)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:36673](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36673)

SyncActionMessage timestamp.

#### Implementation of

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md).[`timestamp`](../interfaces/ISyncActionMessage.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36743](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36743)

Converts this SyncActionMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncActionMessage`](SyncActionMessage.md)

Defined in: [WAProto/index.d.ts:36680](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36680)

Creates a new SyncActionMessage instance using the specified properties.

#### Parameters

##### properties?

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md)

Properties to set

#### Returns

[`SyncActionMessage`](SyncActionMessage.md)

SyncActionMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncActionMessage`](SyncActionMessage.md)

Defined in: [WAProto/index.d.ts:36706](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36706)

Decodes a SyncActionMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncActionMessage`](SyncActionMessage.md)

SyncActionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncActionMessage`](SyncActionMessage.md)

Defined in: [WAProto/index.d.ts:36715](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36715)

Decodes a SyncActionMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncActionMessage`](SyncActionMessage.md)

SyncActionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36688](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36688)

Encodes the specified SyncActionMessage message. Does not implicitly [verify](SyncActionMessage.md#verify) messages.

#### Parameters

##### message

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md)

SyncActionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36696](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36696)

Encodes the specified SyncActionMessage message, length delimited. Does not implicitly [verify](SyncActionMessage.md#verify) messages.

#### Parameters

##### message

[`ISyncActionMessage`](../interfaces/ISyncActionMessage.md)

SyncActionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncActionMessage`](SyncActionMessage.md)

Defined in: [WAProto/index.d.ts:36729](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36729)

Creates a SyncActionMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncActionMessage`](SyncActionMessage.md)

SyncActionMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36750](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36750)

Gets the default type url for SyncActionMessage

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

Defined in: [WAProto/index.d.ts:36737](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36737)

Creates a plain object from a SyncActionMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncActionMessage`](SyncActionMessage.md)

SyncActionMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36722](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36722)

Verifies a SyncActionMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
