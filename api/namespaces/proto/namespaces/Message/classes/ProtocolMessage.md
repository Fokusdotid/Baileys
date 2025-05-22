# Class: ProtocolMessage

Defined in: [WAProto/index.d.ts:22531](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22531)

Represents a ProtocolMessage.

## Implements

- [`IProtocolMessage`](../interfaces/IProtocolMessage.md)

## Constructors

### new ProtocolMessage()

> **new ProtocolMessage**(`properties`?): [`ProtocolMessage`](ProtocolMessage.md)

Defined in: [WAProto/index.d.ts:22537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22537)

Constructs a new ProtocolMessage.

#### Parameters

##### properties?

[`IProtocolMessage`](../interfaces/IProtocolMessage.md)

Properties to set

#### Returns

[`ProtocolMessage`](ProtocolMessage.md)

## Properties

### appStateFatalExceptionNotification?

> `optional` **appStateFatalExceptionNotification**: `null` \| [`IAppStateFatalExceptionNotification`](../interfaces/IAppStateFatalExceptionNotification.md)

Defined in: [WAProto/index.d.ts:22564](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22564)

ProtocolMessage appStateFatalExceptionNotification.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`appStateFatalExceptionNotification`](../interfaces/IProtocolMessage.md#appstatefatalexceptionnotification)

***

### appStateSyncKeyRequest?

> `optional` **appStateSyncKeyRequest**: `null` \| [`IAppStateSyncKeyRequest`](../interfaces/IAppStateSyncKeyRequest.md)

Defined in: [WAProto/index.d.ts:22558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22558)

ProtocolMessage appStateSyncKeyRequest.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`appStateSyncKeyRequest`](../interfaces/IProtocolMessage.md#appstatesynckeyrequest)

***

### appStateSyncKeyShare?

> `optional` **appStateSyncKeyShare**: `null` \| [`IAppStateSyncKeyShare`](../interfaces/IAppStateSyncKeyShare.md)

Defined in: [WAProto/index.d.ts:22555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22555)

ProtocolMessage appStateSyncKeyShare.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`appStateSyncKeyShare`](../interfaces/IProtocolMessage.md#appstatesynckeyshare)

***

### botFeedbackMessage?

> `optional` **botFeedbackMessage**: `null` \| [`IBotFeedbackMessage`](../interfaces/IBotFeedbackMessage.md)

Defined in: [WAProto/index.d.ts:22582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22582)

ProtocolMessage botFeedbackMessage.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`botFeedbackMessage`](../interfaces/IProtocolMessage.md#botfeedbackmessage)

***

### disappearingMode?

> `optional` **disappearingMode**: `null` \| [`IDisappearingMode`](../../../interfaces/IDisappearingMode.md)

Defined in: [WAProto/index.d.ts:22567](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22567)

ProtocolMessage disappearingMode.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`disappearingMode`](../interfaces/IProtocolMessage.md#disappearingmode)

***

### editedMessage?

> `optional` **editedMessage**: `null` \| [`IMessage`](../../../interfaces/IMessage.md)

Defined in: [WAProto/index.d.ts:22570](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22570)

ProtocolMessage editedMessage.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`editedMessage`](../interfaces/IProtocolMessage.md#editedmessage)

***

### ephemeralExpiration

> **ephemeralExpiration**: `number`

Defined in: [WAProto/index.d.ts:22546](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22546)

ProtocolMessage ephemeralExpiration.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`ephemeralExpiration`](../interfaces/IProtocolMessage.md#ephemeralexpiration)

***

### ephemeralSettingTimestamp

> **ephemeralSettingTimestamp**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:22549](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22549)

