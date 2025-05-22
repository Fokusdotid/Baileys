# Class: EventAdditionalMetadata

Defined in: [WAProto/index.d.ts:7024](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7024)

Represents an EventAdditionalMetadata.

## Implements

- [`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md)

## Constructors

### new EventAdditionalMetadata()

> **new EventAdditionalMetadata**(`properties`?): [`EventAdditionalMetadata`](EventAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:7030](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7030)

Constructs a new EventAdditionalMetadata.

#### Parameters

##### properties?

[`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md)

Properties to set

#### Returns

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

## Properties

### isStale

> **isStale**: `boolean`

Defined in: [WAProto/index.d.ts:7033](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7033)

EventAdditionalMetadata isStale.

#### Implementation of

[`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md).[`isStale`](../interfaces/IEventAdditionalMetadata.md#isstale)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7103](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7103)

Converts this EventAdditionalMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`EventAdditionalMetadata`](EventAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:7040](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7040)

Creates a new EventAdditionalMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md)

Properties to set

#### Returns

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

EventAdditionalMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`EventAdditionalMetadata`](EventAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:7066](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7066)

Decodes an EventAdditionalMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

EventAdditionalMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`EventAdditionalMetadata`](EventAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:7075](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7075)

Decodes an EventAdditionalMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

EventAdditionalMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7048](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7048)

Encodes the specified EventAdditionalMetadata message. Does not implicitly [verify](EventAdditionalMetadata.md#verify) messages.

#### Parameters

##### message

[`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md)

EventAdditionalMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7056](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7056)

Encodes the specified EventAdditionalMetadata message, length delimited. Does not implicitly [verify](EventAdditionalMetadata.md#verify) messages.

#### Parameters

##### message

[`IEventAdditionalMetadata`](../interfaces/IEventAdditionalMetadata.md)

EventAdditionalMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`EventAdditionalMetadata`](EventAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:7089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7089)

Creates an EventAdditionalMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

EventAdditionalMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7110](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7110)

Gets the default type url for EventAdditionalMetadata

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

Defined in: [WAProto/index.d.ts:7097](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7097)

Creates a plain object from an EventAdditionalMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`EventAdditionalMetadata`](EventAdditionalMetadata.md)

EventAdditionalMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7082](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7082)

Verifies an EventAdditionalMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
