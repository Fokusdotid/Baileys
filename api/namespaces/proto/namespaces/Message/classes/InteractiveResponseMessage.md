# Class: InteractiveResponseMessage

Defined in: [WAProto/index.d.ts:17597](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17597)

Represents an InteractiveResponseMessage.

## Implements

- [`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md)

## Constructors

### new InteractiveResponseMessage()

> **new InteractiveResponseMessage**(`properties`?): [`InteractiveResponseMessage`](InteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:17603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17603)

Constructs a new InteractiveResponseMessage.

#### Parameters

##### properties?

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md)

Properties to set

#### Returns

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

## Properties

### body?

> `optional` **body**: `null` \| [`IBody`](../namespaces/InteractiveResponseMessage/interfaces/IBody.md)

Defined in: [WAProto/index.d.ts:17606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17606)

InteractiveResponseMessage body.

#### Implementation of

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md).[`body`](../interfaces/IInteractiveResponseMessage.md#body)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:17609](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17609)

InteractiveResponseMessage contextInfo.

#### Implementation of

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md).[`contextInfo`](../interfaces/IInteractiveResponseMessage.md#contextinfo)

***

### interactiveResponseMessage?

> `optional` **interactiveResponseMessage**: `"nativeFlowResponseMessage"`

Defined in: [WAProto/index.d.ts:17615](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17615)

InteractiveResponseMessage interactiveResponseMessage.

***

### nativeFlowResponseMessage?

> `optional` **nativeFlowResponseMessage**: `null` \| [`INativeFlowResponseMessage`](../namespaces/InteractiveResponseMessage/interfaces/INativeFlowResponseMessage.md)

Defined in: [WAProto/index.d.ts:17612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17612)

InteractiveResponseMessage nativeFlowResponseMessage.

#### Implementation of

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md).[`nativeFlowResponseMessage`](../interfaces/IInteractiveResponseMessage.md#nativeflowresponsemessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17685)

Converts this InteractiveResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`InteractiveResponseMessage`](InteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:17622](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17622)

Creates a new InteractiveResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md)

Properties to set

#### Returns

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

InteractiveResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`InteractiveResponseMessage`](InteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:17648](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17648)

Decodes an InteractiveResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

InteractiveResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`InteractiveResponseMessage`](InteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:17657](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17657)

Decodes an InteractiveResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

InteractiveResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17630](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17630)

Encodes the specified InteractiveResponseMessage message. Does not implicitly [verify](InteractiveResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md)

InteractiveResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17638)

Encodes the specified InteractiveResponseMessage message, length delimited. Does not implicitly [verify](InteractiveResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IInteractiveResponseMessage`](../interfaces/IInteractiveResponseMessage.md)

InteractiveResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`InteractiveResponseMessage`](InteractiveResponseMessage.md)

Defined in: [WAProto/index.d.ts:17671](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17671)

Creates an InteractiveResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

InteractiveResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17692](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17692)

Gets the default type url for InteractiveResponseMessage

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

Defined in: [WAProto/index.d.ts:17679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17679)

Creates a plain object from an InteractiveResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`InteractiveResponseMessage`](InteractiveResponseMessage.md)

InteractiveResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17664](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17664)

Verifies an InteractiveResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
