# Class: PrivacySettingRelayAllCalls

Defined in: [WAProto/index.d.ts:35576](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35576)

Represents a PrivacySettingRelayAllCalls.

## Implements

- [`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md)

## Constructors

### new PrivacySettingRelayAllCalls()

> **new PrivacySettingRelayAllCalls**(`properties`?): [`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

Defined in: [WAProto/index.d.ts:35582](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35582)

Constructs a new PrivacySettingRelayAllCalls.

#### Parameters

##### properties?

[`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md)

Properties to set

#### Returns

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

## Properties

### isEnabled

> **isEnabled**: `boolean`

Defined in: [WAProto/index.d.ts:35585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35585)

PrivacySettingRelayAllCalls isEnabled.

#### Implementation of

[`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md).[`isEnabled`](../interfaces/IPrivacySettingRelayAllCalls.md#isenabled)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:35655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35655)

Converts this PrivacySettingRelayAllCalls to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

Defined in: [WAProto/index.d.ts:35592](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35592)

Creates a new PrivacySettingRelayAllCalls instance using the specified properties.

#### Parameters

##### properties?

[`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md)

Properties to set

#### Returns

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

Defined in: [WAProto/index.d.ts:35618](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35618)

Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

Defined in: [WAProto/index.d.ts:35627](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35627)

Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35600](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35600)

Encodes the specified PrivacySettingRelayAllCalls message. Does not implicitly [verify](PrivacySettingRelayAllCalls.md#verify) messages.

#### Parameters

##### message

[`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:35608](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35608)

Encodes the specified PrivacySettingRelayAllCalls message, length delimited. Does not implicitly [verify](PrivacySettingRelayAllCalls.md#verify) messages.

#### Parameters

##### message

[`IPrivacySettingRelayAllCalls`](../interfaces/IPrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

Defined in: [WAProto/index.d.ts:35641](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35641)

Creates a PrivacySettingRelayAllCalls message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:35662](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35662)

Gets the default type url for PrivacySettingRelayAllCalls

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

Defined in: [WAProto/index.d.ts:35649](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35649)

Creates a plain object from a PrivacySettingRelayAllCalls message. Also converts values to other types if specified.

#### Parameters

##### message

[`PrivacySettingRelayAllCalls`](PrivacySettingRelayAllCalls.md)

PrivacySettingRelayAllCalls

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:35634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L35634)

Verifies a PrivacySettingRelayAllCalls message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
