# Class: BizIdentityInfo

Defined in: [WAProto/index.d.ts:1175](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1175)

Represents a BizIdentityInfo.

## Implements

- [`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md)

## Constructors

### new BizIdentityInfo()

> **new BizIdentityInfo**(`properties`?): [`BizIdentityInfo`](BizIdentityInfo.md)

Defined in: [WAProto/index.d.ts:1181](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1181)

Constructs a new BizIdentityInfo.

#### Parameters

##### properties?

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md)

Properties to set

#### Returns

[`BizIdentityInfo`](BizIdentityInfo.md)

## Properties

### actualActors

> **actualActors**: [`ActualActorsType`](../namespaces/BizIdentityInfo/enumerations/ActualActorsType.md)

Defined in: [WAProto/index.d.ts:1199](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1199)

BizIdentityInfo actualActors.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`actualActors`](../interfaces/IBizIdentityInfo.md#actualactors)

***

### featureControls

> **featureControls**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:1205](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1205)

BizIdentityInfo featureControls.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`featureControls`](../interfaces/IBizIdentityInfo.md#featurecontrols)

***

### hostStorage

> **hostStorage**: [`HostStorageType`](../namespaces/BizIdentityInfo/enumerations/HostStorageType.md)

Defined in: [WAProto/index.d.ts:1196](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1196)

BizIdentityInfo hostStorage.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`hostStorage`](../interfaces/IBizIdentityInfo.md#hoststorage)

***

### privacyModeTs

> **privacyModeTs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:1202](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1202)

BizIdentityInfo privacyModeTs.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`privacyModeTs`](../interfaces/IBizIdentityInfo.md#privacymodets)

***

### revoked

> **revoked**: `boolean`

Defined in: [WAProto/index.d.ts:1193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1193)

BizIdentityInfo revoked.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`revoked`](../interfaces/IBizIdentityInfo.md#revoked)

***

### signed

> **signed**: `boolean`

Defined in: [WAProto/index.d.ts:1190](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1190)

BizIdentityInfo signed.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`signed`](../interfaces/IBizIdentityInfo.md#signed)

***

### vlevel

> **vlevel**: [`VerifiedLevelValue`](../namespaces/BizIdentityInfo/enumerations/VerifiedLevelValue.md)

Defined in: [WAProto/index.d.ts:1184](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1184)

BizIdentityInfo vlevel.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`vlevel`](../interfaces/IBizIdentityInfo.md#vlevel)

***

### vnameCert?

> `optional` **vnameCert**: `null` \| [`IVerifiedNameCertificate`](../interfaces/IVerifiedNameCertificate.md)

Defined in: [WAProto/index.d.ts:1187](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1187)

BizIdentityInfo vnameCert.

#### Implementation of

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md).[`vnameCert`](../interfaces/IBizIdentityInfo.md#vnamecert)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:1275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1275)

Converts this BizIdentityInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`BizIdentityInfo`](BizIdentityInfo.md)

Defined in: [WAProto/index.d.ts:1212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1212)

Creates a new BizIdentityInfo instance using the specified properties.

#### Parameters

##### properties?

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md)

Properties to set

#### Returns

[`BizIdentityInfo`](BizIdentityInfo.md)

BizIdentityInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`BizIdentityInfo`](BizIdentityInfo.md)

Defined in: [WAProto/index.d.ts:1238](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1238)

Decodes a BizIdentityInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`BizIdentityInfo`](BizIdentityInfo.md)

BizIdentityInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`BizIdentityInfo`](BizIdentityInfo.md)

Defined in: [WAProto/index.d.ts:1247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1247)

Decodes a BizIdentityInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`BizIdentityInfo`](BizIdentityInfo.md)

BizIdentityInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1220](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1220)

Encodes the specified BizIdentityInfo message. Does not implicitly [verify](BizIdentityInfo.md#verify) messages.

#### Parameters

##### message

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md)

BizIdentityInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:1228](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1228)

Encodes the specified BizIdentityInfo message, length delimited. Does not implicitly [verify](BizIdentityInfo.md#verify) messages.

#### Parameters

##### message

[`IBizIdentityInfo`](../interfaces/IBizIdentityInfo.md)

BizIdentityInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`BizIdentityInfo`](BizIdentityInfo.md)

Defined in: [WAProto/index.d.ts:1261](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1261)

Creates a BizIdentityInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`BizIdentityInfo`](BizIdentityInfo.md)

BizIdentityInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:1282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1282)

Gets the default type url for BizIdentityInfo

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

Defined in: [WAProto/index.d.ts:1269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1269)

Creates a plain object from a BizIdentityInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`BizIdentityInfo`](BizIdentityInfo.md)

BizIdentityInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:1254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L1254)

Verifies a BizIdentityInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
