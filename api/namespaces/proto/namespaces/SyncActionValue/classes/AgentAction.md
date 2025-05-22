# Class: AgentAction

Defined in: [WAProto/index.d.ts:32093](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32093)

Represents an AgentAction.

## Implements

- [`IAgentAction`](../interfaces/IAgentAction.md)

## Constructors

### new AgentAction()

> **new AgentAction**(`properties`?): [`AgentAction`](AgentAction.md)

Defined in: [WAProto/index.d.ts:32099](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32099)

Constructs a new AgentAction.

#### Parameters

##### properties?

[`IAgentAction`](../interfaces/IAgentAction.md)

Properties to set

#### Returns

[`AgentAction`](AgentAction.md)

## Properties

### deviceID

> **deviceID**: `number`

Defined in: [WAProto/index.d.ts:32105](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32105)

AgentAction deviceID.

#### Implementation of

[`IAgentAction`](../interfaces/IAgentAction.md).[`deviceID`](../interfaces/IAgentAction.md#deviceid)

***

### isDeleted

> **isDeleted**: `boolean`

Defined in: [WAProto/index.d.ts:32108](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32108)

AgentAction isDeleted.

#### Implementation of

[`IAgentAction`](../interfaces/IAgentAction.md).[`isDeleted`](../interfaces/IAgentAction.md#isdeleted)

***

### name

> **name**: `string`

Defined in: [WAProto/index.d.ts:32102](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32102)

AgentAction name.

#### Implementation of

[`IAgentAction`](../interfaces/IAgentAction.md).[`name`](../interfaces/IAgentAction.md#name)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:32178](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32178)

Converts this AgentAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`AgentAction`](AgentAction.md)

Defined in: [WAProto/index.d.ts:32115](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32115)

Creates a new AgentAction instance using the specified properties.

#### Parameters

##### properties?

[`IAgentAction`](../interfaces/IAgentAction.md)

Properties to set

#### Returns

[`AgentAction`](AgentAction.md)

AgentAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`AgentAction`](AgentAction.md)

Defined in: [WAProto/index.d.ts:32141](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32141)

Decodes an AgentAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`AgentAction`](AgentAction.md)

AgentAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`AgentAction`](AgentAction.md)

Defined in: [WAProto/index.d.ts:32150](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32150)

Decodes an AgentAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`AgentAction`](AgentAction.md)

AgentAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32123](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32123)

Encodes the specified AgentAction message. Does not implicitly [verify](AgentAction.md#verify) messages.

#### Parameters

##### message

[`IAgentAction`](../interfaces/IAgentAction.md)

AgentAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:32131](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32131)

Encodes the specified AgentAction message, length delimited. Does not implicitly [verify](AgentAction.md#verify) messages.

#### Parameters

##### message

[`IAgentAction`](../interfaces/IAgentAction.md)

AgentAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`AgentAction`](AgentAction.md)

Defined in: [WAProto/index.d.ts:32164](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32164)

Creates an AgentAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`AgentAction`](AgentAction.md)

AgentAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:32185](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32185)

Gets the default type url for AgentAction

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

Defined in: [WAProto/index.d.ts:32172](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32172)

Creates a plain object from an AgentAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`AgentAction`](AgentAction.md)

AgentAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:32157](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L32157)

Verifies an AgentAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
