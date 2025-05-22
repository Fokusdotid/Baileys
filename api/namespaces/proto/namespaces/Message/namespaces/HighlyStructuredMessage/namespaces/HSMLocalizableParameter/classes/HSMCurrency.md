# Class: HSMCurrency

Defined in: [WAProto/index.d.ts:15553](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15553)

Represents a HSMCurrency.

## Implements

- [`IHSMCurrency`](../interfaces/IHSMCurrency.md)

## Constructors

### new HSMCurrency()

> **new HSMCurrency**(`properties`?): [`HSMCurrency`](HSMCurrency.md)

Defined in: [WAProto/index.d.ts:15559](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15559)

Constructs a new HSMCurrency.

#### Parameters

##### properties?

[`IHSMCurrency`](../interfaces/IHSMCurrency.md)

Properties to set

#### Returns

[`HSMCurrency`](HSMCurrency.md)

## Properties

### amount1000

> **amount1000**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:15565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15565)

HSMCurrency amount1000.

#### Implementation of

[`IHSMCurrency`](../interfaces/IHSMCurrency.md).[`amount1000`](../interfaces/IHSMCurrency.md#amount1000)

***

### currencyCode

> **currencyCode**: `string`

Defined in: [WAProto/index.d.ts:15562](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15562)

HSMCurrency currencyCode.

#### Implementation of

[`IHSMCurrency`](../interfaces/IHSMCurrency.md).[`currencyCode`](../interfaces/IHSMCurrency.md#currencycode)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15635](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15635)

Converts this HSMCurrency to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HSMCurrency`](HSMCurrency.md)

Defined in: [WAProto/index.d.ts:15572](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15572)

Creates a new HSMCurrency instance using the specified properties.

#### Parameters

##### properties?

[`IHSMCurrency`](../interfaces/IHSMCurrency.md)

Properties to set

#### Returns

[`HSMCurrency`](HSMCurrency.md)

HSMCurrency instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HSMCurrency`](HSMCurrency.md)

Defined in: [WAProto/index.d.ts:15598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15598)

Decodes a HSMCurrency message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HSMCurrency`](HSMCurrency.md)

HSMCurrency

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HSMCurrency`](HSMCurrency.md)

Defined in: [WAProto/index.d.ts:15607](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15607)

Decodes a HSMCurrency message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HSMCurrency`](HSMCurrency.md)

HSMCurrency

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15580](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15580)

Encodes the specified HSMCurrency message. Does not implicitly [verify](HSMCurrency.md#verify) messages.

#### Parameters

##### message

[`IHSMCurrency`](../interfaces/IHSMCurrency.md)

HSMCurrency message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15588)

Encodes the specified HSMCurrency message, length delimited. Does not implicitly [verify](HSMCurrency.md#verify) messages.

#### Parameters

##### message

[`IHSMCurrency`](../interfaces/IHSMCurrency.md)

HSMCurrency message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HSMCurrency`](HSMCurrency.md)

Defined in: [WAProto/index.d.ts:15621](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15621)

Creates a HSMCurrency message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HSMCurrency`](HSMCurrency.md)

HSMCurrency

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:15642](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15642)

Gets the default type url for HSMCurrency

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

Defined in: [WAProto/index.d.ts:15629](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15629)

Creates a plain object from a HSMCurrency message. Also converts values to other types if specified.

#### Parameters

##### message

[`HSMCurrency`](HSMCurrency.md)

HSMCurrency

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15614)

Verifies a HSMCurrency message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
