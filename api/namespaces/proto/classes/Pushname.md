# Class: Pushname

Defined in: [WAProto/index.d.ts:28523](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28523)

Represents a Pushname.

## Implements

- [`IPushname`](../interfaces/IPushname.md)

## Constructors

### new Pushname()

> **new Pushname**(`properties`?): [`Pushname`](Pushname.md)

Defined in: [WAProto/index.d.ts:28529](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28529)

Constructs a new Pushname.

#### Parameters

##### properties?

[`IPushname`](../interfaces/IPushname.md)

Properties to set

#### Returns

[`Pushname`](Pushname.md)

## Properties

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:28532](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28532)

Pushname id.

#### Implementation of

[`IPushname`](../interfaces/IPushname.md).[`id`](../interfaces/IPushname.md#id)

***

### pushname

> **pushname**: `string`

Defined in: [WAProto/index.d.ts:28535](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28535)

Pushname pushname.

#### Implementation of

[`IPushname`](../interfaces/IPushname.md).[`pushname`](../interfaces/IPushname.md#pushname)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28605](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28605)

Converts this Pushname to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Pushname`](Pushname.md)

Defined in: [WAProto/index.d.ts:28542](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28542)

Creates a new Pushname instance using the specified properties.

#### Parameters

##### properties?

[`IPushname`](../interfaces/IPushname.md)

Properties to set

#### Returns

[`Pushname`](Pushname.md)

Pushname instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Pushname`](Pushname.md)

Defined in: [WAProto/index.d.ts:28568](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28568)

Decodes a Pushname message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Pushname`](Pushname.md)

Pushname

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Pushname`](Pushname.md)

Defined in: [WAProto/index.d.ts:28577](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28577)

Decodes a Pushname message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Pushname`](Pushname.md)

Pushname

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28550](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28550)

Encodes the specified Pushname message. Does not implicitly [verify](Pushname.md#verify) messages.

#### Parameters

##### message

[`IPushname`](../interfaces/IPushname.md)

Pushname message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28558)

Encodes the specified Pushname message, length delimited. Does not implicitly [verify](Pushname.md#verify) messages.

#### Parameters

##### message

[`IPushname`](../interfaces/IPushname.md)

Pushname message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Pushname`](Pushname.md)

Defined in: [WAProto/index.d.ts:28591](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28591)

Creates a Pushname message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Pushname`](Pushname.md)

Pushname

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28612)

Gets the default type url for Pushname

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

Defined in: [WAProto/index.d.ts:28599](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28599)

Creates a plain object from a Pushname message. Also converts values to other types if specified.

#### Parameters

##### message

[`Pushname`](Pushname.md)

Pushname

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28584](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28584)

Verifies a Pushname message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
