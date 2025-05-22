# Class: MessageHistoryBundle

Defined in: [WAProto/index.d.ts:19531](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19531)

Represents a MessageHistoryBundle.

## Implements

- [`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md)

## Constructors

### new MessageHistoryBundle()

> **new MessageHistoryBundle**(`properties`?): [`MessageHistoryBundle`](MessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:19537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19537)

Constructs a new MessageHistoryBundle.

#### Parameters

##### properties?

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md)

Properties to set

#### Returns

[`MessageHistoryBundle`](MessageHistoryBundle.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:19558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19558)

MessageHistoryBundle contextInfo.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`contextInfo`](../interfaces/IMessageHistoryBundle.md#contextinfo)

***

### directPath

> **directPath**: `string`

Defined in: [WAProto/index.d.ts:19552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19552)

MessageHistoryBundle directPath.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`directPath`](../interfaces/IMessageHistoryBundle.md#directpath)

***

### fileEncSha256

> **fileEncSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:19549](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19549)

MessageHistoryBundle fileEncSha256.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`fileEncSha256`](../interfaces/IMessageHistoryBundle.md#fileencsha256)

***

### fileSha256

> **fileSha256**: `Uint8Array`

Defined in: [WAProto/index.d.ts:19543](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19543)

MessageHistoryBundle fileSha256.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`fileSha256`](../interfaces/IMessageHistoryBundle.md#filesha256)

***

### mediaKey

> **mediaKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:19546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19546)

MessageHistoryBundle mediaKey.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`mediaKey`](../interfaces/IMessageHistoryBundle.md#mediakey)

***

### mediaKeyTimestamp

> **mediaKeyTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:19555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19555)

MessageHistoryBundle mediaKeyTimestamp.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`mediaKeyTimestamp`](../interfaces/IMessageHistoryBundle.md#mediakeytimestamp)

***

### mimetype

> **mimetype**: `string`

Defined in: [WAProto/index.d.ts:19540](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19540)

MessageHistoryBundle mimetype.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`mimetype`](../interfaces/IMessageHistoryBundle.md#mimetype)

***

### participants

> **participants**: `string`[]

Defined in: [WAProto/index.d.ts:19561](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19561)

MessageHistoryBundle participants.

#### Implementation of

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md).[`participants`](../interfaces/IMessageHistoryBundle.md#participants)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:19631](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19631)

Converts this MessageHistoryBundle to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MessageHistoryBundle`](MessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:19568](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19568)

Creates a new MessageHistoryBundle instance using the specified properties.

#### Parameters

##### properties?

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md)

Properties to set

#### Returns

[`MessageHistoryBundle`](MessageHistoryBundle.md)

MessageHistoryBundle instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MessageHistoryBundle`](MessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:19594](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19594)

Decodes a MessageHistoryBundle message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MessageHistoryBundle`](MessageHistoryBundle.md)

MessageHistoryBundle

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MessageHistoryBundle`](MessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:19603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19603)

Decodes a MessageHistoryBundle message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MessageHistoryBundle`](MessageHistoryBundle.md)

MessageHistoryBundle

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19576)

Encodes the specified MessageHistoryBundle message. Does not implicitly [verify](MessageHistoryBundle.md#verify) messages.

#### Parameters

##### message

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md)

MessageHistoryBundle message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19584](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19584)

Encodes the specified MessageHistoryBundle message, length delimited. Does not implicitly [verify](MessageHistoryBundle.md#verify) messages.

#### Parameters

##### message

[`IMessageHistoryBundle`](../interfaces/IMessageHistoryBundle.md)

MessageHistoryBundle message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MessageHistoryBundle`](MessageHistoryBundle.md)

Defined in: [WAProto/index.d.ts:19617](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19617)

Creates a MessageHistoryBundle message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MessageHistoryBundle`](MessageHistoryBundle.md)

MessageHistoryBundle

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:19638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19638)

Gets the default type url for MessageHistoryBundle

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

Defined in: [WAProto/index.d.ts:19625](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19625)

Creates a plain object from a MessageHistoryBundle message. Also converts values to other types if specified.

#### Parameters

##### message

[`MessageHistoryBundle`](MessageHistoryBundle.md)

MessageHistoryBundle

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:19610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19610)

Verifies a MessageHistoryBundle message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
