# Class: DraftMessage

Defined in: [WAProto/index.d.ts:2787](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2787)

Represents a DraftMessage.

## Implements

- [`IDraftMessage`](../interfaces/IDraftMessage.md)

## Constructors

### new DraftMessage()

> **new DraftMessage**(`properties`?): [`DraftMessage`](DraftMessage.md)

Defined in: [WAProto/index.d.ts:2793](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2793)

Constructs a new DraftMessage.

#### Parameters

##### properties?

[`IDraftMessage`](../interfaces/IDraftMessage.md)

Properties to set

#### Returns

[`DraftMessage`](DraftMessage.md)

## Properties

### ctwaContext?

> `optional` **ctwaContext**: `null` \| [`ICtwaContextData`](../namespaces/DraftMessage/interfaces/ICtwaContextData.md)

Defined in: [WAProto/index.d.ts:2805](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2805)

DraftMessage ctwaContext.

#### Implementation of

[`IDraftMessage`](../interfaces/IDraftMessage.md).[`ctwaContext`](../interfaces/IDraftMessage.md#ctwacontext)

***

### ctwaContextLinkData?

> `optional` **ctwaContextLinkData**: `null` \| [`ICtwaContextLinkData`](../namespaces/DraftMessage/interfaces/ICtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:2802](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2802)

DraftMessage ctwaContextLinkData.

#### Implementation of

[`IDraftMessage`](../interfaces/IDraftMessage.md).[`ctwaContextLinkData`](../interfaces/IDraftMessage.md#ctwacontextlinkdata)

***

### omittedUrl

> **omittedUrl**: `string`

Defined in: [WAProto/index.d.ts:2799](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2799)

DraftMessage omittedUrl.

#### Implementation of

[`IDraftMessage`](../interfaces/IDraftMessage.md).[`omittedUrl`](../interfaces/IDraftMessage.md#omittedurl)

***

### text

> **text**: `string`

Defined in: [WAProto/index.d.ts:2796](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2796)

DraftMessage text.

#### Implementation of

[`IDraftMessage`](../interfaces/IDraftMessage.md).[`text`](../interfaces/IDraftMessage.md#text)

***

### timestamp

> **timestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:2808](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2808)

DraftMessage timestamp.

#### Implementation of

[`IDraftMessage`](../interfaces/IDraftMessage.md).[`timestamp`](../interfaces/IDraftMessage.md#timestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:2878](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2878)

Converts this DraftMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DraftMessage`](DraftMessage.md)

Defined in: [WAProto/index.d.ts:2815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2815)

Creates a new DraftMessage instance using the specified properties.

#### Parameters

##### properties?

[`IDraftMessage`](../interfaces/IDraftMessage.md)

Properties to set

#### Returns

[`DraftMessage`](DraftMessage.md)

DraftMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DraftMessage`](DraftMessage.md)

Defined in: [WAProto/index.d.ts:2841](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2841)

Decodes a DraftMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DraftMessage`](DraftMessage.md)

DraftMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DraftMessage`](DraftMessage.md)

Defined in: [WAProto/index.d.ts:2850](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2850)

Decodes a DraftMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DraftMessage`](DraftMessage.md)

DraftMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2823)

Encodes the specified DraftMessage message. Does not implicitly [verify](DraftMessage.md#verify) messages.

#### Parameters

##### message

[`IDraftMessage`](../interfaces/IDraftMessage.md)

DraftMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:2831](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2831)

Encodes the specified DraftMessage message, length delimited. Does not implicitly [verify](DraftMessage.md#verify) messages.

#### Parameters

##### message

[`IDraftMessage`](../interfaces/IDraftMessage.md)

DraftMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DraftMessage`](DraftMessage.md)

Defined in: [WAProto/index.d.ts:2864](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2864)

Creates a DraftMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DraftMessage`](DraftMessage.md)

DraftMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:2885](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2885)

Gets the default type url for DraftMessage

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

Defined in: [WAProto/index.d.ts:2872](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2872)

Creates a plain object from a DraftMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`DraftMessage`](DraftMessage.md)

DraftMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:2857](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L2857)

Verifies a DraftMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
