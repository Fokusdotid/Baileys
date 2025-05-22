# Class: PhotoChange

Defined in: [WAProto/index.d.ts:27517](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27517)

Represents a PhotoChange.

## Implements

- [`IPhotoChange`](../interfaces/IPhotoChange.md)

## Constructors

### new PhotoChange()

> **new PhotoChange**(`properties`?): [`PhotoChange`](PhotoChange.md)

Defined in: [WAProto/index.d.ts:27523](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27523)

Constructs a new PhotoChange.

#### Parameters

##### properties?

[`IPhotoChange`](../interfaces/IPhotoChange.md)

Properties to set

#### Returns

[`PhotoChange`](PhotoChange.md)

## Properties

### newPhoto

> **newPhoto**: `Uint8Array`

Defined in: [WAProto/index.d.ts:27529](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27529)

PhotoChange newPhoto.

#### Implementation of

[`IPhotoChange`](../interfaces/IPhotoChange.md).[`newPhoto`](../interfaces/IPhotoChange.md#newphoto)

***

### newPhotoId

> **newPhotoId**: `number`

Defined in: [WAProto/index.d.ts:27532](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27532)

PhotoChange newPhotoId.

#### Implementation of

[`IPhotoChange`](../interfaces/IPhotoChange.md).[`newPhotoId`](../interfaces/IPhotoChange.md#newphotoid)

***

### oldPhoto

> **oldPhoto**: `Uint8Array`

Defined in: [WAProto/index.d.ts:27526](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27526)

PhotoChange oldPhoto.

#### Implementation of

[`IPhotoChange`](../interfaces/IPhotoChange.md).[`oldPhoto`](../interfaces/IPhotoChange.md#oldphoto)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27602](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27602)

Converts this PhotoChange to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PhotoChange`](PhotoChange.md)

Defined in: [WAProto/index.d.ts:27539](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27539)

Creates a new PhotoChange instance using the specified properties.

#### Parameters

##### properties?

[`IPhotoChange`](../interfaces/IPhotoChange.md)

Properties to set

#### Returns

[`PhotoChange`](PhotoChange.md)

PhotoChange instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PhotoChange`](PhotoChange.md)

Defined in: [WAProto/index.d.ts:27565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27565)

Decodes a PhotoChange message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PhotoChange`](PhotoChange.md)

PhotoChange

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PhotoChange`](PhotoChange.md)

Defined in: [WAProto/index.d.ts:27574](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27574)

Decodes a PhotoChange message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PhotoChange`](PhotoChange.md)

PhotoChange

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27547](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27547)

Encodes the specified PhotoChange message. Does not implicitly [verify](PhotoChange.md#verify) messages.

#### Parameters

##### message

[`IPhotoChange`](../interfaces/IPhotoChange.md)

PhotoChange message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27555)

Encodes the specified PhotoChange message, length delimited. Does not implicitly [verify](PhotoChange.md#verify) messages.

#### Parameters

##### message

[`IPhotoChange`](../interfaces/IPhotoChange.md)

PhotoChange message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PhotoChange`](PhotoChange.md)

Defined in: [WAProto/index.d.ts:27588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27588)

Creates a PhotoChange message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PhotoChange`](PhotoChange.md)

PhotoChange

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27609](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27609)

Gets the default type url for PhotoChange

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

Defined in: [WAProto/index.d.ts:27596](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27596)

Creates a plain object from a PhotoChange message. Also converts values to other types if specified.

#### Parameters

##### message

[`PhotoChange`](PhotoChange.md)

PhotoChange

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27581](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27581)

Verifies a PhotoChange message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
