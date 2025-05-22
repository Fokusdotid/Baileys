# Class: PinInChat

Defined in: [WAProto/index.d.ts:27632](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27632)

Represents a PinInChat.

## Implements

- [`IPinInChat`](../interfaces/IPinInChat.md)

## Constructors

### new PinInChat()

> **new PinInChat**(`properties`?): [`PinInChat`](PinInChat.md)

Defined in: [WAProto/index.d.ts:27638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27638)

Constructs a new PinInChat.

#### Parameters

##### properties?

[`IPinInChat`](../interfaces/IPinInChat.md)

Properties to set

#### Returns

[`PinInChat`](PinInChat.md)

## Properties

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:27644](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27644)

PinInChat key.

#### Implementation of

[`IPinInChat`](../interfaces/IPinInChat.md).[`key`](../interfaces/IPinInChat.md#key)

***

### messageAddOnContextInfo?

> `optional` **messageAddOnContextInfo**: `null` \| [`IMessageAddOnContextInfo`](../interfaces/IMessageAddOnContextInfo.md)

Defined in: [WAProto/index.d.ts:27653](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27653)

PinInChat messageAddOnContextInfo.

#### Implementation of

[`IPinInChat`](../interfaces/IPinInChat.md).[`messageAddOnContextInfo`](../interfaces/IPinInChat.md#messageaddoncontextinfo)

***

### senderTimestampMs

> **senderTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27647)

PinInChat senderTimestampMs.

#### Implementation of

[`IPinInChat`](../interfaces/IPinInChat.md).[`senderTimestampMs`](../interfaces/IPinInChat.md#sendertimestampms)

***

### serverTimestampMs

> **serverTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:27650](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27650)

PinInChat serverTimestampMs.

#### Implementation of

[`IPinInChat`](../interfaces/IPinInChat.md).[`serverTimestampMs`](../interfaces/IPinInChat.md#servertimestampms)

***

### type

> **type**: [`Type`](../namespaces/PinInChat/enumerations/Type.md)

Defined in: [WAProto/index.d.ts:27641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27641)

PinInChat type.

#### Implementation of

[`IPinInChat`](../interfaces/IPinInChat.md).[`type`](../interfaces/IPinInChat.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27723](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27723)

Converts this PinInChat to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PinInChat`](PinInChat.md)

Defined in: [WAProto/index.d.ts:27660](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27660)

Creates a new PinInChat instance using the specified properties.

#### Parameters

##### properties?

[`IPinInChat`](../interfaces/IPinInChat.md)

Properties to set

#### Returns

[`PinInChat`](PinInChat.md)

PinInChat instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PinInChat`](PinInChat.md)

Defined in: [WAProto/index.d.ts:27686](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27686)

Decodes a PinInChat message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PinInChat`](PinInChat.md)

PinInChat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PinInChat`](PinInChat.md)

Defined in: [WAProto/index.d.ts:27695](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27695)

Decodes a PinInChat message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PinInChat`](PinInChat.md)

PinInChat

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27668)

Encodes the specified PinInChat message. Does not implicitly [verify](PinInChat.md#verify) messages.

#### Parameters

##### message

[`IPinInChat`](../interfaces/IPinInChat.md)

PinInChat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27676)

Encodes the specified PinInChat message, length delimited. Does not implicitly [verify](PinInChat.md#verify) messages.

#### Parameters

##### message

[`IPinInChat`](../interfaces/IPinInChat.md)

PinInChat message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PinInChat`](PinInChat.md)

Defined in: [WAProto/index.d.ts:27709](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27709)

Creates a PinInChat message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PinInChat`](PinInChat.md)

PinInChat

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27730](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27730)

Gets the default type url for PinInChat

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

Defined in: [WAProto/index.d.ts:27717](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27717)

Creates a plain object from a PinInChat message. Also converts values to other types if specified.

#### Parameters

##### message

[`PinInChat`](PinInChat.md)

PinInChat

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27702](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27702)

Verifies a PinInChat message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
