# Class: Chain

Defined in: [WAProto/index.d.ts:30513](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30513)

Represents a Chain.

## Implements

- [`IChain`](../interfaces/IChain.md)

## Constructors

### new Chain()

> **new Chain**(`properties`?): [`Chain`](Chain.md)

Defined in: [WAProto/index.d.ts:30519](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30519)

Constructs a new Chain.

#### Parameters

##### properties?

[`IChain`](../interfaces/IChain.md)

Properties to set

#### Returns

[`Chain`](Chain.md)

## Properties

### chainKey?

> `optional` **chainKey**: `null` \| [`IChainKey`](../namespaces/Chain/interfaces/IChainKey.md)

Defined in: [WAProto/index.d.ts:30528](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30528)

Chain chainKey.

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`chainKey`](../interfaces/IChain.md#chainkey)

***

### messageKeys

> **messageKeys**: [`IMessageKey`](../namespaces/Chain/interfaces/IMessageKey.md)[]

Defined in: [WAProto/index.d.ts:30531](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30531)

Chain messageKeys.

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`messageKeys`](../interfaces/IChain.md#messagekeys)

***

### senderRatchetKey

> **senderRatchetKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30522](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30522)

Chain senderRatchetKey.

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`senderRatchetKey`](../interfaces/IChain.md#senderratchetkey)

***

### senderRatchetKeyPrivate

> **senderRatchetKeyPrivate**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30525](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30525)

Chain senderRatchetKeyPrivate.

#### Implementation of

[`IChain`](../interfaces/IChain.md).[`senderRatchetKeyPrivate`](../interfaces/IChain.md#senderratchetkeyprivate)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30601](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30601)

Converts this Chain to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Chain`](Chain.md)

Defined in: [WAProto/index.d.ts:30538](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30538)

Creates a new Chain instance using the specified properties.

#### Parameters

##### properties?

[`IChain`](../interfaces/IChain.md)

Properties to set

#### Returns

[`Chain`](Chain.md)

Chain instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Chain`](Chain.md)

Defined in: [WAProto/index.d.ts:30564](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30564)

Decodes a Chain message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Chain`](Chain.md)

Chain

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Chain`](Chain.md)

Defined in: [WAProto/index.d.ts:30573](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30573)

Decodes a Chain message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Chain`](Chain.md)

Chain

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30546)

Encodes the specified Chain message. Does not implicitly [verify](Chain.md#verify) messages.

#### Parameters

##### message

[`IChain`](../interfaces/IChain.md)

Chain message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30554](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30554)

Encodes the specified Chain message, length delimited. Does not implicitly [verify](Chain.md#verify) messages.

#### Parameters

##### message

[`IChain`](../interfaces/IChain.md)

Chain message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Chain`](Chain.md)

Defined in: [WAProto/index.d.ts:30587](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30587)

Creates a Chain message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Chain`](Chain.md)

Chain

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30608](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30608)

Gets the default type url for Chain

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

Defined in: [WAProto/index.d.ts:30595](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30595)

Creates a plain object from a Chain message. Also converts values to other types if specified.

#### Parameters

##### message

[`Chain`](Chain.md)

Chain

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30580](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30580)

Verifies a Chain message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
