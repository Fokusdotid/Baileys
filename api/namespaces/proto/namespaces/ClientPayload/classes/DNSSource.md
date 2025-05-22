# Class: DNSSource

Defined in: [WAProto/index.d.ts:3476](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3476)

Represents a DNSSource.

## Implements

- [`IDNSSource`](../interfaces/IDNSSource.md)

## Constructors

### new DNSSource()

> **new DNSSource**(`properties`?): [`DNSSource`](DNSSource.md)

Defined in: [WAProto/index.d.ts:3482](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3482)

Constructs a new DNSSource.

#### Parameters

##### properties?

[`IDNSSource`](../interfaces/IDNSSource.md)

Properties to set

#### Returns

[`DNSSource`](DNSSource.md)

## Properties

### appCached

> **appCached**: `boolean`

Defined in: [WAProto/index.d.ts:3488](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3488)

DNSSource appCached.

#### Implementation of

[`IDNSSource`](../interfaces/IDNSSource.md).[`appCached`](../interfaces/IDNSSource.md#appcached)

***

### dnsMethod

> **dnsMethod**: [`DNSResolutionMethod`](../namespaces/DNSSource/enumerations/DNSResolutionMethod.md)

Defined in: [WAProto/index.d.ts:3485](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3485)

DNSSource dnsMethod.

#### Implementation of

[`IDNSSource`](../interfaces/IDNSSource.md).[`dnsMethod`](../interfaces/IDNSSource.md#dnsmethod)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:3558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3558)

Converts this DNSSource to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DNSSource`](DNSSource.md)

Defined in: [WAProto/index.d.ts:3495](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3495)

Creates a new DNSSource instance using the specified properties.

#### Parameters

##### properties?

[`IDNSSource`](../interfaces/IDNSSource.md)

Properties to set

#### Returns

[`DNSSource`](DNSSource.md)

DNSSource instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DNSSource`](DNSSource.md)

Defined in: [WAProto/index.d.ts:3521](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3521)

Decodes a DNSSource message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DNSSource`](DNSSource.md)

DNSSource

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DNSSource`](DNSSource.md)

Defined in: [WAProto/index.d.ts:3530](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3530)

Decodes a DNSSource message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DNSSource`](DNSSource.md)

DNSSource

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3503](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3503)

Encodes the specified DNSSource message. Does not implicitly [verify](DNSSource.md#verify) messages.

#### Parameters

##### message

[`IDNSSource`](../interfaces/IDNSSource.md)

DNSSource message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3511](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3511)

Encodes the specified DNSSource message, length delimited. Does not implicitly [verify](DNSSource.md#verify) messages.

#### Parameters

##### message

[`IDNSSource`](../interfaces/IDNSSource.md)

DNSSource message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DNSSource`](DNSSource.md)

Defined in: [WAProto/index.d.ts:3544](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3544)

Creates a DNSSource message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DNSSource`](DNSSource.md)

DNSSource

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:3565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3565)

Gets the default type url for DNSSource

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

Defined in: [WAProto/index.d.ts:3552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3552)

Creates a plain object from a DNSSource message. Also converts values to other types if specified.

#### Parameters

##### message

[`DNSSource`](DNSSource.md)

DNSSource

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:3537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3537)

Verifies a DNSSource message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
