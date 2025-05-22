# Class: KeyExpiration

Defined in: [WAProto/index.d.ts:33711](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33711)

Represents a KeyExpiration.

## Implements

- [`IKeyExpiration`](../interfaces/IKeyExpiration.md)

## Constructors

### new KeyExpiration()

> **new KeyExpiration**(`properties`?): [`KeyExpiration`](KeyExpiration.md)

Defined in: [WAProto/index.d.ts:33717](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33717)

Constructs a new KeyExpiration.

#### Parameters

##### properties?

[`IKeyExpiration`](../interfaces/IKeyExpiration.md)

Properties to set

#### Returns

[`KeyExpiration`](KeyExpiration.md)

## Properties

### expiredKeyEpoch

> **expiredKeyEpoch**: `number`

Defined in: [WAProto/index.d.ts:33720](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33720)

KeyExpiration expiredKeyEpoch.

#### Implementation of

[`IKeyExpiration`](../interfaces/IKeyExpiration.md).[`expiredKeyEpoch`](../interfaces/IKeyExpiration.md#expiredkeyepoch)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:33790](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33790)

Converts this KeyExpiration to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`KeyExpiration`](KeyExpiration.md)

Defined in: [WAProto/index.d.ts:33727](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33727)

Creates a new KeyExpiration instance using the specified properties.

#### Parameters

##### properties?

[`IKeyExpiration`](../interfaces/IKeyExpiration.md)

Properties to set

#### Returns

[`KeyExpiration`](KeyExpiration.md)

KeyExpiration instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`KeyExpiration`](KeyExpiration.md)

Defined in: [WAProto/index.d.ts:33753](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33753)

Decodes a KeyExpiration message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`KeyExpiration`](KeyExpiration.md)

KeyExpiration

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`KeyExpiration`](KeyExpiration.md)

Defined in: [WAProto/index.d.ts:33762](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33762)

Decodes a KeyExpiration message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`KeyExpiration`](KeyExpiration.md)

KeyExpiration

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33735)

Encodes the specified KeyExpiration message. Does not implicitly [verify](KeyExpiration.md#verify) messages.

#### Parameters

##### message

[`IKeyExpiration`](../interfaces/IKeyExpiration.md)

KeyExpiration message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33743](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33743)

Encodes the specified KeyExpiration message, length delimited. Does not implicitly [verify](KeyExpiration.md#verify) messages.

#### Parameters

##### message

[`IKeyExpiration`](../interfaces/IKeyExpiration.md)

KeyExpiration message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`KeyExpiration`](KeyExpiration.md)

Defined in: [WAProto/index.d.ts:33776](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33776)

Creates a KeyExpiration message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`KeyExpiration`](KeyExpiration.md)

KeyExpiration

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:33797](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33797)

Gets the default type url for KeyExpiration

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

Defined in: [WAProto/index.d.ts:33784](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33784)

Creates a plain object from a KeyExpiration message. Also converts values to other types if specified.

#### Parameters

##### message

[`KeyExpiration`](KeyExpiration.md)

KeyExpiration

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33769](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33769)

Verifies a KeyExpiration message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
