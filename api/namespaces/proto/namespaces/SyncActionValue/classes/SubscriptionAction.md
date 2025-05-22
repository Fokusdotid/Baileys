# Class: SubscriptionAction

Defined in: [WAProto/index.d.ts:36555](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36555)

Represents a SubscriptionAction.

## Implements

- [`ISubscriptionAction`](../interfaces/ISubscriptionAction.md)

## Constructors

### new SubscriptionAction()

> **new SubscriptionAction**(`properties`?): [`SubscriptionAction`](SubscriptionAction.md)

Defined in: [WAProto/index.d.ts:36561](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36561)

Constructs a new SubscriptionAction.

#### Parameters

##### properties?

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md)

Properties to set

#### Returns

[`SubscriptionAction`](SubscriptionAction.md)

## Properties

### expirationDate

> **expirationDate**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:36570](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36570)

SubscriptionAction expirationDate.

#### Implementation of

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md).[`expirationDate`](../interfaces/ISubscriptionAction.md#expirationdate)

***

### isAutoRenewing

> **isAutoRenewing**: `boolean`

Defined in: [WAProto/index.d.ts:36567](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36567)

SubscriptionAction isAutoRenewing.

#### Implementation of

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md).[`isAutoRenewing`](../interfaces/ISubscriptionAction.md#isautorenewing)

***

### isDeactivated

> **isDeactivated**: `boolean`

Defined in: [WAProto/index.d.ts:36564](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36564)

SubscriptionAction isDeactivated.

#### Implementation of

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md).[`isDeactivated`](../interfaces/ISubscriptionAction.md#isdeactivated)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36640](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36640)

Converts this SubscriptionAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`SubscriptionAction`](SubscriptionAction.md)

Defined in: [WAProto/index.d.ts:36577](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36577)

Creates a new SubscriptionAction instance using the specified properties.

#### Parameters

##### properties?

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md)

Properties to set

#### Returns

[`SubscriptionAction`](SubscriptionAction.md)

SubscriptionAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`SubscriptionAction`](SubscriptionAction.md)

Defined in: [WAProto/index.d.ts:36603](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36603)

Decodes a SubscriptionAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`SubscriptionAction`](SubscriptionAction.md)

SubscriptionAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`SubscriptionAction`](SubscriptionAction.md)

Defined in: [WAProto/index.d.ts:36612](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36612)

Decodes a SubscriptionAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`SubscriptionAction`](SubscriptionAction.md)

SubscriptionAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36585](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36585)

Encodes the specified SubscriptionAction message. Does not implicitly [verify](SubscriptionAction.md#verify) messages.

#### Parameters

##### message

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md)

SubscriptionAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36593](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36593)

Encodes the specified SubscriptionAction message, length delimited. Does not implicitly [verify](SubscriptionAction.md#verify) messages.

#### Parameters

##### message

[`ISubscriptionAction`](../interfaces/ISubscriptionAction.md)

SubscriptionAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`SubscriptionAction`](SubscriptionAction.md)

Defined in: [WAProto/index.d.ts:36626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36626)

Creates a SubscriptionAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`SubscriptionAction`](SubscriptionAction.md)

SubscriptionAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36647](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36647)

Gets the default type url for SubscriptionAction

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

Defined in: [WAProto/index.d.ts:36634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36634)

Creates a plain object from a SubscriptionAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`SubscriptionAction`](SubscriptionAction.md)

SubscriptionAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36619](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36619)

Verifies a SubscriptionAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
