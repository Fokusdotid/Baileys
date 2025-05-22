# Class: TransformerArg

Defined in: [WAProto/index.d.ts:38690](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38690)

Represents a TransformerArg.

## Implements

- [`ITransformerArg`](../interfaces/ITransformerArg.md)

## Constructors

### new TransformerArg()

> **new TransformerArg**(`properties`?): [`TransformerArg`](TransformerArg.md)

Defined in: [WAProto/index.d.ts:38696](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38696)

Constructs a new TransformerArg.

#### Parameters

##### properties?

[`ITransformerArg`](../interfaces/ITransformerArg.md)

Properties to set

#### Returns

[`TransformerArg`](TransformerArg.md)

## Properties

### key

> **key**: `string`

Defined in: [WAProto/index.d.ts:38699](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38699)

TransformerArg key.

#### Implementation of

[`ITransformerArg`](../interfaces/ITransformerArg.md).[`key`](../interfaces/ITransformerArg.md#key)

***

### value?

> `optional` **value**: `null` \| [`IValue`](../namespaces/TransformerArg/interfaces/IValue.md)

Defined in: [WAProto/index.d.ts:38702](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38702)

TransformerArg value.

#### Implementation of

[`ITransformerArg`](../interfaces/ITransformerArg.md).[`value`](../interfaces/ITransformerArg.md#value)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38772](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38772)

Converts this TransformerArg to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`TransformerArg`](TransformerArg.md)

Defined in: [WAProto/index.d.ts:38709](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38709)

Creates a new TransformerArg instance using the specified properties.

#### Parameters

##### properties?

[`ITransformerArg`](../interfaces/ITransformerArg.md)

Properties to set

#### Returns

[`TransformerArg`](TransformerArg.md)

TransformerArg instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`TransformerArg`](TransformerArg.md)

Defined in: [WAProto/index.d.ts:38735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38735)

Decodes a TransformerArg message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`TransformerArg`](TransformerArg.md)

TransformerArg

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`TransformerArg`](TransformerArg.md)

Defined in: [WAProto/index.d.ts:38744](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38744)

Decodes a TransformerArg message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`TransformerArg`](TransformerArg.md)

TransformerArg

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38717](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38717)

Encodes the specified TransformerArg message. Does not implicitly [verify](TransformerArg.md#verify) messages.

#### Parameters

##### message

[`ITransformerArg`](../interfaces/ITransformerArg.md)

TransformerArg message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38725](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38725)

Encodes the specified TransformerArg message, length delimited. Does not implicitly [verify](TransformerArg.md#verify) messages.

#### Parameters

##### message

[`ITransformerArg`](../interfaces/ITransformerArg.md)

TransformerArg message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`TransformerArg`](TransformerArg.md)

Defined in: [WAProto/index.d.ts:38758](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38758)

Creates a TransformerArg message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`TransformerArg`](TransformerArg.md)

TransformerArg

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38779](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38779)

Gets the default type url for TransformerArg

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

Defined in: [WAProto/index.d.ts:38766](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38766)

Creates a plain object from a TransformerArg message. Also converts values to other types if specified.

#### Parameters

##### message

[`TransformerArg`](TransformerArg.md)

TransformerArg

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38751](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38751)

Verifies a TransformerArg message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
