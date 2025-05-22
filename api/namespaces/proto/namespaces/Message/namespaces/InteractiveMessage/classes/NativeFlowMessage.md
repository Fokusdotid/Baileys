# Class: NativeFlowMessage

Defined in: [WAProto/index.d.ts:17261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17261)

Represents a NativeFlowMessage.

## Implements

- [`INativeFlowMessage`](../interfaces/INativeFlowMessage.md)

## Constructors

### new NativeFlowMessage()

> **new NativeFlowMessage**(`properties`?): [`NativeFlowMessage`](NativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:17267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17267)

Constructs a new NativeFlowMessage.

#### Parameters

##### properties?

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md)

Properties to set

#### Returns

[`NativeFlowMessage`](NativeFlowMessage.md)

## Properties

### buttons

> **buttons**: [`INativeFlowButton`](../namespaces/NativeFlowMessage/interfaces/INativeFlowButton.md)[]

Defined in: [WAProto/index.d.ts:17270](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17270)

NativeFlowMessage buttons.

#### Implementation of

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md).[`buttons`](../interfaces/INativeFlowMessage.md#buttons)

***

### messageParamsJson

> **messageParamsJson**: `string`

Defined in: [WAProto/index.d.ts:17273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17273)

NativeFlowMessage messageParamsJson.

#### Implementation of

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md).[`messageParamsJson`](../interfaces/INativeFlowMessage.md#messageparamsjson)

***

### messageVersion

> **messageVersion**: `number`

Defined in: [WAProto/index.d.ts:17276](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17276)

NativeFlowMessage messageVersion.

#### Implementation of

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md).[`messageVersion`](../interfaces/INativeFlowMessage.md#messageversion)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17346](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17346)

Converts this NativeFlowMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NativeFlowMessage`](NativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:17283](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17283)

Creates a new NativeFlowMessage instance using the specified properties.

#### Parameters

##### properties?

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md)

Properties to set

#### Returns

[`NativeFlowMessage`](NativeFlowMessage.md)

NativeFlowMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NativeFlowMessage`](NativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:17309](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17309)

Decodes a NativeFlowMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NativeFlowMessage`](NativeFlowMessage.md)

NativeFlowMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NativeFlowMessage`](NativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:17318](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17318)

Decodes a NativeFlowMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NativeFlowMessage`](NativeFlowMessage.md)

NativeFlowMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17291](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17291)

Encodes the specified NativeFlowMessage message. Does not implicitly [verify](NativeFlowMessage.md#verify) messages.

#### Parameters

##### message

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md)

NativeFlowMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17299](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17299)

Encodes the specified NativeFlowMessage message, length delimited. Does not implicitly [verify](NativeFlowMessage.md#verify) messages.

#### Parameters

##### message

[`INativeFlowMessage`](../interfaces/INativeFlowMessage.md)

NativeFlowMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NativeFlowMessage`](NativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:17332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17332)

Creates a NativeFlowMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NativeFlowMessage`](NativeFlowMessage.md)

NativeFlowMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17353)

Gets the default type url for NativeFlowMessage

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

Defined in: [WAProto/index.d.ts:17340](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17340)

Creates a plain object from a NativeFlowMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`NativeFlowMessage`](NativeFlowMessage.md)

NativeFlowMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17325](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17325)

Verifies a NativeFlowMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
