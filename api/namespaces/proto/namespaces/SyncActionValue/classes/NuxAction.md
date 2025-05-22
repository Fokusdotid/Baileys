# Class: NuxAction

Defined in: [WAProto/index.d.ts:34897](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34897)

Represents a NuxAction.

## Implements

- [`INuxAction`](../interfaces/INuxAction.md)

## Constructors

### new NuxAction()

> **new NuxAction**(`properties`?): [`NuxAction`](NuxAction.md)

Defined in: [WAProto/index.d.ts:34903](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34903)

Constructs a new NuxAction.

#### Parameters

##### properties?

[`INuxAction`](../interfaces/INuxAction.md)

Properties to set

#### Returns

[`NuxAction`](NuxAction.md)

## Properties

### acknowledged

> **acknowledged**: `boolean`

Defined in: [WAProto/index.d.ts:34906](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34906)

NuxAction acknowledged.

#### Implementation of

[`INuxAction`](../interfaces/INuxAction.md).[`acknowledged`](../interfaces/INuxAction.md#acknowledged)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34976](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34976)

Converts this NuxAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NuxAction`](NuxAction.md)

Defined in: [WAProto/index.d.ts:34913](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34913)

Creates a new NuxAction instance using the specified properties.

#### Parameters

##### properties?

[`INuxAction`](../interfaces/INuxAction.md)

Properties to set

#### Returns

[`NuxAction`](NuxAction.md)

NuxAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NuxAction`](NuxAction.md)

Defined in: [WAProto/index.d.ts:34939](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34939)

Decodes a NuxAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NuxAction`](NuxAction.md)

NuxAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NuxAction`](NuxAction.md)

Defined in: [WAProto/index.d.ts:34948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34948)

Decodes a NuxAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NuxAction`](NuxAction.md)

NuxAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34921](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34921)

Encodes the specified NuxAction message. Does not implicitly [verify](NuxAction.md#verify) messages.

#### Parameters

##### message

[`INuxAction`](../interfaces/INuxAction.md)

NuxAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34929)

Encodes the specified NuxAction message, length delimited. Does not implicitly [verify](NuxAction.md#verify) messages.

#### Parameters

##### message

[`INuxAction`](../interfaces/INuxAction.md)

NuxAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NuxAction`](NuxAction.md)

Defined in: [WAProto/index.d.ts:34962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34962)

Creates a NuxAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NuxAction`](NuxAction.md)

NuxAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34983](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34983)

Gets the default type url for NuxAction

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

Defined in: [WAProto/index.d.ts:34970](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34970)

Creates a plain object from a NuxAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`NuxAction`](NuxAction.md)

NuxAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34955](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34955)

Verifies a NuxAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
