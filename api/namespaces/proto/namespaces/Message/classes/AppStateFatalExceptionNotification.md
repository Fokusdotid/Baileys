# Class: AppStateFatalExceptionNotification

Defined in: [WAProto/index.d.ts:11112](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11112)

Represents an AppStateFatalExceptionNotification.

## Implements

- [`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

## Constructors

### new AppStateFatalExceptionNotification()

> **new AppStateFatalExceptionNotification**(`properties`?): [`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:11118](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11118)

Constructs a new AppStateFatalExceptionNotification.

#### Parameters

##### properties?

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

Properties to set

#### Returns

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

## Properties

### collectionNames

> **collectionNames**: `string`[]

Defined in: [WAProto/index.d.ts:11121](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11121)

AppStateFatalExceptionNotification collectionNames.

#### Implementation of

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md).[`collectionNames`](../interfaces/IAppStateFatalExceptionNotification.md#collectionnames)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:11124](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11124)

AppStateFatalExceptionNotification timestamp.

#### Implementation of

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md).[`timestamp`](../interfaces/IAppStateFatalExceptionNotification.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:11194](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11194)

Converts this AppStateFatalExceptionNotification to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:11131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11131)

Creates a new AppStateFatalExceptionNotification instance using the specified properties.

#### Parameters

##### properties?

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

Properties to set

#### Returns

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:11157](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11157)

Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:11166](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11166)

Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11139](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11139)

Encodes the specified AppStateFatalExceptionNotification message. Does not implicitly [verify](AppStateFatalExceptionNotification.md#verify) messages.

#### Parameters

##### message

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11147](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11147)

Encodes the specified AppStateFatalExceptionNotification message, length delimited. Does not implicitly [verify](AppStateFatalExceptionNotification.md#verify) messages.

#### Parameters

##### message

[`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:11180](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11180)

Creates an AppStateFatalExceptionNotification message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:11201](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11201)

Gets the default type url for AppStateFatalExceptionNotification

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

Defined in: [WAProto/index.d.ts:11188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11188)

Creates a plain object from an AppStateFatalExceptionNotification message. Also converts values to other types if specified.

#### Parameters

##### message

[`AppStateFatalExceptionNotification`](AppStateFatalExceptionNotification.md)

AppStateFatalExceptionNotification

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:11173](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11173)

Verifies an AppStateFatalExceptionNotification message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
