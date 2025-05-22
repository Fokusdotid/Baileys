# Class: UserPassword

Defined in: [WAProto/index.d.ts:38567](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38567)

Represents a UserPassword.

## Implements

- [`IUserPassword`](../interfaces/IUserPassword.md)

## Constructors

### new UserPassword()

> **new UserPassword**(`properties`?): [`UserPassword`](UserPassword.md)

Defined in: [WAProto/index.d.ts:38573](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38573)

Constructs a new UserPassword.

#### Parameters

##### properties?

[`IUserPassword`](../interfaces/IUserPassword.md)

Properties to set

#### Returns

[`UserPassword`](UserPassword.md)

## Properties

### encoding

> **encoding**: [`UTF8`](../namespaces/UserPassword/enumerations/Encoding.md#utf8)

Defined in: [WAProto/index.d.ts:38576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38576)

UserPassword encoding.

#### Implementation of

[`IUserPassword`](../interfaces/IUserPassword.md).[`encoding`](../interfaces/IUserPassword.md#encoding)

***

### transformedData

> **transformedData**: `Uint8Array`

Defined in: [WAProto/index.d.ts:38585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38585)

UserPassword transformedData.

#### Implementation of

[`IUserPassword`](../interfaces/IUserPassword.md).[`transformedData`](../interfaces/IUserPassword.md#transformeddata)

***

### transformer

> **transformer**: [`Transformer`](../namespaces/UserPassword/enumerations/Transformer.md)

Defined in: [WAProto/index.d.ts:38579](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38579)

UserPassword transformer.

#### Implementation of

[`IUserPassword`](../interfaces/IUserPassword.md).[`transformer`](../interfaces/IUserPassword.md#transformer)

***

### transformerArg

> **transformerArg**: [`ITransformerArg`](../namespaces/UserPassword/interfaces/ITransformerArg.md)[]

Defined in: [WAProto/index.d.ts:38582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38582)

UserPassword transformerArg.

#### Implementation of

[`IUserPassword`](../interfaces/IUserPassword.md).[`transformerArg`](../interfaces/IUserPassword.md#transformerarg)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:38655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38655)

Converts this UserPassword to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`UserPassword`](UserPassword.md)

Defined in: [WAProto/index.d.ts:38592](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38592)

Creates a new UserPassword instance using the specified properties.

#### Parameters

##### properties?

[`IUserPassword`](../interfaces/IUserPassword.md)

Properties to set

#### Returns

[`UserPassword`](UserPassword.md)

UserPassword instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`UserPassword`](UserPassword.md)

Defined in: [WAProto/index.d.ts:38618](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38618)

Decodes a UserPassword message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`UserPassword`](UserPassword.md)

UserPassword

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`UserPassword`](UserPassword.md)

Defined in: [WAProto/index.d.ts:38627](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38627)

Decodes a UserPassword message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`UserPassword`](UserPassword.md)

UserPassword

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38600](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38600)

Encodes the specified UserPassword message. Does not implicitly [verify](UserPassword.md#verify) messages.

#### Parameters

##### message

[`IUserPassword`](../interfaces/IUserPassword.md)

UserPassword message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:38608](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38608)

Encodes the specified UserPassword message, length delimited. Does not implicitly [verify](UserPassword.md#verify) messages.

#### Parameters

##### message

[`IUserPassword`](../interfaces/IUserPassword.md)

UserPassword message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`UserPassword`](UserPassword.md)

Defined in: [WAProto/index.d.ts:38641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38641)

Creates a UserPassword message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`UserPassword`](UserPassword.md)

UserPassword

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:38662](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38662)

Gets the default type url for UserPassword

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

Defined in: [WAProto/index.d.ts:38649](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38649)

Creates a plain object from a UserPassword message. Also converts values to other types if specified.

#### Parameters

##### message

[`UserPassword`](UserPassword.md)

UserPassword

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:38634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L38634)

Verifies a UserPassword message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
