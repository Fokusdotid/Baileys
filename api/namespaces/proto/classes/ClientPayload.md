# Class: ClientPayload

Defined in: [WAProto/index.d.ts:3266](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3266)

Represents a ClientPayload.

## Implements

- [`IClientPayload`](../interfaces/IClientPayload.md)

## Constructors

### new ClientPayload()

> **new ClientPayload**(`properties`?): [`ClientPayload`](ClientPayload.md)

Defined in: [WAProto/index.d.ts:3272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3272)

Constructs a new ClientPayload.

#### Parameters

##### properties?

[`IClientPayload`](../interfaces/IClientPayload.md)

Properties to set

#### Returns

[`ClientPayload`](ClientPayload.md)

## Properties

### connectAttemptCount

> **connectAttemptCount**: `number`

Defined in: [WAProto/index.d.ts:3308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3308)

ClientPayload connectAttemptCount.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`connectAttemptCount`](../interfaces/IClientPayload.md#connectattemptcount)

***

### connectReason

> **connectReason**: [`ConnectReason`](../namespaces/ClientPayload/enumerations/ConnectReason.md)

Defined in: [WAProto/index.d.ts:3299](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3299)

ClientPayload connectReason.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`connectReason`](../interfaces/IClientPayload.md#connectreason)

***

### connectType

> **connectType**: [`ConnectType`](../namespaces/ClientPayload/enumerations/ConnectType.md)

Defined in: [WAProto/index.d.ts:3296](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3296)

ClientPayload connectType.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`connectType`](../interfaces/IClientPayload.md#connecttype)

***

### device

> **device**: `number`

Defined in: [WAProto/index.d.ts:3311](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3311)

ClientPayload device.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`device`](../interfaces/IClientPayload.md#device)

***

### devicePairingData?

> `optional` **devicePairingData**: `null` \| [`IDevicePairingRegistrationData`](../namespaces/ClientPayload/interfaces/IDevicePairingRegistrationData.md)

Defined in: [WAProto/index.d.ts:3314](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3314)

ClientPayload devicePairingData.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`devicePairingData`](../interfaces/IClientPayload.md#devicepairingdata)

***

### dnsSource?

> `optional` **dnsSource**: `null` \| [`IDNSSource`](../namespaces/ClientPayload/interfaces/IDNSSource.md)

Defined in: [WAProto/index.d.ts:3305](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3305)

ClientPayload dnsSource.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`dnsSource`](../interfaces/IClientPayload.md#dnssource)

***

### fbAppId

> **fbAppId**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:3335](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3335)

ClientPayload fbAppId.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`fbAppId`](../interfaces/IClientPayload.md#fbappid)

***

### fbCat

> **fbCat**: `Uint8Array`

Defined in: [WAProto/index.d.ts:3320](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3320)

ClientPayload fbCat.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`fbCat`](../interfaces/IClientPayload.md#fbcat)

***

### fbDeviceId

> **fbDeviceId**: `Uint8Array`

Defined in: [WAProto/index.d.ts:3338](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3338)

ClientPayload fbDeviceId.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`fbDeviceId`](../interfaces/IClientPayload.md#fbdeviceid)

***

### fbUserAgent

> **fbUserAgent**: `Uint8Array`

Defined in: [WAProto/index.d.ts:3323](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3323)

ClientPayload fbUserAgent.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`fbUserAgent`](../interfaces/IClientPayload.md#fbuseragent)

***

### interopData?

> `optional` **interopData**: `null` \| [`IInteropData`](../namespaces/ClientPayload/interfaces/IInteropData.md)

Defined in: [WAProto/index.d.ts:3353](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3353)

ClientPayload interopData.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`interopData`](../interfaces/IClientPayload.md#interopdata)

***

### iosAppExtension

> **iosAppExtension**: [`IOSAppExtension`](../namespaces/ClientPayload/enumerations/IOSAppExtension.md)

Defined in: [WAProto/index.d.ts:3332](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3332)

ClientPayload iosAppExtension.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`iosAppExtension`](../interfaces/IClientPayload.md#iosappextension)

***

### lc

> **lc**: `number`

Defined in: [WAProto/index.d.ts:3329](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3329)

ClientPayload lc.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`lc`](../interfaces/IClientPayload.md#lc)

***

### memClass

> **memClass**: `number`

Defined in: [WAProto/index.d.ts:3350](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3350)

ClientPayload memClass.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`memClass`](../interfaces/IClientPayload.md#memclass)

***

### oc

> **oc**: `boolean`

Defined in: [WAProto/index.d.ts:3326](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3326)

ClientPayload oc.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`oc`](../interfaces/IClientPayload.md#oc)

***

### paddingBytes

> **paddingBytes**: `Uint8Array`

Defined in: [WAProto/index.d.ts:3344](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3344)

ClientPayload paddingBytes.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`paddingBytes`](../interfaces/IClientPayload.md#paddingbytes)

***

### passive

> **passive**: `boolean`

Defined in: [WAProto/index.d.ts:3278](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3278)

ClientPayload passive.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`passive`](../interfaces/IClientPayload.md#passive)

***

### product

> **product**: [`Product`](../namespaces/ClientPayload/enumerations/Product.md)

Defined in: [WAProto/index.d.ts:3317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3317)

ClientPayload product.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`product`](../interfaces/IClientPayload.md#product)

***

### pull

> **pull**: `boolean`

Defined in: [WAProto/index.d.ts:3341](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3341)

ClientPayload pull.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`pull`](../interfaces/IClientPayload.md#pull)

***

### pushName

> **pushName**: `string`

Defined in: [WAProto/index.d.ts:3287](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3287)

ClientPayload pushName.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`pushName`](../interfaces/IClientPayload.md#pushname)

***

### sessionId

> **sessionId**: `number`

Defined in: [WAProto/index.d.ts:3290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3290)

ClientPayload sessionId.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`sessionId`](../interfaces/IClientPayload.md#sessionid)

***

### shards

> **shards**: `number`[]

Defined in: [WAProto/index.d.ts:3302](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3302)

ClientPayload shards.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`shards`](../interfaces/IClientPayload.md#shards)

***

### shortConnect

> **shortConnect**: `boolean`

Defined in: [WAProto/index.d.ts:3293](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3293)

ClientPayload shortConnect.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`shortConnect`](../interfaces/IClientPayload.md#shortconnect)

***

### userAgent?

> `optional` **userAgent**: `null` \| [`IUserAgent`](../namespaces/ClientPayload/interfaces/IUserAgent.md)

Defined in: [WAProto/index.d.ts:3281](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3281)

ClientPayload userAgent.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`userAgent`](../interfaces/IClientPayload.md#useragent)

***

### username

> **username**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:3275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3275)

