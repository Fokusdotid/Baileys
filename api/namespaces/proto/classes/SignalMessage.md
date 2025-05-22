# Class: SignalMessage

Defined in: [WAProto/index.d.ts:31092](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31092)

Represents a SignalMessage.

## Implements

- [`ISignalMessage`](../interfaces/ISignalMessage.md)

## Constructors

### new SignalMessage()

> **new SignalMessage**(`properties`?): [`SignalMessage`](SignalMessage.md)

Defined in: [WAProto/index.d.ts:31098](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31098)

Constructs a new SignalMessage.

#### Parameters

##### properties?

[`ISignalMessage`](../interfaces/ISignalMessage.md)

Properties to set

#### Returns

[`SignalMessage`](SignalMessage.md)

## Properties

### ciphertext

> **ciphertext**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31110](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31110)

SignalMessage ciphertext.

#### Implementation of

[`ISignalMessage`](../interfaces/ISignalMessage.md).[`ciphertext`](../interfaces/ISignalMessage.md#ciphertext)

***

### counter

> **counter**: `number`

Defined in: [WAProto/index.d.ts:31104](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31104)

SignalMessage counter.

#### Implementation of

[`ISignalMessage`](../interfaces/ISignalMessage.md).[`counter`](../interfaces/ISignalMessage.md#counter)

***

### previousCounter

> **previousCounter**: `number`

Defined in: [WAProto/index.d.ts:31107](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31107)

SignalMessage previousCounter.

#### Implementation of

[`ISignalMessage`](../interfaces/ISignalMessage.md).[`previousCounter`](../interfaces/ISignalMessage.md#previouscounter)

***

### ratchetKey

> **ratchetKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:31101](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31101)

SignalMessage ratchetKey.

#### Implementation of

[`ISignalMessage`](../interfaces/ISignalMessage.md).[`ratchetKey`](../interfaces/ISignalMessage.md#ratchetkey)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:31180](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31180)

Converts this SignalMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SignalMessage`](SignalMessage.md)

Defined in: [WAProto/index.d.ts:31117](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31117)

Creates a new SignalMessage instance using the specified properties.

#### Parameters

##### properties?

[`ISignalMessage`](../interfaces/ISignalMessage.md)

Properties to set

#### Returns

[`SignalMessage`](SignalMessage.md)

SignalMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SignalMessage`](SignalMessage.md)

Defined in: [WAProto/index.d.ts:31143](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31143)

Decodes a SignalMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SignalMessage`](SignalMessage.md)

SignalMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SignalMessage`](SignalMessage.md)

Defined in: [WAProto/index.d.ts:31152](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31152)

Decodes a SignalMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SignalMessage`](SignalMessage.md)

SignalMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31125](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31125)

Encodes the specified SignalMessage message. Does not implicitly [verify](SignalMessage.md#verify) messages.

#### Parameters

##### message

[`ISignalMessage`](../interfaces/ISignalMessage.md)

SignalMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:31133](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31133)

Encodes the specified SignalMessage message, length delimited. Does not implicitly [verify](SignalMessage.md#verify) messages.

#### Parameters

##### message

[`ISignalMessage`](../interfaces/ISignalMessage.md)

SignalMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SignalMessage`](SignalMessage.md)

Defined in: [WAProto/index.d.ts:31166](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31166)

Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SignalMessage`](SignalMessage.md)

SignalMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:31187](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31187)

Gets the default type url for SignalMessage

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

Defined in: [WAProto/index.d.ts:31174](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31174)

Creates a plain object from a SignalMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`SignalMessage`](SignalMessage.md)

SignalMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:31159](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L31159)

Verifies a SignalMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
