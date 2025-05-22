# Class: SyncActionData

Defined in: [WAProto/index.d.ts:31594](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31594)

Represents a SyncActionData.

## Implements

- [`ISyncActionData`](../interfaces/ISyncActionData.md)

## Constructors

### new SyncActionData()

> **new SyncActionData**(`properties`?): [`SyncActionData`](SyncActionData.md)

Defined in: [WAProto/index.d.ts:31600](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31600)

Constructs a new SyncActionData.

#### Parameters

##### properties?

[`ISyncActionData`](../interfaces/ISyncActionData.md)

Properties to set

#### Returns

[`SyncActionData`](SyncActionData.md)

## Properties

### index

> **index**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31603)

SyncActionData index.

#### Implementation of

[`ISyncActionData`](../interfaces/ISyncActionData.md).[`index`](../interfaces/ISyncActionData.md#index)

***

### padding

> **padding**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31609](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31609)

SyncActionData padding.

#### Implementation of

[`ISyncActionData`](../interfaces/ISyncActionData.md).[`padding`](../interfaces/ISyncActionData.md#padding)

***

### value?

> `optional` **value**: `null` \| [`ISyncActionValue`](../interfaces/ISyncActionValue.md)

Defined in: [WAProto/index.d.ts:31606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31606)

SyncActionData value.

#### Implementation of

[`ISyncActionData`](../interfaces/ISyncActionData.md).[`value`](../interfaces/ISyncActionData.md#value)

***

### version

> **version**: `number`

Defined in: [WAProto/index.d.ts:31612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31612)

SyncActionData version.

#### Implementation of

[`ISyncActionData`](../interfaces/ISyncActionData.md).[`version`](../interfaces/ISyncActionData.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:31682](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31682)

Converts this SyncActionData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncActionData`](SyncActionData.md)

Defined in: [WAProto/index.d.ts:31619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31619)

Creates a new SyncActionData instance using the specified properties.

#### Parameters

##### properties?

[`ISyncActionData`](../interfaces/ISyncActionData.md)

Properties to set

#### Returns

[`SyncActionData`](SyncActionData.md)

SyncActionData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncActionData`](SyncActionData.md)

Defined in: [WAProto/index.d.ts:31645](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31645)

Decodes a SyncActionData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncActionData`](SyncActionData.md)

SyncActionData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncActionData`](SyncActionData.md)

Defined in: [WAProto/index.d.ts:31654](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31654)

Decodes a SyncActionData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncActionData`](SyncActionData.md)

SyncActionData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31627](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31627)

Encodes the specified SyncActionData message. Does not implicitly [verify](SyncActionData.md#verify) messages.

#### Parameters

##### message

[`ISyncActionData`](../interfaces/ISyncActionData.md)

SyncActionData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31635](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31635)

Encodes the specified SyncActionData message, length delimited. Does not implicitly [verify](SyncActionData.md#verify) messages.

#### Parameters

##### message

[`ISyncActionData`](../interfaces/ISyncActionData.md)

SyncActionData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncActionData`](SyncActionData.md)

Defined in: [WAProto/index.d.ts:31668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31668)

Creates a SyncActionData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncActionData`](SyncActionData.md)

SyncActionData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:31689](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31689)

Gets the default type url for SyncActionData

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

Defined in: [WAProto/index.d.ts:31676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31676)

Creates a plain object from a SyncActionData message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncActionData`](SyncActionData.md)

SyncActionData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:31661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31661)

Verifies a SyncActionData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
