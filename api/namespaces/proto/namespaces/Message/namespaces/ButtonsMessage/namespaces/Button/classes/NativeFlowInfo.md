# Class: NativeFlowInfo

Defined in: [WAProto/index.d.ts:12659](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12659)

Represents a NativeFlowInfo.

## Implements

- [`INativeFlowInfo`](../interfaces/INativeFlowInfo.md)

## Constructors

### new NativeFlowInfo()

> **new NativeFlowInfo**(`properties`?): [`NativeFlowInfo`](NativeFlowInfo.md)

Defined in: [WAProto/index.d.ts:12665](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12665)

Constructs a new NativeFlowInfo.

#### Parameters

##### properties?

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md)

Properties to set

#### Returns

[`NativeFlowInfo`](NativeFlowInfo.md)

## Properties

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:12668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12668)

NativeFlowInfo name.

#### Implementation of

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md).[`name`](../interfaces/INativeFlowInfo.md#name)

***

### paramsJson

> **paramsJson**: `string`

Defined in: [WAProto/index.d.ts:12671](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12671)

NativeFlowInfo paramsJson.

#### Implementation of

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md).[`paramsJson`](../interfaces/INativeFlowInfo.md#paramsjson)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:12741](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12741)

Converts this NativeFlowInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NativeFlowInfo`](NativeFlowInfo.md)

Defined in: [WAProto/index.d.ts:12678](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12678)

Creates a new NativeFlowInfo instance using the specified properties.

#### Parameters

##### properties?

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md)

Properties to set

#### Returns

[`NativeFlowInfo`](NativeFlowInfo.md)

NativeFlowInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NativeFlowInfo`](NativeFlowInfo.md)

Defined in: [WAProto/index.d.ts:12704](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12704)

Decodes a NativeFlowInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NativeFlowInfo`](NativeFlowInfo.md)

NativeFlowInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NativeFlowInfo`](NativeFlowInfo.md)

Defined in: [WAProto/index.d.ts:12713](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12713)

Decodes a NativeFlowInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NativeFlowInfo`](NativeFlowInfo.md)

NativeFlowInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12686](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12686)

Encodes the specified NativeFlowInfo message. Does not implicitly [verify](NativeFlowInfo.md#verify) messages.

#### Parameters

##### message

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md)

NativeFlowInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:12694](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12694)

Encodes the specified NativeFlowInfo message, length delimited. Does not implicitly [verify](NativeFlowInfo.md#verify) messages.

#### Parameters

##### message

[`INativeFlowInfo`](../interfaces/INativeFlowInfo.md)

NativeFlowInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NativeFlowInfo`](NativeFlowInfo.md)

Defined in: [WAProto/index.d.ts:12727](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12727)

Creates a NativeFlowInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NativeFlowInfo`](NativeFlowInfo.md)

NativeFlowInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:12748](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12748)

Gets the default type url for NativeFlowInfo

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

Defined in: [WAProto/index.d.ts:12735](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12735)

Creates a plain object from a NativeFlowInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`NativeFlowInfo`](NativeFlowInfo.md)

NativeFlowInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:12720](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L12720)

Verifies a NativeFlowInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