ProtocolMessage ephemeralSettingTimestamp.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`ephemeralSettingTimestamp`](../interfaces/IProtocolMessage.md#ephemeralsettingtimestamp)

***

### historySyncNotification?

> `optional` **historySyncNotification**: `null` \| [`IHistorySyncNotification`](../interfaces/IHistorySyncNotification.md)

Defined in: [WAProto/index.d.ts:22552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22552)

ProtocolMessage historySyncNotification.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`historySyncNotification`](../interfaces/IProtocolMessage.md#historysyncnotification)

***

### initialSecurityNotificationSettingSync?

> `optional` **initialSecurityNotificationSettingSync**: `null` \| [`IInitialSecurityNotificationSettingSync`](../interfaces/IInitialSecurityNotificationSettingSync.md)

Defined in: [WAProto/index.d.ts:22561](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22561)

ProtocolMessage initialSecurityNotificationSettingSync.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`initialSecurityNotificationSettingSync`](../interfaces/IProtocolMessage.md#initialsecuritynotificationsettingsync)

***

### invokerJid

> **invokerJid**: `string`

Defined in: [WAProto/index.d.ts:22585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22585)

ProtocolMessage invokerJid.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`invokerJid`](../interfaces/IProtocolMessage.md#invokerjid)

***

### key?

> `optional` **key**: `null` \| [`IMessageKey`](../../../interfaces/IMessageKey.md)

Defined in: [WAProto/index.d.ts:22540](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22540)

ProtocolMessage key.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`key`](../interfaces/IProtocolMessage.md#key)

***

### mediaNotifyMessage?

> `optional` **mediaNotifyMessage**: `null` \| [`IMediaNotifyMessage`](../../../interfaces/IMediaNotifyMessage.md)

Defined in: [WAProto/index.d.ts:22591](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22591)

ProtocolMessage mediaNotifyMessage.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`mediaNotifyMessage`](../interfaces/IProtocolMessage.md#medianotifymessage)

***

### peerDataOperationRequestMessage?

> `optional` **peerDataOperationRequestMessage**: `null` \| [`IPeerDataOperationRequestMessage`](../interfaces/IPeerDataOperationRequestMessage.md)

Defined in: [WAProto/index.d.ts:22576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22576)

ProtocolMessage peerDataOperationRequestMessage.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`peerDataOperationRequestMessage`](../interfaces/IProtocolMessage.md#peerdataoperationrequestmessage)

***

### peerDataOperationRequestResponseMessage?

> `optional` **peerDataOperationRequestResponseMessage**: `null` \| [`IPeerDataOperationRequestResponseMessage`](../interfaces/IPeerDataOperationRequestResponseMessage.md)

Defined in: [WAProto/index.d.ts:22579](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22579)

ProtocolMessage peerDataOperationRequestResponseMessage.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`peerDataOperationRequestResponseMessage`](../interfaces/IProtocolMessage.md#peerdataoperationrequestresponsemessage)

***

### requestWelcomeMessageMetadata?

> `optional` **requestWelcomeMessageMetadata**: `null` \| [`IRequestWelcomeMessageMetadata`](../interfaces/IRequestWelcomeMessageMetadata.md)

Defined in: [WAProto/index.d.ts:22588](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22588)

ProtocolMessage requestWelcomeMessageMetadata.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`requestWelcomeMessageMetadata`](../interfaces/IProtocolMessage.md#requestwelcomemessagemetadata)

***

### timestampMs

> **timestampMs**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:22573](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22573)

ProtocolMessage timestampMs.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`timestampMs`](../interfaces/IProtocolMessage.md#timestampms)

***

### type

> **type**: [`Type`](../namespaces/ProtocolMessage/enumerations/Type.md)

Defined in: [WAProto/index.d.ts:22543](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22543)

ProtocolMessage type.

#### Implementation of

[`IProtocolMessage`](../interfaces/IProtocolMessage.md).[`type`](../interfaces/IProtocolMessage.md#type)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:22661](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22661)

Converts this ProtocolMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ProtocolMessage`](ProtocolMessage.md)

Defined in: [WAProto/index.d.ts:22598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22598)

Creates a new ProtocolMessage instance using the specified properties.

#### Parameters

##### properties?

[`IProtocolMessage`](../interfaces/IProtocolMessage.md)

Properties to set

#### Returns

[`ProtocolMessage`](ProtocolMessage.md)

ProtocolMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ProtocolMessage`](ProtocolMessage.md)

Defined in: [WAProto/index.d.ts:22624](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22624)

Decodes a ProtocolMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ProtocolMessage`](ProtocolMessage.md)

ProtocolMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ProtocolMessage`](ProtocolMessage.md)

Defined in: [WAProto/index.d.ts:22633](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22633)

Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ProtocolMessage`](ProtocolMessage.md)

ProtocolMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22606](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22606)

Encodes the specified ProtocolMessage message. Does not implicitly [verify](ProtocolMessage.md#verify) messages.

#### Parameters

##### message

[`IProtocolMessage`](../interfaces/IProtocolMessage.md)

ProtocolMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:22614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22614)

Encodes the specified ProtocolMessage message, length delimited. Does not implicitly [verify](ProtocolMessage.md#verify) messages.

#### Parameters

##### message

[`IProtocolMessage`](../interfaces/IProtocolMessage.md)

ProtocolMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ProtocolMessage`](ProtocolMessage.md)

Defined in: [WAProto/index.d.ts:22647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22647)

Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ProtocolMessage`](ProtocolMessage.md)

ProtocolMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:22668](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22668)

Gets the default type url for ProtocolMessage

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

Defined in: [WAProto/index.d.ts:22655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22655)

Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`ProtocolMessage`](ProtocolMessage.md)

ProtocolMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:22640](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L22640)

Verifies a ProtocolMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
