# Class: Option

Defined in: [WAProto/index.d.ts:21580](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21580)

Represents an Option.

## Implements

- [`IOption`](../interfaces/IOption.md)

## Constructors

### new Option()

> **new Option**(`properties`?): [`Option`](Option.md)

Defined in: [WAProto/index.d.ts:21586](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21586)

Constructs a new Option.

#### Parameters

##### properties?

[`IOption`](../interfaces/IOption.md)

Properties to set

#### Returns

[`Option`](Option.md)

## Properties

### optionName

> **optionName**: `string`

Defined in: [WAProto/index.d.ts:21589](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21589)

Option optionName.

#### Implementation of

[`IOption`](../interfaces/IOption.md).[`optionName`](../interfaces/IOption.md#optionname)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21659](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21659)

Converts this Option to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Option`](Option.md)

Defined in: [WAProto/index.d.ts:21596](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21596)

Creates a new Option instance using the specified properties.

#### Parameters

##### properties?

[`IOption`](../interfaces/IOption.md)

Properties to set

#### Returns

[`Option`](Option.md)

Option instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Option`](Option.md)

Defined in: [WAProto/index.d.ts:21622](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21622)

Decodes an Option message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Option`](Option.md)

Option

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Option`](Option.md)

Defined in: [WAProto/index.d.ts:21631](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21631)

Decodes an Option message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Option`](Option.md)

Option

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21604](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21604)

Encodes the specified Option message. Does not implicitly [verify](Option.md#verify) messages.

#### Parameters

##### message

[`IOption`](../interfaces/IOption.md)

Option message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21612)

Encodes the specified Option message, length delimited. Does not implicitly [verify](Option.md#verify) messages.

#### Parameters

##### message

[`IOption`](../interfaces/IOption.md)

Option message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Option`](Option.md)

Defined in: [WAProto/index.d.ts:21645](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21645)

Creates an Option message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Option`](Option.md)

Option

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21666](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21666)

Gets the default type url for Option

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

Defined in: [WAProto/index.d.ts:21653](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21653)

Creates a plain object from an Option message. Also converts values to other types if specified.

#### Parameters

##### message

[`Option`](Option.md)

Option

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21638)

Verifies an Option message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
