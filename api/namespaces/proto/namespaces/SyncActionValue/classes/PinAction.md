# Class: PinAction

Defined in: [WAProto/index.d.ts:35091](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35091)

Represents a PinAction.

## Implements

- [`IPinAction`](../interfaces/IPinAction.md)

## Constructors

### new PinAction()

> **new PinAction**(`properties`?): [`PinAction`](PinAction.md)

Defined in: [WAProto/index.d.ts:35097](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35097)

Constructs a new PinAction.

#### Parameters

##### properties?

[`IPinAction`](../interfaces/IPinAction.md)

Properties to set

#### Returns

[`PinAction`](PinAction.md)

## Properties

### pinned

> **pinned**: `boolean`

Defined in: [WAProto/index.d.ts:35100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35100)

PinAction pinned.

#### Implementation of

[`IPinAction`](../interfaces/IPinAction.md).[`pinned`](../interfaces/IPinAction.md#pinned)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35170](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35170)

Converts this PinAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PinAction`](PinAction.md)

Defined in: [WAProto/index.d.ts:35107](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35107)

Creates a new PinAction instance using the specified properties.

#### Parameters

##### properties?

[`IPinAction`](../interfaces/IPinAction.md)

Properties to set

#### Returns

[`PinAction`](PinAction.md)

PinAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PinAction`](PinAction.md)

Defined in: [WAProto/index.d.ts:35133](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35133)

Decodes a PinAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PinAction`](PinAction.md)

PinAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PinAction`](PinAction.md)

Defined in: [WAProto/index.d.ts:35142](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35142)

Decodes a PinAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PinAction`](PinAction.md)

PinAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35115](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35115)

Encodes the specified PinAction message. Does not implicitly [verify](PinAction.md#verify) messages.

#### Parameters

##### message

[`IPinAction`](../interfaces/IPinAction.md)

PinAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35123)

Encodes the specified PinAction message, length delimited. Does not implicitly [verify](PinAction.md#verify) messages.

#### Parameters

##### message

[`IPinAction`](../interfaces/IPinAction.md)

PinAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PinAction`](PinAction.md)

Defined in: [WAProto/index.d.ts:35156](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35156)

Creates a PinAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PinAction`](PinAction.md)

PinAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35177)

Gets the default type url for PinAction

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

Defined in: [WAProto/index.d.ts:35164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35164)

Creates a plain object from a PinAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`PinAction`](PinAction.md)

PinAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35149](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35149)

Verifies a PinAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
