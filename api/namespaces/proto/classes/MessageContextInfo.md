# Class: MessageContextInfo

Defined in: [WAProto/index.d.ts:24948](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24948)

Represents a MessageContextInfo.

## Implements

- [`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

## Constructors

### new MessageContextInfo()

> **new MessageContextInfo**(`properties`?): [`MessageContextInfo`](MessageContextInfo.md)

Defined in: [WAProto/index.d.ts:24954](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24954)

Constructs a new MessageContextInfo.

#### Parameters

##### properties?

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

Properties to set

#### Returns

[`MessageContextInfo`](MessageContextInfo.md)

## Properties

### botMessageSecret

> **botMessageSecret**: `Uint8Array`

Defined in: [WAProto/index.d.ts:24972](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24972)

MessageContextInfo botMessageSecret.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`botMessageSecret`](../interfaces/IMessageContextInfo.md#botmessagesecret)

***

### botMetadata?

> `optional` **botMetadata**: `null` \| [`IBotMetadata`](../interfaces/IBotMetadata.md)

Defined in: [WAProto/index.d.ts:24975](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24975)

MessageContextInfo botMetadata.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`botMetadata`](../interfaces/IMessageContextInfo.md#botmetadata)

***

### deviceListMetadata?

> `optional` **deviceListMetadata**: `null` \| [`IDeviceListMetadata`](../interfaces/IDeviceListMetadata.md)

Defined in: [WAProto/index.d.ts:24957](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24957)

MessageContextInfo deviceListMetadata.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`deviceListMetadata`](../interfaces/IMessageContextInfo.md#devicelistmetadata)

***

### deviceListMetadataVersion

> **deviceListMetadataVersion**: `number`

Defined in: [WAProto/index.d.ts:24960](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24960)

MessageContextInfo deviceListMetadataVersion.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`deviceListMetadataVersion`](../interfaces/IMessageContextInfo.md#devicelistmetadataversion)

***

### messageAddOnDurationInSecs

> **messageAddOnDurationInSecs**: `number`

Defined in: [WAProto/index.d.ts:24969](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24969)

MessageContextInfo messageAddOnDurationInSecs.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`messageAddOnDurationInSecs`](../interfaces/IMessageContextInfo.md#messageaddondurationinsecs)

***

### messageSecret

> **messageSecret**: `Uint8Array`

Defined in: [WAProto/index.d.ts:24963](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24963)

MessageContextInfo messageSecret.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`messageSecret`](../interfaces/IMessageContextInfo.md#messagesecret)

***

### paddingBytes

> **paddingBytes**: `Uint8Array`

Defined in: [WAProto/index.d.ts:24966](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24966)

MessageContextInfo paddingBytes.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`paddingBytes`](../interfaces/IMessageContextInfo.md#paddingbytes)

***

### reportingTokenVersion

> **reportingTokenVersion**: `number`

Defined in: [WAProto/index.d.ts:24978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24978)

MessageContextInfo reportingTokenVersion.

#### Implementation of

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md).[`reportingTokenVersion`](../interfaces/IMessageContextInfo.md#reportingtokenversion)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:25048](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25048)

Converts this MessageContextInfo to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`MessageContextInfo`](MessageContextInfo.md)

Defined in: [WAProto/index.d.ts:24985](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24985)

Creates a new MessageContextInfo instance using the specified properties.

#### Parameters

##### properties?

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

Properties to set

#### Returns

[`MessageContextInfo`](MessageContextInfo.md)

MessageContextInfo instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`MessageContextInfo`](MessageContextInfo.md)

Defined in: [WAProto/index.d.ts:25011](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25011)

Decodes a MessageContextInfo message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`MessageContextInfo`](MessageContextInfo.md)

MessageContextInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`MessageContextInfo`](MessageContextInfo.md)

Defined in: [WAProto/index.d.ts:25020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25020)

Decodes a MessageContextInfo message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`MessageContextInfo`](MessageContextInfo.md)

MessageContextInfo

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:24993](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L24993)

Encodes the specified MessageContextInfo message. Does not implicitly [verify](MessageContextInfo.md#verify) messages.

#### Parameters

##### message

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

MessageContextInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:25001](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25001)

Encodes the specified MessageContextInfo message, length delimited. Does not implicitly [verify](MessageContextInfo.md#verify) messages.

#### Parameters

##### message

[`IMessageContextInfo`](../interfaces/IMessageContextInfo.md)

MessageContextInfo message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`MessageContextInfo`](MessageContextInfo.md)

Defined in: [WAProto/index.d.ts:25034](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25034)

Creates a MessageContextInfo message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`MessageContextInfo`](MessageContextInfo.md)

MessageContextInfo

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:25055](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25055)

Gets the default type url for MessageContextInfo

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

Defined in: [WAProto/index.d.ts:25042](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25042)

Creates a plain object from a MessageContextInfo message. Also converts values to other types if specified.

#### Parameters

##### message

[`MessageContextInfo`](MessageContextInfo.md)

MessageContextInfo

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:25027](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L25027)

Verifies a MessageContextInfo message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
