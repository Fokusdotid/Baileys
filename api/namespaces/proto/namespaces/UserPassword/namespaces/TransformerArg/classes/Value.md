# Class: Value

Defined in: [WAProto/index.d.ts:38795](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38795)

Represents a Value.

## Implements

- [`IValue`](../interfaces/IValue.md)

## Constructors

### new Value()

> **new Value**(`properties`?): [`Value`](Value.md)

Defined in: [WAProto/index.d.ts:38801](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38801)

Constructs a new Value.

#### Parameters

##### properties?

[`IValue`](../interfaces/IValue.md)

Properties to set

#### Returns

[`Value`](Value.md)

## Properties

### asBlob?

> `optional` **asBlob**: `null` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [WAProto/index.d.ts:38804](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38804)

Value asBlob.

#### Implementation of

[`IValue`](../interfaces/IValue.md).[`asBlob`](../interfaces/IValue.md#asblob)

***

### asUnsignedInteger?

> `optional` **asUnsignedInteger**: `null` \| `number`

Defined in: [WAProto/index.d.ts:38807](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38807)

Value asUnsignedInteger.

#### Implementation of

[`IValue`](../interfaces/IValue.md).[`asUnsignedInteger`](../interfaces/IValue.md#asunsignedinteger)

***

### value?

> `optional` **value**: `"asBlob"` \| `"asUnsignedInteger"`

Defined in: [WAProto/index.d.ts:38810](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38810)

Value value.

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38880](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38880)

Converts this Value to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Value`](Value.md)

Defined in: [WAProto/index.d.ts:38817](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38817)

Creates a new Value instance using the specified properties.

#### Parameters

##### properties?

[`IValue`](../interfaces/IValue.md)

Properties to set

#### Returns

[`Value`](Value.md)

Value instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Value`](Value.md)

Defined in: [WAProto/index.d.ts:38843](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38843)

Decodes a Value message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Value`](Value.md)

Value

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Value`](Value.md)

Defined in: [WAProto/index.d.ts:38852](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38852)

Decodes a Value message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Value`](Value.md)

Value

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38825](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38825)

Encodes the specified Value message. Does not implicitly [verify](Value.md#verify) messages.

#### Parameters

##### message

[`IValue`](../interfaces/IValue.md)

Value message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38833](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38833)

Encodes the specified Value message, length delimited. Does not implicitly [verify](Value.md#verify) messages.

#### Parameters

##### message

[`IValue`](../interfaces/IValue.md)

Value message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Value`](Value.md)

Defined in: [WAProto/index.d.ts:38866](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38866)

Creates a Value message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Value`](Value.md)

Value

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38887](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38887)

Gets the default type url for Value

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

Defined in: [WAProto/index.d.ts:38874](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38874)

Creates a plain object from a Value message. Also converts values to other types if specified.

#### Parameters

##### message

[`Value`](Value.md)

Value

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38859)

Verifies a Value message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
