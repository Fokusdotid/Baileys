# Class: ContactMessage

Defined in: [WAProto/index.d.ts:13576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13576)

Represents a ContactMessage.

## Implements

- [`IContactMessage`](../interfaces/IContactMessage.md)

## Constructors

### new ContactMessage()

> **new ContactMessage**(`properties`?): [`ContactMessage`](ContactMessage.md)

Defined in: [WAProto/index.d.ts:13582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13582)

Constructs a new ContactMessage.

#### Parameters

##### properties?

[`IContactMessage`](../interfaces/IContactMessage.md)

Properties to set

#### Returns

[`ContactMessage`](ContactMessage.md)

## Properties

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:13591](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13591)

ContactMessage contextInfo.

#### Implementation of

[`IContactMessage`](../interfaces/IContactMessage.md).[`contextInfo`](../interfaces/IContactMessage.md#contextinfo)

***

### displayName

> **displayName**: `string`

Defined in: [WAProto/index.d.ts:13585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13585)

ContactMessage displayName.

#### Implementation of

[`IContactMessage`](../interfaces/IContactMessage.md).[`displayName`](../interfaces/IContactMessage.md#displayname)

***

### vcard

> **vcard**: `string`

Defined in: [WAProto/index.d.ts:13588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13588)

ContactMessage vcard.

#### Implementation of

[`IContactMessage`](../interfaces/IContactMessage.md).[`vcard`](../interfaces/IContactMessage.md#vcard)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13661)

Converts this ContactMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ContactMessage`](ContactMessage.md)

Defined in: [WAProto/index.d.ts:13598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13598)

Creates a new ContactMessage instance using the specified properties.

#### Parameters

##### properties?

[`IContactMessage`](../interfaces/IContactMessage.md)

Properties to set

#### Returns

[`ContactMessage`](ContactMessage.md)

ContactMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ContactMessage`](ContactMessage.md)

Defined in: [WAProto/index.d.ts:13624](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13624)

Decodes a ContactMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ContactMessage`](ContactMessage.md)

ContactMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ContactMessage`](ContactMessage.md)

Defined in: [WAProto/index.d.ts:13633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13633)

Decodes a ContactMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ContactMessage`](ContactMessage.md)

ContactMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13606)

Encodes the specified ContactMessage message. Does not implicitly [verify](ContactMessage.md#verify) messages.

#### Parameters

##### message

[`IContactMessage`](../interfaces/IContactMessage.md)

ContactMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13614)

Encodes the specified ContactMessage message, length delimited. Does not implicitly [verify](ContactMessage.md#verify) messages.

#### Parameters

##### message

[`IContactMessage`](../interfaces/IContactMessage.md)

ContactMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ContactMessage`](ContactMessage.md)

Defined in: [WAProto/index.d.ts:13647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13647)

Creates a ContactMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ContactMessage`](ContactMessage.md)

ContactMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13668)

Gets the default type url for ContactMessage

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

Defined in: [WAProto/index.d.ts:13655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13655)

Creates a plain object from a ContactMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ContactMessage`](ContactMessage.md)

ContactMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:13640](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13640)

Verifies a ContactMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
