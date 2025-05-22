# Class: GroupMention

Defined in: [WAProto/index.d.ts:7674](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7674)

Represents a GroupMention.

## Implements

- [`IGroupMention`](../interfaces/IGroupMention.md)

## Constructors

### new GroupMention()

> **new GroupMention**(`properties`?): [`GroupMention`](GroupMention.md)

Defined in: [WAProto/index.d.ts:7680](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7680)

Constructs a new GroupMention.

#### Parameters

##### properties?

[`IGroupMention`](../interfaces/IGroupMention.md)

Properties to set

#### Returns

[`GroupMention`](GroupMention.md)

## Properties

### groupJid

> **groupJid**: `string`

Defined in: [WAProto/index.d.ts:7683](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7683)

GroupMention groupJid.

#### Implementation of

[`IGroupMention`](../interfaces/IGroupMention.md).[`groupJid`](../interfaces/IGroupMention.md#groupjid)

***

### groupSubject

> **groupSubject**: `string`

Defined in: [WAProto/index.d.ts:7686](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7686)

GroupMention groupSubject.

#### Implementation of

[`IGroupMention`](../interfaces/IGroupMention.md).[`groupSubject`](../interfaces/IGroupMention.md#groupsubject)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:7756](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7756)

Converts this GroupMention to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`GroupMention`](GroupMention.md)

Defined in: [WAProto/index.d.ts:7693](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7693)

Creates a new GroupMention instance using the specified properties.

#### Parameters

##### properties?

[`IGroupMention`](../interfaces/IGroupMention.md)

Properties to set

#### Returns

[`GroupMention`](GroupMention.md)

GroupMention instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`GroupMention`](GroupMention.md)

Defined in: [WAProto/index.d.ts:7719](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7719)

Decodes a GroupMention message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`GroupMention`](GroupMention.md)

GroupMention

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`GroupMention`](GroupMention.md)

Defined in: [WAProto/index.d.ts:7728](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7728)

Decodes a GroupMention message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`GroupMention`](GroupMention.md)

GroupMention

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7701](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7701)

Encodes the specified GroupMention message. Does not implicitly [verify](GroupMention.md#verify) messages.

#### Parameters

##### message

[`IGroupMention`](../interfaces/IGroupMention.md)

GroupMention message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:7709](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7709)

Encodes the specified GroupMention message, length delimited. Does not implicitly [verify](GroupMention.md#verify) messages.

#### Parameters

##### message

[`IGroupMention`](../interfaces/IGroupMention.md)

GroupMention message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`GroupMention`](GroupMention.md)

Defined in: [WAProto/index.d.ts:7742](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7742)

Creates a GroupMention message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`GroupMention`](GroupMention.md)

GroupMention

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:7763](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7763)

Gets the default type url for GroupMention

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

Defined in: [WAProto/index.d.ts:7750](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7750)

Creates a plain object from a GroupMention message. Also converts values to other types if specified.

#### Parameters

##### message

[`GroupMention`](GroupMention.md)

GroupMention

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:7735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L7735)

Verifies a GroupMention message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
