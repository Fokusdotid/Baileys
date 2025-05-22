# Class: WamoUserIdentifierAction

Defined in: [WAProto/index.d.ts:37161](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37161)

Represents a WamoUserIdentifierAction.

## Implements

- [`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md)

## Constructors

### new WamoUserIdentifierAction()

> **new WamoUserIdentifierAction**(`properties`?): [`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

Defined in: [WAProto/index.d.ts:37167](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37167)

Constructs a new WamoUserIdentifierAction.

#### Parameters

##### properties?

[`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md)

Properties to set

#### Returns

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

## Properties

### identifier

> **identifier**: `string`

Defined in: [WAProto/index.d.ts:37170](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37170)

WamoUserIdentifierAction identifier.

#### Implementation of

[`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md).[`identifier`](../interfaces/IWamoUserIdentifierAction.md#identifier)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:37240](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37240)

Converts this WamoUserIdentifierAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

Defined in: [WAProto/index.d.ts:37177](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37177)

Creates a new WamoUserIdentifierAction instance using the specified properties.

#### Parameters

##### properties?

[`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md)

Properties to set

#### Returns

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

WamoUserIdentifierAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

Defined in: [WAProto/index.d.ts:37203](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37203)

Decodes a WamoUserIdentifierAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

WamoUserIdentifierAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

Defined in: [WAProto/index.d.ts:37212](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37212)

Decodes a WamoUserIdentifierAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

WamoUserIdentifierAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37185)

Encodes the specified WamoUserIdentifierAction message. Does not implicitly [verify](WamoUserIdentifierAction.md#verify) messages.

#### Parameters

##### message

[`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md)

WamoUserIdentifierAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:37193](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37193)

Encodes the specified WamoUserIdentifierAction message, length delimited. Does not implicitly [verify](WamoUserIdentifierAction.md#verify) messages.

#### Parameters

##### message

[`IWamoUserIdentifierAction`](../interfaces/IWamoUserIdentifierAction.md)

WamoUserIdentifierAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

Defined in: [WAProto/index.d.ts:37226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37226)

Creates a WamoUserIdentifierAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

WamoUserIdentifierAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:37247](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37247)

Gets the default type url for WamoUserIdentifierAction

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

Defined in: [WAProto/index.d.ts:37234](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37234)

Creates a plain object from a WamoUserIdentifierAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`WamoUserIdentifierAction`](WamoUserIdentifierAction.md)

WamoUserIdentifierAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:37219](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L37219)

Verifies a WamoUserIdentifierAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
