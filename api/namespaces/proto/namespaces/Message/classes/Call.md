# Class: Call

Defined in: [WAProto/index.d.ts:12915](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12915)

Represents a Call.

## Implements

- [`ICall`](../interfaces/ICall.md)

## Constructors

### new Call()

> **new Call**(`properties`?): [`Call`](Call.md)

Defined in: [WAProto/index.d.ts:12921](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12921)

Constructs a new Call.

#### Parameters

##### properties?

[`ICall`](../interfaces/ICall.md)

Properties to set

#### Returns

[`Call`](Call.md)

## Properties

### callKey

> **callKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:12924](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12924)

Call callKey.

#### Implementation of

[`ICall`](../interfaces/ICall.md).[`callKey`](../interfaces/ICall.md#callkey)

***

### conversionData

> **conversionData**: `Uint8Array`

Defined in: [WAProto/index.d.ts:12930](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12930)

Call conversionData.

#### Implementation of

[`ICall`](../interfaces/ICall.md).[`conversionData`](../interfaces/ICall.md#conversiondata)

***

### conversionDelaySeconds

> **conversionDelaySeconds**: `number`

Defined in: [WAProto/index.d.ts:12933](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12933)

Call conversionDelaySeconds.

#### Implementation of

[`ICall`](../interfaces/ICall.md).[`conversionDelaySeconds`](../interfaces/ICall.md#conversiondelayseconds)

***

### conversionSource

> **conversionSource**: `string`

Defined in: [WAProto/index.d.ts:12927](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12927)

Call conversionSource.

#### Implementation of

[`ICall`](../interfaces/ICall.md).[`conversionSource`](../interfaces/ICall.md#conversionsource)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:13003](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13003)

Converts this Call to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`Call`](Call.md)

Defined in: [WAProto/index.d.ts:12940](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12940)

Creates a new Call instance using the specified properties.

#### Parameters

##### properties?

[`ICall`](../interfaces/ICall.md)

Properties to set

#### Returns

[`Call`](Call.md)

Call instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`Call`](Call.md)

Defined in: [WAProto/index.d.ts:12966](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12966)

Decodes a Call message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`Call`](Call.md)

Call

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`Call`](Call.md)

Defined in: [WAProto/index.d.ts:12975](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12975)

Decodes a Call message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`Call`](Call.md)

Call

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12948)

Encodes the specified Call message. Does not implicitly [verify](Call.md#verify) messages.

#### Parameters

##### message

[`ICall`](../interfaces/ICall.md)

Call message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12956)

Encodes the specified Call message, length delimited. Does not implicitly [verify](Call.md#verify) messages.

#### Parameters

##### message

[`ICall`](../interfaces/ICall.md)

Call message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`Call`](Call.md)

Defined in: [WAProto/index.d.ts:12989](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12989)

Creates a Call message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`Call`](Call.md)

Call

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:13010](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L13010)

Gets the default type url for Call

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

Defined in: [WAProto/index.d.ts:12997](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12997)

Creates a plain object from a Call message. Also converts values to other types if specified.

#### Parameters

##### message

[`Call`](Call.md)

Call

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12982](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12982)

Verifies a Call message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
