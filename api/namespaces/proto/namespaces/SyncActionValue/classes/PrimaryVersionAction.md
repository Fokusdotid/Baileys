# Class: PrimaryVersionAction

Defined in: [WAProto/index.d.ts:35382](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35382)

Represents a PrimaryVersionAction.

## Implements

- [`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md)

## Constructors

### new PrimaryVersionAction()

> **new PrimaryVersionAction**(`properties`?): [`PrimaryVersionAction`](PrimaryVersionAction.md)

Defined in: [WAProto/index.d.ts:35388](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35388)

Constructs a new PrimaryVersionAction.

#### Parameters

##### properties?

[`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md)

Properties to set

#### Returns

[`PrimaryVersionAction`](PrimaryVersionAction.md)

## Properties

### version

> **version**: `string`

Defined in: [WAProto/index.d.ts:35391](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35391)

PrimaryVersionAction version.

#### Implementation of

[`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md).[`version`](../interfaces/IPrimaryVersionAction.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35461](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35461)

Converts this PrimaryVersionAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PrimaryVersionAction`](PrimaryVersionAction.md)

Defined in: [WAProto/index.d.ts:35398](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35398)

Creates a new PrimaryVersionAction instance using the specified properties.

#### Parameters

##### properties?

[`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md)

Properties to set

#### Returns

[`PrimaryVersionAction`](PrimaryVersionAction.md)

PrimaryVersionAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PrimaryVersionAction`](PrimaryVersionAction.md)

Defined in: [WAProto/index.d.ts:35424](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35424)

Decodes a PrimaryVersionAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PrimaryVersionAction`](PrimaryVersionAction.md)

PrimaryVersionAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PrimaryVersionAction`](PrimaryVersionAction.md)

Defined in: [WAProto/index.d.ts:35433](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35433)

Decodes a PrimaryVersionAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PrimaryVersionAction`](PrimaryVersionAction.md)

PrimaryVersionAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35406](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35406)

Encodes the specified PrimaryVersionAction message. Does not implicitly [verify](PrimaryVersionAction.md#verify) messages.

#### Parameters

##### message

[`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md)

PrimaryVersionAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35414](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35414)

Encodes the specified PrimaryVersionAction message, length delimited. Does not implicitly [verify](PrimaryVersionAction.md#verify) messages.

#### Parameters

##### message

[`IPrimaryVersionAction`](../interfaces/IPrimaryVersionAction.md)

PrimaryVersionAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PrimaryVersionAction`](PrimaryVersionAction.md)

Defined in: [WAProto/index.d.ts:35447](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35447)

Creates a PrimaryVersionAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PrimaryVersionAction`](PrimaryVersionAction.md)

PrimaryVersionAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35468](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35468)

Gets the default type url for PrimaryVersionAction

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

Defined in: [WAProto/index.d.ts:35455](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35455)

Creates a plain object from a PrimaryVersionAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`PrimaryVersionAction`](PrimaryVersionAction.md)

PrimaryVersionAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35440](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35440)

Verifies a PrimaryVersionAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
