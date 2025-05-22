# Class: Footer

Defined in: [WAProto/index.d.ts:17010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17010)

Represents a Footer.

## Implements

- [`IFooter`](../interfaces/IFooter.md)

## Constructors

### new Footer()

> **new Footer**(`properties`?): [`Footer`](Footer.md)

Defined in: [WAProto/index.d.ts:17016](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17016)

Constructs a new Footer.

#### Parameters

##### properties?

[`IFooter`](../interfaces/IFooter.md)

Properties to set

#### Returns

[`Footer`](Footer.md)

## Properties

### text

> **text**: `string`

Defined in: [WAProto/index.d.ts:17019](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17019)

Footer text.

#### Implementation of

[`IFooter`](../interfaces/IFooter.md).[`text`](../interfaces/IFooter.md#text)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:17089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17089)

Converts this Footer to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Footer`](Footer.md)

Defined in: [WAProto/index.d.ts:17026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17026)

Creates a new Footer instance using the specified properties.

#### Parameters

##### properties?

[`IFooter`](../interfaces/IFooter.md)

Properties to set

#### Returns

[`Footer`](Footer.md)

Footer instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Footer`](Footer.md)

Defined in: [WAProto/index.d.ts:17052](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17052)

Decodes a Footer message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Footer`](Footer.md)

Footer

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Footer`](Footer.md)

Defined in: [WAProto/index.d.ts:17061](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17061)

Decodes a Footer message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Footer`](Footer.md)

Footer

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17034](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17034)

Encodes the specified Footer message. Does not implicitly [verify](Footer.md#verify) messages.

#### Parameters

##### message

[`IFooter`](../interfaces/IFooter.md)

Footer message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:17042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17042)

Encodes the specified Footer message, length delimited. Does not implicitly [verify](Footer.md#verify) messages.

#### Parameters

##### message

[`IFooter`](../interfaces/IFooter.md)

Footer message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Footer`](Footer.md)

Defined in: [WAProto/index.d.ts:17075](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17075)

Creates a Footer message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Footer`](Footer.md)

Footer

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:17096](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17096)

Gets the default type url for Footer

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

Defined in: [WAProto/index.d.ts:17083](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17083)

Creates a plain object from a Footer message. Also converts values to other types if specified.

#### Parameters

##### message

[`Footer`](Footer.md)

Footer

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:17068](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L17068)

Verifies a Footer message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
