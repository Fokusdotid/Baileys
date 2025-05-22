# Class: DeviceCapabilities

Defined in: [WAProto/index.d.ts:6014](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6014)

Represents a DeviceCapabilities.

## Implements

- [`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md)

## Constructors

### new DeviceCapabilities()

> **new DeviceCapabilities**(`properties`?): [`DeviceCapabilities`](DeviceCapabilities.md)

Defined in: [WAProto/index.d.ts:6020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6020)

Constructs a new DeviceCapabilities.

#### Parameters

##### properties?

[`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md)

Properties to set

#### Returns

[`DeviceCapabilities`](DeviceCapabilities.md)

## Properties

### chatLockSupportLevel

> **chatLockSupportLevel**: [`ChatLockSupportLevel`](../namespaces/DeviceCapabilities/enumerations/ChatLockSupportLevel.md)

Defined in: [WAProto/index.d.ts:6023](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6023)

DeviceCapabilities chatLockSupportLevel.

#### Implementation of

[`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md).[`chatLockSupportLevel`](../interfaces/IDeviceCapabilities.md#chatlocksupportlevel)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:6093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6093)

Converts this DeviceCapabilities to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DeviceCapabilities`](DeviceCapabilities.md)

Defined in: [WAProto/index.d.ts:6030](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6030)

Creates a new DeviceCapabilities instance using the specified properties.

#### Parameters

##### properties?

[`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md)

Properties to set

#### Returns

[`DeviceCapabilities`](DeviceCapabilities.md)

DeviceCapabilities instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DeviceCapabilities`](DeviceCapabilities.md)

Defined in: [WAProto/index.d.ts:6056](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6056)

Decodes a DeviceCapabilities message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DeviceCapabilities`](DeviceCapabilities.md)

DeviceCapabilities

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DeviceCapabilities`](DeviceCapabilities.md)

Defined in: [WAProto/index.d.ts:6065](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6065)

Decodes a DeviceCapabilities message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DeviceCapabilities`](DeviceCapabilities.md)

DeviceCapabilities

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6038](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6038)

Encodes the specified DeviceCapabilities message. Does not implicitly [verify](DeviceCapabilities.md#verify) messages.

#### Parameters

##### message

[`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md)

DeviceCapabilities message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6046](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6046)

Encodes the specified DeviceCapabilities message, length delimited. Does not implicitly [verify](DeviceCapabilities.md#verify) messages.

#### Parameters

##### message

[`IDeviceCapabilities`](../interfaces/IDeviceCapabilities.md)

DeviceCapabilities message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DeviceCapabilities`](DeviceCapabilities.md)

Defined in: [WAProto/index.d.ts:6079](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6079)

Creates a DeviceCapabilities message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DeviceCapabilities`](DeviceCapabilities.md)

DeviceCapabilities

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:6100](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6100)

Gets the default type url for DeviceCapabilities

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

Defined in: [WAProto/index.d.ts:6087](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6087)

Creates a plain object from a DeviceCapabilities message. Also converts values to other types if specified.

#### Parameters

##### message

[`DeviceCapabilities`](DeviceCapabilities.md)

DeviceCapabilities

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6072](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6072)

Verifies a DeviceCapabilities message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
