# Class: DeleteIndividualCallLogAction

Defined in: [WAProto/index.d.ts:33411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33411)

Represents a DeleteIndividualCallLogAction.

## Implements

- [`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md)

## Constructors

### new DeleteIndividualCallLogAction()

> **new DeleteIndividualCallLogAction**(`properties`?): [`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

Defined in: [WAProto/index.d.ts:33417](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33417)

Constructs a new DeleteIndividualCallLogAction.

#### Parameters

##### properties?

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md)

Properties to set

#### Returns

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

## Properties

### isIncoming

> **isIncoming**: `boolean`

Defined in: [WAProto/index.d.ts:33423](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33423)

DeleteIndividualCallLogAction isIncoming.

#### Implementation of

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md).[`isIncoming`](../interfaces/IDeleteIndividualCallLogAction.md#isincoming)

***

### peerJid

> **peerJid**: `string`

Defined in: [WAProto/index.d.ts:33420](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33420)

DeleteIndividualCallLogAction peerJid.

#### Implementation of

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md).[`peerJid`](../interfaces/IDeleteIndividualCallLogAction.md#peerjid)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:33493](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33493)

Converts this DeleteIndividualCallLogAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

Defined in: [WAProto/index.d.ts:33430](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33430)

Creates a new DeleteIndividualCallLogAction instance using the specified properties.

#### Parameters

##### properties?

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md)

Properties to set

#### Returns

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

Defined in: [WAProto/index.d.ts:33456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33456)

Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

Defined in: [WAProto/index.d.ts:33465](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33465)

Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33438](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33438)

Encodes the specified DeleteIndividualCallLogAction message. Does not implicitly [verify](DeleteIndividualCallLogAction.md#verify) messages.

#### Parameters

##### message

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:33446](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33446)

Encodes the specified DeleteIndividualCallLogAction message, length delimited. Does not implicitly [verify](DeleteIndividualCallLogAction.md#verify) messages.

#### Parameters

##### message

[`IDeleteIndividualCallLogAction`](../interfaces/IDeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

Defined in: [WAProto/index.d.ts:33479](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33479)

Creates a DeleteIndividualCallLogAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:33500](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33500)

Gets the default type url for DeleteIndividualCallLogAction

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

Defined in: [WAProto/index.d.ts:33487](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33487)

Creates a plain object from a DeleteIndividualCallLogAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`DeleteIndividualCallLogAction`](DeleteIndividualCallLogAction.md)

DeleteIndividualCallLogAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:33472](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L33472)

Verifies a DeleteIndividualCallLogAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
