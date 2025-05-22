# Class: SenderChainKey

Defined in: [WAProto/index.d.ts:29929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29929)

Represents a SenderChainKey.

## Implements

- [`ISenderChainKey`](../interfaces/ISenderChainKey.md)

## Constructors

### new SenderChainKey()

> **new SenderChainKey**(`properties`?): [`SenderChainKey`](SenderChainKey.md)

Defined in: [WAProto/index.d.ts:29935](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29935)

Constructs a new SenderChainKey.

#### Parameters

##### properties?

[`ISenderChainKey`](../interfaces/ISenderChainKey.md)

Properties to set

#### Returns

[`SenderChainKey`](SenderChainKey.md)

## Properties

### iteration

> **iteration**: `number`

Defined in: [WAProto/index.d.ts:29938](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29938)

SenderChainKey iteration.

#### Implementation of

[`ISenderChainKey`](../interfaces/ISenderChainKey.md).[`iteration`](../interfaces/ISenderChainKey.md#iteration)

***

### seed

> **seed**: `Uint8Array`

Defined in: [WAProto/index.d.ts:29941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29941)

SenderChainKey seed.

#### Implementation of

[`ISenderChainKey`](../interfaces/ISenderChainKey.md).[`seed`](../interfaces/ISenderChainKey.md#seed)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30011](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30011)

Converts this SenderChainKey to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SenderChainKey`](SenderChainKey.md)

Defined in: [WAProto/index.d.ts:29948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29948)

Creates a new SenderChainKey instance using the specified properties.

#### Parameters

##### properties?

[`ISenderChainKey`](../interfaces/ISenderChainKey.md)

Properties to set

#### Returns

[`SenderChainKey`](SenderChainKey.md)

SenderChainKey instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SenderChainKey`](SenderChainKey.md)

Defined in: [WAProto/index.d.ts:29974](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29974)

Decodes a SenderChainKey message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SenderChainKey`](SenderChainKey.md)

SenderChainKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SenderChainKey`](SenderChainKey.md)

Defined in: [WAProto/index.d.ts:29983](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29983)

Decodes a SenderChainKey message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SenderChainKey`](SenderChainKey.md)

SenderChainKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29956)

Encodes the specified SenderChainKey message. Does not implicitly [verify](SenderChainKey.md#verify) messages.

#### Parameters

##### message

[`ISenderChainKey`](../interfaces/ISenderChainKey.md)

SenderChainKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29964)

Encodes the specified SenderChainKey message, length delimited. Does not implicitly [verify](SenderChainKey.md#verify) messages.

#### Parameters

##### message

[`ISenderChainKey`](../interfaces/ISenderChainKey.md)

SenderChainKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SenderChainKey`](SenderChainKey.md)

Defined in: [WAProto/index.d.ts:29997](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29997)

Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SenderChainKey`](SenderChainKey.md)

SenderChainKey

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30018](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30018)

Gets the default type url for SenderChainKey

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

Defined in: [WAProto/index.d.ts:30005](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30005)

Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.

#### Parameters

##### message

[`SenderChainKey`](SenderChainKey.md)

SenderChainKey

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29990](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29990)

Verifies a SenderChainKey message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
