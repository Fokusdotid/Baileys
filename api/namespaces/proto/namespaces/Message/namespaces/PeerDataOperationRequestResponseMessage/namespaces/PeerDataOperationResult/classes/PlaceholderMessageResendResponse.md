# Class: PlaceholderMessageResendResponse

Defined in: [WAProto/index.d.ts:21125](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21125)

Represents a PlaceholderMessageResendResponse.

## Implements

- [`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md)

## Constructors

### new PlaceholderMessageResendResponse()

> **new PlaceholderMessageResendResponse**(`properties`?): [`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:21131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21131)

Constructs a new PlaceholderMessageResendResponse.

#### Parameters

##### properties?

[`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md)

Properties to set

#### Returns

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

## Properties

### webMessageInfoBytes

> **webMessageInfoBytes**: `Uint8Array`

Defined in: [WAProto/index.d.ts:21134](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21134)

PlaceholderMessageResendResponse webMessageInfoBytes.

#### Implementation of

[`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md).[`webMessageInfoBytes`](../interfaces/IPlaceholderMessageResendResponse.md#webmessageinfobytes)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21204](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21204)

Converts this PlaceholderMessageResendResponse to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:21141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21141)

Creates a new PlaceholderMessageResendResponse instance using the specified properties.

#### Parameters

##### properties?

[`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md)

Properties to set

#### Returns

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:21167](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21167)

Decodes a PlaceholderMessageResendResponse message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:21176](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21176)

Decodes a PlaceholderMessageResendResponse message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21149)

Encodes the specified PlaceholderMessageResendResponse message. Does not implicitly [verify](PlaceholderMessageResendResponse.md#verify) messages.

#### Parameters

##### message

[`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21157](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21157)

Encodes the specified PlaceholderMessageResendResponse message, length delimited. Does not implicitly [verify](PlaceholderMessageResendResponse.md#verify) messages.

#### Parameters

##### message

[`IPlaceholderMessageResendResponse`](../interfaces/IPlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

Defined in: [WAProto/index.d.ts:21190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21190)

Creates a PlaceholderMessageResendResponse message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21211](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21211)

Gets the default type url for PlaceholderMessageResendResponse

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

Defined in: [WAProto/index.d.ts:21198](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21198)

Creates a plain object from a PlaceholderMessageResendResponse message. Also converts values to other types if specified.

#### Parameters

##### message

[`PlaceholderMessageResendResponse`](PlaceholderMessageResendResponse.md)

PlaceholderMessageResendResponse

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21183](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21183)

Verifies a PlaceholderMessageResendResponse message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
