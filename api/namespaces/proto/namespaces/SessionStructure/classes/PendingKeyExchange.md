# Class: PendingKeyExchange

Defined in: [WAProto/index.d.ts:30858](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30858)

Represents a PendingKeyExchange.

## Implements

- [`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md)

## Constructors

### new PendingKeyExchange()

> **new PendingKeyExchange**(`properties`?): [`PendingKeyExchange`](PendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30864](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30864)

Constructs a new PendingKeyExchange.

#### Parameters

##### properties?

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md)

Properties to set

#### Returns

[`PendingKeyExchange`](PendingKeyExchange.md)

## Properties

### localBaseKey

> **localBaseKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30870](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30870)

PendingKeyExchange localBaseKey.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localBaseKey`](../interfaces/IPendingKeyExchange.md#localbasekey)

***

### localBaseKeyPrivate

> **localBaseKeyPrivate**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30873](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30873)

PendingKeyExchange localBaseKeyPrivate.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localBaseKeyPrivate`](../interfaces/IPendingKeyExchange.md#localbasekeyprivate)

***

### localIdentityKey

> **localIdentityKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30882](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30882)

PendingKeyExchange localIdentityKey.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localIdentityKey`](../interfaces/IPendingKeyExchange.md#localidentitykey)

***

### localIdentityKeyPrivate

> **localIdentityKeyPrivate**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30885](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30885)

PendingKeyExchange localIdentityKeyPrivate.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localIdentityKeyPrivate`](../interfaces/IPendingKeyExchange.md#localidentitykeyprivate)

***

### localRatchetKey

> **localRatchetKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30876](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30876)

PendingKeyExchange localRatchetKey.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localRatchetKey`](../interfaces/IPendingKeyExchange.md#localratchetkey)

***

### localRatchetKeyPrivate

> **localRatchetKeyPrivate**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30879](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30879)

PendingKeyExchange localRatchetKeyPrivate.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`localRatchetKeyPrivate`](../interfaces/IPendingKeyExchange.md#localratchetkeyprivate)

***

### sequence

> **sequence**: `number`

Defined in: [WAProto/index.d.ts:30867](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30867)

PendingKeyExchange sequence.

#### Implementation of

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md).[`sequence`](../interfaces/IPendingKeyExchange.md#sequence)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30955](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30955)

Converts this PendingKeyExchange to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PendingKeyExchange`](PendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30892](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30892)

Creates a new PendingKeyExchange instance using the specified properties.

#### Parameters

##### properties?

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md)

Properties to set

#### Returns

[`PendingKeyExchange`](PendingKeyExchange.md)

PendingKeyExchange instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PendingKeyExchange`](PendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30918](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30918)

Decodes a PendingKeyExchange message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PendingKeyExchange`](PendingKeyExchange.md)

PendingKeyExchange

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PendingKeyExchange`](PendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30927](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30927)

Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PendingKeyExchange`](PendingKeyExchange.md)

PendingKeyExchange

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30900](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30900)

Encodes the specified PendingKeyExchange message. Does not implicitly [verify](PendingKeyExchange.md#verify) messages.

#### Parameters

##### message

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md)

PendingKeyExchange message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30908)

Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly [verify](PendingKeyExchange.md#verify) messages.

#### Parameters

##### message

[`IPendingKeyExchange`](../interfaces/IPendingKeyExchange.md)

PendingKeyExchange message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PendingKeyExchange`](PendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30941)

Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PendingKeyExchange`](PendingKeyExchange.md)

PendingKeyExchange

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30962)

Gets the default type url for PendingKeyExchange

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

Defined in: [WAProto/index.d.ts:30949](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30949)

Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.

#### Parameters

##### message

[`PendingKeyExchange`](PendingKeyExchange.md)

PendingKeyExchange

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30934](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30934)

Verifies a PendingKeyExchange message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
