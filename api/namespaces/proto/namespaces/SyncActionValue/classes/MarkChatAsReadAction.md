# Class: MarkChatAsReadAction

Defined in: [WAProto/index.d.ts:34320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34320)

Represents a MarkChatAsReadAction.

## Implements

- [`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md)

## Constructors

### new MarkChatAsReadAction()

> **new MarkChatAsReadAction**(`properties`?): [`MarkChatAsReadAction`](MarkChatAsReadAction.md)

Defined in: [WAProto/index.d.ts:34326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34326)

Constructs a new MarkChatAsReadAction.

#### Parameters

##### properties?

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md)

Properties to set

#### Returns

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

## Properties

### messageRange?

> `optional` **messageRange**: `null` \| [`ISyncActionMessageRange`](../interfaces/ISyncActionMessageRange.md)

Defined in: [WAProto/index.d.ts:34332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34332)

MarkChatAsReadAction messageRange.

#### Implementation of

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md).[`messageRange`](../interfaces/IMarkChatAsReadAction.md#messagerange)

***

### read

> **read**: `boolean`

Defined in: [WAProto/index.d.ts:34329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34329)

MarkChatAsReadAction read.

#### Implementation of

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md).[`read`](../interfaces/IMarkChatAsReadAction.md#read)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34402)

Converts this MarkChatAsReadAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MarkChatAsReadAction`](MarkChatAsReadAction.md)

Defined in: [WAProto/index.d.ts:34339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34339)

Creates a new MarkChatAsReadAction instance using the specified properties.

#### Parameters

##### properties?

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md)

Properties to set

#### Returns

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

MarkChatAsReadAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MarkChatAsReadAction`](MarkChatAsReadAction.md)

Defined in: [WAProto/index.d.ts:34365](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34365)

Decodes a MarkChatAsReadAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

MarkChatAsReadAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MarkChatAsReadAction`](MarkChatAsReadAction.md)

Defined in: [WAProto/index.d.ts:34374](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34374)

Decodes a MarkChatAsReadAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

MarkChatAsReadAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34347](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34347)

Encodes the specified MarkChatAsReadAction message. Does not implicitly [verify](MarkChatAsReadAction.md#verify) messages.

#### Parameters

##### message

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md)

MarkChatAsReadAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34355](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34355)

Encodes the specified MarkChatAsReadAction message, length delimited. Does not implicitly [verify](MarkChatAsReadAction.md#verify) messages.

#### Parameters

##### message

[`IMarkChatAsReadAction`](../interfaces/IMarkChatAsReadAction.md)

MarkChatAsReadAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MarkChatAsReadAction`](MarkChatAsReadAction.md)

Defined in: [WAProto/index.d.ts:34388](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34388)

Creates a MarkChatAsReadAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

MarkChatAsReadAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34409](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34409)

Gets the default type url for MarkChatAsReadAction

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

Defined in: [WAProto/index.d.ts:34396](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34396)

Creates a plain object from a MarkChatAsReadAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`MarkChatAsReadAction`](MarkChatAsReadAction.md)

MarkChatAsReadAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34381)

Verifies a MarkChatAsReadAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
