# Class: Chat

Defined in: [WAProto/index.d.ts:13367](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13367)

Represents a Chat.

## Implements

- [`IChat`](../interfaces/IChat.md)

## Constructors

### new Chat()

> **new Chat**(`properties`?): [`Chat`](Chat.md)

Defined in: [WAProto/index.d.ts:13373](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13373)

Constructs a new Chat.

#### Parameters

##### properties?

[`IChat`](../interfaces/IChat.md)

Properties to set

#### Returns

[`Chat`](Chat.md)

## Properties

### displayName

> **displayName**: `string`

Defined in: [WAProto/index.d.ts:13376](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13376)

Chat displayName.

#### Implementation of

[`IChat`](../interfaces/IChat.md).[`displayName`](../interfaces/IChat.md#displayname)

***

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:13379](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13379)

Chat id.

#### Implementation of

[`IChat`](../interfaces/IChat.md).[`id`](../interfaces/IChat.md#id)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13449](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13449)

Converts this Chat to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Chat`](Chat.md)

Defined in: [WAProto/index.d.ts:13386](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13386)

Creates a new Chat instance using the specified properties.

#### Parameters

##### properties?

[`IChat`](../interfaces/IChat.md)

Properties to set

#### Returns

[`Chat`](Chat.md)

Chat instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Chat`](Chat.md)

Defined in: [WAProto/index.d.ts:13412](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13412)

Decodes a Chat message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Chat`](Chat.md)

Chat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Chat`](Chat.md)

Defined in: [WAProto/index.d.ts:13421](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13421)

Decodes a Chat message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Chat`](Chat.md)

Chat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13394](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13394)

Encodes the specified Chat message. Does not implicitly [verify](Chat.md#verify) messages.

#### Parameters

##### message

[`IChat`](../interfaces/IChat.md)

Chat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13402)

Encodes the specified Chat message, length delimited. Does not implicitly [verify](Chat.md#verify) messages.

#### Parameters

##### message

[`IChat`](../interfaces/IChat.md)

Chat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Chat`](Chat.md)

Defined in: [WAProto/index.d.ts:13435](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13435)

Creates a Chat message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Chat`](Chat.md)

Chat

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13456)

Gets the default type url for Chat

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

Defined in: [WAProto/index.d.ts:13443](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13443)

Creates a plain object from a Chat message. Also converts values to other types if specified.

#### Parameters

##### message

[`Chat`](Chat.md)

Chat

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:13428](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13428)

Verifies a Chat message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
