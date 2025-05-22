# Class: EventLocation

Defined in: [WAProto/index.d.ts:25723](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25723)

Represents an EventLocation.

## Implements

- [`IEventLocation`](../interfaces/IEventLocation.md)

## Constructors

### new EventLocation()

> **new EventLocation**(`properties`?): [`EventLocation`](EventLocation.md)

Defined in: [WAProto/index.d.ts:25729](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25729)

Constructs a new EventLocation.

#### Parameters

##### properties?

[`IEventLocation`](../interfaces/IEventLocation.md)

Properties to set

#### Returns

[`EventLocation`](EventLocation.md)

## Properties

### address

> **address**: `string`

Defined in: [WAProto/index.d.ts:25741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25741)

EventLocation address.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`address`](../interfaces/IEventLocation.md#address)

***

### degreesLatitude

> **degreesLatitude**: `number`

Defined in: [WAProto/index.d.ts:25732](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25732)

EventLocation degreesLatitude.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`degreesLatitude`](../interfaces/IEventLocation.md#degreeslatitude)

***

### degreesLongitude

> **degreesLongitude**: `number`

Defined in: [WAProto/index.d.ts:25735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25735)

EventLocation degreesLongitude.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`degreesLongitude`](../interfaces/IEventLocation.md#degreeslongitude)

***

### jpegThumbnail

> **jpegThumbnail**: `Uint8Array`

Defined in: [WAProto/index.d.ts:25747](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25747)

EventLocation jpegThumbnail.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`jpegThumbnail`](../interfaces/IEventLocation.md#jpegthumbnail)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:25738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25738)

EventLocation name.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`name`](../interfaces/IEventLocation.md#name)

***

### url

> **url**: `string`

Defined in: [WAProto/index.d.ts:25744](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25744)

EventLocation url.

#### Implementation of

[`IEventLocation`](../interfaces/IEventLocation.md).[`url`](../interfaces/IEventLocation.md#url)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:25817](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25817)

Converts this EventLocation to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EventLocation`](EventLocation.md)

Defined in: [WAProto/index.d.ts:25754](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25754)

Creates a new EventLocation instance using the specified properties.

#### Parameters

##### properties?

[`IEventLocation`](../interfaces/IEventLocation.md)

Properties to set

#### Returns

[`EventLocation`](EventLocation.md)

EventLocation instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EventLocation`](EventLocation.md)

Defined in: [WAProto/index.d.ts:25780](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25780)

Decodes an EventLocation message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EventLocation`](EventLocation.md)

EventLocation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EventLocation`](EventLocation.md)

Defined in: [WAProto/index.d.ts:25789](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25789)

Decodes an EventLocation message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EventLocation`](EventLocation.md)

EventLocation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25762](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25762)

Encodes the specified EventLocation message. Does not implicitly [verify](EventLocation.md#verify) messages.

#### Parameters

##### message

[`IEventLocation`](../interfaces/IEventLocation.md)

EventLocation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25770](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25770)

Encodes the specified EventLocation message, length delimited. Does not implicitly [verify](EventLocation.md#verify) messages.

#### Parameters

##### message

[`IEventLocation`](../interfaces/IEventLocation.md)

EventLocation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EventLocation`](EventLocation.md)

Defined in: [WAProto/index.d.ts:25803](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25803)

Creates an EventLocation message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EventLocation`](EventLocation.md)

EventLocation

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:25824](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25824)

Gets the default type url for EventLocation

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

Defined in: [WAProto/index.d.ts:25811](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25811)

Creates a plain object from an EventLocation message. Also converts values to other types if specified.

#### Parameters

##### message

[`EventLocation`](EventLocation.md)

EventLocation

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25796](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25796)

Verifies an EventLocation message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
