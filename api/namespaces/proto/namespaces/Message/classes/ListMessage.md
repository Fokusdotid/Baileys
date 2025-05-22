# Class: ListMessage

Defined in: [WAProto/index.d.ts:18217](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18217)

Represents a ListMessage.

## Implements

- [`IListMessage`](../interfaces/IListMessage.md)

## Constructors

### new ListMessage()

> **new ListMessage**(`properties`?): [`ListMessage`](ListMessage.md)

Defined in: [WAProto/index.d.ts:18223](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18223)

Constructs a new ListMessage.

#### Parameters

##### properties?

[`IListMessage`](../interfaces/IListMessage.md)

Properties to set

#### Returns

[`ListMessage`](ListMessage.md)

## Properties

### buttonText

> **buttonText**: `string`

Defined in: [WAProto/index.d.ts:18232](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18232)

ListMessage buttonText.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`buttonText`](../interfaces/IListMessage.md#buttontext)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:18247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18247)

ListMessage contextInfo.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`contextInfo`](../interfaces/IListMessage.md#contextinfo)

***

### description

> **description**: `string`

Defined in: [WAProto/index.d.ts:18229](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18229)

ListMessage description.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`description`](../interfaces/IListMessage.md#description)

***

### footerText

> **footerText**: `string`

Defined in: [WAProto/index.d.ts:18244](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18244)

ListMessage footerText.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`footerText`](../interfaces/IListMessage.md#footertext)

***

### listType

> **listType**: [`ListType`](../namespaces/ListMessage/enumerations/ListType.md)

Defined in: [WAProto/index.d.ts:18235](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18235)

ListMessage listType.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`listType`](../interfaces/IListMessage.md#listtype)

***

### productListInfo?

> `optional` **productListInfo**: `null` \| [`IProductListInfo`](../namespaces/ListMessage/interfaces/IProductListInfo.md)

Defined in: [WAProto/index.d.ts:18241](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18241)

ListMessage productListInfo.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`productListInfo`](../interfaces/IListMessage.md#productlistinfo)

***

### sections

> **sections**: [`ISection`](../namespaces/ListMessage/interfaces/ISection.md)[]

Defined in: [WAProto/index.d.ts:18238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18238)

ListMessage sections.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`sections`](../interfaces/IListMessage.md#sections)

***

### title

> **title**: `string`

Defined in: [WAProto/index.d.ts:18226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18226)

ListMessage title.

#### Implementation of

[`IListMessage`](../interfaces/IListMessage.md).[`title`](../interfaces/IListMessage.md#title)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:18317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18317)

Converts this ListMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ListMessage`](ListMessage.md)

Defined in: [WAProto/index.d.ts:18254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18254)

Creates a new ListMessage instance using the specified properties.

#### Parameters

##### properties?

[`IListMessage`](../interfaces/IListMessage.md)

Properties to set

#### Returns

[`ListMessage`](ListMessage.md)

ListMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ListMessage`](ListMessage.md)

Defined in: [WAProto/index.d.ts:18280](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18280)

Decodes a ListMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ListMessage`](ListMessage.md)

ListMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ListMessage`](ListMessage.md)

Defined in: [WAProto/index.d.ts:18289](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18289)

Decodes a ListMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ListMessage`](ListMessage.md)

ListMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18262](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18262)

Encodes the specified ListMessage message. Does not implicitly [verify](ListMessage.md#verify) messages.

#### Parameters

##### message

[`IListMessage`](../interfaces/IListMessage.md)

ListMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:18270](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18270)

Encodes the specified ListMessage message, length delimited. Does not implicitly [verify](ListMessage.md#verify) messages.

#### Parameters

##### message

[`IListMessage`](../interfaces/IListMessage.md)

ListMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ListMessage`](ListMessage.md)

Defined in: [WAProto/index.d.ts:18303](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18303)

Creates a ListMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ListMessage`](ListMessage.md)

ListMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:18324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18324)

Gets the default type url for ListMessage

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

Defined in: [WAProto/index.d.ts:18311](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18311)

Creates a plain object from a ListMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ListMessage`](ListMessage.md)

ListMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:18296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L18296)

Verifies a ListMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
