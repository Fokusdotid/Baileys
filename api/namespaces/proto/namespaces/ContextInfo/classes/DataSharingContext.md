# Class: DataSharingContext

Defined in: [WAProto/index.d.ts:5120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5120)

Represents a DataSharingContext.

## Implements

- [`IDataSharingContext`](../interfaces/IDataSharingContext.md)

## Constructors

### new DataSharingContext()

> **new DataSharingContext**(`properties`?): [`DataSharingContext`](DataSharingContext.md)

Defined in: [WAProto/index.d.ts:5126](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5126)

Constructs a new DataSharingContext.

#### Parameters

##### properties?

[`IDataSharingContext`](../interfaces/IDataSharingContext.md)

Properties to set

#### Returns

[`DataSharingContext`](DataSharingContext.md)

## Properties

### showMmDisclosure

> **showMmDisclosure**: `boolean`

Defined in: [WAProto/index.d.ts:5129](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5129)

DataSharingContext showMmDisclosure.

#### Implementation of

[`IDataSharingContext`](../interfaces/IDataSharingContext.md).[`showMmDisclosure`](../interfaces/IDataSharingContext.md#showmmdisclosure)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:5199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5199)

Converts this DataSharingContext to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DataSharingContext`](DataSharingContext.md)

Defined in: [WAProto/index.d.ts:5136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5136)

Creates a new DataSharingContext instance using the specified properties.

#### Parameters

##### properties?

[`IDataSharingContext`](../interfaces/IDataSharingContext.md)

Properties to set

#### Returns

[`DataSharingContext`](DataSharingContext.md)

DataSharingContext instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DataSharingContext`](DataSharingContext.md)

Defined in: [WAProto/index.d.ts:5162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5162)

Decodes a DataSharingContext message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DataSharingContext`](DataSharingContext.md)

DataSharingContext

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DataSharingContext`](DataSharingContext.md)

Defined in: [WAProto/index.d.ts:5171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5171)

Decodes a DataSharingContext message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DataSharingContext`](DataSharingContext.md)

DataSharingContext

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5144](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5144)

Encodes the specified DataSharingContext message. Does not implicitly [verify](DataSharingContext.md#verify) messages.

#### Parameters

##### message

[`IDataSharingContext`](../interfaces/IDataSharingContext.md)

DataSharingContext message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5152](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5152)

Encodes the specified DataSharingContext message, length delimited. Does not implicitly [verify](DataSharingContext.md#verify) messages.

#### Parameters

##### message

[`IDataSharingContext`](../interfaces/IDataSharingContext.md)

DataSharingContext message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DataSharingContext`](DataSharingContext.md)

Defined in: [WAProto/index.d.ts:5185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5185)

Creates a DataSharingContext message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DataSharingContext`](DataSharingContext.md)

DataSharingContext

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:5206](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5206)

Gets the default type url for DataSharingContext

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

Defined in: [WAProto/index.d.ts:5193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5193)

Creates a plain object from a DataSharingContext message. Also converts values to other types if specified.

#### Parameters

##### message

[`DataSharingContext`](DataSharingContext.md)

DataSharingContext

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:5178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5178)

Verifies a DataSharingContext message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
