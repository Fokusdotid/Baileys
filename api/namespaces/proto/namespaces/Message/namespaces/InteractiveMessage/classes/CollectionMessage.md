# Class: CollectionMessage

Defined in: [WAProto/index.d.ts:16907](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16907)

Represents a CollectionMessage.

## Implements

- [`ICollectionMessage`](../interfaces/ICollectionMessage.md)

## Constructors

### new CollectionMessage()

> **new CollectionMessage**(`properties`?): [`CollectionMessage`](CollectionMessage.md)

Defined in: [WAProto/index.d.ts:16913](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16913)

Constructs a new CollectionMessage.

#### Parameters

##### properties?

[`ICollectionMessage`](../interfaces/ICollectionMessage.md)

Properties to set

#### Returns

[`CollectionMessage`](CollectionMessage.md)

## Properties

### bizJid

> **bizJid**: `string`

Defined in: [WAProto/index.d.ts:16916](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16916)

CollectionMessage bizJid.

#### Implementation of

[`ICollectionMessage`](../interfaces/ICollectionMessage.md).[`bizJid`](../interfaces/ICollectionMessage.md#bizjid)

***

### id

> **id**: `string`

Defined in: [WAProto/index.d.ts:16919](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16919)

CollectionMessage id.

#### Implementation of

[`ICollectionMessage`](../interfaces/ICollectionMessage.md).[`id`](../interfaces/ICollectionMessage.md#id)

***

### messageVersion

> **messageVersion**: `number`

Defined in: [WAProto/index.d.ts:16922](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16922)

CollectionMessage messageVersion.

#### Implementation of

[`ICollectionMessage`](../interfaces/ICollectionMessage.md).[`messageVersion`](../interfaces/ICollectionMessage.md#messageversion)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:16992](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16992)

Converts this CollectionMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CollectionMessage`](CollectionMessage.md)

Defined in: [WAProto/index.d.ts:16929](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16929)

Creates a new CollectionMessage instance using the specified properties.

#### Parameters

##### properties?

[`ICollectionMessage`](../interfaces/ICollectionMessage.md)

Properties to set

#### Returns

[`CollectionMessage`](CollectionMessage.md)

CollectionMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CollectionMessage`](CollectionMessage.md)

Defined in: [WAProto/index.d.ts:16955](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16955)

Decodes a CollectionMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CollectionMessage`](CollectionMessage.md)

CollectionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CollectionMessage`](CollectionMessage.md)

Defined in: [WAProto/index.d.ts:16964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16964)

Decodes a CollectionMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CollectionMessage`](CollectionMessage.md)

CollectionMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16937](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16937)

Encodes the specified CollectionMessage message. Does not implicitly [verify](CollectionMessage.md#verify) messages.

#### Parameters

##### message

[`ICollectionMessage`](../interfaces/ICollectionMessage.md)

CollectionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16945](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16945)

Encodes the specified CollectionMessage message, length delimited. Does not implicitly [verify](CollectionMessage.md#verify) messages.

#### Parameters

##### message

[`ICollectionMessage`](../interfaces/ICollectionMessage.md)

CollectionMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CollectionMessage`](CollectionMessage.md)

Defined in: [WAProto/index.d.ts:16978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16978)

Creates a CollectionMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CollectionMessage`](CollectionMessage.md)

CollectionMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:16999](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16999)

Gets the default type url for CollectionMessage

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

Defined in: [WAProto/index.d.ts:16986](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16986)

Creates a plain object from a CollectionMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`CollectionMessage`](CollectionMessage.md)

CollectionMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:16971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16971)

Verifies a CollectionMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
