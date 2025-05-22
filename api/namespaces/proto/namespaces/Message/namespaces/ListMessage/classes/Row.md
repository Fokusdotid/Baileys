# Class: Row

Defined in: [WAProto/index.d.ts:18762](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18762)

Represents a Row.

## Implements

- [`IRow`](../interfaces/IRow.md)

## Constructors

### new Row()

> **new Row**(`properties`?): [`Row`](Row.md)

Defined in: [WAProto/index.d.ts:18768](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18768)

Constructs a new Row.

#### Parameters

##### properties?

[`IRow`](../interfaces/IRow.md)

Properties to set

#### Returns

[`Row`](Row.md)

## Properties

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:18774](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18774)

Row description.

#### Implementation of

[`IRow`](../interfaces/IRow.md).[`description`](../interfaces/IRow.md#description)

***

### rowId

> **rowId**: `string`

Defined in: [WAProto/index.d.ts:18777](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18777)

Row rowId.

#### Implementation of

[`IRow`](../interfaces/IRow.md).[`rowId`](../interfaces/IRow.md#rowid)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:18771](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18771)

Row title.

#### Implementation of

[`IRow`](../interfaces/IRow.md).[`title`](../interfaces/IRow.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18847](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18847)

Converts this Row to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Row`](Row.md)

Defined in: [WAProto/index.d.ts:18784](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18784)

Creates a new Row instance using the specified properties.

#### Parameters

##### properties?

[`IRow`](../interfaces/IRow.md)

Properties to set

#### Returns

[`Row`](Row.md)

Row instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Row`](Row.md)

Defined in: [WAProto/index.d.ts:18810](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18810)

Decodes a Row message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Row`](Row.md)

Row

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Row`](Row.md)

Defined in: [WAProto/index.d.ts:18819](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18819)

Decodes a Row message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Row`](Row.md)

Row

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18792](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18792)

Encodes the specified Row message. Does not implicitly [verify](Row.md#verify) messages.

#### Parameters

##### message

[`IRow`](../interfaces/IRow.md)

Row message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18800)

Encodes the specified Row message, length delimited. Does not implicitly [verify](Row.md#verify) messages.

#### Parameters

##### message

[`IRow`](../interfaces/IRow.md)

Row message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Row`](Row.md)

Defined in: [WAProto/index.d.ts:18833](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18833)

Creates a Row message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Row`](Row.md)

Row

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18854](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18854)

Gets the default type url for Row

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

Defined in: [WAProto/index.d.ts:18841](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18841)

Creates a plain object from a Row message. Also converts values to other types if specified.

#### Parameters

##### message

[`Row`](Row.md)

Row

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18826](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18826)

Verifies a Row message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
