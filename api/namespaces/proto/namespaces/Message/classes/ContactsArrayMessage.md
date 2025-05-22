# Class: ContactsArrayMessage

Defined in: [WAProto/index.d.ts:13685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13685)

Represents a ContactsArrayMessage.

## Implements

- [`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md)

## Constructors

### new ContactsArrayMessage()

> **new ContactsArrayMessage**(`properties`?): [`ContactsArrayMessage`](ContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:13691](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13691)

Constructs a new ContactsArrayMessage.

#### Parameters

##### properties?

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md)

Properties to set

#### Returns

[`ContactsArrayMessage`](ContactsArrayMessage.md)

## Properties

### contacts

> **contacts**: [`IContactMessage`](../interfaces/IContactMessage.md)[]

Defined in: [WAProto/index.d.ts:13697](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13697)

ContactsArrayMessage contacts.

#### Implementation of

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md).[`contacts`](../interfaces/IContactsArrayMessage.md#contacts)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:13700](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13700)

ContactsArrayMessage contextInfo.

#### Implementation of

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md).[`contextInfo`](../interfaces/IContactsArrayMessage.md#contextinfo)

***

### displayName

> **displayName**: `string`

Defined in: [WAProto/index.d.ts:13694](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13694)

ContactsArrayMessage displayName.

#### Implementation of

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md).[`displayName`](../interfaces/IContactsArrayMessage.md#displayname)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13770](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13770)

Converts this ContactsArrayMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ContactsArrayMessage`](ContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:13707](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13707)

Creates a new ContactsArrayMessage instance using the specified properties.

#### Parameters

##### properties?

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md)

Properties to set

#### Returns

[`ContactsArrayMessage`](ContactsArrayMessage.md)

ContactsArrayMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ContactsArrayMessage`](ContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:13733](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13733)

Decodes a ContactsArrayMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ContactsArrayMessage`](ContactsArrayMessage.md)

ContactsArrayMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ContactsArrayMessage`](ContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:13742](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13742)

Decodes a ContactsArrayMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ContactsArrayMessage`](ContactsArrayMessage.md)

ContactsArrayMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13715](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13715)

Encodes the specified ContactsArrayMessage message. Does not implicitly [verify](ContactsArrayMessage.md#verify) messages.

#### Parameters

##### message

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md)

ContactsArrayMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:13723](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13723)

Encodes the specified ContactsArrayMessage message, length delimited. Does not implicitly [verify](ContactsArrayMessage.md#verify) messages.

#### Parameters

##### message

[`IContactsArrayMessage`](../interfaces/IContactsArrayMessage.md)

ContactsArrayMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ContactsArrayMessage`](ContactsArrayMessage.md)

Defined in: [WAProto/index.d.ts:13756](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13756)

Creates a ContactsArrayMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ContactsArrayMessage`](ContactsArrayMessage.md)

ContactsArrayMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13777](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13777)

Gets the default type url for ContactsArrayMessage

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

Defined in: [WAProto/index.d.ts:13764](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13764)

Creates a plain object from a ContactsArrayMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ContactsArrayMessage`](ContactsArrayMessage.md)

ContactsArrayMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:13749](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13749)

Verifies a ContactsArrayMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
