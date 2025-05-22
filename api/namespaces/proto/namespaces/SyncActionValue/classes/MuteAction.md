# Class: MuteAction

Defined in: [WAProto/index.d.ts:34664](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34664)

Represents a MuteAction.

## Implements

- [`IMuteAction`](../interfaces/IMuteAction.md)

## Constructors

### new MuteAction()

> **new MuteAction**(`properties`?): [`MuteAction`](MuteAction.md)

Defined in: [WAProto/index.d.ts:34670](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34670)

Constructs a new MuteAction.

#### Parameters

##### properties?

[`IMuteAction`](../interfaces/IMuteAction.md)

Properties to set

#### Returns

[`MuteAction`](MuteAction.md)

## Properties

### autoMuted

> **autoMuted**: `boolean`

Defined in: [WAProto/index.d.ts:34679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34679)

MuteAction autoMuted.

#### Implementation of

[`IMuteAction`](../interfaces/IMuteAction.md).[`autoMuted`](../interfaces/IMuteAction.md#automuted)

***

### muted

> **muted**: `boolean`

Defined in: [WAProto/index.d.ts:34673](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34673)

MuteAction muted.

#### Implementation of

[`IMuteAction`](../interfaces/IMuteAction.md).[`muted`](../interfaces/IMuteAction.md#muted)

***

### muteEndTimestamp

> **muteEndTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:34676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34676)

MuteAction muteEndTimestamp.

#### Implementation of

[`IMuteAction`](../interfaces/IMuteAction.md).[`muteEndTimestamp`](../interfaces/IMuteAction.md#muteendtimestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34749](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34749)

Converts this MuteAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MuteAction`](MuteAction.md)

Defined in: [WAProto/index.d.ts:34686](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34686)

Creates a new MuteAction instance using the specified properties.

#### Parameters

##### properties?

[`IMuteAction`](../interfaces/IMuteAction.md)

Properties to set

#### Returns

[`MuteAction`](MuteAction.md)

MuteAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MuteAction`](MuteAction.md)

Defined in: [WAProto/index.d.ts:34712](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34712)

Decodes a MuteAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MuteAction`](MuteAction.md)

MuteAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MuteAction`](MuteAction.md)

Defined in: [WAProto/index.d.ts:34721](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34721)

Decodes a MuteAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MuteAction`](MuteAction.md)

MuteAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34694](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34694)

Encodes the specified MuteAction message. Does not implicitly [verify](MuteAction.md#verify) messages.

#### Parameters

##### message

[`IMuteAction`](../interfaces/IMuteAction.md)

MuteAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34702](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34702)

Encodes the specified MuteAction message, length delimited. Does not implicitly [verify](MuteAction.md#verify) messages.

#### Parameters

##### message

[`IMuteAction`](../interfaces/IMuteAction.md)

MuteAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MuteAction`](MuteAction.md)

Defined in: [WAProto/index.d.ts:34735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34735)

Creates a MuteAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MuteAction`](MuteAction.md)

MuteAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34756](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34756)

Gets the default type url for MuteAction

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

Defined in: [WAProto/index.d.ts:34743](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34743)

Creates a plain object from a MuteAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`MuteAction`](MuteAction.md)

MuteAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34728](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34728)

Verifies a MuteAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
