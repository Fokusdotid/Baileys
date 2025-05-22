# Class: CustomPaymentMethod

Defined in: [WAProto/index.d.ts:33005](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33005)

Represents a CustomPaymentMethod.

## Implements

- [`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md)

## Constructors

### new CustomPaymentMethod()

> **new CustomPaymentMethod**(`properties`?): [`CustomPaymentMethod`](CustomPaymentMethod.md)

Defined in: [WAProto/index.d.ts:33011](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33011)

Constructs a new CustomPaymentMethod.

#### Parameters

##### properties?

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md)

Properties to set

#### Returns

[`CustomPaymentMethod`](CustomPaymentMethod.md)

## Properties

### country

> **country**: `string`

Defined in: [WAProto/index.d.ts:33017](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33017)

CustomPaymentMethod country.

#### Implementation of

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md).[`country`](../interfaces/ICustomPaymentMethod.md#country)

***

### credentialId

> **credentialId**: `string`

Defined in: [WAProto/index.d.ts:33014](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33014)

CustomPaymentMethod credentialId.

#### Implementation of

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md).[`credentialId`](../interfaces/ICustomPaymentMethod.md#credentialid)

***

### metadata

> **metadata**: [`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)[]

Defined in: [WAProto/index.d.ts:33023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33023)

CustomPaymentMethod metadata.

#### Implementation of

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md).[`metadata`](../interfaces/ICustomPaymentMethod.md#metadata)

***

### type

> **type**: `string`

Defined in: [WAProto/index.d.ts:33020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33020)

CustomPaymentMethod type.

#### Implementation of

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md).[`type`](../interfaces/ICustomPaymentMethod.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:33093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33093)

Converts this CustomPaymentMethod to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CustomPaymentMethod`](CustomPaymentMethod.md)

Defined in: [WAProto/index.d.ts:33030](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33030)

Creates a new CustomPaymentMethod instance using the specified properties.

#### Parameters

##### properties?

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md)

Properties to set

#### Returns

[`CustomPaymentMethod`](CustomPaymentMethod.md)

CustomPaymentMethod instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CustomPaymentMethod`](CustomPaymentMethod.md)

Defined in: [WAProto/index.d.ts:33056](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33056)

Decodes a CustomPaymentMethod message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CustomPaymentMethod`](CustomPaymentMethod.md)

CustomPaymentMethod

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CustomPaymentMethod`](CustomPaymentMethod.md)

Defined in: [WAProto/index.d.ts:33065](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33065)

Decodes a CustomPaymentMethod message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CustomPaymentMethod`](CustomPaymentMethod.md)

CustomPaymentMethod

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33038](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33038)

Encodes the specified CustomPaymentMethod message. Does not implicitly [verify](CustomPaymentMethod.md#verify) messages.

#### Parameters

##### message

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md)

CustomPaymentMethod message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33046)

Encodes the specified CustomPaymentMethod message, length delimited. Does not implicitly [verify](CustomPaymentMethod.md#verify) messages.

#### Parameters

##### message

[`ICustomPaymentMethod`](../interfaces/ICustomPaymentMethod.md)

CustomPaymentMethod message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CustomPaymentMethod`](CustomPaymentMethod.md)

Defined in: [WAProto/index.d.ts:33079](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33079)

Creates a CustomPaymentMethod message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CustomPaymentMethod`](CustomPaymentMethod.md)

CustomPaymentMethod

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:33100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33100)

Gets the default type url for CustomPaymentMethod

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

Defined in: [WAProto/index.d.ts:33087](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33087)

Creates a plain object from a CustomPaymentMethod message. Also converts values to other types if specified.

#### Parameters

##### message

[`CustomPaymentMethod`](CustomPaymentMethod.md)

CustomPaymentMethod

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33072](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33072)

Verifies a CustomPaymentMethod message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
