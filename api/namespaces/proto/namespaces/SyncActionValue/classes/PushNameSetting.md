# Class: PushNameSetting

Defined in: [WAProto/index.d.ts:35673](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35673)

Represents a PushNameSetting.

## Implements

- [`IPushNameSetting`](../interfaces/IPushNameSetting.md)

## Constructors

### new PushNameSetting()

> **new PushNameSetting**(`properties`?): [`PushNameSetting`](PushNameSetting.md)

Defined in: [WAProto/index.d.ts:35679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35679)

Constructs a new PushNameSetting.

#### Parameters

##### properties?

[`IPushNameSetting`](../interfaces/IPushNameSetting.md)

Properties to set

#### Returns

[`PushNameSetting`](PushNameSetting.md)

## Properties

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:35682](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35682)

PushNameSetting name.

#### Implementation of

[`IPushNameSetting`](../interfaces/IPushNameSetting.md).[`name`](../interfaces/IPushNameSetting.md#name)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35752](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35752)

Converts this PushNameSetting to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PushNameSetting`](PushNameSetting.md)

Defined in: [WAProto/index.d.ts:35689](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35689)

Creates a new PushNameSetting instance using the specified properties.

#### Parameters

##### properties?

[`IPushNameSetting`](../interfaces/IPushNameSetting.md)

Properties to set

#### Returns

[`PushNameSetting`](PushNameSetting.md)

PushNameSetting instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PushNameSetting`](PushNameSetting.md)

Defined in: [WAProto/index.d.ts:35715](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35715)

Decodes a PushNameSetting message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PushNameSetting`](PushNameSetting.md)

PushNameSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PushNameSetting`](PushNameSetting.md)

Defined in: [WAProto/index.d.ts:35724](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35724)

Decodes a PushNameSetting message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PushNameSetting`](PushNameSetting.md)

PushNameSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35697](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35697)

Encodes the specified PushNameSetting message. Does not implicitly [verify](PushNameSetting.md#verify) messages.

#### Parameters

##### message

[`IPushNameSetting`](../interfaces/IPushNameSetting.md)

PushNameSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35705](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35705)

Encodes the specified PushNameSetting message, length delimited. Does not implicitly [verify](PushNameSetting.md#verify) messages.

#### Parameters

##### message

[`IPushNameSetting`](../interfaces/IPushNameSetting.md)

PushNameSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PushNameSetting`](PushNameSetting.md)

Defined in: [WAProto/index.d.ts:35738](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35738)

Creates a PushNameSetting message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PushNameSetting`](PushNameSetting.md)

PushNameSetting

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35759](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35759)

Gets the default type url for PushNameSetting

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

Defined in: [WAProto/index.d.ts:35746](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35746)

Creates a plain object from a PushNameSetting message. Also converts values to other types if specified.

#### Parameters

##### message

[`PushNameSetting`](PushNameSetting.md)

PushNameSetting

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35731](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35731)

Verifies a PushNameSetting message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
