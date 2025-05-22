# Class: PnForLidChatAction

Defined in: [WAProto/index.d.ts:35188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35188)

Represents a PnForLidChatAction.

## Implements

- [`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md)

## Constructors

### new PnForLidChatAction()

> **new PnForLidChatAction**(`properties`?): [`PnForLidChatAction`](PnForLidChatAction.md)

Defined in: [WAProto/index.d.ts:35194](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35194)

Constructs a new PnForLidChatAction.

#### Parameters

##### properties?

[`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md)

Properties to set

#### Returns

[`PnForLidChatAction`](PnForLidChatAction.md)

## Properties

### pnJid

> **pnJid**: `string`

Defined in: [WAProto/index.d.ts:35197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35197)

PnForLidChatAction pnJid.

#### Implementation of

[`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md).[`pnJid`](../interfaces/IPnForLidChatAction.md#pnjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35267)

Converts this PnForLidChatAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PnForLidChatAction`](PnForLidChatAction.md)

Defined in: [WAProto/index.d.ts:35204](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35204)

Creates a new PnForLidChatAction instance using the specified properties.

#### Parameters

##### properties?

[`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md)

Properties to set

#### Returns

[`PnForLidChatAction`](PnForLidChatAction.md)

PnForLidChatAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PnForLidChatAction`](PnForLidChatAction.md)

Defined in: [WAProto/index.d.ts:35230](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35230)

Decodes a PnForLidChatAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PnForLidChatAction`](PnForLidChatAction.md)

PnForLidChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PnForLidChatAction`](PnForLidChatAction.md)

Defined in: [WAProto/index.d.ts:35239](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35239)

Decodes a PnForLidChatAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PnForLidChatAction`](PnForLidChatAction.md)

PnForLidChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35212)

Encodes the specified PnForLidChatAction message. Does not implicitly [verify](PnForLidChatAction.md#verify) messages.

#### Parameters

##### message

[`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md)

PnForLidChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35220)

Encodes the specified PnForLidChatAction message, length delimited. Does not implicitly [verify](PnForLidChatAction.md#verify) messages.

#### Parameters

##### message

[`IPnForLidChatAction`](../interfaces/IPnForLidChatAction.md)

PnForLidChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PnForLidChatAction`](PnForLidChatAction.md)

Defined in: [WAProto/index.d.ts:35253](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35253)

Creates a PnForLidChatAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PnForLidChatAction`](PnForLidChatAction.md)

PnForLidChatAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35274](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35274)

Gets the default type url for PnForLidChatAction

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

Defined in: [WAProto/index.d.ts:35261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35261)

Creates a plain object from a PnForLidChatAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`PnForLidChatAction`](PnForLidChatAction.md)

PnForLidChatAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35246](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35246)

Verifies a PnForLidChatAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
