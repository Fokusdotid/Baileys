# Class: Body

Defined in: [WAProto/index.d.ts:23374](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23374)

Represents a Body.

## Implements

- [`IBody`](../interfaces/IBody.md)

## Constructors

### new Body()

> **new Body**(`properties`?): [`Body`](Body.md)

Defined in: [WAProto/index.d.ts:23380](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23380)

Constructs a new Body.

#### Parameters

##### properties?

[`IBody`](../interfaces/IBody.md)

Properties to set

#### Returns

[`Body`](Body.md)

## Properties

### text?

> `optional` **text**: `null` \| `string`

Defined in: [WAProto/index.d.ts:23383](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23383)

Body text.

#### Implementation of

[`IBody`](../interfaces/IBody.md).[`text`](../interfaces/IBody.md#text)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:23453](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23453)

Converts this Body to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Body`](Body.md)

Defined in: [WAProto/index.d.ts:23390](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23390)

Creates a new Body instance using the specified properties.

#### Parameters

##### properties?

[`IBody`](../interfaces/IBody.md)

Properties to set

#### Returns

[`Body`](Body.md)

Body instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Body`](Body.md)

Defined in: [WAProto/index.d.ts:23416](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23416)

Decodes a Body message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Body`](Body.md)

Body

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Body`](Body.md)

Defined in: [WAProto/index.d.ts:23425](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23425)

Decodes a Body message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Body`](Body.md)

Body

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23398](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23398)

Encodes the specified Body message. Does not implicitly [verify](Body.md#verify) messages.

#### Parameters

##### message

[`IBody`](../interfaces/IBody.md)

Body message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:23406](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23406)

Encodes the specified Body message, length delimited. Does not implicitly [verify](Body.md#verify) messages.

#### Parameters

##### message

[`IBody`](../interfaces/IBody.md)

Body message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Body`](Body.md)

Defined in: [WAProto/index.d.ts:23439](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23439)

Creates a Body message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Body`](Body.md)

Body

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:23460](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23460)

Gets the default type url for Body

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

Defined in: [WAProto/index.d.ts:23447](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23447)

Creates a plain object from a Body message. Also converts values to other types if specified.

#### Parameters

##### message

[`Body`](Body.md)

Body

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:23432](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/WAProto/index.d.ts#L23432)

Verifies a Body message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
