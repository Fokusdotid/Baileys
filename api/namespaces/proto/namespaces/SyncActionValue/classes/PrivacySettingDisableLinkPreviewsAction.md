# Class: PrivacySettingDisableLinkPreviewsAction

Defined in: [WAProto/index.d.ts:35479](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35479)

Represents a PrivacySettingDisableLinkPreviewsAction.

## Implements

- [`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md)

## Constructors

### new PrivacySettingDisableLinkPreviewsAction()

> **new PrivacySettingDisableLinkPreviewsAction**(`properties`?): [`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

Defined in: [WAProto/index.d.ts:35485](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35485)

Constructs a new PrivacySettingDisableLinkPreviewsAction.

#### Parameters

##### properties?

[`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md)

Properties to set

#### Returns

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

## Properties

### isPreviewsDisabled

> **isPreviewsDisabled**: `boolean`

Defined in: [WAProto/index.d.ts:35488](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35488)

PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled.

#### Implementation of

[`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md).[`isPreviewsDisabled`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md#ispreviewsdisabled)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35558](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35558)

Converts this PrivacySettingDisableLinkPreviewsAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

Defined in: [WAProto/index.d.ts:35495](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35495)

Creates a new PrivacySettingDisableLinkPreviewsAction instance using the specified properties.

#### Parameters

##### properties?

[`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md)

Properties to set

#### Returns

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

Defined in: [WAProto/index.d.ts:35521](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35521)

Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

Defined in: [WAProto/index.d.ts:35530](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35530)

Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35503](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35503)

Encodes the specified PrivacySettingDisableLinkPreviewsAction message. Does not implicitly [verify](PrivacySettingDisableLinkPreviewsAction.md#verify) messages.

#### Parameters

##### message

[`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35511](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35511)

Encodes the specified PrivacySettingDisableLinkPreviewsAction message, length delimited. Does not implicitly [verify](PrivacySettingDisableLinkPreviewsAction.md#verify) messages.

#### Parameters

##### message

[`IPrivacySettingDisableLinkPreviewsAction`](../interfaces/IPrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

Defined in: [WAProto/index.d.ts:35544](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35544)

Creates a PrivacySettingDisableLinkPreviewsAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35565](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35565)

Gets the default type url for PrivacySettingDisableLinkPreviewsAction

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

Defined in: [WAProto/index.d.ts:35552](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35552)

Creates a plain object from a PrivacySettingDisableLinkPreviewsAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`PrivacySettingDisableLinkPreviewsAction`](PrivacySettingDisableLinkPreviewsAction.md)

PrivacySettingDisableLinkPreviewsAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35537](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35537)

Verifies a PrivacySettingDisableLinkPreviewsAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
