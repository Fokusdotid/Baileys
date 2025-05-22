# Class: CustomPaymentMethodMetadata

Defined in: [WAProto/index.d.ts:33114](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33114)

Represents a CustomPaymentMethodMetadata.

## Implements

- [`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)

## Constructors

### new CustomPaymentMethodMetadata()

> **new CustomPaymentMethodMetadata**(`properties`?): [`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

Defined in: [WAProto/index.d.ts:33120](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33120)

Constructs a new CustomPaymentMethodMetadata.

#### Parameters

##### properties?

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)

Properties to set

#### Returns

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

## Properties

### key

> **key**: `string`

Defined in: [WAProto/index.d.ts:33123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33123)

CustomPaymentMethodMetadata key.

#### Implementation of

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md).[`key`](../interfaces/ICustomPaymentMethodMetadata.md#key)

***

### value

> **value**: `string`

Defined in: [WAProto/index.d.ts:33126](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33126)

CustomPaymentMethodMetadata value.

#### Implementation of

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md).[`value`](../interfaces/ICustomPaymentMethodMetadata.md#value)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:33196](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33196)

Converts this CustomPaymentMethodMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

Defined in: [WAProto/index.d.ts:33133](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33133)

Creates a new CustomPaymentMethodMetadata instance using the specified properties.

#### Parameters

##### properties?

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)

Properties to set

#### Returns

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

Defined in: [WAProto/index.d.ts:33159](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33159)

Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

Defined in: [WAProto/index.d.ts:33168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33168)

Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33141)

Encodes the specified CustomPaymentMethodMetadata message. Does not implicitly [verify](CustomPaymentMethodMetadata.md#verify) messages.

#### Parameters

##### message

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33149)

Encodes the specified CustomPaymentMethodMetadata message, length delimited. Does not implicitly [verify](CustomPaymentMethodMetadata.md#verify) messages.

#### Parameters

##### message

[`ICustomPaymentMethodMetadata`](../interfaces/ICustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

Defined in: [WAProto/index.d.ts:33182](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33182)

Creates a CustomPaymentMethodMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:33203](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33203)

Gets the default type url for CustomPaymentMethodMetadata

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

Defined in: [WAProto/index.d.ts:33190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33190)

Creates a plain object from a CustomPaymentMethodMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`CustomPaymentMethodMetadata`](CustomPaymentMethodMetadata.md)

CustomPaymentMethodMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33175](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33175)

Verifies a CustomPaymentMethodMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
