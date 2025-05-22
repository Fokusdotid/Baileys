# Class: SyncdPatch

Defined in: [WAProto/index.d.ts:37589](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37589)

Represents a SyncdPatch.

## Implements

- [`ISyncdPatch`](../interfaces/ISyncdPatch.md)

## Constructors

### new SyncdPatch()

> **new SyncdPatch**(`properties`?): [`SyncdPatch`](SyncdPatch.md)

Defined in: [WAProto/index.d.ts:37595](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37595)

Constructs a new SyncdPatch.

#### Parameters

##### properties?

[`ISyncdPatch`](../interfaces/ISyncdPatch.md)

Properties to set

#### Returns

[`SyncdPatch`](SyncdPatch.md)

## Properties

### clientDebugData

> **clientDebugData**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37622](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37622)

SyncdPatch clientDebugData.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`clientDebugData`](../interfaces/ISyncdPatch.md#clientdebugdata)

***

### deviceIndex

> **deviceIndex**: `number`

Defined in: [WAProto/index.d.ts:37619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37619)

SyncdPatch deviceIndex.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`deviceIndex`](../interfaces/ISyncdPatch.md#deviceindex)

***

### exitCode?

> `optional` **exitCode**: `null` \| [`IExitCode`](../interfaces/IExitCode.md)

Defined in: [WAProto/index.d.ts:37616](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37616)

SyncdPatch exitCode.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`exitCode`](../interfaces/ISyncdPatch.md#exitcode)

***

### externalMutations?

> `optional` **externalMutations**: `null` \| [`IExternalBlobReference`](../interfaces/IExternalBlobReference.md)

Defined in: [WAProto/index.d.ts:37604](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37604)

SyncdPatch externalMutations.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`externalMutations`](../interfaces/ISyncdPatch.md#externalmutations)

***

### keyId?

> `optional` **keyId**: `null` \| [`IKeyId`](../interfaces/IKeyId.md)

Defined in: [WAProto/index.d.ts:37613](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37613)

SyncdPatch keyId.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`keyId`](../interfaces/ISyncdPatch.md#keyid)

***

### mutations

> **mutations**: [`ISyncdMutation`](../interfaces/ISyncdMutation.md)[]

Defined in: [WAProto/index.d.ts:37601](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37601)

SyncdPatch mutations.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`mutations`](../interfaces/ISyncdPatch.md#mutations)

***

### patchMac

> **patchMac**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37610](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37610)

SyncdPatch patchMac.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`patchMac`](../interfaces/ISyncdPatch.md#patchmac)

***

### snapshotMac

> **snapshotMac**: `Uint8Array`

Defined in: [WAProto/index.d.ts:37607](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37607)

SyncdPatch snapshotMac.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`snapshotMac`](../interfaces/ISyncdPatch.md#snapshotmac)

***

### version?

> `optional` **version**: `null` \| [`ISyncdVersion`](../interfaces/ISyncdVersion.md)

Defined in: [WAProto/index.d.ts:37598](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37598)

SyncdPatch version.

#### Implementation of

[`ISyncdPatch`](../interfaces/ISyncdPatch.md).[`version`](../interfaces/ISyncdPatch.md#version)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37692](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37692)

Converts this SyncdPatch to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SyncdPatch`](SyncdPatch.md)

Defined in: [WAProto/index.d.ts:37629](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37629)

Creates a new SyncdPatch instance using the specified properties.

#### Parameters

##### properties?

[`ISyncdPatch`](../interfaces/ISyncdPatch.md)

Properties to set

#### Returns

[`SyncdPatch`](SyncdPatch.md)

SyncdPatch instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SyncdPatch`](SyncdPatch.md)

Defined in: [WAProto/index.d.ts:37655](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37655)

Decodes a SyncdPatch message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SyncdPatch`](SyncdPatch.md)

SyncdPatch

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SyncdPatch`](SyncdPatch.md)

Defined in: [WAProto/index.d.ts:37664](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37664)

Decodes a SyncdPatch message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SyncdPatch`](SyncdPatch.md)

SyncdPatch

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37637](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37637)

Encodes the specified SyncdPatch message. Does not implicitly [verify](SyncdPatch.md#verify) messages.

#### Parameters

##### message

[`ISyncdPatch`](../interfaces/ISyncdPatch.md)

SyncdPatch message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37645](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37645)

Encodes the specified SyncdPatch message, length delimited. Does not implicitly [verify](SyncdPatch.md#verify) messages.

#### Parameters

##### message

[`ISyncdPatch`](../interfaces/ISyncdPatch.md)

SyncdPatch message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SyncdPatch`](SyncdPatch.md)

Defined in: [WAProto/index.d.ts:37678](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37678)

Creates a SyncdPatch message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SyncdPatch`](SyncdPatch.md)

SyncdPatch

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37699](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37699)

Gets the default type url for SyncdPatch

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

Defined in: [WAProto/index.d.ts:37686](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37686)

Creates a plain object from a SyncdPatch message. Also converts values to other types if specified.

#### Parameters

##### message

[`SyncdPatch`](SyncdPatch.md)

SyncdPatch

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37671](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37671)

Verifies a SyncdPatch message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
