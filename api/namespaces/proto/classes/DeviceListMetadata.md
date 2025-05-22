# Class: DeviceListMetadata

Defined in: [WAProto/index.d.ts:6245](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6245)

Represents a DeviceListMetadata.

## Implements

- [`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

## Constructors

### new DeviceListMetadata()

> **new DeviceListMetadata**(`properties`?): [`DeviceListMetadata`](DeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:6251](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6251)

Constructs a new DeviceListMetadata.

#### Parameters

##### properties?

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

Properties to set

#### Returns

[`DeviceListMetadata`](DeviceListMetadata.md)

## Properties

### receiverAccountType

> **receiverAccountType**: [`ADVEncryptionType`](../enumerations/ADVEncryptionType.md)

Defined in: [WAProto/index.d.ts:6266](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6266)

DeviceListMetadata receiverAccountType.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`receiverAccountType`](../interfaces/IDeviceListMetadata.md#receiveraccounttype)

***

### recipientKeyHash

> **recipientKeyHash**: `Uint8Array`

Defined in: [WAProto/index.d.ts:6269](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6269)

DeviceListMetadata recipientKeyHash.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`recipientKeyHash`](../interfaces/IDeviceListMetadata.md#recipientkeyhash)

***

### recipientKeyIndexes

> **recipientKeyIndexes**: `number`[]

Defined in: [WAProto/index.d.ts:6275](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6275)

DeviceListMetadata recipientKeyIndexes.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`recipientKeyIndexes`](../interfaces/IDeviceListMetadata.md#recipientkeyindexes)

***

### recipientTimestamp

> **recipientTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:6272](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6272)

DeviceListMetadata recipientTimestamp.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`recipientTimestamp`](../interfaces/IDeviceListMetadata.md#recipienttimestamp)

***

### senderAccountType

> **senderAccountType**: [`ADVEncryptionType`](../enumerations/ADVEncryptionType.md)

Defined in: [WAProto/index.d.ts:6263](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6263)

DeviceListMetadata senderAccountType.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`senderAccountType`](../interfaces/IDeviceListMetadata.md#senderaccounttype)

***

### senderKeyHash

> **senderKeyHash**: `Uint8Array`

Defined in: [WAProto/index.d.ts:6254](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6254)

DeviceListMetadata senderKeyHash.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`senderKeyHash`](../interfaces/IDeviceListMetadata.md#senderkeyhash)

***

### senderKeyIndexes

> **senderKeyIndexes**: `number`[]

Defined in: [WAProto/index.d.ts:6260](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6260)

DeviceListMetadata senderKeyIndexes.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`senderKeyIndexes`](../interfaces/IDeviceListMetadata.md#senderkeyindexes)

***

### senderTimestamp

> **senderTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:6257](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6257)

DeviceListMetadata senderTimestamp.

#### Implementation of

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md).[`senderTimestamp`](../interfaces/IDeviceListMetadata.md#sendertimestamp)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:6345](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6345)

Converts this DeviceListMetadata to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DeviceListMetadata`](DeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:6282](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6282)

Creates a new DeviceListMetadata instance using the specified properties.

#### Parameters

##### properties?

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

Properties to set

#### Returns

[`DeviceListMetadata`](DeviceListMetadata.md)

DeviceListMetadata instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DeviceListMetadata`](DeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:6308](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6308)

Decodes a DeviceListMetadata message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DeviceListMetadata`](DeviceListMetadata.md)

DeviceListMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DeviceListMetadata`](DeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:6317](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6317)

Decodes a DeviceListMetadata message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DeviceListMetadata`](DeviceListMetadata.md)

DeviceListMetadata

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6290](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6290)

Encodes the specified DeviceListMetadata message. Does not implicitly [verify](DeviceListMetadata.md#verify) messages.

#### Parameters

##### message

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

DeviceListMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:6298](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6298)

Encodes the specified DeviceListMetadata message, length delimited. Does not implicitly [verify](DeviceListMetadata.md#verify) messages.

#### Parameters

##### message

[`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

DeviceListMetadata message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DeviceListMetadata`](DeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:6331](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6331)

Creates a DeviceListMetadata message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DeviceListMetadata`](DeviceListMetadata.md)

DeviceListMetadata

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:6352](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6352)

Gets the default type url for DeviceListMetadata

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

Defined in: [WAProto/index.d.ts:6339](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6339)

Creates a plain object from a DeviceListMetadata message. Also converts values to other types if specified.

#### Parameters

##### message

[`DeviceListMetadata`](DeviceListMetadata.md)

DeviceListMetadata

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:6324](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L6324)

Verifies a DeviceListMetadata message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
