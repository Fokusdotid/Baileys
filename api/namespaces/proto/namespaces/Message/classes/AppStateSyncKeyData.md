# Class: AppStateSyncKeyData

Defined in: [WAProto/index.d.ts:11321](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11321)

Represents an AppStateSyncKeyData.

## Implements

- [`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md)

## Constructors

### new AppStateSyncKeyData()

> **new AppStateSyncKeyData**(`properties`?): [`AppStateSyncKeyData`](AppStateSyncKeyData.md)

Defined in: [WAProto/index.d.ts:11327](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11327)

Constructs a new AppStateSyncKeyData.

#### Parameters

##### properties?

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md)

Properties to set

#### Returns

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

## Properties

### fingerprint?

> `optional` **fingerprint**: `null` \| [`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11333](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11333)

AppStateSyncKeyData fingerprint.

#### Implementation of

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md).[`fingerprint`](../interfaces/IAppStateSyncKeyData.md#fingerprint)

***

### keyData

> **keyData**: `Uint8Array`

Defined in: [WAProto/index.d.ts:11330](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11330)

AppStateSyncKeyData keyData.

#### Implementation of

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md).[`keyData`](../interfaces/IAppStateSyncKeyData.md#keydata)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:11336](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11336)

AppStateSyncKeyData timestamp.

#### Implementation of

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md).[`timestamp`](../interfaces/IAppStateSyncKeyData.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:11406](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11406)

Converts this AppStateSyncKeyData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AppStateSyncKeyData`](AppStateSyncKeyData.md)

Defined in: [WAProto/index.d.ts:11343](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11343)

Creates a new AppStateSyncKeyData instance using the specified properties.

#### Parameters

##### properties?

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md)

Properties to set

#### Returns

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

AppStateSyncKeyData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AppStateSyncKeyData`](AppStateSyncKeyData.md)

Defined in: [WAProto/index.d.ts:11369](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11369)

Decodes an AppStateSyncKeyData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

AppStateSyncKeyData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AppStateSyncKeyData`](AppStateSyncKeyData.md)

Defined in: [WAProto/index.d.ts:11378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11378)

Decodes an AppStateSyncKeyData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

AppStateSyncKeyData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11351](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11351)

Encodes the specified AppStateSyncKeyData message. Does not implicitly [verify](AppStateSyncKeyData.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md)

AppStateSyncKeyData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11359](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11359)

Encodes the specified AppStateSyncKeyData message, length delimited. Does not implicitly [verify](AppStateSyncKeyData.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyData`](../interfaces/IAppStateSyncKeyData.md)

AppStateSyncKeyData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AppStateSyncKeyData`](AppStateSyncKeyData.md)

Defined in: [WAProto/index.d.ts:11392](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11392)

Creates an AppStateSyncKeyData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

AppStateSyncKeyData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:11413](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11413)

Gets the default type url for AppStateSyncKeyData

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

Defined in: [WAProto/index.d.ts:11400](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11400)

Creates a plain object from an AppStateSyncKeyData message. Also converts values to other types if specified.

#### Parameters

##### message

[`AppStateSyncKeyData`](AppStateSyncKeyData.md)

AppStateSyncKeyData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:11385](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11385)

Verifies an AppStateSyncKeyData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
