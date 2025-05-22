# Class: PollAdditionalMetadata

Defined in: [WAProto/index.d.ts:27866](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27866)

Represents a PollAdditionalMetadata.

## Implements

- [`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md)

## Constructors

### new PollAdditionalMetadata()

> **new PollAdditionalMetadata**(`properties`?): [`PollAdditionalMetadata`](PollAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:27872](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27872)

Constructs a new PollAdditionalMetadata.

#### Parameters

##### properties?

[`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md)

Properties to set

#### Returns

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

## Properties

### pollInvalidated

> **pollInvalidated**: `boolean`

Defined in: [WAProto/index.d.ts:27875](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27875)

PollAdditionalMetadata pollInvalidated.

#### Implementation of

[`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md).[`pollInvalidated`](../interfaces/IPollAdditionalMetadata.md#pollinvalidated)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27945](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27945)

Converts this PollAdditionalMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollAdditionalMetadata`](PollAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:27882](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27882)

Creates a new PollAdditionalMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md)

Properties to set

#### Returns

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

PollAdditionalMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollAdditionalMetadata`](PollAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:27908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27908)

Decodes a PollAdditionalMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

PollAdditionalMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollAdditionalMetadata`](PollAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:27917](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27917)

Decodes a PollAdditionalMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

PollAdditionalMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27890](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27890)

Encodes the specified PollAdditionalMetadata message. Does not implicitly [verify](PollAdditionalMetadata.md#verify) messages.

#### Parameters

##### message

[`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md)

PollAdditionalMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27898](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27898)

Encodes the specified PollAdditionalMetadata message, length delimited. Does not implicitly [verify](PollAdditionalMetadata.md#verify) messages.

#### Parameters

##### message

[`IPollAdditionalMetadata`](../interfaces/IPollAdditionalMetadata.md)

PollAdditionalMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollAdditionalMetadata`](PollAdditionalMetadata.md)

Defined in: [WAProto/index.d.ts:27931](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27931)

Creates a PollAdditionalMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

PollAdditionalMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27952](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27952)

Gets the default type url for PollAdditionalMetadata

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

Defined in: [WAProto/index.d.ts:27939](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27939)

Creates a plain object from a PollAdditionalMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollAdditionalMetadata`](PollAdditionalMetadata.md)

PollAdditionalMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27924](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27924)

Verifies a PollAdditionalMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
