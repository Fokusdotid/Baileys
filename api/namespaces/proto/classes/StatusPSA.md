# Class: StatusPSA

Defined in: [WAProto/index.d.ts:31322](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31322)

Represents a StatusPSA.

## Implements

- [`IStatusPSA`](../interfaces/IStatusPSA.md)

## Constructors

### new StatusPSA()

> **new StatusPSA**(`properties`?): [`StatusPSA`](StatusPSA.md)

Defined in: [WAProto/index.d.ts:31328](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31328)

Constructs a new StatusPSA.

#### Parameters

##### properties?

[`IStatusPSA`](../interfaces/IStatusPSA.md)

Properties to set

#### Returns

[`StatusPSA`](StatusPSA.md)

## Properties

### campaignExpirationTimestamp

> **campaignExpirationTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:31334](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31334)

StatusPSA campaignExpirationTimestamp.

#### Implementation of

[`IStatusPSA`](../interfaces/IStatusPSA.md).[`campaignExpirationTimestamp`](../interfaces/IStatusPSA.md#campaignexpirationtimestamp)

***

### campaignId

> **campaignId**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:31331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31331)

StatusPSA campaignId.

#### Implementation of

[`IStatusPSA`](../interfaces/IStatusPSA.md).[`campaignId`](../interfaces/IStatusPSA.md#campaignid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:31404](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31404)

Converts this StatusPSA to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`StatusPSA`](StatusPSA.md)

Defined in: [WAProto/index.d.ts:31341](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31341)

Creates a new StatusPSA instance using the specified properties.

#### Parameters

##### properties?

[`IStatusPSA`](../interfaces/IStatusPSA.md)

Properties to set

#### Returns

[`StatusPSA`](StatusPSA.md)

StatusPSA instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`StatusPSA`](StatusPSA.md)

Defined in: [WAProto/index.d.ts:31367](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31367)

Decodes a StatusPSA message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`StatusPSA`](StatusPSA.md)

StatusPSA

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`StatusPSA`](StatusPSA.md)

Defined in: [WAProto/index.d.ts:31376](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31376)

Decodes a StatusPSA message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`StatusPSA`](StatusPSA.md)

StatusPSA

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31349](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31349)

Encodes the specified StatusPSA message. Does not implicitly [verify](StatusPSA.md#verify) messages.

#### Parameters

##### message

[`IStatusPSA`](../interfaces/IStatusPSA.md)

StatusPSA message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31357](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31357)

Encodes the specified StatusPSA message, length delimited. Does not implicitly [verify](StatusPSA.md#verify) messages.

#### Parameters

##### message

[`IStatusPSA`](../interfaces/IStatusPSA.md)

StatusPSA message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`StatusPSA`](StatusPSA.md)

Defined in: [WAProto/index.d.ts:31390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31390)

Creates a StatusPSA message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`StatusPSA`](StatusPSA.md)

StatusPSA

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:31411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31411)

Gets the default type url for StatusPSA

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

Defined in: [WAProto/index.d.ts:31398](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31398)

Creates a plain object from a StatusPSA message. Also converts values to other types if specified.

#### Parameters

##### message

[`StatusPSA`](StatusPSA.md)

StatusPSA

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:31383](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31383)

Verifies a StatusPSA message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
