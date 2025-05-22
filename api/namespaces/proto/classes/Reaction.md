# Class: Reaction

Defined in: [WAProto/index.d.ts:29076](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29076)

Represents a Reaction.

## Implements

- [`IReaction`](../interfaces/IReaction.md)

## Constructors

### new Reaction()

> **new Reaction**(`properties`?): [`Reaction`](Reaction.md)

Defined in: [WAProto/index.d.ts:29082](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29082)

Constructs a new Reaction.

#### Parameters

##### properties?

[`IReaction`](../interfaces/IReaction.md)

Properties to set

#### Returns

[`Reaction`](Reaction.md)

## Properties

### groupingKey

> **groupingKey**: `string`

Defined in: [WAProto/index.d.ts:29091](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29091)

Reaction groupingKey.

#### Implementation of

[`IReaction`](../interfaces/IReaction.md).[`groupingKey`](../interfaces/IReaction.md#groupingkey)

***

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:29085](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29085)

Reaction key.

#### Implementation of

[`IReaction`](../interfaces/IReaction.md).[`key`](../interfaces/IReaction.md#key)

***

### senderTimestampMs

> **senderTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:29094](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29094)

Reaction senderTimestampMs.

#### Implementation of

[`IReaction`](../interfaces/IReaction.md).[`senderTimestampMs`](../interfaces/IReaction.md#sendertimestampms)

***

### text

> **text**: `string`

Defined in: [WAProto/index.d.ts:29088](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29088)

Reaction text.

#### Implementation of

[`IReaction`](../interfaces/IReaction.md).[`text`](../interfaces/IReaction.md#text)

***

### unread

> **unread**: `boolean`

Defined in: [WAProto/index.d.ts:29097](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29097)

Reaction unread.

#### Implementation of

[`IReaction`](../interfaces/IReaction.md).[`unread`](../interfaces/IReaction.md#unread)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29167](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29167)

Converts this Reaction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Reaction`](Reaction.md)

Defined in: [WAProto/index.d.ts:29104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29104)

Creates a new Reaction instance using the specified properties.

#### Parameters

##### properties?

[`IReaction`](../interfaces/IReaction.md)

Properties to set

#### Returns

[`Reaction`](Reaction.md)

Reaction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Reaction`](Reaction.md)

Defined in: [WAProto/index.d.ts:29130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29130)

Decodes a Reaction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Reaction`](Reaction.md)

Reaction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Reaction`](Reaction.md)

Defined in: [WAProto/index.d.ts:29139](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29139)

Decodes a Reaction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Reaction`](Reaction.md)

Reaction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29112](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29112)

Encodes the specified Reaction message. Does not implicitly [verify](Reaction.md#verify) messages.

#### Parameters

##### message

[`IReaction`](../interfaces/IReaction.md)

Reaction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29120)

Encodes the specified Reaction message, length delimited. Does not implicitly [verify](Reaction.md#verify) messages.

#### Parameters

##### message

[`IReaction`](../interfaces/IReaction.md)

Reaction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Reaction`](Reaction.md)

Defined in: [WAProto/index.d.ts:29153](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29153)

Creates a Reaction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Reaction`](Reaction.md)

Reaction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29174)

Gets the default type url for Reaction

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

Defined in: [WAProto/index.d.ts:29161](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29161)

Creates a plain object from a Reaction message. Also converts values to other types if specified.

#### Parameters

##### message

[`Reaction`](Reaction.md)

Reaction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29146](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29146)

Verifies a Reaction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
