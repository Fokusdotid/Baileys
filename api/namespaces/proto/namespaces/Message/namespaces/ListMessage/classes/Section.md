# Class: Section

Defined in: [WAProto/index.d.ts:18868](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18868)

Represents a Section.

## Implements

- [`ISection`](../interfaces/ISection.md)

## Constructors

### new Section()

> **new Section**(`properties`?): [`Section`](Section.md)

Defined in: [WAProto/index.d.ts:18874](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18874)

Constructs a new Section.

#### Parameters

##### properties?

[`ISection`](../interfaces/ISection.md)

Properties to set

#### Returns

[`Section`](Section.md)

## Properties

### rows

> **rows**: [`IRow`](../interfaces/IRow.md)[]

Defined in: [WAProto/index.d.ts:18880](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18880)

Section rows.

#### Implementation of

[`ISection`](../interfaces/ISection.md).[`rows`](../interfaces/ISection.md#rows)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:18877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18877)

Section title.

#### Implementation of

[`ISection`](../interfaces/ISection.md).[`title`](../interfaces/ISection.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18950)

Converts this Section to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Section`](Section.md)

Defined in: [WAProto/index.d.ts:18887](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18887)

Creates a new Section instance using the specified properties.

#### Parameters

##### properties?

[`ISection`](../interfaces/ISection.md)

Properties to set

#### Returns

[`Section`](Section.md)

Section instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Section`](Section.md)

Defined in: [WAProto/index.d.ts:18913](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18913)

Decodes a Section message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Section`](Section.md)

Section

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Section`](Section.md)

Defined in: [WAProto/index.d.ts:18922](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18922)

Decodes a Section message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Section`](Section.md)

Section

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18895](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18895)

Encodes the specified Section message. Does not implicitly [verify](Section.md#verify) messages.

#### Parameters

##### message

[`ISection`](../interfaces/ISection.md)

Section message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18903](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18903)

Encodes the specified Section message, length delimited. Does not implicitly [verify](Section.md#verify) messages.

#### Parameters

##### message

[`ISection`](../interfaces/ISection.md)

Section message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Section`](Section.md)

Defined in: [WAProto/index.d.ts:18936](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18936)

Creates a Section message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Section`](Section.md)

Section

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18957](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18957)

Gets the default type url for Section

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

Defined in: [WAProto/index.d.ts:18944](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18944)

Creates a plain object from a Section message. Also converts values to other types if specified.

#### Parameters

##### message

[`Section`](Section.md)

Section

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18929)

Verifies a Section message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
