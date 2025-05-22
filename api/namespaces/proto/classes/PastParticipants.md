# Class: PastParticipants

Defined in: [WAProto/index.d.ts:26626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26626)

Represents a PastParticipants.

## Implements

- [`IPastParticipants`](../interfaces/IPastParticipants.md)

## Constructors

### new PastParticipants()

> **new PastParticipants**(`properties`?): [`PastParticipants`](PastParticipants.md)

Defined in: [WAProto/index.d.ts:26632](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26632)

Constructs a new PastParticipants.

#### Parameters

##### properties?

[`IPastParticipants`](../interfaces/IPastParticipants.md)

Properties to set

#### Returns

[`PastParticipants`](PastParticipants.md)

## Properties

### groupJid

> **groupJid**: `string`

Defined in: [WAProto/index.d.ts:26635](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26635)

PastParticipants groupJid.

#### Implementation of

[`IPastParticipants`](../interfaces/IPastParticipants.md).[`groupJid`](../interfaces/IPastParticipants.md#groupjid)

***

### pastParticipants

> **pastParticipants**: [`IPastParticipant`](../interfaces/IPastParticipant.md)[]

Defined in: [WAProto/index.d.ts:26638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26638)

PastParticipants pastParticipants.

#### Implementation of

[`IPastParticipants`](../interfaces/IPastParticipants.md).[`pastParticipants`](../interfaces/IPastParticipants.md#pastparticipants)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:26708](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26708)

Converts this PastParticipants to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PastParticipants`](PastParticipants.md)

Defined in: [WAProto/index.d.ts:26645](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26645)

Creates a new PastParticipants instance using the specified properties.

#### Parameters

##### properties?

[`IPastParticipants`](../interfaces/IPastParticipants.md)

Properties to set

#### Returns

[`PastParticipants`](PastParticipants.md)

PastParticipants instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PastParticipants`](PastParticipants.md)

Defined in: [WAProto/index.d.ts:26671](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26671)

Decodes a PastParticipants message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PastParticipants`](PastParticipants.md)

PastParticipants

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PastParticipants`](PastParticipants.md)

Defined in: [WAProto/index.d.ts:26680](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26680)

Decodes a PastParticipants message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PastParticipants`](PastParticipants.md)

PastParticipants

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26653](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26653)

Encodes the specified PastParticipants message. Does not implicitly [verify](PastParticipants.md#verify) messages.

#### Parameters

##### message

[`IPastParticipants`](../interfaces/IPastParticipants.md)

PastParticipants message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:26661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26661)

Encodes the specified PastParticipants message, length delimited. Does not implicitly [verify](PastParticipants.md#verify) messages.

#### Parameters

##### message

[`IPastParticipants`](../interfaces/IPastParticipants.md)

PastParticipants message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PastParticipants`](PastParticipants.md)

Defined in: [WAProto/index.d.ts:26694](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26694)

Creates a PastParticipants message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PastParticipants`](PastParticipants.md)

PastParticipants

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:26715](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26715)

Gets the default type url for PastParticipants

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

Defined in: [WAProto/index.d.ts:26702](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26702)

Creates a plain object from a PastParticipants message. Also converts values to other types if specified.

#### Parameters

##### message

[`PastParticipants`](PastParticipants.md)

PastParticipants

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:26687](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L26687)

Verifies a PastParticipants message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
