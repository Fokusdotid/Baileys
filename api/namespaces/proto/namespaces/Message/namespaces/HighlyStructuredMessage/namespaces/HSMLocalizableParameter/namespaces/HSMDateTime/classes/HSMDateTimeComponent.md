# Class: HSMDateTimeComponent

Defined in: [WAProto/index.d.ts:15779](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15779)

Represents a HSMDateTimeComponent.

## Implements

- [`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md)

## Constructors

### new HSMDateTimeComponent()

> **new HSMDateTimeComponent**(`properties`?): [`HSMDateTimeComponent`](HSMDateTimeComponent.md)

Defined in: [WAProto/index.d.ts:15785](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15785)

Constructs a new HSMDateTimeComponent.

#### Parameters

##### properties?

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md)

Properties to set

#### Returns

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

## Properties

### calendar

> **calendar**: [`CalendarType`](../namespaces/HSMDateTimeComponent/enumerations/CalendarType.md)

Defined in: [WAProto/index.d.ts:15806](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15806)

HSMDateTimeComponent calendar.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`calendar`](../interfaces/IHSMDateTimeComponent.md#calendar)

***

### dayOfMonth

> **dayOfMonth**: `number`

Defined in: [WAProto/index.d.ts:15797](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15797)

HSMDateTimeComponent dayOfMonth.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`dayOfMonth`](../interfaces/IHSMDateTimeComponent.md#dayofmonth)

***

### dayOfWeek

> **dayOfWeek**: [`DayOfWeekType`](../namespaces/HSMDateTimeComponent/enumerations/DayOfWeekType.md)

Defined in: [WAProto/index.d.ts:15788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15788)

HSMDateTimeComponent dayOfWeek.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`dayOfWeek`](../interfaces/IHSMDateTimeComponent.md#dayofweek)

***

### hour

> **hour**: `number`

Defined in: [WAProto/index.d.ts:15800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15800)

HSMDateTimeComponent hour.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`hour`](../interfaces/IHSMDateTimeComponent.md#hour)

***

### minute

> **minute**: `number`

Defined in: [WAProto/index.d.ts:15803](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15803)

HSMDateTimeComponent minute.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`minute`](../interfaces/IHSMDateTimeComponent.md#minute)

***

### month

> **month**: `number`

Defined in: [WAProto/index.d.ts:15794](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15794)

HSMDateTimeComponent month.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`month`](../interfaces/IHSMDateTimeComponent.md#month)

***

### year

> **year**: `number`

Defined in: [WAProto/index.d.ts:15791](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15791)

HSMDateTimeComponent year.

#### Implementation of

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md).[`year`](../interfaces/IHSMDateTimeComponent.md#year)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:15876](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15876)

Converts this HSMDateTimeComponent to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HSMDateTimeComponent`](HSMDateTimeComponent.md)

Defined in: [WAProto/index.d.ts:15813](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15813)

Creates a new HSMDateTimeComponent instance using the specified properties.

#### Parameters

##### properties?

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md)

Properties to set

#### Returns

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

HSMDateTimeComponent instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HSMDateTimeComponent`](HSMDateTimeComponent.md)

Defined in: [WAProto/index.d.ts:15839](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15839)

Decodes a HSMDateTimeComponent message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

HSMDateTimeComponent

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HSMDateTimeComponent`](HSMDateTimeComponent.md)

Defined in: [WAProto/index.d.ts:15848](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15848)

Decodes a HSMDateTimeComponent message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

HSMDateTimeComponent

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15821](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15821)

Encodes the specified HSMDateTimeComponent message. Does not implicitly [verify](HSMDateTimeComponent.md#verify) messages.

#### Parameters

##### message

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md)

HSMDateTimeComponent message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:15829](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15829)

Encodes the specified HSMDateTimeComponent message, length delimited. Does not implicitly [verify](HSMDateTimeComponent.md#verify) messages.

#### Parameters

##### message

[`IHSMDateTimeComponent`](../interfaces/IHSMDateTimeComponent.md)

HSMDateTimeComponent message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HSMDateTimeComponent`](HSMDateTimeComponent.md)

Defined in: [WAProto/index.d.ts:15862](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15862)

Creates a HSMDateTimeComponent message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

HSMDateTimeComponent

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:15883](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15883)

Gets the default type url for HSMDateTimeComponent

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

Defined in: [WAProto/index.d.ts:15870](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15870)

Creates a plain object from a HSMDateTimeComponent message. Also converts values to other types if specified.

#### Parameters

##### message

[`HSMDateTimeComponent`](HSMDateTimeComponent.md)

HSMDateTimeComponent

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:15855](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L15855)

Verifies a HSMDateTimeComponent message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
