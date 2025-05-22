# Class: BizAccountLinkInfo

Defined in: [WAProto/index.d.ts:928](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L928)

Represents a BizAccountLinkInfo.

## Implements

- [`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md)

## Constructors

### new BizAccountLinkInfo()

> **new BizAccountLinkInfo**(`properties`?): [`BizAccountLinkInfo`](BizAccountLinkInfo.md)

Defined in: [WAProto/index.d.ts:934](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L934)

Constructs a new BizAccountLinkInfo.

#### Parameters

##### properties?

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md)

Properties to set

#### Returns

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

## Properties

### accountType

> **accountType**: [`ENTERPRISE`](../namespaces/BizAccountLinkInfo/enumerations/AccountType.md#enterprise)

Defined in: [WAProto/index.d.ts:949](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L949)

BizAccountLinkInfo accountType.

#### Implementation of

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md).[`accountType`](../interfaces/IBizAccountLinkInfo.md#accounttype)

***

### hostStorage

> **hostStorage**: [`HostStorageType`](../namespaces/BizAccountLinkInfo/enumerations/HostStorageType.md)

Defined in: [WAProto/index.d.ts:946](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L946)

BizAccountLinkInfo hostStorage.

#### Implementation of

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md).[`hostStorage`](../interfaces/IBizAccountLinkInfo.md#hoststorage)

***

### issueTime

> **issueTime**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L943)

BizAccountLinkInfo issueTime.

#### Implementation of

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md).[`issueTime`](../interfaces/IBizAccountLinkInfo.md#issuetime)

***

### whatsappAcctNumber

> **whatsappAcctNumber**: `string`

Defined in: [WAProto/index.d.ts:940](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L940)

BizAccountLinkInfo whatsappAcctNumber.

#### Implementation of

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md).[`whatsappAcctNumber`](../interfaces/IBizAccountLinkInfo.md#whatsappacctnumber)

***

### whatsappBizAcctFbid

> **whatsappBizAcctFbid**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:937](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L937)

BizAccountLinkInfo whatsappBizAcctFbid.

#### Implementation of

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md).[`whatsappBizAcctFbid`](../interfaces/IBizAccountLinkInfo.md#whatsappbizacctfbid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1019](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1019)

Converts this BizAccountLinkInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BizAccountLinkInfo`](BizAccountLinkInfo.md)

Defined in: [WAProto/index.d.ts:956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L956)

Creates a new BizAccountLinkInfo instance using the specified properties.

#### Parameters

##### properties?

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md)

Properties to set

#### Returns

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

BizAccountLinkInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BizAccountLinkInfo`](BizAccountLinkInfo.md)

Defined in: [WAProto/index.d.ts:982](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L982)

Decodes a BizAccountLinkInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

BizAccountLinkInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BizAccountLinkInfo`](BizAccountLinkInfo.md)

Defined in: [WAProto/index.d.ts:991](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L991)

Decodes a BizAccountLinkInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

BizAccountLinkInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:964](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L964)

Encodes the specified BizAccountLinkInfo message. Does not implicitly [verify](BizAccountLinkInfo.md#verify) messages.

#### Parameters

##### message

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md)

BizAccountLinkInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L972)

Encodes the specified BizAccountLinkInfo message, length delimited. Does not implicitly [verify](BizAccountLinkInfo.md#verify) messages.

#### Parameters

##### message

[`IBizAccountLinkInfo`](../interfaces/IBizAccountLinkInfo.md)

BizAccountLinkInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BizAccountLinkInfo`](BizAccountLinkInfo.md)

Defined in: [WAProto/index.d.ts:1005](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1005)

Creates a BizAccountLinkInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

BizAccountLinkInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1026](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1026)

Gets the default type url for BizAccountLinkInfo

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

Defined in: [WAProto/index.d.ts:1013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1013)

Creates a plain object from a BizAccountLinkInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`BizAccountLinkInfo`](BizAccountLinkInfo.md)

BizAccountLinkInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:998](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L998)

Verifies a BizAccountLinkInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
