# Class: KeepInChat

Defined in: [WAProto/index.d.ts:9306](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9306)

Represents a KeepInChat.

## Implements

- [`IKeepInChat`](../interfaces/IKeepInChat.md)

## Constructors

### new KeepInChat()

> **new KeepInChat**(`properties`?): [`KeepInChat`](KeepInChat.md)

Defined in: [WAProto/index.d.ts:9312](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9312)

Constructs a new KeepInChat.

#### Parameters

##### properties?

[`IKeepInChat`](../interfaces/IKeepInChat.md)

Properties to set

#### Returns

[`KeepInChat`](KeepInChat.md)

## Properties

### clientTimestampMs

> **clientTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:9327](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9327)

KeepInChat clientTimestampMs.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`clientTimestampMs`](../interfaces/IKeepInChat.md#clienttimestampms)

***

### deviceJid

> **deviceJid**: `string`

Defined in: [WAProto/index.d.ts:9324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9324)

KeepInChat deviceJid.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`deviceJid`](../interfaces/IKeepInChat.md#devicejid)

***

### keepType

> **keepType**: [`KeepType`](../enumerations/KeepType.md)

Defined in: [WAProto/index.d.ts:9315](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9315)

KeepInChat keepType.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`keepType`](../interfaces/IKeepInChat.md#keeptype)

***

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:9321](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9321)

KeepInChat key.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`key`](../interfaces/IKeepInChat.md#key)

***

### serverTimestamp

> **serverTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:9318](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9318)

KeepInChat serverTimestamp.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`serverTimestamp`](../interfaces/IKeepInChat.md#servertimestamp)

***

### serverTimestampMs

> **serverTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:9330](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9330)

KeepInChat serverTimestampMs.

#### Implementation of

[`IKeepInChat`](../interfaces/IKeepInChat.md).[`serverTimestampMs`](../interfaces/IKeepInChat.md#servertimestampms)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9400](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9400)

Converts this KeepInChat to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`KeepInChat`](KeepInChat.md)

Defined in: [WAProto/index.d.ts:9337](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9337)

Creates a new KeepInChat instance using the specified properties.

#### Parameters

##### properties?

[`IKeepInChat`](../interfaces/IKeepInChat.md)

Properties to set

#### Returns

[`KeepInChat`](KeepInChat.md)

KeepInChat instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`KeepInChat`](KeepInChat.md)

Defined in: [WAProto/index.d.ts:9363](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9363)

Decodes a KeepInChat message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`KeepInChat`](KeepInChat.md)

KeepInChat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`KeepInChat`](KeepInChat.md)

Defined in: [WAProto/index.d.ts:9372](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9372)

Decodes a KeepInChat message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`KeepInChat`](KeepInChat.md)

KeepInChat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9345](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9345)

Encodes the specified KeepInChat message. Does not implicitly [verify](KeepInChat.md#verify) messages.

#### Parameters

##### message

[`IKeepInChat`](../interfaces/IKeepInChat.md)

KeepInChat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9353)

Encodes the specified KeepInChat message, length delimited. Does not implicitly [verify](KeepInChat.md#verify) messages.

#### Parameters

##### message

[`IKeepInChat`](../interfaces/IKeepInChat.md)

KeepInChat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`KeepInChat`](KeepInChat.md)

Defined in: [WAProto/index.d.ts:9386](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9386)

Creates a KeepInChat message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`KeepInChat`](KeepInChat.md)

KeepInChat

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9407](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9407)

Gets the default type url for KeepInChat

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

Defined in: [WAProto/index.d.ts:9394](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9394)

Creates a plain object from a KeepInChat message. Also converts values to other types if specified.

#### Parameters

##### message

[`KeepInChat`](KeepInChat.md)

KeepInChat

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9379](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9379)

Verifies a KeepInChat message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
