# Class: ScheduledCallEditMessage

Defined in: [WAProto/index.d.ts:23275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23275)

Represents a ScheduledCallEditMessage.

## Implements

- [`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md)

## Constructors

### new ScheduledCallEditMessage()

> **new ScheduledCallEditMessage**(`properties`?): [`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:23281](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23281)

Constructs a new ScheduledCallEditMessage.

#### Parameters

##### properties?

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md)

Properties to set

#### Returns

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

## Properties

### editType

> **editType**: [`EditType`](../namespaces/ScheduledCallEditMessage/enumerations/EditType.md)

Defined in: [WAProto/index.d.ts:23287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23287)

ScheduledCallEditMessage editType.

#### Implementation of

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md).[`editType`](../interfaces/IScheduledCallEditMessage.md#edittype)

***

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:23284](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23284)

ScheduledCallEditMessage key.

#### Implementation of

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md).[`key`](../interfaces/IScheduledCallEditMessage.md#key)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23357](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23357)

Converts this ScheduledCallEditMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:23294](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23294)

Creates a new ScheduledCallEditMessage instance using the specified properties.

#### Parameters

##### properties?

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md)

Properties to set

#### Returns

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

ScheduledCallEditMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:23320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23320)

Decodes a ScheduledCallEditMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

ScheduledCallEditMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:23329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23329)

Decodes a ScheduledCallEditMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

ScheduledCallEditMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23302](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23302)

Encodes the specified ScheduledCallEditMessage message. Does not implicitly [verify](ScheduledCallEditMessage.md#verify) messages.

#### Parameters

##### message

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md)

ScheduledCallEditMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23310](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23310)

Encodes the specified ScheduledCallEditMessage message, length delimited. Does not implicitly [verify](ScheduledCallEditMessage.md#verify) messages.

#### Parameters

##### message

[`IScheduledCallEditMessage`](../interfaces/IScheduledCallEditMessage.md)

ScheduledCallEditMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

Defined in: [WAProto/index.d.ts:23343](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23343)

Creates a ScheduledCallEditMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

ScheduledCallEditMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23364](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23364)

Gets the default type url for ScheduledCallEditMessage

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

Defined in: [WAProto/index.d.ts:23351](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23351)

Creates a plain object from a ScheduledCallEditMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ScheduledCallEditMessage`](ScheduledCallEditMessage.md)

ScheduledCallEditMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23336](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L23336)

Verifies a ScheduledCallEditMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
