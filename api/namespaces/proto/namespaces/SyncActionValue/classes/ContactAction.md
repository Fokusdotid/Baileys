# Class: ContactAction

Defined in: [WAProto/index.d.ts:32890](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32890)

Represents a ContactAction.

## Implements

- [`IContactAction`](../interfaces/IContactAction.md)

## Constructors

### new ContactAction()

> **new ContactAction**(`properties`?): [`ContactAction`](ContactAction.md)

Defined in: [WAProto/index.d.ts:32896](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32896)

Constructs a new ContactAction.

#### Parameters

##### properties?

[`IContactAction`](../interfaces/IContactAction.md)

Properties to set

#### Returns

[`ContactAction`](ContactAction.md)

## Properties

### firstName

> **firstName**: `string`

Defined in: [WAProto/index.d.ts:32902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32902)

ContactAction firstName.

#### Implementation of

[`IContactAction`](../interfaces/IContactAction.md).[`firstName`](../interfaces/IContactAction.md#firstname)

***

### fullName

> **fullName**: `string`

Defined in: [WAProto/index.d.ts:32899](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32899)

ContactAction fullName.

#### Implementation of

[`IContactAction`](../interfaces/IContactAction.md).[`fullName`](../interfaces/IContactAction.md#fullname)

***

### lidJid

> **lidJid**: `string`

Defined in: [WAProto/index.d.ts:32905](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32905)

ContactAction lidJid.

#### Implementation of

[`IContactAction`](../interfaces/IContactAction.md).[`lidJid`](../interfaces/IContactAction.md#lidjid)

***

### saveOnPrimaryAddressbook

> **saveOnPrimaryAddressbook**: `boolean`

Defined in: [WAProto/index.d.ts:32908](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32908)

ContactAction saveOnPrimaryAddressbook.

#### Implementation of

[`IContactAction`](../interfaces/IContactAction.md).[`saveOnPrimaryAddressbook`](../interfaces/IContactAction.md#saveonprimaryaddressbook)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32978)

Converts this ContactAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ContactAction`](ContactAction.md)

Defined in: [WAProto/index.d.ts:32915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32915)

Creates a new ContactAction instance using the specified properties.

#### Parameters

##### properties?

[`IContactAction`](../interfaces/IContactAction.md)

Properties to set

#### Returns

[`ContactAction`](ContactAction.md)

ContactAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ContactAction`](ContactAction.md)

Defined in: [WAProto/index.d.ts:32941](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32941)

Decodes a ContactAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ContactAction`](ContactAction.md)

ContactAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ContactAction`](ContactAction.md)

Defined in: [WAProto/index.d.ts:32950](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32950)

Decodes a ContactAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ContactAction`](ContactAction.md)

ContactAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32923](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32923)

Encodes the specified ContactAction message. Does not implicitly [verify](ContactAction.md#verify) messages.

#### Parameters

##### message

[`IContactAction`](../interfaces/IContactAction.md)

ContactAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32931](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32931)

Encodes the specified ContactAction message, length delimited. Does not implicitly [verify](ContactAction.md#verify) messages.

#### Parameters

##### message

[`IContactAction`](../interfaces/IContactAction.md)

ContactAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ContactAction`](ContactAction.md)

Defined in: [WAProto/index.d.ts:32964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32964)

Creates a ContactAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ContactAction`](ContactAction.md)

ContactAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32985)

Gets the default type url for ContactAction

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

Defined in: [WAProto/index.d.ts:32972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32972)

Creates a plain object from a ContactAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`ContactAction`](ContactAction.md)

ContactAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32957](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32957)

Verifies a ContactAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
