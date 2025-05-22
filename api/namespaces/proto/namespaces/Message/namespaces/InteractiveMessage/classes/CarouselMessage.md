# Class: CarouselMessage

Defined in: [WAProto/index.d.ts:16801](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16801)

Represents a CarouselMessage.

## Implements

- [`ICarouselMessage`](../interfaces/ICarouselMessage.md)

## Constructors

### new CarouselMessage()

> **new CarouselMessage**(`properties`?): [`CarouselMessage`](CarouselMessage.md)

Defined in: [WAProto/index.d.ts:16807](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16807)

Constructs a new CarouselMessage.

#### Parameters

##### properties?

[`ICarouselMessage`](../interfaces/ICarouselMessage.md)

Properties to set

#### Returns

[`CarouselMessage`](CarouselMessage.md)

## Properties

### cards

> **cards**: [`IInteractiveMessage`](../../../interfaces/IInteractiveMessage.md)[]

Defined in: [WAProto/index.d.ts:16810](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16810)

CarouselMessage cards.

#### Implementation of

[`ICarouselMessage`](../interfaces/ICarouselMessage.md).[`cards`](../interfaces/ICarouselMessage.md#cards)

***

### messageVersion

> **messageVersion**: `number`

Defined in: [WAProto/index.d.ts:16813](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16813)

CarouselMessage messageVersion.

#### Implementation of

[`ICarouselMessage`](../interfaces/ICarouselMessage.md).[`messageVersion`](../interfaces/ICarouselMessage.md#messageversion)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:16883](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16883)

Converts this CarouselMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CarouselMessage`](CarouselMessage.md)

Defined in: [WAProto/index.d.ts:16820](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16820)

Creates a new CarouselMessage instance using the specified properties.

#### Parameters

##### properties?

[`ICarouselMessage`](../interfaces/ICarouselMessage.md)

Properties to set

#### Returns

[`CarouselMessage`](CarouselMessage.md)

CarouselMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CarouselMessage`](CarouselMessage.md)

Defined in: [WAProto/index.d.ts:16846](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16846)

Decodes a CarouselMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CarouselMessage`](CarouselMessage.md)

CarouselMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CarouselMessage`](CarouselMessage.md)

Defined in: [WAProto/index.d.ts:16855](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16855)

Decodes a CarouselMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CarouselMessage`](CarouselMessage.md)

CarouselMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16828](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16828)

Encodes the specified CarouselMessage message. Does not implicitly [verify](CarouselMessage.md#verify) messages.

#### Parameters

##### message

[`ICarouselMessage`](../interfaces/ICarouselMessage.md)

CarouselMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16836](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16836)

Encodes the specified CarouselMessage message, length delimited. Does not implicitly [verify](CarouselMessage.md#verify) messages.

#### Parameters

##### message

[`ICarouselMessage`](../interfaces/ICarouselMessage.md)

CarouselMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CarouselMessage`](CarouselMessage.md)

Defined in: [WAProto/index.d.ts:16869](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16869)

Creates a CarouselMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CarouselMessage`](CarouselMessage.md)

CarouselMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:16890](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16890)

Gets the default type url for CarouselMessage

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

Defined in: [WAProto/index.d.ts:16877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16877)

Creates a plain object from a CarouselMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`CarouselMessage`](CarouselMessage.md)

CarouselMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:16862](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16862)

Verifies a CarouselMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
