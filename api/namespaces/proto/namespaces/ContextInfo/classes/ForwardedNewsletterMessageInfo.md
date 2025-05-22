# Class: ForwardedNewsletterMessageInfo

Defined in: [WAProto/index.d.ts:5414](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5414)

Represents a ForwardedNewsletterMessageInfo.

## Implements

- [`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md)

## Constructors

### new ForwardedNewsletterMessageInfo()

> **new ForwardedNewsletterMessageInfo**(`properties`?): [`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:5420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5420)

Constructs a new ForwardedNewsletterMessageInfo.

#### Parameters

##### properties?

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md)

Properties to set

#### Returns

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

## Properties

### accessibilityText

> **accessibilityText**: `string`

Defined in: [WAProto/index.d.ts:5435](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5435)

ForwardedNewsletterMessageInfo accessibilityText.

#### Implementation of

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md).[`accessibilityText`](../interfaces/IForwardedNewsletterMessageInfo.md#accessibilitytext)

***

### contentType

> **contentType**: [`ContentType`](../namespaces/ForwardedNewsletterMessageInfo/enumerations/ContentType.md)

Defined in: [WAProto/index.d.ts:5432](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5432)

ForwardedNewsletterMessageInfo contentType.

#### Implementation of

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md).[`contentType`](../interfaces/IForwardedNewsletterMessageInfo.md#contenttype)

***

### newsletterJid

> **newsletterJid**: `string`

Defined in: [WAProto/index.d.ts:5423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5423)

ForwardedNewsletterMessageInfo newsletterJid.

#### Implementation of

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md).[`newsletterJid`](../interfaces/IForwardedNewsletterMessageInfo.md#newsletterjid)

***

### newsletterName

> **newsletterName**: `string`

Defined in: [WAProto/index.d.ts:5429](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5429)

ForwardedNewsletterMessageInfo newsletterName.

#### Implementation of

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md).[`newsletterName`](../interfaces/IForwardedNewsletterMessageInfo.md#newslettername)

***

### serverMessageId

> **serverMessageId**: `number`

Defined in: [WAProto/index.d.ts:5426](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5426)

ForwardedNewsletterMessageInfo serverMessageId.

#### Implementation of

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md).[`serverMessageId`](../interfaces/IForwardedNewsletterMessageInfo.md#servermessageid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:5505](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5505)

Converts this ForwardedNewsletterMessageInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:5442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5442)

Creates a new ForwardedNewsletterMessageInfo instance using the specified properties.

#### Parameters

##### properties?

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md)

Properties to set

#### Returns

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:5468](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5468)

Decodes a ForwardedNewsletterMessageInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:5477](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5477)

Decodes a ForwardedNewsletterMessageInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5450](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5450)

Encodes the specified ForwardedNewsletterMessageInfo message. Does not implicitly [verify](ForwardedNewsletterMessageInfo.md#verify) messages.

#### Parameters

##### message

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:5458](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5458)

Encodes the specified ForwardedNewsletterMessageInfo message, length delimited. Does not implicitly [verify](ForwardedNewsletterMessageInfo.md#verify) messages.

#### Parameters

##### message

[`IForwardedNewsletterMessageInfo`](../interfaces/IForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:5491](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5491)

Creates a ForwardedNewsletterMessageInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:5512](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5512)

Gets the default type url for ForwardedNewsletterMessageInfo

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

Defined in: [WAProto/index.d.ts:5499](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5499)

Creates a plain object from a ForwardedNewsletterMessageInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`ForwardedNewsletterMessageInfo`](ForwardedNewsletterMessageInfo.md)

ForwardedNewsletterMessageInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:5484](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L5484)

Verifies a ForwardedNewsletterMessageInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
