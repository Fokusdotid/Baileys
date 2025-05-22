# Class: CtwaContextLinkData

Defined in: [WAProto/index.d.ts:3080](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3080)

Represents a CtwaContextLinkData.

## Implements

- [`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md)

## Constructors

### new CtwaContextLinkData()

> **new CtwaContextLinkData**(`properties`?): [`CtwaContextLinkData`](CtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:3086](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3086)

Constructs a new CtwaContextLinkData.

#### Parameters

##### properties?

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md)

Properties to set

#### Returns

[`CtwaContextLinkData`](CtwaContextLinkData.md)

## Properties

### context

> **context**: `string`

Defined in: [WAProto/index.d.ts:3089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3089)

CtwaContextLinkData context.

#### Implementation of

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md).[`context`](../interfaces/ICtwaContextLinkData.md#context)

***

### icebreaker

> **icebreaker**: `string`

Defined in: [WAProto/index.d.ts:3095](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3095)

CtwaContextLinkData icebreaker.

#### Implementation of

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md).[`icebreaker`](../interfaces/ICtwaContextLinkData.md#icebreaker)

***

### phone

> **phone**: `string`

Defined in: [WAProto/index.d.ts:3098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3098)

CtwaContextLinkData phone.

#### Implementation of

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md).[`phone`](../interfaces/ICtwaContextLinkData.md#phone)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [WAProto/index.d.ts:3092](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3092)

CtwaContextLinkData sourceUrl.

#### Implementation of

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md).[`sourceUrl`](../interfaces/ICtwaContextLinkData.md#sourceurl)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:3168](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3168)

Converts this CtwaContextLinkData to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`CtwaContextLinkData`](CtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:3105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3105)

Creates a new CtwaContextLinkData instance using the specified properties.

#### Parameters

##### properties?

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md)

Properties to set

#### Returns

[`CtwaContextLinkData`](CtwaContextLinkData.md)

CtwaContextLinkData instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`CtwaContextLinkData`](CtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:3131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3131)

Decodes a CtwaContextLinkData message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`CtwaContextLinkData`](CtwaContextLinkData.md)

CtwaContextLinkData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`CtwaContextLinkData`](CtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:3140](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3140)

Decodes a CtwaContextLinkData message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`CtwaContextLinkData`](CtwaContextLinkData.md)

CtwaContextLinkData

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3113](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3113)

Encodes the specified CtwaContextLinkData message. Does not implicitly [verify](CtwaContextLinkData.md#verify) messages.

#### Parameters

##### message

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md)

CtwaContextLinkData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3121](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3121)

Encodes the specified CtwaContextLinkData message, length delimited. Does not implicitly [verify](CtwaContextLinkData.md#verify) messages.

#### Parameters

##### message

[`ICtwaContextLinkData`](../interfaces/ICtwaContextLinkData.md)

CtwaContextLinkData message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`CtwaContextLinkData`](CtwaContextLinkData.md)

Defined in: [WAProto/index.d.ts:3154](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3154)

Creates a CtwaContextLinkData message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`CtwaContextLinkData`](CtwaContextLinkData.md)

CtwaContextLinkData

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:3175](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3175)

Gets the default type url for CtwaContextLinkData

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

Defined in: [WAProto/index.d.ts:3162](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3162)

Creates a plain object from a CtwaContextLinkData message. Also converts values to other types if specified.

#### Parameters

##### message

[`CtwaContextLinkData`](CtwaContextLinkData.md)

CtwaContextLinkData

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:3147](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3147)

Verifies a CtwaContextLinkData message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
