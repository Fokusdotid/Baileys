# Class: MsgRowOpaqueData

Defined in: [WAProto/index.d.ts:25936](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25936)

Represents a MsgRowOpaqueData.

## Implements

- [`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md)

## Constructors

### new MsgRowOpaqueData()

> **new MsgRowOpaqueData**(`properties`?): [`MsgRowOpaqueData`](MsgRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:25942](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25942)

Constructs a new MsgRowOpaqueData.

#### Parameters

##### properties?

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md)

Properties to set

#### Returns

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

## Properties

### currentMsg?

> `optional` **currentMsg**: `null` \| [`IMsgOpaqueData`](../interfaces/IMsgOpaqueData.md)

Defined in: [WAProto/index.d.ts:25945](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25945)

MsgRowOpaqueData currentMsg.

#### Implementation of

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md).[`currentMsg`](../interfaces/IMsgRowOpaqueData.md#currentmsg)

***

### quotedMsg?

> `optional` **quotedMsg**: `null` \| [`IMsgOpaqueData`](../interfaces/IMsgOpaqueData.md)

Defined in: [WAProto/index.d.ts:25948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25948)

MsgRowOpaqueData quotedMsg.

#### Implementation of

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md).[`quotedMsg`](../interfaces/IMsgRowOpaqueData.md#quotedmsg)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:26018](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26018)

Converts this MsgRowOpaqueData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MsgRowOpaqueData`](MsgRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:25955](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25955)

Creates a new MsgRowOpaqueData instance using the specified properties.

#### Parameters

##### properties?

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md)

Properties to set

#### Returns

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

MsgRowOpaqueData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MsgRowOpaqueData`](MsgRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:25981](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25981)

Decodes a MsgRowOpaqueData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

MsgRowOpaqueData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MsgRowOpaqueData`](MsgRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:25990](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25990)

Decodes a MsgRowOpaqueData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

MsgRowOpaqueData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25963](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25963)

Encodes the specified MsgRowOpaqueData message. Does not implicitly [verify](MsgRowOpaqueData.md#verify) messages.

#### Parameters

##### message

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md)

MsgRowOpaqueData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25971)

Encodes the specified MsgRowOpaqueData message, length delimited. Does not implicitly [verify](MsgRowOpaqueData.md#verify) messages.

#### Parameters

##### message

[`IMsgRowOpaqueData`](../interfaces/IMsgRowOpaqueData.md)

MsgRowOpaqueData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MsgRowOpaqueData`](MsgRowOpaqueData.md)

Defined in: [WAProto/index.d.ts:26004](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26004)

Creates a MsgRowOpaqueData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

MsgRowOpaqueData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:26025](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26025)

Gets the default type url for MsgRowOpaqueData

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

Defined in: [WAProto/index.d.ts:26012](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26012)

Creates a plain object from a MsgRowOpaqueData message. Also converts values to other types if specified.

#### Parameters

##### message

[`MsgRowOpaqueData`](MsgRowOpaqueData.md)

MsgRowOpaqueData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25997](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25997)

Verifies a MsgRowOpaqueData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
