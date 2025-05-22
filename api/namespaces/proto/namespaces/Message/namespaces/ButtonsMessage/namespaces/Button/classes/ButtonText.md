# Class: ButtonText

Defined in: [WAProto/index.d.ts:12559](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12559)

Represents a ButtonText.

## Implements

- [`IButtonText`](../interfaces/IButtonText.md)

## Constructors

### new ButtonText()

> **new ButtonText**(`properties`?): [`ButtonText`](ButtonText.md)

Defined in: [WAProto/index.d.ts:12565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12565)

Constructs a new ButtonText.

#### Parameters

##### properties?

[`IButtonText`](../interfaces/IButtonText.md)

Properties to set

#### Returns

[`ButtonText`](ButtonText.md)

## Properties

### displayText

> **displayText**: `string`

Defined in: [WAProto/index.d.ts:12568](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12568)

ButtonText displayText.

#### Implementation of

[`IButtonText`](../interfaces/IButtonText.md).[`displayText`](../interfaces/IButtonText.md#displaytext)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12638)

Converts this ButtonText to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ButtonText`](ButtonText.md)

Defined in: [WAProto/index.d.ts:12575](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12575)

Creates a new ButtonText instance using the specified properties.

#### Parameters

##### properties?

[`IButtonText`](../interfaces/IButtonText.md)

Properties to set

#### Returns

[`ButtonText`](ButtonText.md)

ButtonText instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ButtonText`](ButtonText.md)

Defined in: [WAProto/index.d.ts:12601](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12601)

Decodes a ButtonText message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ButtonText`](ButtonText.md)

ButtonText

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ButtonText`](ButtonText.md)

Defined in: [WAProto/index.d.ts:12610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12610)

Decodes a ButtonText message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ButtonText`](ButtonText.md)

ButtonText

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12583](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12583)

Encodes the specified ButtonText message. Does not implicitly [verify](ButtonText.md#verify) messages.

#### Parameters

##### message

[`IButtonText`](../interfaces/IButtonText.md)

ButtonText message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12591](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12591)

Encodes the specified ButtonText message, length delimited. Does not implicitly [verify](ButtonText.md#verify) messages.

#### Parameters

##### message

[`IButtonText`](../interfaces/IButtonText.md)

ButtonText message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ButtonText`](ButtonText.md)

Defined in: [WAProto/index.d.ts:12624](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12624)

Creates a ButtonText message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ButtonText`](ButtonText.md)

ButtonText

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12645](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12645)

Gets the default type url for ButtonText

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

Defined in: [WAProto/index.d.ts:12632](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12632)

Creates a plain object from a ButtonText message. Also converts values to other types if specified.

#### Parameters

##### message

[`ButtonText`](ButtonText.md)

ButtonText

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12617](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12617)

Verifies a ButtonText message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
