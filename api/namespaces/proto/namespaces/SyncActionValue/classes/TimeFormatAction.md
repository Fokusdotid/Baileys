# Class: TimeFormatAction

Defined in: [WAProto/index.d.ts:36870](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36870)

Represents a TimeFormatAction.

## Implements

- [`ITimeFormatAction`](../interfaces/ITimeFormatAction.md)

## Constructors

### new TimeFormatAction()

> **new TimeFormatAction**(`properties`?): [`TimeFormatAction`](TimeFormatAction.md)

Defined in: [WAProto/index.d.ts:36876](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36876)

Constructs a new TimeFormatAction.

#### Parameters

##### properties?

[`ITimeFormatAction`](../interfaces/ITimeFormatAction.md)

Properties to set

#### Returns

[`TimeFormatAction`](TimeFormatAction.md)

## Properties

### isTwentyFourHourFormatEnabled

> **isTwentyFourHourFormatEnabled**: `boolean`

Defined in: [WAProto/index.d.ts:36879](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36879)

TimeFormatAction isTwentyFourHourFormatEnabled.

#### Implementation of

[`ITimeFormatAction`](../interfaces/ITimeFormatAction.md).[`isTwentyFourHourFormatEnabled`](../interfaces/ITimeFormatAction.md#istwentyfourhourformatenabled)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:36949](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36949)

Converts this TimeFormatAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`TimeFormatAction`](TimeFormatAction.md)

Defined in: [WAProto/index.d.ts:36886](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36886)

Creates a new TimeFormatAction instance using the specified properties.

#### Parameters

##### properties?

[`ITimeFormatAction`](../interfaces/ITimeFormatAction.md)

Properties to set

#### Returns

[`TimeFormatAction`](TimeFormatAction.md)

TimeFormatAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`TimeFormatAction`](TimeFormatAction.md)

Defined in: [WAProto/index.d.ts:36912](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36912)

Decodes a TimeFormatAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`TimeFormatAction`](TimeFormatAction.md)

TimeFormatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`TimeFormatAction`](TimeFormatAction.md)

Defined in: [WAProto/index.d.ts:36921](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36921)

Decodes a TimeFormatAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`TimeFormatAction`](TimeFormatAction.md)

TimeFormatAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36894](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36894)

Encodes the specified TimeFormatAction message. Does not implicitly [verify](TimeFormatAction.md#verify) messages.

#### Parameters

##### message

[`ITimeFormatAction`](../interfaces/ITimeFormatAction.md)

TimeFormatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:36902](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36902)

Encodes the specified TimeFormatAction message, length delimited. Does not implicitly [verify](TimeFormatAction.md#verify) messages.

#### Parameters

##### message

[`ITimeFormatAction`](../interfaces/ITimeFormatAction.md)

TimeFormatAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`TimeFormatAction`](TimeFormatAction.md)

Defined in: [WAProto/index.d.ts:36935](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36935)

Creates a TimeFormatAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`TimeFormatAction`](TimeFormatAction.md)

TimeFormatAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:36956](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36956)

Gets the default type url for TimeFormatAction

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

Defined in: [WAProto/index.d.ts:36943](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36943)

Creates a plain object from a TimeFormatAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`TimeFormatAction`](TimeFormatAction.md)

TimeFormatAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:36928](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L36928)

Verifies a TimeFormatAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
