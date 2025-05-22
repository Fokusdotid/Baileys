# Class: PaymentInfoAction

Defined in: [WAProto/index.d.ts:34994](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34994)

Represents a PaymentInfoAction.

## Implements

- [`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md)

## Constructors

### new PaymentInfoAction()

> **new PaymentInfoAction**(`properties`?): [`PaymentInfoAction`](PaymentInfoAction.md)

Defined in: [WAProto/index.d.ts:35000](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35000)

Constructs a new PaymentInfoAction.

#### Parameters

##### properties?

[`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md)

Properties to set

#### Returns

[`PaymentInfoAction`](PaymentInfoAction.md)

## Properties

### cpi

> **cpi**: `string`

Defined in: [WAProto/index.d.ts:35003](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35003)

PaymentInfoAction cpi.

#### Implementation of

[`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md).[`cpi`](../interfaces/IPaymentInfoAction.md#cpi)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35073)

Converts this PaymentInfoAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PaymentInfoAction`](PaymentInfoAction.md)

Defined in: [WAProto/index.d.ts:35010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35010)

Creates a new PaymentInfoAction instance using the specified properties.

#### Parameters

##### properties?

[`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md)

Properties to set

#### Returns

[`PaymentInfoAction`](PaymentInfoAction.md)

PaymentInfoAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PaymentInfoAction`](PaymentInfoAction.md)

Defined in: [WAProto/index.d.ts:35036](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35036)

Decodes a PaymentInfoAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PaymentInfoAction`](PaymentInfoAction.md)

PaymentInfoAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PaymentInfoAction`](PaymentInfoAction.md)

Defined in: [WAProto/index.d.ts:35045](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35045)

Decodes a PaymentInfoAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PaymentInfoAction`](PaymentInfoAction.md)

PaymentInfoAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35018](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35018)

Encodes the specified PaymentInfoAction message. Does not implicitly [verify](PaymentInfoAction.md#verify) messages.

#### Parameters

##### message

[`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md)

PaymentInfoAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35026)

Encodes the specified PaymentInfoAction message, length delimited. Does not implicitly [verify](PaymentInfoAction.md#verify) messages.

#### Parameters

##### message

[`IPaymentInfoAction`](../interfaces/IPaymentInfoAction.md)

PaymentInfoAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PaymentInfoAction`](PaymentInfoAction.md)

Defined in: [WAProto/index.d.ts:35059](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35059)

Creates a PaymentInfoAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PaymentInfoAction`](PaymentInfoAction.md)

PaymentInfoAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35080](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35080)

Gets the default type url for PaymentInfoAction

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

Defined in: [WAProto/index.d.ts:35067](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35067)

Creates a plain object from a PaymentInfoAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`PaymentInfoAction`](PaymentInfoAction.md)

PaymentInfoAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35052](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35052)

Verifies a PaymentInfoAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
