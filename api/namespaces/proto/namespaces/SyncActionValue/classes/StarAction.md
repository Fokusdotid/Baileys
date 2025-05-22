# Class: StarAction

Defined in: [WAProto/index.d.ts:36182](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36182)

Represents a StarAction.

## Implements

- [`IStarAction`](../interfaces/IStarAction.md)

## Constructors

### new StarAction()

> **new StarAction**(`properties`?): [`StarAction`](StarAction.md)

Defined in: [WAProto/index.d.ts:36188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36188)

Constructs a new StarAction.

#### Parameters

##### properties?

[`IStarAction`](../interfaces/IStarAction.md)

Properties to set

#### Returns

[`StarAction`](StarAction.md)

## Properties

### starred

> **starred**: `boolean`

Defined in: [WAProto/index.d.ts:36191](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36191)

StarAction starred.

#### Implementation of

[`IStarAction`](../interfaces/IStarAction.md).[`starred`](../interfaces/IStarAction.md#starred)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36261)

Converts this StarAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`StarAction`](StarAction.md)

Defined in: [WAProto/index.d.ts:36198](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36198)

Creates a new StarAction instance using the specified properties.

#### Parameters

##### properties?

[`IStarAction`](../interfaces/IStarAction.md)

Properties to set

#### Returns

[`StarAction`](StarAction.md)

StarAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`StarAction`](StarAction.md)

Defined in: [WAProto/index.d.ts:36224](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36224)

Decodes a StarAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`StarAction`](StarAction.md)

StarAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`StarAction`](StarAction.md)

Defined in: [WAProto/index.d.ts:36233](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36233)

Decodes a StarAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`StarAction`](StarAction.md)

StarAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36206](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36206)

Encodes the specified StarAction message. Does not implicitly [verify](StarAction.md#verify) messages.

#### Parameters

##### message

[`IStarAction`](../interfaces/IStarAction.md)

StarAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36214](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36214)

Encodes the specified StarAction message, length delimited. Does not implicitly [verify](StarAction.md#verify) messages.

#### Parameters

##### message

[`IStarAction`](../interfaces/IStarAction.md)

StarAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`StarAction`](StarAction.md)

Defined in: [WAProto/index.d.ts:36247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36247)

Creates a StarAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`StarAction`](StarAction.md)

StarAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36268](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36268)

Gets the default type url for StarAction

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

Defined in: [WAProto/index.d.ts:36255](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36255)

Creates a plain object from a StarAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`StarAction`](StarAction.md)

StarAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36240](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36240)

Verifies a StarAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
