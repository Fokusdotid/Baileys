# Class: DeviceProps

Defined in: [WAProto/index.d.ts:6375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6375)

Represents a DeviceProps.

## Implements

- [`IDeviceProps`](../interfaces/IDeviceProps.md)

## Constructors

### new DeviceProps()

> **new DeviceProps**(`properties`?): [`DeviceProps`](DeviceProps.md)

Defined in: [WAProto/index.d.ts:6381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6381)

Constructs a new DeviceProps.

#### Parameters

##### properties?

[`IDeviceProps`](../interfaces/IDeviceProps.md)

Properties to set

#### Returns

[`DeviceProps`](DeviceProps.md)

## Properties

### historySyncConfig?

> `optional` **historySyncConfig**: `null` \| [`IHistorySyncConfig`](../namespaces/DeviceProps/interfaces/IHistorySyncConfig.md)

Defined in: [WAProto/index.d.ts:6396](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6396)

DeviceProps historySyncConfig.

#### Implementation of

[`IDeviceProps`](../interfaces/IDeviceProps.md).[`historySyncConfig`](../interfaces/IDeviceProps.md#historysyncconfig)

***

### os

> **os**: `string`

Defined in: [WAProto/index.d.ts:6384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6384)

DeviceProps os.

#### Implementation of

[`IDeviceProps`](../interfaces/IDeviceProps.md).[`os`](../interfaces/IDeviceProps.md#os)

***

### platformType

> **platformType**: [`PlatformType`](../namespaces/DeviceProps/enumerations/PlatformType.md)

Defined in: [WAProto/index.d.ts:6390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6390)

DeviceProps platformType.

#### Implementation of

[`IDeviceProps`](../interfaces/IDeviceProps.md).[`platformType`](../interfaces/IDeviceProps.md#platformtype)

***

### requireFullSync

> **requireFullSync**: `boolean`

Defined in: [WAProto/index.d.ts:6393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6393)

DeviceProps requireFullSync.

#### Implementation of

[`IDeviceProps`](../interfaces/IDeviceProps.md).[`requireFullSync`](../interfaces/IDeviceProps.md#requirefullsync)

***

### version?

> `optional` **version**: `null` \| [`IAppVersion`](../namespaces/DeviceProps/interfaces/IAppVersion.md)

Defined in: [WAProto/index.d.ts:6387](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6387)

DeviceProps version.

#### Implementation of

[`IDeviceProps`](../interfaces/IDeviceProps.md).[`version`](../interfaces/IDeviceProps.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:6466](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6466)

Converts this DeviceProps to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DeviceProps`](DeviceProps.md)

Defined in: [WAProto/index.d.ts:6403](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6403)

Creates a new DeviceProps instance using the specified properties.

#### Parameters

##### properties?

[`IDeviceProps`](../interfaces/IDeviceProps.md)

Properties to set

#### Returns

[`DeviceProps`](DeviceProps.md)

DeviceProps instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DeviceProps`](DeviceProps.md)

Defined in: [WAProto/index.d.ts:6429](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6429)

Decodes a DeviceProps message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DeviceProps`](DeviceProps.md)

DeviceProps

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DeviceProps`](DeviceProps.md)

Defined in: [WAProto/index.d.ts:6438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6438)

Decodes a DeviceProps message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DeviceProps`](DeviceProps.md)

DeviceProps

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6411)

Encodes the specified DeviceProps message. Does not implicitly [verify](DeviceProps.md#verify) messages.

#### Parameters

##### message

[`IDeviceProps`](../interfaces/IDeviceProps.md)

DeviceProps message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6419](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6419)

Encodes the specified DeviceProps message, length delimited. Does not implicitly [verify](DeviceProps.md#verify) messages.

#### Parameters

##### message

[`IDeviceProps`](../interfaces/IDeviceProps.md)

DeviceProps message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DeviceProps`](DeviceProps.md)

Defined in: [WAProto/index.d.ts:6452](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6452)

Creates a DeviceProps message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DeviceProps`](DeviceProps.md)

DeviceProps

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:6473](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6473)

Gets the default type url for DeviceProps

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

Defined in: [WAProto/index.d.ts:6460](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6460)

Creates a plain object from a DeviceProps message. Also converts values to other types if specified.

#### Parameters

##### message

[`DeviceProps`](DeviceProps.md)

DeviceProps

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6445](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6445)

Verifies a DeviceProps message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
