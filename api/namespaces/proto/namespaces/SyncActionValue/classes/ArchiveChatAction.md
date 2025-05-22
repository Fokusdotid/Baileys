# Class: ArchiveChatAction

Defined in: [WAProto/index.d.ts:32296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32296)

Represents an ArchiveChatAction.

## Implements

- [`IArchiveChatAction`](../interfaces/IArchiveChatAction.md)

## Constructors

### new ArchiveChatAction()

> **new ArchiveChatAction**(`properties`?): [`ArchiveChatAction`](ArchiveChatAction.md)

Defined in: [WAProto/index.d.ts:32302](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32302)

Constructs a new ArchiveChatAction.

#### Parameters

##### properties?

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md)

Properties to set

#### Returns

[`ArchiveChatAction`](ArchiveChatAction.md)

## Properties

### archived

> **archived**: `boolean`

Defined in: [WAProto/index.d.ts:32305](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32305)

ArchiveChatAction archived.

#### Implementation of

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md).[`archived`](../interfaces/IArchiveChatAction.md#archived)

***

### messageRange?

> `optional` **messageRange**: `null` \| [`ISyncActionMessageRange`](../interfaces/ISyncActionMessageRange.md)

Defined in: [WAProto/index.d.ts:32308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32308)

ArchiveChatAction messageRange.

#### Implementation of

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md).[`messageRange`](../interfaces/IArchiveChatAction.md#messagerange)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32378)

Converts this ArchiveChatAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ArchiveChatAction`](ArchiveChatAction.md)

Defined in: [WAProto/index.d.ts:32315](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32315)

Creates a new ArchiveChatAction instance using the specified properties.

#### Parameters

##### properties?

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md)

Properties to set

#### Returns

[`ArchiveChatAction`](ArchiveChatAction.md)

ArchiveChatAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ArchiveChatAction`](ArchiveChatAction.md)

Defined in: [WAProto/index.d.ts:32341](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32341)

Decodes an ArchiveChatAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ArchiveChatAction`](ArchiveChatAction.md)

ArchiveChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ArchiveChatAction`](ArchiveChatAction.md)

Defined in: [WAProto/index.d.ts:32350](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32350)

Decodes an ArchiveChatAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ArchiveChatAction`](ArchiveChatAction.md)

ArchiveChatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32323)

Encodes the specified ArchiveChatAction message. Does not implicitly [verify](ArchiveChatAction.md#verify) messages.

#### Parameters

##### message

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md)

ArchiveChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32331)

Encodes the specified ArchiveChatAction message, length delimited. Does not implicitly [verify](ArchiveChatAction.md#verify) messages.

#### Parameters

##### message

[`IArchiveChatAction`](../interfaces/IArchiveChatAction.md)

ArchiveChatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ArchiveChatAction`](ArchiveChatAction.md)

Defined in: [WAProto/index.d.ts:32364](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32364)

Creates an ArchiveChatAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ArchiveChatAction`](ArchiveChatAction.md)

ArchiveChatAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32385](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32385)

Gets the default type url for ArchiveChatAction

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

Defined in: [WAProto/index.d.ts:32372](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32372)

Creates a plain object from an ArchiveChatAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`ArchiveChatAction`](ArchiveChatAction.md)

ArchiveChatAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32357](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32357)

Verifies an ArchiveChatAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
