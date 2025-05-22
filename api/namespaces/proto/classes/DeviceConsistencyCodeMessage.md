# Class: DeviceConsistencyCodeMessage

Defined in: [WAProto/index.d.ts:6124](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6124)

Represents a DeviceConsistencyCodeMessage.

## Implements

- [`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md)

## Constructors

### new DeviceConsistencyCodeMessage()

> **new DeviceConsistencyCodeMessage**(`properties`?): [`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

Defined in: [WAProto/index.d.ts:6130](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6130)

Constructs a new DeviceConsistencyCodeMessage.

#### Parameters

##### properties?

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md)

Properties to set

#### Returns

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

## Properties

### generation

> **generation**: `number`

Defined in: [WAProto/index.d.ts:6133](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6133)

DeviceConsistencyCodeMessage generation.

#### Implementation of

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md).[`generation`](../interfaces/IDeviceConsistencyCodeMessage.md#generation)

***

### signature

> **signature**: `Uint8Array`

Defined in: [WAProto/index.d.ts:6136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6136)

DeviceConsistencyCodeMessage signature.

#### Implementation of

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md).[`signature`](../interfaces/IDeviceConsistencyCodeMessage.md#signature)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:6206](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6206)

Converts this DeviceConsistencyCodeMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

Defined in: [WAProto/index.d.ts:6143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6143)

Creates a new DeviceConsistencyCodeMessage instance using the specified properties.

#### Parameters

##### properties?

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md)

Properties to set

#### Returns

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

Defined in: [WAProto/index.d.ts:6169](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6169)

Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

Defined in: [WAProto/index.d.ts:6178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6178)

Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6151](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6151)

Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly [verify](DeviceConsistencyCodeMessage.md#verify) messages.

#### Parameters

##### message

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6159](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6159)

Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly [verify](DeviceConsistencyCodeMessage.md#verify) messages.

#### Parameters

##### message

[`IDeviceConsistencyCodeMessage`](../interfaces/IDeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

Defined in: [WAProto/index.d.ts:6192](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6192)

Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:6213](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6213)

Gets the default type url for DeviceConsistencyCodeMessage

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

Defined in: [WAProto/index.d.ts:6200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6200)

Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`DeviceConsistencyCodeMessage`](DeviceConsistencyCodeMessage.md)

DeviceConsistencyCodeMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6185)

Verifies a DeviceConsistencyCodeMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
