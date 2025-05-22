# Class: ExitCode

Defined in: [WAProto/index.d.ts:7239](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7239)

Represents an ExitCode.

## Implements

- [`IExitCode`](../interfaces/IExitCode.md)

## Constructors

### new ExitCode()

> **new ExitCode**(`properties`?): [`ExitCode`](ExitCode.md)

Defined in: [WAProto/index.d.ts:7245](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7245)

Constructs a new ExitCode.

#### Parameters

##### properties?

[`IExitCode`](../interfaces/IExitCode.md)

Properties to set

#### Returns

[`ExitCode`](ExitCode.md)

## Properties

### code

> **code**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:7248](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7248)

ExitCode code.

#### Implementation of

[`IExitCode`](../interfaces/IExitCode.md).[`code`](../interfaces/IExitCode.md#code)

***

### text

> **text**: `string`

Defined in: [WAProto/index.d.ts:7251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7251)

ExitCode text.

#### Implementation of

[`IExitCode`](../interfaces/IExitCode.md).[`text`](../interfaces/IExitCode.md#text)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7321](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7321)

Converts this ExitCode to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ExitCode`](ExitCode.md)

Defined in: [WAProto/index.d.ts:7258](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7258)

Creates a new ExitCode instance using the specified properties.

#### Parameters

##### properties?

[`IExitCode`](../interfaces/IExitCode.md)

Properties to set

#### Returns

[`ExitCode`](ExitCode.md)

ExitCode instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ExitCode`](ExitCode.md)

Defined in: [WAProto/index.d.ts:7284](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7284)

Decodes an ExitCode message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ExitCode`](ExitCode.md)

ExitCode

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ExitCode`](ExitCode.md)

Defined in: [WAProto/index.d.ts:7293](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7293)

Decodes an ExitCode message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ExitCode`](ExitCode.md)

ExitCode

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7266](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7266)

Encodes the specified ExitCode message. Does not implicitly [verify](ExitCode.md#verify) messages.

#### Parameters

##### message

[`IExitCode`](../interfaces/IExitCode.md)

ExitCode message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7274](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7274)

Encodes the specified ExitCode message, length delimited. Does not implicitly [verify](ExitCode.md#verify) messages.

#### Parameters

##### message

[`IExitCode`](../interfaces/IExitCode.md)

ExitCode message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ExitCode`](ExitCode.md)

Defined in: [WAProto/index.d.ts:7307](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7307)

Creates an ExitCode message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ExitCode`](ExitCode.md)

ExitCode

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7328](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7328)

Gets the default type url for ExitCode

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

Defined in: [WAProto/index.d.ts:7315](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7315)

Creates a plain object from an ExitCode message. Also converts values to other types if specified.

#### Parameters

##### message

[`ExitCode`](ExitCode.md)

ExitCode

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7300](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7300)

Verifies an ExitCode message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
