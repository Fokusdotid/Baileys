# Class: PaymentInviteMessage

Defined in: [WAProto/index.d.ts:19969](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19969)

Represents a PaymentInviteMessage.

## Implements

- [`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md)

## Constructors

### new PaymentInviteMessage()

> **new PaymentInviteMessage**(`properties`?): [`PaymentInviteMessage`](PaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:19975](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19975)

Constructs a new PaymentInviteMessage.

#### Parameters

##### properties?

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md)

Properties to set

#### Returns

[`PaymentInviteMessage`](PaymentInviteMessage.md)

## Properties

### expiryTimestamp

> **expiryTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:19981](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19981)

PaymentInviteMessage expiryTimestamp.

#### Implementation of

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md).[`expiryTimestamp`](../interfaces/IPaymentInviteMessage.md#expirytimestamp)

***

### serviceType

> **serviceType**: [`ServiceType`](../namespaces/PaymentInviteMessage/enumerations/ServiceType.md)

Defined in: [WAProto/index.d.ts:19978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19978)

PaymentInviteMessage serviceType.

#### Implementation of

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md).[`serviceType`](../interfaces/IPaymentInviteMessage.md#servicetype)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:20051](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20051)

Converts this PaymentInviteMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PaymentInviteMessage`](PaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:19988](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19988)

Creates a new PaymentInviteMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md)

Properties to set

#### Returns

[`PaymentInviteMessage`](PaymentInviteMessage.md)

PaymentInviteMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PaymentInviteMessage`](PaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:20014](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20014)

Decodes a PaymentInviteMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PaymentInviteMessage`](PaymentInviteMessage.md)

PaymentInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PaymentInviteMessage`](PaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:20023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20023)

Decodes a PaymentInviteMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PaymentInviteMessage`](PaymentInviteMessage.md)

PaymentInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19996](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19996)

Encodes the specified PaymentInviteMessage message. Does not implicitly [verify](PaymentInviteMessage.md#verify) messages.

#### Parameters

##### message

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md)

PaymentInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:20004](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20004)

Encodes the specified PaymentInviteMessage message, length delimited. Does not implicitly [verify](PaymentInviteMessage.md#verify) messages.

#### Parameters

##### message

[`IPaymentInviteMessage`](../interfaces/IPaymentInviteMessage.md)

PaymentInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PaymentInviteMessage`](PaymentInviteMessage.md)

Defined in: [WAProto/index.d.ts:20037](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20037)

Creates a PaymentInviteMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PaymentInviteMessage`](PaymentInviteMessage.md)

PaymentInviteMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:20058](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20058)

Gets the default type url for PaymentInviteMessage

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

Defined in: [WAProto/index.d.ts:20045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20045)

Creates a plain object from a PaymentInviteMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PaymentInviteMessage`](PaymentInviteMessage.md)

PaymentInviteMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:20030](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L20030)

Verifies a PaymentInviteMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
