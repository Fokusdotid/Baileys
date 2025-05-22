# Class: CancelPaymentRequestMessage

Defined in: [WAProto/index.d.ts:13267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13267)

Represents a CancelPaymentRequestMessage.

## Implements

- [`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md)

## Constructors

### new CancelPaymentRequestMessage()

> **new CancelPaymentRequestMessage**(`properties`?): [`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:13273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13273)

Constructs a new CancelPaymentRequestMessage.

#### Parameters

##### properties?

[`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md)

Properties to set

#### Returns

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

## Properties

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:13276](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13276)

CancelPaymentRequestMessage key.

#### Implementation of

[`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md).[`key`](../interfaces/ICancelPaymentRequestMessage.md#key)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13346](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13346)

Converts this CancelPaymentRequestMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:13283](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13283)

Creates a new CancelPaymentRequestMessage instance using the specified properties.

#### Parameters

##### properties?

[`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md)

Properties to set

#### Returns

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

CancelPaymentRequestMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:13309](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13309)

Decodes a CancelPaymentRequestMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

CancelPaymentRequestMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:13318](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13318)

Decodes a CancelPaymentRequestMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

CancelPaymentRequestMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13291](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13291)

Encodes the specified CancelPaymentRequestMessage message. Does not implicitly [verify](CancelPaymentRequestMessage.md#verify) messages.

#### Parameters

##### message

[`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md)

CancelPaymentRequestMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13299](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13299)

Encodes the specified CancelPaymentRequestMessage message, length delimited. Does not implicitly [verify](CancelPaymentRequestMessage.md#verify) messages.

#### Parameters

##### message

[`ICancelPaymentRequestMessage`](../interfaces/ICancelPaymentRequestMessage.md)

CancelPaymentRequestMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

Defined in: [WAProto/index.d.ts:13332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13332)

Creates a CancelPaymentRequestMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

CancelPaymentRequestMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13353)

Gets the default type url for CancelPaymentRequestMessage

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

Defined in: [WAProto/index.d.ts:13340](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13340)

Creates a plain object from a CancelPaymentRequestMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`CancelPaymentRequestMessage`](CancelPaymentRequestMessage.md)

CancelPaymentRequestMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:13325](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13325)

Verifies a CancelPaymentRequestMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
