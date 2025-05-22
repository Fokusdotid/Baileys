# Class: PhoneNumberToLIDMapping

Defined in: [WAProto/index.d.ts:27411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27411)

Represents a PhoneNumberToLIDMapping.

## Implements

- [`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md)

## Constructors

### new PhoneNumberToLIDMapping()

> **new PhoneNumberToLIDMapping**(`properties`?): [`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

Defined in: [WAProto/index.d.ts:27417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27417)

Constructs a new PhoneNumberToLIDMapping.

#### Parameters

##### properties?

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md)

Properties to set

#### Returns

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

## Properties

### lidJid

> **lidJid**: `string`

Defined in: [WAProto/index.d.ts:27423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27423)

PhoneNumberToLIDMapping lidJid.

#### Implementation of

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md).[`lidJid`](../interfaces/IPhoneNumberToLIDMapping.md#lidjid)

***

### pnJid

> **pnJid**: `string`

Defined in: [WAProto/index.d.ts:27420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27420)

PhoneNumberToLIDMapping pnJid.

#### Implementation of

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md).[`pnJid`](../interfaces/IPhoneNumberToLIDMapping.md#pnjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:27493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27493)

Converts this PhoneNumberToLIDMapping to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

Defined in: [WAProto/index.d.ts:27430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27430)

Creates a new PhoneNumberToLIDMapping instance using the specified properties.

#### Parameters

##### properties?

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md)

Properties to set

#### Returns

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

Defined in: [WAProto/index.d.ts:27456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27456)

Decodes a PhoneNumberToLIDMapping message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

Defined in: [WAProto/index.d.ts:27465](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27465)

Decodes a PhoneNumberToLIDMapping message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27438)

Encodes the specified PhoneNumberToLIDMapping message. Does not implicitly [verify](PhoneNumberToLIDMapping.md#verify) messages.

#### Parameters

##### message

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:27446](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27446)

Encodes the specified PhoneNumberToLIDMapping message, length delimited. Does not implicitly [verify](PhoneNumberToLIDMapping.md#verify) messages.

#### Parameters

##### message

[`IPhoneNumberToLIDMapping`](../interfaces/IPhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

Defined in: [WAProto/index.d.ts:27479](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27479)

Creates a PhoneNumberToLIDMapping message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:27500](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27500)

Gets the default type url for PhoneNumberToLIDMapping

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

Defined in: [WAProto/index.d.ts:27487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27487)

Creates a plain object from a PhoneNumberToLIDMapping message. Also converts values to other types if specified.

#### Parameters

##### message

[`PhoneNumberToLIDMapping`](PhoneNumberToLIDMapping.md)

PhoneNumberToLIDMapping

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:27472](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L27472)

Verifies a PhoneNumberToLIDMapping message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
