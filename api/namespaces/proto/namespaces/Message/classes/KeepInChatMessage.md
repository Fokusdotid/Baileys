# Class: KeepInChatMessage

Defined in: [WAProto/index.d.ts:18093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18093)

Represents a KeepInChatMessage.

## Implements

- [`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md)

## Constructors

### new KeepInChatMessage()

> **new KeepInChatMessage**(`properties`?): [`KeepInChatMessage`](KeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:18099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18099)

Constructs a new KeepInChatMessage.

#### Parameters

##### properties?

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md)

Properties to set

#### Returns

[`KeepInChatMessage`](KeepInChatMessage.md)

## Properties

### keepType

> **keepType**: [`KeepType`](../../../enumerations/KeepType.md)

Defined in: [WAProto/index.d.ts:18105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18105)

KeepInChatMessage keepType.

#### Implementation of

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md).[`keepType`](../interfaces/IKeepInChatMessage.md#keeptype)

***

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:18102](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18102)

KeepInChatMessage key.

#### Implementation of

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md).[`key`](../interfaces/IKeepInChatMessage.md#key)

***

### timestampMs

> **timestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:18108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18108)

KeepInChatMessage timestampMs.

#### Implementation of

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md).[`timestampMs`](../interfaces/IKeepInChatMessage.md#timestampms)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18178)

Converts this KeepInChatMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`KeepInChatMessage`](KeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:18115](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18115)

Creates a new KeepInChatMessage instance using the specified properties.

#### Parameters

##### properties?

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md)

Properties to set

#### Returns

[`KeepInChatMessage`](KeepInChatMessage.md)

KeepInChatMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`KeepInChatMessage`](KeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:18141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18141)

Decodes a KeepInChatMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`KeepInChatMessage`](KeepInChatMessage.md)

KeepInChatMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`KeepInChatMessage`](KeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:18150](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18150)

Decodes a KeepInChatMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`KeepInChatMessage`](KeepInChatMessage.md)

KeepInChatMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18123)

Encodes the specified KeepInChatMessage message. Does not implicitly [verify](KeepInChatMessage.md#verify) messages.

#### Parameters

##### message

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md)

KeepInChatMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18131)

Encodes the specified KeepInChatMessage message, length delimited. Does not implicitly [verify](KeepInChatMessage.md#verify) messages.

#### Parameters

##### message

[`IKeepInChatMessage`](../interfaces/IKeepInChatMessage.md)

KeepInChatMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`KeepInChatMessage`](KeepInChatMessage.md)

Defined in: [WAProto/index.d.ts:18164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18164)

Creates a KeepInChatMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`KeepInChatMessage`](KeepInChatMessage.md)

KeepInChatMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18185)

Gets the default type url for KeepInChatMessage

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

Defined in: [WAProto/index.d.ts:18172](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18172)

Creates a plain object from a KeepInChatMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`KeepInChatMessage`](KeepInChatMessage.md)

KeepInChatMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18157](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18157)

Verifies a KeepInChatMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
