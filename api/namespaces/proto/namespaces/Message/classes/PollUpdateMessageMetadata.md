# Class: PollUpdateMessageMetadata

Defined in: [WAProto/index.d.ts:21893](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21893)

Represents a PollUpdateMessageMetadata.

## Implements

- [`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

## Constructors

### new PollUpdateMessageMetadata()

> **new PollUpdateMessageMetadata**(`properties`?): [`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21899](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21899)

Constructs a new PollUpdateMessageMetadata.

#### Parameters

##### properties?

[`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

Properties to set

#### Returns

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21969](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21969)

Converts this PollUpdateMessageMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21906](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21906)

Creates a new PollUpdateMessageMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

Properties to set

#### Returns

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

PollUpdateMessageMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21932](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21932)

Decodes a PollUpdateMessageMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

PollUpdateMessageMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21941)

Decodes a PollUpdateMessageMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

PollUpdateMessageMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21914](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21914)

Encodes the specified PollUpdateMessageMetadata message. Does not implicitly [verify](PollUpdateMessageMetadata.md#verify) messages.

#### Parameters

##### message

[`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

PollUpdateMessageMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21922](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21922)

Encodes the specified PollUpdateMessageMetadata message, length delimited. Does not implicitly [verify](PollUpdateMessageMetadata.md#verify) messages.

#### Parameters

##### message

[`IPollUpdateMessageMetadata`](../interfaces/IPollUpdateMessageMetadata.md)

PollUpdateMessageMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

Defined in: [WAProto/index.d.ts:21955](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21955)

Creates a PollUpdateMessageMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

PollUpdateMessageMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21976](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21976)

Gets the default type url for PollUpdateMessageMetadata

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

Defined in: [WAProto/index.d.ts:21963](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21963)

Creates a plain object from a PollUpdateMessageMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`PollUpdateMessageMetadata`](PollUpdateMessageMetadata.md)

PollUpdateMessageMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21948)

Verifies a PollUpdateMessageMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
