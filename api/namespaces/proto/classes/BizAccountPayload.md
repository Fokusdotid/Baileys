# Class: BizAccountPayload

Defined in: [WAProto/index.d.ts:1054](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1054)

Represents a BizAccountPayload.

## Implements

- [`IBizAccountPayload`](../interfaces/IBizAccountPayload.md)

## Constructors

### new BizAccountPayload()

> **new BizAccountPayload**(`properties`?): [`BizAccountPayload`](BizAccountPayload.md)

Defined in: [WAProto/index.d.ts:1060](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1060)

Constructs a new BizAccountPayload.

#### Parameters

##### properties?

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md)

Properties to set

#### Returns

[`BizAccountPayload`](BizAccountPayload.md)

## Properties

### bizAcctLinkInfo

> **bizAcctLinkInfo**: `Uint8Array`

Defined in: [WAProto/index.d.ts:1066](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1066)

BizAccountPayload bizAcctLinkInfo.

#### Implementation of

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md).[`bizAcctLinkInfo`](../interfaces/IBizAccountPayload.md#bizacctlinkinfo)

***

### vnameCert?

> `optional` **vnameCert**: `null` \| [`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:1063](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1063)

BizAccountPayload vnameCert.

#### Implementation of

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md).[`vnameCert`](../interfaces/IBizAccountPayload.md#vnamecert)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1136)

Converts this BizAccountPayload to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BizAccountPayload`](BizAccountPayload.md)

Defined in: [WAProto/index.d.ts:1073](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1073)

Creates a new BizAccountPayload instance using the specified properties.

#### Parameters

##### properties?

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md)

Properties to set

#### Returns

[`BizAccountPayload`](BizAccountPayload.md)

BizAccountPayload instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BizAccountPayload`](BizAccountPayload.md)

Defined in: [WAProto/index.d.ts:1099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1099)

Decodes a BizAccountPayload message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BizAccountPayload`](BizAccountPayload.md)

BizAccountPayload

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BizAccountPayload`](BizAccountPayload.md)

Defined in: [WAProto/index.d.ts:1108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1108)

Decodes a BizAccountPayload message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BizAccountPayload`](BizAccountPayload.md)

BizAccountPayload

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1081](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1081)

Encodes the specified BizAccountPayload message. Does not implicitly [verify](BizAccountPayload.md#verify) messages.

#### Parameters

##### message

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md)

BizAccountPayload message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1089](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1089)

Encodes the specified BizAccountPayload message, length delimited. Does not implicitly [verify](BizAccountPayload.md#verify) messages.

#### Parameters

##### message

[`IBizAccountPayload`](../interfaces/IBizAccountPayload.md)

BizAccountPayload message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BizAccountPayload`](BizAccountPayload.md)

Defined in: [WAProto/index.d.ts:1122](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1122)

Creates a BizAccountPayload message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BizAccountPayload`](BizAccountPayload.md)

BizAccountPayload

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1143)

Gets the default type url for BizAccountPayload

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

Defined in: [WAProto/index.d.ts:1130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1130)

Creates a plain object from a BizAccountPayload message. Also converts values to other types if specified.

#### Parameters

##### message

[`BizAccountPayload`](BizAccountPayload.md)

BizAccountPayload

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1115](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1115)

Verifies a BizAccountPayload message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
