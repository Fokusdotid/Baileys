# Class: MessageKey

Defined in: [WAProto/index.d.ts:30733](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30733)

Represents a MessageKey.

## Implements

- [`IMessageKey`](../interfaces/IMessageKey.md)

## Constructors

### new MessageKey()

> **new MessageKey**(`properties`?): [`MessageKey`](MessageKey.md)

Defined in: [WAProto/index.d.ts:30739](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30739)

Constructs a new MessageKey.

#### Parameters

##### properties?

[`IMessageKey`](../interfaces/IMessageKey.md)

Properties to set

#### Returns

[`MessageKey`](MessageKey.md)

## Properties

### cipherKey

> **cipherKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30745](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30745)

MessageKey cipherKey.

#### Implementation of

[`IMessageKey`](../interfaces/IMessageKey.md).[`cipherKey`](../interfaces/IMessageKey.md#cipherkey)

***

### index

> **index**: `number`

Defined in: [WAProto/index.d.ts:30742](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30742)

MessageKey index.

#### Implementation of

[`IMessageKey`](../interfaces/IMessageKey.md).[`index`](../interfaces/IMessageKey.md#index)

***

### iv

> **iv**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30751](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30751)

MessageKey iv.

#### Implementation of

[`IMessageKey`](../interfaces/IMessageKey.md).[`iv`](../interfaces/IMessageKey.md#iv)

***

### macKey

> **macKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30748](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30748)

MessageKey macKey.

#### Implementation of

[`IMessageKey`](../interfaces/IMessageKey.md).[`macKey`](../interfaces/IMessageKey.md#mackey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30821](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30821)

Converts this MessageKey to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MessageKey`](MessageKey.md)

Defined in: [WAProto/index.d.ts:30758](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30758)

Creates a new MessageKey instance using the specified properties.

#### Parameters

##### properties?

[`IMessageKey`](../interfaces/IMessageKey.md)

Properties to set

#### Returns

[`MessageKey`](MessageKey.md)

MessageKey instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MessageKey`](MessageKey.md)

Defined in: [WAProto/index.d.ts:30784](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30784)

Decodes a MessageKey message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MessageKey`](MessageKey.md)

MessageKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MessageKey`](MessageKey.md)

Defined in: [WAProto/index.d.ts:30793](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30793)

Decodes a MessageKey message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MessageKey`](MessageKey.md)

MessageKey

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30766](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30766)

Encodes the specified MessageKey message. Does not implicitly [verify](MessageKey.md#verify) messages.

#### Parameters

##### message

[`IMessageKey`](../interfaces/IMessageKey.md)

MessageKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30774](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30774)

Encodes the specified MessageKey message, length delimited. Does not implicitly [verify](MessageKey.md#verify) messages.

#### Parameters

##### message

[`IMessageKey`](../interfaces/IMessageKey.md)

MessageKey message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MessageKey`](MessageKey.md)

Defined in: [WAProto/index.d.ts:30807](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30807)

Creates a MessageKey message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MessageKey`](MessageKey.md)

MessageKey

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30828](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30828)

Gets the default type url for MessageKey

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

Defined in: [WAProto/index.d.ts:30815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30815)

Creates a plain object from a MessageKey message. Also converts values to other types if specified.

#### Parameters

##### message

[`MessageKey`](MessageKey.md)

MessageKey

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30800)

Verifies a MessageKey message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
