# Class: FilterClause

Defined in: [WAProto/index.d.ts:28844](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28844)

Represents a FilterClause.

## Implements

- [`IFilterClause`](../interfaces/IFilterClause.md)

## Constructors

### new FilterClause()

> **new FilterClause**(`properties`?): [`FilterClause`](FilterClause.md)

Defined in: [WAProto/index.d.ts:28850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28850)

Constructs a new FilterClause.

#### Parameters

##### properties?

[`IFilterClause`](../interfaces/IFilterClause.md)

Properties to set

#### Returns

[`FilterClause`](FilterClause.md)

## Properties

### clauses

> **clauses**: [`IFilterClause`](../interfaces/IFilterClause.md)[]

Defined in: [WAProto/index.d.ts:28856](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28856)

FilterClause clauses.

#### Implementation of

[`IFilterClause`](../interfaces/IFilterClause.md).[`clauses`](../interfaces/IFilterClause.md#clauses)

***

### clauseType

> **clauseType**: [`ClauseType`](../enumerations/ClauseType.md)

Defined in: [WAProto/index.d.ts:28853](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28853)

FilterClause clauseType.

#### Implementation of

[`IFilterClause`](../interfaces/IFilterClause.md).[`clauseType`](../interfaces/IFilterClause.md#clausetype)

***

### filters

> **filters**: [`IFilter`](../interfaces/IFilter.md)[]

Defined in: [WAProto/index.d.ts:28859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28859)

FilterClause filters.

#### Implementation of

[`IFilterClause`](../interfaces/IFilterClause.md).[`filters`](../interfaces/IFilterClause.md#filters)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:28929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28929)

Converts this FilterClause to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`FilterClause`](FilterClause.md)

Defined in: [WAProto/index.d.ts:28866](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28866)

Creates a new FilterClause instance using the specified properties.

#### Parameters

##### properties?

[`IFilterClause`](../interfaces/IFilterClause.md)

Properties to set

#### Returns

[`FilterClause`](FilterClause.md)

FilterClause instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`FilterClause`](FilterClause.md)

Defined in: [WAProto/index.d.ts:28892](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28892)

Decodes a FilterClause message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`FilterClause`](FilterClause.md)

FilterClause

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`FilterClause`](FilterClause.md)

Defined in: [WAProto/index.d.ts:28901](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28901)

Decodes a FilterClause message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`FilterClause`](FilterClause.md)

FilterClause

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28874](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28874)

Encodes the specified FilterClause message. Does not implicitly [verify](FilterClause.md#verify) messages.

#### Parameters

##### message

[`IFilterClause`](../interfaces/IFilterClause.md)

FilterClause message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28882](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28882)

Encodes the specified FilterClause message, length delimited. Does not implicitly [verify](FilterClause.md#verify) messages.

#### Parameters

##### message

[`IFilterClause`](../interfaces/IFilterClause.md)

FilterClause message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`FilterClause`](FilterClause.md)

Defined in: [WAProto/index.d.ts:28915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28915)

Creates a FilterClause message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`FilterClause`](FilterClause.md)

FilterClause

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:28936](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28936)

Gets the default type url for FilterClause

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

Defined in: [WAProto/index.d.ts:28923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28923)

Creates a plain object from a FilterClause message. Also converts values to other types if specified.

#### Parameters

##### message

[`FilterClause`](FilterClause.md)

FilterClause

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:28908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28908)

Verifies a FilterClause message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