ClientPayload username.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`username`](../interfaces/IClientPayload.md#username)

***

### webInfo?

> `optional` **webInfo**: `null` \| [`IWebInfo`](../namespaces/ClientPayload/interfaces/IWebInfo.md)

Defined in: [WAProto/index.d.ts:3284](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3284)

ClientPayload webInfo.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`webInfo`](../interfaces/IClientPayload.md#webinfo)

***

### yearClass

> **yearClass**: `number`

Defined in: [WAProto/index.d.ts:3347](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3347)

ClientPayload yearClass.

#### Implementation of

[`IClientPayload`](../interfaces/IClientPayload.md).[`yearClass`](../interfaces/IClientPayload.md#yearclass)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:3423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3423)

Converts this ClientPayload to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ClientPayload`](ClientPayload.md)

Defined in: [WAProto/index.d.ts:3360](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3360)

Creates a new ClientPayload instance using the specified properties.

#### Parameters

##### properties?

[`IClientPayload`](../interfaces/IClientPayload.md)

Properties to set

#### Returns

[`ClientPayload`](ClientPayload.md)

ClientPayload instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ClientPayload`](ClientPayload.md)

Defined in: [WAProto/index.d.ts:3386](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3386)

Decodes a ClientPayload message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ClientPayload`](ClientPayload.md)

ClientPayload

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ClientPayload`](ClientPayload.md)

Defined in: [WAProto/index.d.ts:3395](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3395)

Decodes a ClientPayload message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ClientPayload`](ClientPayload.md)

ClientPayload

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3368](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3368)

Encodes the specified ClientPayload message. Does not implicitly [verify](ClientPayload.md#verify) messages.

#### Parameters

##### message

[`IClientPayload`](../interfaces/IClientPayload.md)

ClientPayload message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:3376](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3376)

Encodes the specified ClientPayload message, length delimited. Does not implicitly [verify](ClientPayload.md#verify) messages.

#### Parameters

##### message

[`IClientPayload`](../interfaces/IClientPayload.md)

ClientPayload message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ClientPayload`](ClientPayload.md)

Defined in: [WAProto/index.d.ts:3409](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3409)

Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ClientPayload`](ClientPayload.md)

ClientPayload

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:3430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3430)

Gets the default type url for ClientPayload

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

Defined in: [WAProto/index.d.ts:3417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3417)

Creates a plain object from a ClientPayload message. Also converts values to other types if specified.

#### Parameters

##### message

[`ClientPayload`](ClientPayload.md)

ClientPayload

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:3402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L3402)

Verifies a ClientPayload message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
