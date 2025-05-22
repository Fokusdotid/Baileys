# Class: AndroidUnsupportedActions

Defined in: [WAProto/index.d.ts:32196](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32196)

Represents an AndroidUnsupportedActions.

## Implements

- [`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md)

## Constructors

### new AndroidUnsupportedActions()

> **new AndroidUnsupportedActions**(`properties`?): [`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

Defined in: [WAProto/index.d.ts:32202](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32202)

Constructs a new AndroidUnsupportedActions.

#### Parameters

##### properties?

[`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md)

Properties to set

#### Returns

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

## Properties

### allowed

> **allowed**: `boolean`

Defined in: [WAProto/index.d.ts:32205](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32205)

AndroidUnsupportedActions allowed.

#### Implementation of

[`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md).[`allowed`](../interfaces/IAndroidUnsupportedActions.md#allowed)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32275)

Converts this AndroidUnsupportedActions to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

Defined in: [WAProto/index.d.ts:32212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32212)

Creates a new AndroidUnsupportedActions instance using the specified properties.

#### Parameters

##### properties?

[`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md)

Properties to set

#### Returns

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

AndroidUnsupportedActions instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

Defined in: [WAProto/index.d.ts:32238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32238)

Decodes an AndroidUnsupportedActions message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

AndroidUnsupportedActions

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

Defined in: [WAProto/index.d.ts:32247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32247)

Decodes an AndroidUnsupportedActions message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

AndroidUnsupportedActions

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32220)

Encodes the specified AndroidUnsupportedActions message. Does not implicitly [verify](AndroidUnsupportedActions.md#verify) messages.

#### Parameters

##### message

[`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md)

AndroidUnsupportedActions message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32228)

Encodes the specified AndroidUnsupportedActions message, length delimited. Does not implicitly [verify](AndroidUnsupportedActions.md#verify) messages.

#### Parameters

##### message

[`IAndroidUnsupportedActions`](../interfaces/IAndroidUnsupportedActions.md)

AndroidUnsupportedActions message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

Defined in: [WAProto/index.d.ts:32261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32261)

Creates an AndroidUnsupportedActions message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

AndroidUnsupportedActions

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32282)

Gets the default type url for AndroidUnsupportedActions

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

Defined in: [WAProto/index.d.ts:32269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32269)

Creates a plain object from an AndroidUnsupportedActions message. Also converts values to other types if specified.

#### Parameters

##### message

[`AndroidUnsupportedActions`](AndroidUnsupportedActions.md)

AndroidUnsupportedActions

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32254)

Verifies an AndroidUnsupportedActions message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
