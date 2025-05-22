# Class: PinInChatMessage

Defined in: [WAProto/index.d.ts:21239](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21239)

Represents a PinInChatMessage.

## Implements

- [`IPinInChatMessage`](../interfaces/IPinInChatMessage.md)

## Constructors

### new PinInChatMessage()

> **new PinInChatMessage**(`properties`?): [`PinInChatMessage`](PinInChatMessage.md)

Defined in: [WAProto/index.d.ts:21245](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21245)

Constructs a new PinInChatMessage.

#### Parameters

##### properties?

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md)

Properties to set

#### Returns

[`PinInChatMessage`](PinInChatMessage.md)

## Properties

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:21248](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21248)

PinInChatMessage key.

#### Implementation of

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md).[`key`](../interfaces/IPinInChatMessage.md#key)

***

### senderTimestampMs

> **senderTimestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:21254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21254)

PinInChatMessage senderTimestampMs.

#### Implementation of

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md).[`senderTimestampMs`](../interfaces/IPinInChatMessage.md#sendertimestampms)

***

### type

> **type**: [`Type`](../namespaces/PinInChatMessage/enumerations/Type.md)

Defined in: [WAProto/index.d.ts:21251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21251)

PinInChatMessage type.

#### Implementation of

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md).[`type`](../interfaces/IPinInChatMessage.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:21324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21324)

Converts this PinInChatMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PinInChatMessage`](PinInChatMessage.md)

Defined in: [WAProto/index.d.ts:21261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21261)

Creates a new PinInChatMessage instance using the specified properties.

#### Parameters

##### properties?

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md)

Properties to set

#### Returns

[`PinInChatMessage`](PinInChatMessage.md)

PinInChatMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PinInChatMessage`](PinInChatMessage.md)

Defined in: [WAProto/index.d.ts:21287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21287)

Decodes a PinInChatMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PinInChatMessage`](PinInChatMessage.md)

PinInChatMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PinInChatMessage`](PinInChatMessage.md)

Defined in: [WAProto/index.d.ts:21296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21296)

Decodes a PinInChatMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PinInChatMessage`](PinInChatMessage.md)

PinInChatMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21269)

Encodes the specified PinInChatMessage message. Does not implicitly [verify](PinInChatMessage.md#verify) messages.

#### Parameters

##### message

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md)

PinInChatMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:21277](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21277)

Encodes the specified PinInChatMessage message, length delimited. Does not implicitly [verify](PinInChatMessage.md#verify) messages.

#### Parameters

##### message

[`IPinInChatMessage`](../interfaces/IPinInChatMessage.md)

PinInChatMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PinInChatMessage`](PinInChatMessage.md)

Defined in: [WAProto/index.d.ts:21310](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21310)

Creates a PinInChatMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PinInChatMessage`](PinInChatMessage.md)

PinInChatMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:21331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21331)

Gets the default type url for PinInChatMessage

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

Defined in: [WAProto/index.d.ts:21318](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21318)

Creates a plain object from a PinInChatMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`PinInChatMessage`](PinInChatMessage.md)

PinInChatMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:21303](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L21303)

Verifies a PinInChatMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
