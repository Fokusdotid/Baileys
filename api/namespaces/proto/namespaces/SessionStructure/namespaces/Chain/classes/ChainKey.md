# Class: ChainKey

Defined in: [WAProto/index.d.ts:30624](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30624)

Represents a ChainKey.

## Implements

- [`IChainKey`](../interfaces/IChainKey.md)

## Constructors

### new ChainKey()

> **new ChainKey**(`properties`?): [`ChainKey`](ChainKey.md)

Defined in: [WAProto/index.d.ts:30630](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30630)

Constructs a new ChainKey.

#### Parameters

##### properties?

[`IChainKey`](../interfaces/IChainKey.md)

Properties to set

#### Returns

[`ChainKey`](ChainKey.md)

## Properties

### index

> **index**: `number`

Defined in: [WAProto/index.d.ts:30633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30633)

ChainKey index.

#### Implementation of

[`IChainKey`](../interfaces/IChainKey.md).[`index`](../interfaces/IChainKey.md#index)

***

### key

> **key**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30636](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30636)

ChainKey key.

#### Implementation of

[`IChainKey`](../interfaces/IChainKey.md).[`key`](../interfaces/IChainKey.md#key)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30706](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30706)

Converts this ChainKey to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ChainKey`](ChainKey.md)

Defined in: [WAProto/index.d.ts:30643](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30643)

Creates a new ChainKey instance using the specified properties.

#### Parameters

##### properties?

[`IChainKey`](../interfaces/IChainKey.md)

Properties to set

#### Returns

[`ChainKey`](ChainKey.md)

ChainKey instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ChainKey`](ChainKey.md)

Defined in: [WAProto/index.d.ts:30669](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30669)

Decodes a ChainKey message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ChainKey`](ChainKey.md)

ChainKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ChainKey`](ChainKey.md)

Defined in: [WAProto/index.d.ts:30678](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30678)

Decodes a ChainKey message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ChainKey`](ChainKey.md)

ChainKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30651](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30651)

Encodes the specified ChainKey message. Does not implicitly [verify](ChainKey.md#verify) messages.

#### Parameters

##### message

[`IChainKey`](../interfaces/IChainKey.md)

ChainKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30659](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30659)

Encodes the specified ChainKey message, length delimited. Does not implicitly [verify](ChainKey.md#verify) messages.

#### Parameters

##### message

[`IChainKey`](../interfaces/IChainKey.md)

ChainKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ChainKey`](ChainKey.md)

Defined in: [WAProto/index.d.ts:30692](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30692)

Creates a ChainKey message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ChainKey`](ChainKey.md)

ChainKey

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30713](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30713)

Gets the default type url for ChainKey

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

Defined in: [WAProto/index.d.ts:30700](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30700)

Creates a plain object from a ChainKey message. Also converts values to other types if specified.

#### Parameters

##### message

[`ChainKey`](ChainKey.md)

ChainKey

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30685)

Verifies a ChainKey message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
