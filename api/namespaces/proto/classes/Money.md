# Class: Money

Defined in: [WAProto/index.d.ts:25296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25296)

Represents a Money.

## Implements

- [`IMoney`](../interfaces/IMoney.md)

## Constructors

### new Money()

> **new Money**(`properties`?): [`Money`](Money.md)

Defined in: [WAProto/index.d.ts:25302](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25302)

Constructs a new Money.

#### Parameters

##### properties?

[`IMoney`](../interfaces/IMoney.md)

Properties to set

#### Returns

[`Money`](Money.md)

## Properties

### currencyCode

> **currencyCode**: `string`

Defined in: [WAProto/index.d.ts:25311](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25311)

Money currencyCode.

#### Implementation of

[`IMoney`](../interfaces/IMoney.md).[`currencyCode`](../interfaces/IMoney.md#currencycode)

***

### offset

> **offset**: `number`

Defined in: [WAProto/index.d.ts:25308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25308)

Money offset.

#### Implementation of

[`IMoney`](../interfaces/IMoney.md).[`offset`](../interfaces/IMoney.md#offset)

***

### value

> **value**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:25305](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25305)

Money value.

#### Implementation of

[`IMoney`](../interfaces/IMoney.md).[`value`](../interfaces/IMoney.md#value)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:25381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25381)

Converts this Money to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Money`](Money.md)

Defined in: [WAProto/index.d.ts:25318](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25318)

Creates a new Money instance using the specified properties.

#### Parameters

##### properties?

[`IMoney`](../interfaces/IMoney.md)

Properties to set

#### Returns

[`Money`](Money.md)

Money instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Money`](Money.md)

Defined in: [WAProto/index.d.ts:25344](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25344)

Decodes a Money message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Money`](Money.md)

Money

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Money`](Money.md)

Defined in: [WAProto/index.d.ts:25353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25353)

Decodes a Money message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Money`](Money.md)

Money

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25326)

Encodes the specified Money message. Does not implicitly [verify](Money.md#verify) messages.

#### Parameters

##### message

[`IMoney`](../interfaces/IMoney.md)

Money message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25334](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25334)

Encodes the specified Money message, length delimited. Does not implicitly [verify](Money.md#verify) messages.

#### Parameters

##### message

[`IMoney`](../interfaces/IMoney.md)

Money message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Money`](Money.md)

Defined in: [WAProto/index.d.ts:25367](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25367)

Creates a Money message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Money`](Money.md)

Money

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:25388](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25388)

Gets the default type url for Money

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

Defined in: [WAProto/index.d.ts:25375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25375)

Creates a plain object from a Money message. Also converts values to other types if specified.

#### Parameters

##### message

[`Money`](Money.md)

Money

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25360)

Verifies a Money message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
