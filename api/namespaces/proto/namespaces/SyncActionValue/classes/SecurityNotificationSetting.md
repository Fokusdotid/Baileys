# Class: SecurityNotificationSetting

Defined in: [WAProto/index.d.ts:36085](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36085)

Represents a SecurityNotificationSetting.

## Implements

- [`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md)

## Constructors

### new SecurityNotificationSetting()

> **new SecurityNotificationSetting**(`properties`?): [`SecurityNotificationSetting`](SecurityNotificationSetting.md)

Defined in: [WAProto/index.d.ts:36091](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36091)

Constructs a new SecurityNotificationSetting.

#### Parameters

##### properties?

[`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md)

Properties to set

#### Returns

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

## Properties

### showNotification

> **showNotification**: `boolean`

Defined in: [WAProto/index.d.ts:36094](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36094)

SecurityNotificationSetting showNotification.

#### Implementation of

[`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md).[`showNotification`](../interfaces/ISecurityNotificationSetting.md#shownotification)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36164)

Converts this SecurityNotificationSetting to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SecurityNotificationSetting`](SecurityNotificationSetting.md)

Defined in: [WAProto/index.d.ts:36101](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36101)

Creates a new SecurityNotificationSetting instance using the specified properties.

#### Parameters

##### properties?

[`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md)

Properties to set

#### Returns

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

SecurityNotificationSetting instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SecurityNotificationSetting`](SecurityNotificationSetting.md)

Defined in: [WAProto/index.d.ts:36127](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36127)

Decodes a SecurityNotificationSetting message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

SecurityNotificationSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SecurityNotificationSetting`](SecurityNotificationSetting.md)

Defined in: [WAProto/index.d.ts:36136](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36136)

Decodes a SecurityNotificationSetting message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

SecurityNotificationSetting

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36109](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36109)

Encodes the specified SecurityNotificationSetting message. Does not implicitly [verify](SecurityNotificationSetting.md#verify) messages.

#### Parameters

##### message

[`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md)

SecurityNotificationSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36117](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36117)

Encodes the specified SecurityNotificationSetting message, length delimited. Does not implicitly [verify](SecurityNotificationSetting.md#verify) messages.

#### Parameters

##### message

[`ISecurityNotificationSetting`](../interfaces/ISecurityNotificationSetting.md)

SecurityNotificationSetting message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SecurityNotificationSetting`](SecurityNotificationSetting.md)

Defined in: [WAProto/index.d.ts:36150](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36150)

Creates a SecurityNotificationSetting message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

SecurityNotificationSetting

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36171](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36171)

Gets the default type url for SecurityNotificationSetting

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

Defined in: [WAProto/index.d.ts:36158](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36158)

Creates a plain object from a SecurityNotificationSetting message. Also converts values to other types if specified.

#### Parameters

##### message

[`SecurityNotificationSetting`](SecurityNotificationSetting.md)

SecurityNotificationSetting

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36143)

Verifies a SecurityNotificationSetting message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
