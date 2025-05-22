# Class: NewsletterAdminInviteMessage

Defined in: [WAProto/index.d.ts:19664](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19664)

Represents a NewsletterAdminInviteMessage.

## Implements

- [`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md)

## Constructors

### new NewsletterAdminInviteMessage()

> **new NewsletterAdminInviteMessage**(`properties`?): [`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:19670](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19670)

Constructs a new NewsletterAdminInviteMessage.

#### Parameters

##### properties?

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md)

Properties to set

#### Returns

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

## Properties

### caption

> **caption**: `string`

Defined in: [WAProto/index.d.ts:19682](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19682)

NewsletterAdminInviteMessage caption.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`caption`](../interfaces/INewsletterAdminInviteMessage.md#caption)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:19688](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19688)

NewsletterAdminInviteMessage contextInfo.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`contextInfo`](../interfaces/INewsletterAdminInviteMessage.md#contextinfo)

***

### inviteExpiration

> **inviteExpiration**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:19685](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19685)

NewsletterAdminInviteMessage inviteExpiration.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`inviteExpiration`](../interfaces/INewsletterAdminInviteMessage.md#inviteexpiration)

***

### jpegThumbnail

> **jpegThumbnail**: `Uint8Array`

Defined in: [WAProto/index.d.ts:19679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19679)

NewsletterAdminInviteMessage jpegThumbnail.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`jpegThumbnail`](../interfaces/INewsletterAdminInviteMessage.md#jpegthumbnail)

***

### newsletterJid

> **newsletterJid**: `string`

Defined in: [WAProto/index.d.ts:19673](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19673)

NewsletterAdminInviteMessage newsletterJid.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`newsletterJid`](../interfaces/INewsletterAdminInviteMessage.md#newsletterjid)

***

### newsletterName

> **newsletterName**: `string`

Defined in: [WAProto/index.d.ts:19676](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19676)

NewsletterAdminInviteMessage newsletterName.

#### Implementation of

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md).[`newsletterName`](../interfaces/INewsletterAdminInviteMessage.md#newslettername)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:19758](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19758)

Converts this NewsletterAdminInviteMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:19695](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19695)

Creates a new NewsletterAdminInviteMessage instance using the specified properties.

#### Parameters

##### properties?

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md)

Properties to set

#### Returns

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:19721](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19721)

Decodes a NewsletterAdminInviteMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:19730](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19730)

Decodes a NewsletterAdminInviteMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19703](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19703)

Encodes the specified NewsletterAdminInviteMessage message. Does not implicitly [verify](NewsletterAdminInviteMessage.md#verify) messages.

#### Parameters

##### message

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:19711](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19711)

Encodes the specified NewsletterAdminInviteMessage message, length delimited. Does not implicitly [verify](NewsletterAdminInviteMessage.md#verify) messages.

#### Parameters

##### message

[`INewsletterAdminInviteMessage`](../interfaces/INewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

Defined in: [WAProto/index.d.ts:19744](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19744)

Creates a NewsletterAdminInviteMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:19765](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19765)

Gets the default type url for NewsletterAdminInviteMessage

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

Defined in: [WAProto/index.d.ts:19752](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19752)

Creates a plain object from a NewsletterAdminInviteMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`NewsletterAdminInviteMessage`](NewsletterAdminInviteMessage.md)

NewsletterAdminInviteMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:19737](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L19737)

Verifies a NewsletterAdminInviteMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
