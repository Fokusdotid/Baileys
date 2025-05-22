# Class: AppStateSyncKeyFingerprint

Defined in: [WAProto/index.d.ts:11430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11430)

Represents an AppStateSyncKeyFingerprint.

## Implements

- [`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

## Constructors

### new AppStateSyncKeyFingerprint()

> **new AppStateSyncKeyFingerprint**(`properties`?): [`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11436](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11436)

Constructs a new AppStateSyncKeyFingerprint.

#### Parameters

##### properties?

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

Properties to set

#### Returns

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

## Properties

### currentIndex

> **currentIndex**: `number`

Defined in: [WAProto/index.d.ts:11442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11442)

AppStateSyncKeyFingerprint currentIndex.

#### Implementation of

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md).[`currentIndex`](../interfaces/IAppStateSyncKeyFingerprint.md#currentindex)

***

### deviceIndexes

> **deviceIndexes**: `number`[]

Defined in: [WAProto/index.d.ts:11445](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11445)

AppStateSyncKeyFingerprint deviceIndexes.

#### Implementation of

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md).[`deviceIndexes`](../interfaces/IAppStateSyncKeyFingerprint.md#deviceindexes)

***

### rawId

> **rawId**: `number`

Defined in: [WAProto/index.d.ts:11439](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11439)

AppStateSyncKeyFingerprint rawId.

#### Implementation of

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md).[`rawId`](../interfaces/IAppStateSyncKeyFingerprint.md#rawid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:11515](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11515)

Converts this AppStateSyncKeyFingerprint to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11452](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11452)

Creates a new AppStateSyncKeyFingerprint instance using the specified properties.

#### Parameters

##### properties?

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

Properties to set

#### Returns

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11478](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11478)

Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11487)

Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11460](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11460)

Encodes the specified AppStateSyncKeyFingerprint message. Does not implicitly [verify](AppStateSyncKeyFingerprint.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11468](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11468)

Encodes the specified AppStateSyncKeyFingerprint message, length delimited. Does not implicitly [verify](AppStateSyncKeyFingerprint.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyFingerprint`](../interfaces/IAppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

Defined in: [WAProto/index.d.ts:11501](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11501)

Creates an AppStateSyncKeyFingerprint message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:11522](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11522)

Gets the default type url for AppStateSyncKeyFingerprint

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

Defined in: [WAProto/index.d.ts:11509](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11509)

Creates a plain object from an AppStateSyncKeyFingerprint message. Also converts values to other types if specified.

#### Parameters

##### message

[`AppStateSyncKeyFingerprint`](AppStateSyncKeyFingerprint.md)

AppStateSyncKeyFingerprint

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:11494](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11494)

Verifies an AppStateSyncKeyFingerprint message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
