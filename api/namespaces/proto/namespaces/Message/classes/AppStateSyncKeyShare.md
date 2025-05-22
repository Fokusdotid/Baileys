# Class: AppStateSyncKeyShare

Defined in: [WAProto/index.d.ts:11727](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11727)

Represents an AppStateSyncKeyShare.

## Implements

- [`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

## Constructors

### new AppStateSyncKeyShare()

> **new AppStateSyncKeyShare**(`properties`?): [`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:11733](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11733)

Constructs a new AppStateSyncKeyShare.

#### Parameters

##### properties?

[`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

Properties to set

#### Returns

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

## Properties

### keys

> **keys**: [`IAppStateSyncKey`](../interfaces/IAppStateSyncKey.md)[]

Defined in: [WAProto/index.d.ts:11736](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11736)

AppStateSyncKeyShare keys.

#### Implementation of

[`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md).[`keys`](../interfaces/IAppStateSyncKeyShare.md#keys)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:11806](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11806)

Converts this AppStateSyncKeyShare to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:11743](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11743)

Creates a new AppStateSyncKeyShare instance using the specified properties.

#### Parameters

##### properties?

[`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

Properties to set

#### Returns

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

AppStateSyncKeyShare instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:11769](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11769)

Decodes an AppStateSyncKeyShare message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

AppStateSyncKeyShare

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:11778](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11778)

Decodes an AppStateSyncKeyShare message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

AppStateSyncKeyShare

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11751](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11751)

Encodes the specified AppStateSyncKeyShare message. Does not implicitly [verify](AppStateSyncKeyShare.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

AppStateSyncKeyShare message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:11759](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11759)

Encodes the specified AppStateSyncKeyShare message, length delimited. Does not implicitly [verify](AppStateSyncKeyShare.md#verify) messages.

#### Parameters

##### message

[`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

AppStateSyncKeyShare message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:11792](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11792)

Creates an AppStateSyncKeyShare message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

AppStateSyncKeyShare

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:11813](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11813)

Gets the default type url for AppStateSyncKeyShare

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

Defined in: [WAProto/index.d.ts:11800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11800)

Creates a plain object from an AppStateSyncKeyShare message. Also converts values to other types if specified.

#### Parameters

##### message

[`AppStateSyncKeyShare`](AppStateSyncKeyShare.md)

AppStateSyncKeyShare

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:11785](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L11785)

Verifies an AppStateSyncKeyShare message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
