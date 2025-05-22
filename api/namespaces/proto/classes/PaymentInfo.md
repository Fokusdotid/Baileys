# Class: PaymentInfo

Defined in: [WAProto/index.d.ts:27214](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27214)

Represents a PaymentInfo.

## Implements

- [`IPaymentInfo`](../interfaces/IPaymentInfo.md)

## Constructors

### new PaymentInfo()

> **new PaymentInfo**(`properties`?): [`PaymentInfo`](PaymentInfo.md)

Defined in: [WAProto/index.d.ts:27220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27220)

Constructs a new PaymentInfo.

#### Parameters

##### properties?

[`IPaymentInfo`](../interfaces/IPaymentInfo.md)

Properties to set

#### Returns

[`PaymentInfo`](PaymentInfo.md)

## Properties

### amount1000

> **amount1000**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27226)

PaymentInfo amount1000.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`amount1000`](../interfaces/IPaymentInfo.md#amount1000)

***

### currency

> **currency**: `string`

Defined in: [WAProto/index.d.ts:27247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27247)

PaymentInfo currency.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`currency`](../interfaces/IPaymentInfo.md#currency)

***

### currencyDeprecated

> **currencyDeprecated**: [`Currency`](../namespaces/PaymentInfo/enumerations/Currency.md)

Defined in: [WAProto/index.d.ts:27223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27223)

PaymentInfo currencyDeprecated.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`currencyDeprecated`](../interfaces/IPaymentInfo.md#currencydeprecated)

***

### exchangeAmount?

> `optional` **exchangeAmount**: `null` \| [`IMoney`](../interfaces/IMoney.md)

Defined in: [WAProto/index.d.ts:27259](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27259)

PaymentInfo exchangeAmount.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`exchangeAmount`](../interfaces/IPaymentInfo.md#exchangeamount)

***

### expiryTimestamp

> **expiryTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27241)

PaymentInfo expiryTimestamp.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`expiryTimestamp`](../interfaces/IPaymentInfo.md#expirytimestamp)

***

### futureproofed

> **futureproofed**: `boolean`

Defined in: [WAProto/index.d.ts:27244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27244)

PaymentInfo futureproofed.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`futureproofed`](../interfaces/IPaymentInfo.md#futureproofed)

***

### primaryAmount?

> `optional` **primaryAmount**: `null` \| [`IMoney`](../interfaces/IMoney.md)

Defined in: [WAProto/index.d.ts:27256](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27256)

PaymentInfo primaryAmount.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`primaryAmount`](../interfaces/IPaymentInfo.md#primaryamount)

***

### receiverJid

> **receiverJid**: `string`

Defined in: [WAProto/index.d.ts:27229](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27229)

PaymentInfo receiverJid.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`receiverJid`](../interfaces/IPaymentInfo.md#receiverjid)

***

### requestMessageKey?

> `optional` **requestMessageKey**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:27238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27238)

PaymentInfo requestMessageKey.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`requestMessageKey`](../interfaces/IPaymentInfo.md#requestmessagekey)

***

### status

> **status**: [`Status`](../namespaces/PaymentInfo/enumerations/Status.md)

Defined in: [WAProto/index.d.ts:27232](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27232)

PaymentInfo status.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`status`](../interfaces/IPaymentInfo.md#status)

***

### transactionTimestamp

> **transactionTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27235](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27235)

PaymentInfo transactionTimestamp.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`transactionTimestamp`](../interfaces/IPaymentInfo.md#transactiontimestamp)

***

### txnStatus

> **txnStatus**: [`TxnStatus`](../namespaces/PaymentInfo/enumerations/TxnStatus.md)

Defined in: [WAProto/index.d.ts:27250](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27250)

PaymentInfo txnStatus.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`txnStatus`](../interfaces/IPaymentInfo.md#txnstatus)

***

### useNoviFiatFormat

> **useNoviFiatFormat**: `boolean`

Defined in: [WAProto/index.d.ts:27253](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27253)

PaymentInfo useNoviFiatFormat.

#### Implementation of

[`IPaymentInfo`](../interfaces/IPaymentInfo.md).[`useNoviFiatFormat`](../interfaces/IPaymentInfo.md#usenovifiatformat)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27329)

Converts this PaymentInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PaymentInfo`](PaymentInfo.md)

Defined in: [WAProto/index.d.ts:27266](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27266)

Creates a new PaymentInfo instance using the specified properties.

#### Parameters

##### properties?

[`IPaymentInfo`](../interfaces/IPaymentInfo.md)

Properties to set

#### Returns

[`PaymentInfo`](PaymentInfo.md)

PaymentInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PaymentInfo`](PaymentInfo.md)

Defined in: [WAProto/index.d.ts:27292](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27292)

Decodes a PaymentInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PaymentInfo`](PaymentInfo.md)

PaymentInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PaymentInfo`](PaymentInfo.md)

Defined in: [WAProto/index.d.ts:27301](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27301)

Decodes a PaymentInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PaymentInfo`](PaymentInfo.md)

PaymentInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27274](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27274)

Encodes the specified PaymentInfo message. Does not implicitly [verify](PaymentInfo.md#verify) messages.

#### Parameters

##### message

[`IPaymentInfo`](../interfaces/IPaymentInfo.md)

PaymentInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27282)

Encodes the specified PaymentInfo message, length delimited. Does not implicitly [verify](PaymentInfo.md#verify) messages.

#### Parameters

##### message

[`IPaymentInfo`](../interfaces/IPaymentInfo.md)

PaymentInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PaymentInfo`](PaymentInfo.md)

Defined in: [WAProto/index.d.ts:27315](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27315)

Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PaymentInfo`](PaymentInfo.md)

PaymentInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27336](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27336)

Gets the default type url for PaymentInfo

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

Defined in: [WAProto/index.d.ts:27323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27323)

Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`PaymentInfo`](PaymentInfo.md)

PaymentInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27308)

Verifies a PaymentInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
