# Class: SessionStructure

Defined in: [WAProto/index.d.ts:30369](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30369)

Represents a SessionStructure.

## Implements

- [`ISessionStructure`](../interfaces/ISessionStructure.md)

## Constructors

### new SessionStructure()

> **new SessionStructure**(`properties`?): [`SessionStructure`](SessionStructure.md)

Defined in: [WAProto/index.d.ts:30375](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30375)

Constructs a new SessionStructure.

#### Parameters

##### properties?

[`ISessionStructure`](../interfaces/ISessionStructure.md)

Properties to set

#### Returns

[`SessionStructure`](SessionStructure.md)

## Properties

### aliceBaseKey

> **aliceBaseKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30414](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30414)

SessionStructure aliceBaseKey.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`aliceBaseKey`](../interfaces/ISessionStructure.md#alicebasekey)

***

### localIdentityPublic

> **localIdentityPublic**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30381](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30381)

SessionStructure localIdentityPublic.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`localIdentityPublic`](../interfaces/ISessionStructure.md#localidentitypublic)

***

### localRegistrationId

> **localRegistrationId**: `number`

Defined in: [WAProto/index.d.ts:30408](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30408)

SessionStructure localRegistrationId.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`localRegistrationId`](../interfaces/ISessionStructure.md#localregistrationid)

***

### needsRefresh

> **needsRefresh**: `boolean`

Defined in: [WAProto/index.d.ts:30411](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30411)

SessionStructure needsRefresh.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`needsRefresh`](../interfaces/ISessionStructure.md#needsrefresh)

***

### pendingKeyExchange?

> `optional` **pendingKeyExchange**: `null` \| [`IPendingKeyExchange`](../namespaces/SessionStructure/interfaces/IPendingKeyExchange.md)

Defined in: [WAProto/index.d.ts:30399](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30399)

SessionStructure pendingKeyExchange.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`pendingKeyExchange`](../interfaces/ISessionStructure.md#pendingkeyexchange)

***

### pendingPreKey?

> `optional` **pendingPreKey**: `null` \| [`IPendingPreKey`](../namespaces/SessionStructure/interfaces/IPendingPreKey.md)

Defined in: [WAProto/index.d.ts:30402](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30402)

SessionStructure pendingPreKey.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`pendingPreKey`](../interfaces/ISessionStructure.md#pendingprekey)

***

### previousCounter

> **previousCounter**: `number`

Defined in: [WAProto/index.d.ts:30390](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30390)

SessionStructure previousCounter.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`previousCounter`](../interfaces/ISessionStructure.md#previouscounter)

***

### receiverChains

> **receiverChains**: [`IChain`](../namespaces/SessionStructure/interfaces/IChain.md)[]

Defined in: [WAProto/index.d.ts:30396](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30396)

SessionStructure receiverChains.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`receiverChains`](../interfaces/ISessionStructure.md#receiverchains)

***

### remoteIdentityPublic

> **remoteIdentityPublic**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30384](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30384)

SessionStructure remoteIdentityPublic.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`remoteIdentityPublic`](../interfaces/ISessionStructure.md#remoteidentitypublic)

***

### remoteRegistrationId

> **remoteRegistrationId**: `number`

Defined in: [WAProto/index.d.ts:30405](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30405)

SessionStructure remoteRegistrationId.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`remoteRegistrationId`](../interfaces/ISessionStructure.md#remoteregistrationid)

***

### rootKey

> **rootKey**: `Uint8Array`

Defined in: [WAProto/index.d.ts:30387](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30387)

SessionStructure rootKey.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`rootKey`](../interfaces/ISessionStructure.md#rootkey)

***

### senderChain?

> `optional` **senderChain**: `null` \| [`IChain`](../namespaces/SessionStructure/interfaces/IChain.md)

Defined in: [WAProto/index.d.ts:30393](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30393)

SessionStructure senderChain.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`senderChain`](../interfaces/ISessionStructure.md#senderchain)

***

### sessionVersion

> **sessionVersion**: `number`

Defined in: [WAProto/index.d.ts:30378](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30378)

SessionStructure sessionVersion.

#### Implementation of

[`ISessionStructure`](../interfaces/ISessionStructure.md).[`sessionVersion`](../interfaces/ISessionStructure.md#sessionversion)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:30484](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30484)

Converts this SessionStructure to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SessionStructure`](SessionStructure.md)

Defined in: [WAProto/index.d.ts:30421](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30421)

Creates a new SessionStructure instance using the specified properties.

#### Parameters

##### properties?

[`ISessionStructure`](../interfaces/ISessionStructure.md)

Properties to set

#### Returns

[`SessionStructure`](SessionStructure.md)

SessionStructure instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SessionStructure`](SessionStructure.md)

Defined in: [WAProto/index.d.ts:30447](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30447)

Decodes a SessionStructure message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SessionStructure`](SessionStructure.md)

SessionStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SessionStructure`](SessionStructure.md)

Defined in: [WAProto/index.d.ts:30456](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30456)

Decodes a SessionStructure message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SessionStructure`](SessionStructure.md)

SessionStructure

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30429](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30429)

Encodes the specified SessionStructure message. Does not implicitly [verify](SessionStructure.md#verify) messages.

#### Parameters

##### message

[`ISessionStructure`](../interfaces/ISessionStructure.md)

SessionStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:30437](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30437)

Encodes the specified SessionStructure message, length delimited. Does not implicitly [verify](SessionStructure.md#verify) messages.

#### Parameters

##### message

[`ISessionStructure`](../interfaces/ISessionStructure.md)

SessionStructure message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SessionStructure`](SessionStructure.md)

Defined in: [WAProto/index.d.ts:30470](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30470)

Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SessionStructure`](SessionStructure.md)

SessionStructure

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:30491](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30491)

Gets the default type url for SessionStructure

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

Defined in: [WAProto/index.d.ts:30478](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30478)

Creates a plain object from a SessionStructure message. Also converts values to other types if specified.

#### Parameters

##### message

[`SessionStructure`](SessionStructure.md)

SessionStructure

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:30463](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L30463)

Verifies a SessionStructure message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
