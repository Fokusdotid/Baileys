# Class: LocalizedName

Defined in: [WAProto/index.d.ts:9649](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9649)

Represents a LocalizedName.

## Implements

- [`ILocalizedName`](../interfaces/ILocalizedName.md)

## Constructors

### new LocalizedName()

> **new LocalizedName**(`properties`?): [`LocalizedName`](LocalizedName.md)

Defined in: [WAProto/index.d.ts:9655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9655)

Constructs a new LocalizedName.

#### Parameters

##### properties?

[`ILocalizedName`](../interfaces/ILocalizedName.md)

Properties to set

#### Returns

[`LocalizedName`](LocalizedName.md)

## Properties

### lc

> **lc**: `string`

Defined in: [WAProto/index.d.ts:9661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9661)

LocalizedName lc.

#### Implementation of

[`ILocalizedName`](../interfaces/ILocalizedName.md).[`lc`](../interfaces/ILocalizedName.md#lc)

***

### lg

> **lg**: `string`

Defined in: [WAProto/index.d.ts:9658](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9658)

LocalizedName lg.

#### Implementation of

[`ILocalizedName`](../interfaces/ILocalizedName.md).[`lg`](../interfaces/ILocalizedName.md#lg)

***

### verifiedName

> **verifiedName**: `string`

Defined in: [WAProto/index.d.ts:9664](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9664)

LocalizedName verifiedName.

#### Implementation of

[`ILocalizedName`](../interfaces/ILocalizedName.md).[`verifiedName`](../interfaces/ILocalizedName.md#verifiedname)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9734](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9734)

Converts this LocalizedName to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`LocalizedName`](LocalizedName.md)

Defined in: [WAProto/index.d.ts:9671](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9671)

Creates a new LocalizedName instance using the specified properties.

#### Parameters

##### properties?

[`ILocalizedName`](../interfaces/ILocalizedName.md)

Properties to set

#### Returns

[`LocalizedName`](LocalizedName.md)

LocalizedName instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`LocalizedName`](LocalizedName.md)

Defined in: [WAProto/index.d.ts:9697](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9697)

Decodes a LocalizedName message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`LocalizedName`](LocalizedName.md)

LocalizedName

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`LocalizedName`](LocalizedName.md)

Defined in: [WAProto/index.d.ts:9706](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9706)

Decodes a LocalizedName message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`LocalizedName`](LocalizedName.md)

LocalizedName

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9679)

Encodes the specified LocalizedName message. Does not implicitly [verify](LocalizedName.md#verify) messages.

#### Parameters

##### message

[`ILocalizedName`](../interfaces/ILocalizedName.md)

LocalizedName message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9687](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9687)

Encodes the specified LocalizedName message, length delimited. Does not implicitly [verify](LocalizedName.md#verify) messages.

#### Parameters

##### message

[`ILocalizedName`](../interfaces/ILocalizedName.md)

LocalizedName message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`LocalizedName`](LocalizedName.md)

Defined in: [WAProto/index.d.ts:9720](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9720)

Creates a LocalizedName message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`LocalizedName`](LocalizedName.md)

LocalizedName

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9741)

Gets the default type url for LocalizedName

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

Defined in: [WAProto/index.d.ts:9728](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9728)

Creates a plain object from a LocalizedName message. Also converts values to other types if specified.

#### Parameters

##### message

[`LocalizedName`](LocalizedName.md)

LocalizedName

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9713](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9713)

Verifies a LocalizedName message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
