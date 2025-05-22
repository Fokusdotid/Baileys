# Class: ExternalWebBetaAction

Defined in: [WAProto/index.d.ts:33614](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33614)

Represents an ExternalWebBetaAction.

## Implements

- [`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md)

## Constructors

### new ExternalWebBetaAction()

> **new ExternalWebBetaAction**(`properties`?): [`ExternalWebBetaAction`](ExternalWebBetaAction.md)

Defined in: [WAProto/index.d.ts:33620](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33620)

Constructs a new ExternalWebBetaAction.

#### Parameters

##### properties?

[`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md)

Properties to set

#### Returns

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

## Properties

### isOptIn

> **isOptIn**: `boolean`

Defined in: [WAProto/index.d.ts:33623](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33623)

ExternalWebBetaAction isOptIn.

#### Implementation of

[`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md).[`isOptIn`](../interfaces/IExternalWebBetaAction.md#isoptin)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:33693](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33693)

Converts this ExternalWebBetaAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`ExternalWebBetaAction`](ExternalWebBetaAction.md)

Defined in: [WAProto/index.d.ts:33630](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33630)

Creates a new ExternalWebBetaAction instance using the specified properties.

#### Parameters

##### properties?

[`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md)

Properties to set

#### Returns

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

ExternalWebBetaAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`ExternalWebBetaAction`](ExternalWebBetaAction.md)

Defined in: [WAProto/index.d.ts:33656](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33656)

Decodes an ExternalWebBetaAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

ExternalWebBetaAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`ExternalWebBetaAction`](ExternalWebBetaAction.md)

Defined in: [WAProto/index.d.ts:33665](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33665)

Decodes an ExternalWebBetaAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

ExternalWebBetaAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33638](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33638)

Encodes the specified ExternalWebBetaAction message. Does not implicitly [verify](ExternalWebBetaAction.md#verify) messages.

#### Parameters

##### message

[`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md)

ExternalWebBetaAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33646](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33646)

Encodes the specified ExternalWebBetaAction message, length delimited. Does not implicitly [verify](ExternalWebBetaAction.md#verify) messages.

#### Parameters

##### message

[`IExternalWebBetaAction`](../interfaces/IExternalWebBetaAction.md)

ExternalWebBetaAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`ExternalWebBetaAction`](ExternalWebBetaAction.md)

Defined in: [WAProto/index.d.ts:33679](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33679)

Creates an ExternalWebBetaAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

ExternalWebBetaAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:33700](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33700)

Gets the default type url for ExternalWebBetaAction

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

Defined in: [WAProto/index.d.ts:33687](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33687)

Creates a plain object from an ExternalWebBetaAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`ExternalWebBetaAction`](ExternalWebBetaAction.md)

ExternalWebBetaAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33672](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33672)

Verifies an ExternalWebBetaAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
