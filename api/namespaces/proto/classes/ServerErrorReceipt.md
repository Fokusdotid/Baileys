# Class: ServerErrorReceipt

Defined in: [WAProto/index.d.ts:30236](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30236)

Represents a ServerErrorReceipt.

## Implements

- [`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md)

## Constructors

### new ServerErrorReceipt()

> **new ServerErrorReceipt**(`properties`?): [`ServerErrorReceipt`](ServerErrorReceipt.md)

Defined in: [WAProto/index.d.ts:30242](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30242)

Constructs a new ServerErrorReceipt.

#### Parameters

##### properties?

[`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md)

Properties to set

#### Returns

[`ServerErrorReceipt`](ServerErrorReceipt.md)

## Properties

### stanzaId

> **stanzaId**: `string`

Defined in: [WAProto/index.d.ts:30245](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30245)

ServerErrorReceipt stanzaId.

#### Implementation of

[`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md).[`stanzaId`](../interfaces/IServerErrorReceipt.md#stanzaid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30315](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30315)

Converts this ServerErrorReceipt to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ServerErrorReceipt`](ServerErrorReceipt.md)

Defined in: [WAProto/index.d.ts:30252](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30252)

Creates a new ServerErrorReceipt instance using the specified properties.

#### Parameters

##### properties?

[`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md)

Properties to set

#### Returns

[`ServerErrorReceipt`](ServerErrorReceipt.md)

ServerErrorReceipt instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ServerErrorReceipt`](ServerErrorReceipt.md)

Defined in: [WAProto/index.d.ts:30278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30278)

Decodes a ServerErrorReceipt message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ServerErrorReceipt`](ServerErrorReceipt.md)

ServerErrorReceipt

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ServerErrorReceipt`](ServerErrorReceipt.md)

Defined in: [WAProto/index.d.ts:30287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30287)

Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ServerErrorReceipt`](ServerErrorReceipt.md)

ServerErrorReceipt

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30260](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30260)

Encodes the specified ServerErrorReceipt message. Does not implicitly [verify](ServerErrorReceipt.md#verify) messages.

#### Parameters

##### message

[`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md)

ServerErrorReceipt message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30268](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30268)

Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly [verify](ServerErrorReceipt.md#verify) messages.

#### Parameters

##### message

[`IServerErrorReceipt`](../interfaces/IServerErrorReceipt.md)

ServerErrorReceipt message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ServerErrorReceipt`](ServerErrorReceipt.md)

Defined in: [WAProto/index.d.ts:30301](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30301)

Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ServerErrorReceipt`](ServerErrorReceipt.md)

ServerErrorReceipt

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30322](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30322)

Gets the default type url for ServerErrorReceipt

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

Defined in: [WAProto/index.d.ts:30309](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30309)

Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.

#### Parameters

##### message

[`ServerErrorReceipt`](ServerErrorReceipt.md)

ServerErrorReceipt

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30294](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30294)

Verifies a ServerErrorReceipt message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
