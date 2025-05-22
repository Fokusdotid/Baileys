# Class: ListResponseMessage

Defined in: [WAProto/index.d.ts:18981](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18981)

Represents a ListResponseMessage.

## Implements

- [`IListResponseMessage`](../interfaces/IListResponseMessage.md)

## Constructors

### new ListResponseMessage()

> **new ListResponseMessage**(`properties`?): [`ListResponseMessage`](ListResponseMessage.md)

Defined in: [WAProto/index.d.ts:18987](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18987)

Constructs a new ListResponseMessage.

#### Parameters

##### properties?

[`IListResponseMessage`](../interfaces/IListResponseMessage.md)

Properties to set

#### Returns

[`ListResponseMessage`](ListResponseMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:18999](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18999)

ListResponseMessage contextInfo.

#### Implementation of

[`IListResponseMessage`](../interfaces/IListResponseMessage.md).[`contextInfo`](../interfaces/IListResponseMessage.md#contextinfo)

***

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:19002](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19002)

ListResponseMessage description.

#### Implementation of

[`IListResponseMessage`](../interfaces/IListResponseMessage.md).[`description`](../interfaces/IListResponseMessage.md#description)

***

### listType

> **listType**: [`ListType`](../namespaces/ListResponseMessage/enumerations/ListType.md)

Defined in: [WAProto/index.d.ts:18993](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18993)

ListResponseMessage listType.

#### Implementation of

[`IListResponseMessage`](../interfaces/IListResponseMessage.md).[`listType`](../interfaces/IListResponseMessage.md#listtype)

***

### singleSelectReply?

> `optional` **singleSelectReply**: `null` \| [`ISingleSelectReply`](../namespaces/ListResponseMessage/interfaces/ISingleSelectReply.md)

Defined in: [WAProto/index.d.ts:18996](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18996)

ListResponseMessage singleSelectReply.

#### Implementation of

[`IListResponseMessage`](../interfaces/IListResponseMessage.md).[`singleSelectReply`](../interfaces/IListResponseMessage.md#singleselectreply)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:18990](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18990)

ListResponseMessage title.

#### Implementation of

[`IListResponseMessage`](../interfaces/IListResponseMessage.md).[`title`](../interfaces/IListResponseMessage.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:19072](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19072)

Converts this ListResponseMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ListResponseMessage`](ListResponseMessage.md)

Defined in: [WAProto/index.d.ts:19009](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19009)

Creates a new ListResponseMessage instance using the specified properties.

#### Parameters

##### properties?

[`IListResponseMessage`](../interfaces/IListResponseMessage.md)

Properties to set

#### Returns

[`ListResponseMessage`](ListResponseMessage.md)

ListResponseMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ListResponseMessage`](ListResponseMessage.md)

Defined in: [WAProto/index.d.ts:19035](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19035)

Decodes a ListResponseMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ListResponseMessage`](ListResponseMessage.md)

ListResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ListResponseMessage`](ListResponseMessage.md)

Defined in: [WAProto/index.d.ts:19044](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19044)

Decodes a ListResponseMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ListResponseMessage`](ListResponseMessage.md)

ListResponseMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19017](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19017)

Encodes the specified ListResponseMessage message. Does not implicitly [verify](ListResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IListResponseMessage`](../interfaces/IListResponseMessage.md)

ListResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19025](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19025)

Encodes the specified ListResponseMessage message, length delimited. Does not implicitly [verify](ListResponseMessage.md#verify) messages.

#### Parameters

##### message

[`IListResponseMessage`](../interfaces/IListResponseMessage.md)

ListResponseMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ListResponseMessage`](ListResponseMessage.md)

Defined in: [WAProto/index.d.ts:19058](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19058)

Creates a ListResponseMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ListResponseMessage`](ListResponseMessage.md)

ListResponseMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:19079](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19079)

Gets the default type url for ListResponseMessage

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

Defined in: [WAProto/index.d.ts:19066](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19066)

Creates a plain object from a ListResponseMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ListResponseMessage`](ListResponseMessage.md)

ListResponseMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:19051](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19051)

Verifies a ListResponseMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
