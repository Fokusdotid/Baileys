# Class: RequestPaymentMessage

Defined in: [WAProto/index.d.ts:22835](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22835)

Represents a RequestPaymentMessage.

## Implements

- [`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md)

## Constructors

### new RequestPaymentMessage()

> **new RequestPaymentMessage**(`properties`?): [`RequestPaymentMessage`](RequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:22841](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22841)

Constructs a new RequestPaymentMessage.

#### Parameters

##### properties?

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md)

Properties to set

#### Returns

[`RequestPaymentMessage`](RequestPaymentMessage.md)

## Properties

### amount?

> `optional` **amount**: `null` \| [`IMoney`](../../../interfaces/IMoney.md)

Defined in: [WAProto/index.d.ts:22859](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22859)

RequestPaymentMessage amount.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`amount`](../interfaces/IRequestPaymentMessage.md#amount)

***

### amount1000

> **amount1000**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:22850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22850)

RequestPaymentMessage amount1000.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`amount1000`](../interfaces/IRequestPaymentMessage.md#amount1000)

***

### background?

> `optional` **background**: `null` \| [`IPaymentBackground`](../../../interfaces/IPaymentBackground.md)

Defined in: [WAProto/index.d.ts:22862](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22862)

RequestPaymentMessage background.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`background`](../interfaces/IRequestPaymentMessage.md#background)

***

### currencyCodeIso4217

> **currencyCodeIso4217**: `string`

Defined in: [WAProto/index.d.ts:22847](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22847)

RequestPaymentMessage currencyCodeIso4217.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`currencyCodeIso4217`](../interfaces/IRequestPaymentMessage.md#currencycodeiso4217)

***

### expiryTimestamp

> **expiryTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:22856](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22856)

RequestPaymentMessage expiryTimestamp.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`expiryTimestamp`](../interfaces/IRequestPaymentMessage.md#expirytimestamp)

***

### noteMessage?

> `optional` **noteMessage**: `null` \| [`IMessage`](../../../interfaces/IMessage.md)

Defined in: [WAProto/index.d.ts:22844](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22844)

RequestPaymentMessage noteMessage.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`noteMessage`](../interfaces/IRequestPaymentMessage.md#notemessage)

***

### requestFrom

> **requestFrom**: `string`

Defined in: [WAProto/index.d.ts:22853](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22853)

RequestPaymentMessage requestFrom.

#### Implementation of

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md).[`requestFrom`](../interfaces/IRequestPaymentMessage.md#requestfrom)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:22932](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22932)

Converts this RequestPaymentMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`RequestPaymentMessage`](RequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:22869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22869)

Creates a new RequestPaymentMessage instance using the specified properties.

#### Parameters

##### properties?

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md)

Properties to set

#### Returns

[`RequestPaymentMessage`](RequestPaymentMessage.md)

RequestPaymentMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`RequestPaymentMessage`](RequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:22895](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22895)

Decodes a RequestPaymentMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`RequestPaymentMessage`](RequestPaymentMessage.md)

RequestPaymentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`RequestPaymentMessage`](RequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:22904](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22904)

Decodes a RequestPaymentMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`RequestPaymentMessage`](RequestPaymentMessage.md)

RequestPaymentMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22877)

Encodes the specified RequestPaymentMessage message. Does not implicitly [verify](RequestPaymentMessage.md#verify) messages.

#### Parameters

##### message

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md)

RequestPaymentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22885](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22885)

Encodes the specified RequestPaymentMessage message, length delimited. Does not implicitly [verify](RequestPaymentMessage.md#verify) messages.

#### Parameters

##### message

[`IRequestPaymentMessage`](../interfaces/IRequestPaymentMessage.md)

RequestPaymentMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`RequestPaymentMessage`](RequestPaymentMessage.md)

Defined in: [WAProto/index.d.ts:22918](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22918)

Creates a RequestPaymentMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`RequestPaymentMessage`](RequestPaymentMessage.md)

RequestPaymentMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:22939](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22939)

Gets the default type url for RequestPaymentMessage

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

Defined in: [WAProto/index.d.ts:22926](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22926)

Creates a plain object from a RequestPaymentMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`RequestPaymentMessage`](RequestPaymentMessage.md)

RequestPaymentMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:22911](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22911)

Verifies a RequestPaymentMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
