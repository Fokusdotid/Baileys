# Class: HSMLocalizableParameter

Defined in: [WAProto/index.d.ts:15442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15442)

Represents a HSMLocalizableParameter.

## Implements

- [`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md)

## Constructors

### new HSMLocalizableParameter()

> **new HSMLocalizableParameter**(`properties`?): [`HSMLocalizableParameter`](HSMLocalizableParameter.md)

Defined in: [WAProto/index.d.ts:15448](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15448)

Constructs a new HSMLocalizableParameter.

#### Parameters

##### properties?

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md)

Properties to set

#### Returns

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

## Properties

### currency?

> `optional` **currency**: `null` \| [`IHSMCurrency`](../namespaces/HSMLocalizableParameter/interfaces/IHSMCurrency.md)

Defined in: [WAProto/index.d.ts:15454](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15454)

HSMLocalizableParameter currency.

#### Implementation of

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md).[`currency`](../interfaces/IHSMLocalizableParameter.md#currency)

***

### dateTime?

> `optional` **dateTime**: `null` \| [`IHSMDateTime`](../namespaces/HSMLocalizableParameter/interfaces/IHSMDateTime.md)

Defined in: [WAProto/index.d.ts:15457](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15457)

HSMLocalizableParameter dateTime.

#### Implementation of

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md).[`dateTime`](../interfaces/IHSMLocalizableParameter.md#datetime)

***

### default

> **default**: `string`

Defined in: [WAProto/index.d.ts:15451](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15451)

HSMLocalizableParameter default.

#### Implementation of

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md).[`default`](../interfaces/IHSMLocalizableParameter.md#default)

***

### paramOneof?

> `optional` **paramOneof**: `"currency"` \| `"dateTime"`

Defined in: [WAProto/index.d.ts:15460](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15460)

HSMLocalizableParameter paramOneof.

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15530](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15530)

Converts this HSMLocalizableParameter to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HSMLocalizableParameter`](HSMLocalizableParameter.md)

Defined in: [WAProto/index.d.ts:15467](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15467)

Creates a new HSMLocalizableParameter instance using the specified properties.

#### Parameters

##### properties?

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md)

Properties to set

#### Returns

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

HSMLocalizableParameter instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HSMLocalizableParameter`](HSMLocalizableParameter.md)

Defined in: [WAProto/index.d.ts:15493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15493)

Decodes a HSMLocalizableParameter message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

HSMLocalizableParameter

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HSMLocalizableParameter`](HSMLocalizableParameter.md)

Defined in: [WAProto/index.d.ts:15502](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15502)

Decodes a HSMLocalizableParameter message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

HSMLocalizableParameter

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15475](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15475)

Encodes the specified HSMLocalizableParameter message. Does not implicitly [verify](HSMLocalizableParameter.md#verify) messages.

#### Parameters

##### message

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md)

HSMLocalizableParameter message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15483](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15483)

Encodes the specified HSMLocalizableParameter message, length delimited. Does not implicitly [verify](HSMLocalizableParameter.md#verify) messages.

#### Parameters

##### message

[`IHSMLocalizableParameter`](../interfaces/IHSMLocalizableParameter.md)

HSMLocalizableParameter message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HSMLocalizableParameter`](HSMLocalizableParameter.md)

Defined in: [WAProto/index.d.ts:15516](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15516)

Creates a HSMLocalizableParameter message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

HSMLocalizableParameter

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:15537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15537)

Gets the default type url for HSMLocalizableParameter

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

Defined in: [WAProto/index.d.ts:15524](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15524)

Creates a plain object from a HSMLocalizableParameter message. Also converts values to other types if specified.

#### Parameters

##### message

[`HSMLocalizableParameter`](HSMLocalizableParameter.md)

HSMLocalizableParameter

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15509](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15509)

Verifies a HSMLocalizableParameter message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
