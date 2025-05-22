# Class: PollOption

Defined in: [WAProto/index.d.ts:25835](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25835)

Represents a PollOption.

## Implements

- [`IPollOption`](../interfaces/IPollOption.md)

## Constructors

### new PollOption()

> **new PollOption**(`properties`?): [`PollOption`](PollOption.md)

Defined in: [WAProto/index.d.ts:25841](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25841)

Constructs a new PollOption.

#### Parameters

##### properties?

[`IPollOption`](../interfaces/IPollOption.md)

Properties to set

#### Returns

[`PollOption`](PollOption.md)

## Properties

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:25844](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25844)

PollOption name.

#### Implementation of

[`IPollOption`](../interfaces/IPollOption.md).[`name`](../interfaces/IPollOption.md#name)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:25914](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25914)

Converts this PollOption to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollOption`](PollOption.md)

Defined in: [WAProto/index.d.ts:25851](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25851)

Creates a new PollOption instance using the specified properties.

#### Parameters

##### properties?

[`IPollOption`](../interfaces/IPollOption.md)

Properties to set

#### Returns

[`PollOption`](PollOption.md)

PollOption instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollOption`](PollOption.md)

Defined in: [WAProto/index.d.ts:25877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25877)

Decodes a PollOption message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollOption`](PollOption.md)

PollOption

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollOption`](PollOption.md)

Defined in: [WAProto/index.d.ts:25886](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25886)

Decodes a PollOption message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollOption`](PollOption.md)

PollOption

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25859)

Encodes the specified PollOption message. Does not implicitly [verify](PollOption.md#verify) messages.

#### Parameters

##### message

[`IPollOption`](../interfaces/IPollOption.md)

PollOption message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25867](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25867)

Encodes the specified PollOption message, length delimited. Does not implicitly [verify](PollOption.md#verify) messages.

#### Parameters

##### message

[`IPollOption`](../interfaces/IPollOption.md)

PollOption message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollOption`](PollOption.md)

Defined in: [WAProto/index.d.ts:25900](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25900)

Creates a PollOption message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollOption`](PollOption.md)

PollOption

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:25921](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25921)

Gets the default type url for PollOption

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

Defined in: [WAProto/index.d.ts:25908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25908)

Creates a plain object from a PollOption message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollOption`](PollOption.md)

PollOption

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25893](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25893)

Verifies a PollOption message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
