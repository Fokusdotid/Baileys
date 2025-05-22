# Class: IdentityKeyPairStructure

Defined in: [WAProto/index.d.ts:9073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9073)

Represents an IdentityKeyPairStructure.

## Implements

- [`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md)

## Constructors

### new IdentityKeyPairStructure()

> **new IdentityKeyPairStructure**(`properties`?): [`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

Defined in: [WAProto/index.d.ts:9079](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9079)

Constructs a new IdentityKeyPairStructure.

#### Parameters

##### properties?

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md)

Properties to set

#### Returns

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

## Properties

### privateKey

> **privateKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9085](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9085)

IdentityKeyPairStructure privateKey.

#### Implementation of

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md).[`privateKey`](../interfaces/IIdentityKeyPairStructure.md#privatekey)

***

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:9082](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9082)

IdentityKeyPairStructure publicKey.

#### Implementation of

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md).[`publicKey`](../interfaces/IIdentityKeyPairStructure.md#publickey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9155](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9155)

Converts this IdentityKeyPairStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

Defined in: [WAProto/index.d.ts:9092](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9092)

Creates a new IdentityKeyPairStructure instance using the specified properties.

#### Parameters

##### properties?

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md)

Properties to set

#### Returns

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

IdentityKeyPairStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

Defined in: [WAProto/index.d.ts:9118](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9118)

Decodes an IdentityKeyPairStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

IdentityKeyPairStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

Defined in: [WAProto/index.d.ts:9127](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9127)

Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

IdentityKeyPairStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9100)

Encodes the specified IdentityKeyPairStructure message. Does not implicitly [verify](IdentityKeyPairStructure.md#verify) messages.

#### Parameters

##### message

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md)

IdentityKeyPairStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9108)

Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly [verify](IdentityKeyPairStructure.md#verify) messages.

#### Parameters

##### message

[`IIdentityKeyPairStructure`](../interfaces/IIdentityKeyPairStructure.md)

IdentityKeyPairStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

Defined in: [WAProto/index.d.ts:9141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9141)

Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

IdentityKeyPairStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9162)

Gets the default type url for IdentityKeyPairStructure

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

Defined in: [WAProto/index.d.ts:9149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9149)

Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`IdentityKeyPairStructure`](IdentityKeyPairStructure.md)

IdentityKeyPairStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9134](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9134)

Verifies an IdentityKeyPairStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
