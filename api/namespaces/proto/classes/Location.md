# Class: Location

Defined in: [WAProto/index.d.ts:9758](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9758)

Represents a Location.

## Implements

- [`ILocation`](../interfaces/ILocation.md)

## Constructors

### new Location()

> **new Location**(`properties`?): [`Location`](Location.md)

Defined in: [WAProto/index.d.ts:9764](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9764)

Constructs a new Location.

#### Parameters

##### properties?

[`ILocation`](../interfaces/ILocation.md)

Properties to set

#### Returns

[`Location`](Location.md)

## Properties

### degreesLatitude

> **degreesLatitude**: `number`

Defined in: [WAProto/index.d.ts:9767](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9767)

Location degreesLatitude.

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`degreesLatitude`](../interfaces/ILocation.md#degreeslatitude)

***

### degreesLongitude

> **degreesLongitude**: `number`

Defined in: [WAProto/index.d.ts:9770](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9770)

Location degreesLongitude.

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`degreesLongitude`](../interfaces/ILocation.md#degreeslongitude)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:9773](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9773)

Location name.

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`name`](../interfaces/ILocation.md#name)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9843](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9843)

Converts this Location to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Location`](Location.md)

Defined in: [WAProto/index.d.ts:9780](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9780)

Creates a new Location instance using the specified properties.

#### Parameters

##### properties?

[`ILocation`](../interfaces/ILocation.md)

Properties to set

#### Returns

[`Location`](Location.md)

Location instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Location`](Location.md)

Defined in: [WAProto/index.d.ts:9806](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9806)

Decodes a Location message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Location`](Location.md)

Location

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Location`](Location.md)

Defined in: [WAProto/index.d.ts:9815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9815)

Decodes a Location message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Location`](Location.md)

Location

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9788)

Encodes the specified Location message. Does not implicitly [verify](Location.md#verify) messages.

#### Parameters

##### message

[`ILocation`](../interfaces/ILocation.md)

Location message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9796](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9796)

Encodes the specified Location message, length delimited. Does not implicitly [verify](Location.md#verify) messages.

#### Parameters

##### message

[`ILocation`](../interfaces/ILocation.md)

Location message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Location`](Location.md)

Defined in: [WAProto/index.d.ts:9829](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9829)

Creates a Location message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Location`](Location.md)

Location

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9850)

Gets the default type url for Location

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

Defined in: [WAProto/index.d.ts:9837](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9837)

Creates a plain object from a Location message. Also converts values to other types if specified.

#### Parameters

##### message

[`Location`](Location.md)

Location

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9822](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9822)

Verifies a Location message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
