# Class: NativeFlowResponseMessage

Defined in: [WAProto/index.d.ts:17823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17823)

Represents a NativeFlowResponseMessage.

## Implements

- [`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md)

## Constructors

### new NativeFlowResponseMessage()

> **new NativeFlowResponseMessage**(`properties`?): [`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17829](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17829)

Constructs a new NativeFlowResponseMessage.

#### Parameters

##### properties?

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md)

Properties to set

#### Returns

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

## Properties

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:17832](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17832)

NativeFlowResponseMessage name.

#### Implementation of

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md).[`name`](../interfaces/INativeFlowResponseMessage.md#name)

***

### paramsJson

> **paramsJson**: `string`

Defined in: [WAProto/index.d.ts:17835](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17835)

NativeFlowResponseMessage paramsJson.

#### Implementation of

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md).[`paramsJson`](../interfaces/INativeFlowResponseMessage.md#paramsjson)

***

### version

> **version**: `number`

Defined in: [WAProto/index.d.ts:17838](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17838)

NativeFlowResponseMessage version.

#### Implementation of

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md).[`version`](../interfaces/INativeFlowResponseMessage.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17908)

Converts this NativeFlowResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17845](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17845)

Creates a new NativeFlowResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md)

Properties to set

#### Returns

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

NativeFlowResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17871](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17871)

Decodes a NativeFlowResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

NativeFlowResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17880](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17880)

Decodes a NativeFlowResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

NativeFlowResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17853](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17853)

Encodes the specified NativeFlowResponseMessage message. Does not implicitly [verify](NativeFlowResponseMessage.md#verify) messages.

#### Parameters

##### message

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md)

NativeFlowResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17861](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17861)

Encodes the specified NativeFlowResponseMessage message, length delimited. Does not implicitly [verify](NativeFlowResponseMessage.md#verify) messages.

#### Parameters

##### message

[`INativeFlowResponseMessage`](../interfaces/INativeFlowResponseMessage.md)

NativeFlowResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17894](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17894)

Creates a NativeFlowResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

NativeFlowResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17915)

Gets the default type url for NativeFlowResponseMessage

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

Defined in: [WAProto/index.d.ts:17902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17902)

Creates a plain object from a NativeFlowResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`NativeFlowResponseMessage`](NativeFlowResponseMessage.md)

NativeFlowResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17887](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17887)

Verifies a NativeFlowResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
