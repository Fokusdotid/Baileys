# Class: ActionLink

Defined in: [WAProto/index.d.ts:598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L598)

Represents an ActionLink.

## Implements

- [`IActionLink`](../interfaces/IActionLink.md)

## Constructors

### new ActionLink()

> **new ActionLink**(`properties`?): [`ActionLink`](ActionLink.md)

Defined in: [WAProto/index.d.ts:604](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L604)

Constructs a new ActionLink.

#### Parameters

##### properties?

[`IActionLink`](../interfaces/IActionLink.md)

Properties to set

#### Returns

[`ActionLink`](ActionLink.md)

## Properties

### buttonTitle

> **buttonTitle**: `string`

Defined in: [WAProto/index.d.ts:610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L610)

ActionLink buttonTitle.

#### Implementation of

[`IActionLink`](../interfaces/IActionLink.md).[`buttonTitle`](../interfaces/IActionLink.md#buttontitle)

***

### url

> **url**: `string`

Defined in: [WAProto/index.d.ts:607](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L607)

ActionLink url.

#### Implementation of

[`IActionLink`](../interfaces/IActionLink.md).[`url`](../interfaces/IActionLink.md#url)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:680](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L680)

Converts this ActionLink to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ActionLink`](ActionLink.md)

Defined in: [WAProto/index.d.ts:617](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L617)

Creates a new ActionLink instance using the specified properties.

#### Parameters

##### properties?

[`IActionLink`](../interfaces/IActionLink.md)

Properties to set

#### Returns

[`ActionLink`](ActionLink.md)

ActionLink instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ActionLink`](ActionLink.md)

Defined in: [WAProto/index.d.ts:643](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L643)

Decodes an ActionLink message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ActionLink`](ActionLink.md)

ActionLink

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ActionLink`](ActionLink.md)

Defined in: [WAProto/index.d.ts:652](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L652)

Decodes an ActionLink message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ActionLink`](ActionLink.md)

ActionLink

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:625](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L625)

Encodes the specified ActionLink message. Does not implicitly [verify](ActionLink.md#verify) messages.

#### Parameters

##### message

[`IActionLink`](../interfaces/IActionLink.md)

ActionLink message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L633)

Encodes the specified ActionLink message, length delimited. Does not implicitly [verify](ActionLink.md#verify) messages.

#### Parameters

##### message

[`IActionLink`](../interfaces/IActionLink.md)

ActionLink message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ActionLink`](ActionLink.md)

Defined in: [WAProto/index.d.ts:666](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L666)

Creates an ActionLink message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ActionLink`](ActionLink.md)

ActionLink

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:687](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L687)

Gets the default type url for ActionLink

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

Defined in: [WAProto/index.d.ts:674](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L674)

Creates a plain object from an ActionLink message. Also converts values to other types if specified.

#### Parameters

##### message

[`ActionLink`](ActionLink.md)

ActionLink

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:659](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L659)

Verifies an ActionLink message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
