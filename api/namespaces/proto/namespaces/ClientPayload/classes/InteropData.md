# Class: InteropData

Defined in: [WAProto/index.d.ts:3737](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3737)

Represents an InteropData.

## Implements

- [`IInteropData`](../interfaces/IInteropData.md)

## Constructors

### new InteropData()

> **new InteropData**(`properties`?): [`InteropData`](InteropData.md)

Defined in: [WAProto/index.d.ts:3743](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3743)

Constructs a new InteropData.

#### Parameters

##### properties?

[`IInteropData`](../interfaces/IInteropData.md)

Properties to set

#### Returns

[`InteropData`](InteropData.md)

## Properties

### accountId

> **accountId**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:3746](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3746)

InteropData accountId.

#### Implementation of

[`IInteropData`](../interfaces/IInteropData.md).[`accountId`](../interfaces/IInteropData.md#accountid)

***

### token

> **token**: `Uint8Array`

Defined in: [WAProto/index.d.ts:3749](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3749)

InteropData token.

#### Implementation of

[`IInteropData`](../interfaces/IInteropData.md).[`token`](../interfaces/IInteropData.md#token)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:3819](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3819)

Converts this InteropData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`InteropData`](InteropData.md)

Defined in: [WAProto/index.d.ts:3756](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3756)

Creates a new InteropData instance using the specified properties.

#### Parameters

##### properties?

[`IInteropData`](../interfaces/IInteropData.md)

Properties to set

#### Returns

[`InteropData`](InteropData.md)

InteropData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`InteropData`](InteropData.md)

Defined in: [WAProto/index.d.ts:3782](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3782)

Decodes an InteropData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`InteropData`](InteropData.md)

InteropData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`InteropData`](InteropData.md)

Defined in: [WAProto/index.d.ts:3791](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3791)

Decodes an InteropData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`InteropData`](InteropData.md)

InteropData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3764](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3764)

Encodes the specified InteropData message. Does not implicitly [verify](InteropData.md#verify) messages.

#### Parameters

##### message

[`IInteropData`](../interfaces/IInteropData.md)

InteropData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3772](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3772)

Encodes the specified InteropData message, length delimited. Does not implicitly [verify](InteropData.md#verify) messages.

#### Parameters

##### message

[`IInteropData`](../interfaces/IInteropData.md)

InteropData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`InteropData`](InteropData.md)

Defined in: [WAProto/index.d.ts:3805](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3805)

Creates an InteropData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`InteropData`](InteropData.md)

InteropData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:3826](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3826)

Gets the default type url for InteropData

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

Defined in: [WAProto/index.d.ts:3813](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3813)

Creates a plain object from an InteropData message. Also converts values to other types if specified.

#### Parameters

##### message

[`InteropData`](InteropData.md)

InteropData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:3798](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3798)

Verifies an InteropData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
