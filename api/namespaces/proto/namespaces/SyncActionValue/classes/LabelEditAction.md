# Class: LabelEditAction

Defined in: [WAProto/index.d.ts:33917](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33917)

Represents a LabelEditAction.

## Implements

- [`ILabelEditAction`](../interfaces/ILabelEditAction.md)

## Constructors

### new LabelEditAction()

> **new LabelEditAction**(`properties`?): [`LabelEditAction`](LabelEditAction.md)

Defined in: [WAProto/index.d.ts:33923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33923)

Constructs a new LabelEditAction.

#### Parameters

##### properties?

[`ILabelEditAction`](../interfaces/ILabelEditAction.md)

Properties to set

#### Returns

[`LabelEditAction`](LabelEditAction.md)

## Properties

### color

> **color**: `number`

Defined in: [WAProto/index.d.ts:33929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33929)

LabelEditAction color.

#### Implementation of

[`ILabelEditAction`](../interfaces/ILabelEditAction.md).[`color`](../interfaces/ILabelEditAction.md#color)

***

### deleted

> **deleted**: `boolean`

Defined in: [WAProto/index.d.ts:33935](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33935)

LabelEditAction deleted.

#### Implementation of

[`ILabelEditAction`](../interfaces/ILabelEditAction.md).[`deleted`](../interfaces/ILabelEditAction.md#deleted)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:33926](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33926)

LabelEditAction name.

#### Implementation of

[`ILabelEditAction`](../interfaces/ILabelEditAction.md).[`name`](../interfaces/ILabelEditAction.md#name)

***

### orderIndex

> **orderIndex**: `number`

Defined in: [WAProto/index.d.ts:33938](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33938)

LabelEditAction orderIndex.

#### Implementation of

[`ILabelEditAction`](../interfaces/ILabelEditAction.md).[`orderIndex`](../interfaces/ILabelEditAction.md#orderindex)

***

### predefinedId

> **predefinedId**: `number`

Defined in: [WAProto/index.d.ts:33932](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33932)

LabelEditAction predefinedId.

#### Implementation of

[`ILabelEditAction`](../interfaces/ILabelEditAction.md).[`predefinedId`](../interfaces/ILabelEditAction.md#predefinedid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34008](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34008)

Converts this LabelEditAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`LabelEditAction`](LabelEditAction.md)

Defined in: [WAProto/index.d.ts:33945](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33945)

Creates a new LabelEditAction instance using the specified properties.

#### Parameters

##### properties?

[`ILabelEditAction`](../interfaces/ILabelEditAction.md)

Properties to set

#### Returns

[`LabelEditAction`](LabelEditAction.md)

LabelEditAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`LabelEditAction`](LabelEditAction.md)

Defined in: [WAProto/index.d.ts:33971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33971)

Decodes a LabelEditAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`LabelEditAction`](LabelEditAction.md)

LabelEditAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`LabelEditAction`](LabelEditAction.md)

Defined in: [WAProto/index.d.ts:33980](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33980)

Decodes a LabelEditAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`LabelEditAction`](LabelEditAction.md)

LabelEditAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33953](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33953)

Encodes the specified LabelEditAction message. Does not implicitly [verify](LabelEditAction.md#verify) messages.

#### Parameters

##### message

[`ILabelEditAction`](../interfaces/ILabelEditAction.md)

LabelEditAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33961](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33961)

Encodes the specified LabelEditAction message, length delimited. Does not implicitly [verify](LabelEditAction.md#verify) messages.

#### Parameters

##### message

[`ILabelEditAction`](../interfaces/ILabelEditAction.md)

LabelEditAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`LabelEditAction`](LabelEditAction.md)

Defined in: [WAProto/index.d.ts:33994](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33994)

Creates a LabelEditAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`LabelEditAction`](LabelEditAction.md)

LabelEditAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34015](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34015)

Gets the default type url for LabelEditAction

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

Defined in: [WAProto/index.d.ts:34002](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34002)

Creates a plain object from a LabelEditAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`LabelEditAction`](LabelEditAction.md)

LabelEditAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33987](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33987)

Verifies a LabelEditAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
