# Class: FilterParameters

Defined in: [WAProto/index.d.ts:28956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28956)

Represents a FilterParameters.

## Implements

- [`IFilterParameters`](../interfaces/IFilterParameters.md)

## Constructors

### new FilterParameters()

> **new FilterParameters**(`properties`?): [`FilterParameters`](FilterParameters.md)

Defined in: [WAProto/index.d.ts:28962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28962)

Constructs a new FilterParameters.

#### Parameters

##### properties?

[`IFilterParameters`](../interfaces/IFilterParameters.md)

Properties to set

#### Returns

[`FilterParameters`](FilterParameters.md)

## Properties

### key

> **key**: `string`

Defined in: [WAProto/index.d.ts:28965](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28965)

FilterParameters key.

#### Implementation of

[`IFilterParameters`](../interfaces/IFilterParameters.md).[`key`](../interfaces/IFilterParameters.md#key)

***

### value

> **value**: `string`

Defined in: [WAProto/index.d.ts:28968](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28968)

FilterParameters value.

#### Implementation of

[`IFilterParameters`](../interfaces/IFilterParameters.md).[`value`](../interfaces/IFilterParameters.md#value)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29038](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29038)

Converts this FilterParameters to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`FilterParameters`](FilterParameters.md)

Defined in: [WAProto/index.d.ts:28975](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28975)

Creates a new FilterParameters instance using the specified properties.

#### Parameters

##### properties?

[`IFilterParameters`](../interfaces/IFilterParameters.md)

Properties to set

#### Returns

[`FilterParameters`](FilterParameters.md)

FilterParameters instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`FilterParameters`](FilterParameters.md)

Defined in: [WAProto/index.d.ts:29001](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29001)

Decodes a FilterParameters message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`FilterParameters`](FilterParameters.md)

FilterParameters

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`FilterParameters`](FilterParameters.md)

Defined in: [WAProto/index.d.ts:29010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29010)

Decodes a FilterParameters message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`FilterParameters`](FilterParameters.md)

FilterParameters

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28983](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28983)

Encodes the specified FilterParameters message. Does not implicitly [verify](FilterParameters.md#verify) messages.

#### Parameters

##### message

[`IFilterParameters`](../interfaces/IFilterParameters.md)

FilterParameters message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:28991](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L28991)

Encodes the specified FilterParameters message, length delimited. Does not implicitly [verify](FilterParameters.md#verify) messages.

#### Parameters

##### message

[`IFilterParameters`](../interfaces/IFilterParameters.md)

FilterParameters message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`FilterParameters`](FilterParameters.md)

Defined in: [WAProto/index.d.ts:29024](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29024)

Creates a FilterParameters message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`FilterParameters`](FilterParameters.md)

FilterParameters

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29045)

Gets the default type url for FilterParameters

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

Defined in: [WAProto/index.d.ts:29032](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29032)

Creates a plain object from a FilterParameters message. Also converts values to other types if specified.

#### Parameters

##### message

[`FilterParameters`](FilterParameters.md)

FilterParameters

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29017](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29017)

Verifies a FilterParameters message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
