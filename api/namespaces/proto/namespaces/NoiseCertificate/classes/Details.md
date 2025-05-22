# Class: Details

Defined in: [WAProto/index.d.ts:26153](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26153)

Represents a Details.

## Implements

- [`IDetails`](../interfaces/IDetails.md)

## Constructors

### new Details()

> **new Details**(`properties`?): [`Details`](Details.md)

Defined in: [WAProto/index.d.ts:26159](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26159)

Constructs a new Details.

#### Parameters

##### properties?

[`IDetails`](../interfaces/IDetails.md)

Properties to set

#### Returns

[`Details`](Details.md)

## Properties

### expires

> **expires**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:26168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26168)

Details expires.

#### Implementation of

[`IDetails`](../interfaces/IDetails.md).[`expires`](../interfaces/IDetails.md#expires)

***

### issuer

> **issuer**: `string`

Defined in: [WAProto/index.d.ts:26165](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26165)

Details issuer.

#### Implementation of

[`IDetails`](../interfaces/IDetails.md).[`issuer`](../interfaces/IDetails.md#issuer)

***

### key

> **key**: `Uint8Array`

Defined in: [WAProto/index.d.ts:26174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26174)

Details key.

#### Implementation of

[`IDetails`](../interfaces/IDetails.md).[`key`](../interfaces/IDetails.md#key)

***

### serial

> **serial**: `number`

Defined in: [WAProto/index.d.ts:26162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26162)

Details serial.

#### Implementation of

[`IDetails`](../interfaces/IDetails.md).[`serial`](../interfaces/IDetails.md#serial)

***

### subject

> **subject**: `string`

Defined in: [WAProto/index.d.ts:26171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26171)

Details subject.

#### Implementation of

[`IDetails`](../interfaces/IDetails.md).[`subject`](../interfaces/IDetails.md#subject)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:26244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26244)

Converts this Details to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Details`](Details.md)

Defined in: [WAProto/index.d.ts:26181](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26181)

Creates a new Details instance using the specified properties.

#### Parameters

##### properties?

[`IDetails`](../interfaces/IDetails.md)

Properties to set

#### Returns

[`Details`](Details.md)

Details instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Details`](Details.md)

Defined in: [WAProto/index.d.ts:26207](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26207)

Decodes a Details message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Details`](Details.md)

Details

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Details`](Details.md)

Defined in: [WAProto/index.d.ts:26216](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26216)

Decodes a Details message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Details`](Details.md)

Details

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26189](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26189)

Encodes the specified Details message. Does not implicitly [verify](Details.md#verify) messages.

#### Parameters

##### message

[`IDetails`](../interfaces/IDetails.md)

Details message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26197)

Encodes the specified Details message, length delimited. Does not implicitly [verify](Details.md#verify) messages.

#### Parameters

##### message

[`IDetails`](../interfaces/IDetails.md)

Details message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Details`](Details.md)

Defined in: [WAProto/index.d.ts:26230](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26230)

Creates a Details message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Details`](Details.md)

Details

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:26251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26251)

Gets the default type url for Details

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

Defined in: [WAProto/index.d.ts:26238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26238)

Creates a plain object from a Details message. Also converts values to other types if specified.

#### Parameters

##### message

[`Details`](Details.md)

Details

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:26223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26223)

Verifies a Details message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
