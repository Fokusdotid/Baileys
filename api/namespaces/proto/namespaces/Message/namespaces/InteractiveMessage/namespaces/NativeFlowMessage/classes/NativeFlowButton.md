# Class: NativeFlowButton

Defined in: [WAProto/index.d.ts:17369](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17369)

Represents a NativeFlowButton.

## Implements

- [`INativeFlowButton`](../interfaces/INativeFlowButton.md)

## Constructors

### new NativeFlowButton()

> **new NativeFlowButton**(`properties`?): [`NativeFlowButton`](NativeFlowButton.md)

Defined in: [WAProto/index.d.ts:17375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17375)

Constructs a new NativeFlowButton.

#### Parameters

##### properties?

[`INativeFlowButton`](../interfaces/INativeFlowButton.md)

Properties to set

#### Returns

[`NativeFlowButton`](NativeFlowButton.md)

## Properties

### buttonParamsJson

> **buttonParamsJson**: `string`

Defined in: [WAProto/index.d.ts:17381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17381)

NativeFlowButton buttonParamsJson.

#### Implementation of

[`INativeFlowButton`](../interfaces/INativeFlowButton.md).[`buttonParamsJson`](../interfaces/INativeFlowButton.md#buttonparamsjson)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:17378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17378)

NativeFlowButton name.

#### Implementation of

[`INativeFlowButton`](../interfaces/INativeFlowButton.md).[`name`](../interfaces/INativeFlowButton.md#name)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17451](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17451)

Converts this NativeFlowButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NativeFlowButton`](NativeFlowButton.md)

Defined in: [WAProto/index.d.ts:17388](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17388)

Creates a new NativeFlowButton instance using the specified properties.

#### Parameters

##### properties?

[`INativeFlowButton`](../interfaces/INativeFlowButton.md)

Properties to set

#### Returns

[`NativeFlowButton`](NativeFlowButton.md)

NativeFlowButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NativeFlowButton`](NativeFlowButton.md)

Defined in: [WAProto/index.d.ts:17414](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17414)

Decodes a NativeFlowButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NativeFlowButton`](NativeFlowButton.md)

NativeFlowButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NativeFlowButton`](NativeFlowButton.md)

Defined in: [WAProto/index.d.ts:17423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17423)

Decodes a NativeFlowButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NativeFlowButton`](NativeFlowButton.md)

NativeFlowButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17396](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17396)

Encodes the specified NativeFlowButton message. Does not implicitly [verify](NativeFlowButton.md#verify) messages.

#### Parameters

##### message

[`INativeFlowButton`](../interfaces/INativeFlowButton.md)

NativeFlowButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17404](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17404)

Encodes the specified NativeFlowButton message, length delimited. Does not implicitly [verify](NativeFlowButton.md#verify) messages.

#### Parameters

##### message

[`INativeFlowButton`](../interfaces/INativeFlowButton.md)

NativeFlowButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NativeFlowButton`](NativeFlowButton.md)

Defined in: [WAProto/index.d.ts:17437](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17437)

Creates a NativeFlowButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NativeFlowButton`](NativeFlowButton.md)

NativeFlowButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17458](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17458)

Gets the default type url for NativeFlowButton

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

Defined in: [WAProto/index.d.ts:17445](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17445)

Creates a plain object from a NativeFlowButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`NativeFlowButton`](NativeFlowButton.md)

NativeFlowButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17430)

Verifies a NativeFlowButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
