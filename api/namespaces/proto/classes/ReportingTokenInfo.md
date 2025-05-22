# Class: ReportingTokenInfo

Defined in: [WAProto/index.d.ts:29391](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29391)

Represents a ReportingTokenInfo.

## Implements

- [`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md)

## Constructors

### new ReportingTokenInfo()

> **new ReportingTokenInfo**(`properties`?): [`ReportingTokenInfo`](ReportingTokenInfo.md)

Defined in: [WAProto/index.d.ts:29397](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29397)

Constructs a new ReportingTokenInfo.

#### Parameters

##### properties?

[`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md)

Properties to set

#### Returns

[`ReportingTokenInfo`](ReportingTokenInfo.md)

## Properties

### reportingTag

> **reportingTag**: `Uint8Array`

Defined in: [WAProto/index.d.ts:29400](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29400)

ReportingTokenInfo reportingTag.

#### Implementation of

[`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md).[`reportingTag`](../interfaces/IReportingTokenInfo.md#reportingtag)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:29470](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29470)

Converts this ReportingTokenInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ReportingTokenInfo`](ReportingTokenInfo.md)

Defined in: [WAProto/index.d.ts:29407](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29407)

Creates a new ReportingTokenInfo instance using the specified properties.

#### Parameters

##### properties?

[`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md)

Properties to set

#### Returns

[`ReportingTokenInfo`](ReportingTokenInfo.md)

ReportingTokenInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ReportingTokenInfo`](ReportingTokenInfo.md)

Defined in: [WAProto/index.d.ts:29433](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29433)

Decodes a ReportingTokenInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ReportingTokenInfo`](ReportingTokenInfo.md)

ReportingTokenInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ReportingTokenInfo`](ReportingTokenInfo.md)

Defined in: [WAProto/index.d.ts:29442](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29442)

Decodes a ReportingTokenInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ReportingTokenInfo`](ReportingTokenInfo.md)

ReportingTokenInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29415](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29415)

Encodes the specified ReportingTokenInfo message. Does not implicitly [verify](ReportingTokenInfo.md#verify) messages.

#### Parameters

##### message

[`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md)

ReportingTokenInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:29423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29423)

Encodes the specified ReportingTokenInfo message, length delimited. Does not implicitly [verify](ReportingTokenInfo.md#verify) messages.

#### Parameters

##### message

[`IReportingTokenInfo`](../interfaces/IReportingTokenInfo.md)

ReportingTokenInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ReportingTokenInfo`](ReportingTokenInfo.md)

Defined in: [WAProto/index.d.ts:29456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29456)

Creates a ReportingTokenInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ReportingTokenInfo`](ReportingTokenInfo.md)

ReportingTokenInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:29477](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29477)

Gets the default type url for ReportingTokenInfo

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

Defined in: [WAProto/index.d.ts:29464](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29464)

Creates a plain object from a ReportingTokenInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`ReportingTokenInfo`](ReportingTokenInfo.md)

ReportingTokenInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:29449](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L29449)

Verifies a ReportingTokenInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
