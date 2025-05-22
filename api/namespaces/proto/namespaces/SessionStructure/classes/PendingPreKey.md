# Class: PendingPreKey

Defined in: [WAProto/index.d.ts:30979](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30979)

Represents a PendingPreKey.

## Implements

- [`IPendingPreKey`](../interfaces/IPendingPreKey.md)

## Constructors

### new PendingPreKey()

> **new PendingPreKey**(`properties`?): [`PendingPreKey`](PendingPreKey.md)

Defined in: [WAProto/index.d.ts:30985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30985)

Constructs a new PendingPreKey.

#### Parameters

##### properties?

[`IPendingPreKey`](../interfaces/IPendingPreKey.md)

Properties to set

#### Returns

[`PendingPreKey`](PendingPreKey.md)

## Properties

### baseKey

> **baseKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30994](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30994)

PendingPreKey baseKey.

#### Implementation of

[`IPendingPreKey`](../interfaces/IPendingPreKey.md).[`baseKey`](../interfaces/IPendingPreKey.md#basekey)

***

### preKeyId

> **preKeyId**: `number`

Defined in: [WAProto/index.d.ts:30988](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30988)

PendingPreKey preKeyId.

#### Implementation of

[`IPendingPreKey`](../interfaces/IPendingPreKey.md).[`preKeyId`](../interfaces/IPendingPreKey.md#prekeyid)

***

### signedPreKeyId

> **signedPreKeyId**: `number`

Defined in: [WAProto/index.d.ts:30991](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30991)

PendingPreKey signedPreKeyId.

#### Implementation of

[`IPendingPreKey`](../interfaces/IPendingPreKey.md).[`signedPreKeyId`](../interfaces/IPendingPreKey.md#signedprekeyid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:31064](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31064)

Converts this PendingPreKey to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PendingPreKey`](PendingPreKey.md)

Defined in: [WAProto/index.d.ts:31001](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31001)

Creates a new PendingPreKey instance using the specified properties.

#### Parameters

##### properties?

[`IPendingPreKey`](../interfaces/IPendingPreKey.md)

Properties to set

#### Returns

[`PendingPreKey`](PendingPreKey.md)

PendingPreKey instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PendingPreKey`](PendingPreKey.md)

Defined in: [WAProto/index.d.ts:31027](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31027)

Decodes a PendingPreKey message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PendingPreKey`](PendingPreKey.md)

PendingPreKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PendingPreKey`](PendingPreKey.md)

Defined in: [WAProto/index.d.ts:31036](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31036)

Decodes a PendingPreKey message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PendingPreKey`](PendingPreKey.md)

PendingPreKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31009](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31009)

Encodes the specified PendingPreKey message. Does not implicitly [verify](PendingPreKey.md#verify) messages.

#### Parameters

##### message

[`IPendingPreKey`](../interfaces/IPendingPreKey.md)

PendingPreKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31017](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31017)

Encodes the specified PendingPreKey message, length delimited. Does not implicitly [verify](PendingPreKey.md#verify) messages.

#### Parameters

##### message

[`IPendingPreKey`](../interfaces/IPendingPreKey.md)

PendingPreKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PendingPreKey`](PendingPreKey.md)

Defined in: [WAProto/index.d.ts:31050](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31050)

Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PendingPreKey`](PendingPreKey.md)

PendingPreKey

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:31071](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31071)

Gets the default type url for PendingPreKey

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

Defined in: [WAProto/index.d.ts:31058](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31058)

Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.

#### Parameters

##### message

[`PendingPreKey`](PendingPreKey.md)

PendingPreKey

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:31043](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31043)

Verifies a PendingPreKey message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
