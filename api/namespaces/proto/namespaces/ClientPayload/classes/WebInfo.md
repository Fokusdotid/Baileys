# Class: WebInfo

Defined in: [WAProto/index.d.ts:4222](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4222)

Represents a WebInfo.

## Implements

- [`IWebInfo`](../interfaces/IWebInfo.md)

## Constructors

### new WebInfo()

> **new WebInfo**(`properties`?): [`WebInfo`](WebInfo.md)

Defined in: [WAProto/index.d.ts:4228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4228)

Constructs a new WebInfo.

#### Parameters

##### properties?

[`IWebInfo`](../interfaces/IWebInfo.md)

Properties to set

#### Returns

[`WebInfo`](WebInfo.md)

## Properties

### refToken

> **refToken**: `string`

Defined in: [WAProto/index.d.ts:4231](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4231)

WebInfo refToken.

#### Implementation of

[`IWebInfo`](../interfaces/IWebInfo.md).[`refToken`](../interfaces/IWebInfo.md#reftoken)

***

### version

> **version**: `string`

Defined in: [WAProto/index.d.ts:4234](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4234)

WebInfo version.

#### Implementation of

[`IWebInfo`](../interfaces/IWebInfo.md).[`version`](../interfaces/IWebInfo.md#version)

***

### webdPayload?

> `optional` **webdPayload**: `null` \| [`IWebdPayload`](../namespaces/WebInfo/interfaces/IWebdPayload.md)

Defined in: [WAProto/index.d.ts:4237](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4237)

WebInfo webdPayload.

#### Implementation of

[`IWebInfo`](../interfaces/IWebInfo.md).[`webdPayload`](../interfaces/IWebInfo.md#webdpayload)

***

### webSubPlatform

> **webSubPlatform**: [`WebSubPlatform`](../namespaces/WebInfo/enumerations/WebSubPlatform.md)

Defined in: [WAProto/index.d.ts:4240](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4240)

WebInfo webSubPlatform.

#### Implementation of

[`IWebInfo`](../interfaces/IWebInfo.md).[`webSubPlatform`](../interfaces/IWebInfo.md#websubplatform)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:4310](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4310)

Converts this WebInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`WebInfo`](WebInfo.md)

Defined in: [WAProto/index.d.ts:4247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4247)

Creates a new WebInfo instance using the specified properties.

#### Parameters

##### properties?

[`IWebInfo`](../interfaces/IWebInfo.md)

Properties to set

#### Returns

[`WebInfo`](WebInfo.md)

WebInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`WebInfo`](WebInfo.md)

Defined in: [WAProto/index.d.ts:4273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4273)

Decodes a WebInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`WebInfo`](WebInfo.md)

WebInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`WebInfo`](WebInfo.md)

Defined in: [WAProto/index.d.ts:4282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4282)

Decodes a WebInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`WebInfo`](WebInfo.md)

WebInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4255](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4255)

Encodes the specified WebInfo message. Does not implicitly [verify](WebInfo.md#verify) messages.

#### Parameters

##### message

[`IWebInfo`](../interfaces/IWebInfo.md)

WebInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:4263](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4263)

Encodes the specified WebInfo message, length delimited. Does not implicitly [verify](WebInfo.md#verify) messages.

#### Parameters

##### message

[`IWebInfo`](../interfaces/IWebInfo.md)

WebInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`WebInfo`](WebInfo.md)

Defined in: [WAProto/index.d.ts:4296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4296)

Creates a WebInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`WebInfo`](WebInfo.md)

WebInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:4317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4317)

Gets the default type url for WebInfo

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

Defined in: [WAProto/index.d.ts:4304](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4304)

Creates a plain object from a WebInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`WebInfo`](WebInfo.md)

WebInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:4289](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L4289)

Verifies a WebInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
