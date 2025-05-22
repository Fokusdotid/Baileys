# Class: InteractiveAnnotation

Defined in: [WAProto/index.d.ts:9182](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9182)

Represents an InteractiveAnnotation.

## Implements

- [`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md)

## Constructors

### new InteractiveAnnotation()

> **new InteractiveAnnotation**(`properties`?): [`InteractiveAnnotation`](InteractiveAnnotation.md)

Defined in: [WAProto/index.d.ts:9188](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9188)

Constructs a new InteractiveAnnotation.

#### Parameters

##### properties?

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md)

Properties to set

#### Returns

[`InteractiveAnnotation`](InteractiveAnnotation.md)

## Properties

### action?

> `optional` **action**: `"location"` \| `"newsletter"`

Defined in: [WAProto/index.d.ts:9203](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9203)

InteractiveAnnotation action.

***

### location?

> `optional` **location**: `null` \| [`ILocation`](../interfaces/ILocation.md)

Defined in: [WAProto/index.d.ts:9197](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9197)

InteractiveAnnotation location.

#### Implementation of

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md).[`location`](../interfaces/IInteractiveAnnotation.md#location)

***

### newsletter?

> `optional` **newsletter**: `null` \| [`IForwardedNewsletterMessageInfo`](../namespaces/ContextInfo/interfaces/IForwardedNewsletterMessageInfo.md)

Defined in: [WAProto/index.d.ts:9200](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9200)

InteractiveAnnotation newsletter.

#### Implementation of

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md).[`newsletter`](../interfaces/IInteractiveAnnotation.md#newsletter)

***

### polygonVertices

> **polygonVertices**: [`IPoint`](../interfaces/IPoint.md)[]

Defined in: [WAProto/index.d.ts:9191](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9191)

InteractiveAnnotation polygonVertices.

#### Implementation of

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md).[`polygonVertices`](../interfaces/IInteractiveAnnotation.md#polygonvertices)

***

### shouldSkipConfirmation

> **shouldSkipConfirmation**: `boolean`

Defined in: [WAProto/index.d.ts:9194](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9194)

InteractiveAnnotation shouldSkipConfirmation.

#### Implementation of

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md).[`shouldSkipConfirmation`](../interfaces/IInteractiveAnnotation.md#shouldskipconfirmation)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9273](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9273)

Converts this InteractiveAnnotation to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`InteractiveAnnotation`](InteractiveAnnotation.md)

Defined in: [WAProto/index.d.ts:9210](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9210)

Creates a new InteractiveAnnotation instance using the specified properties.

#### Parameters

##### properties?

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md)

Properties to set

#### Returns

[`InteractiveAnnotation`](InteractiveAnnotation.md)

InteractiveAnnotation instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`InteractiveAnnotation`](InteractiveAnnotation.md)

Defined in: [WAProto/index.d.ts:9236](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9236)

Decodes an InteractiveAnnotation message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`InteractiveAnnotation`](InteractiveAnnotation.md)

InteractiveAnnotation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`InteractiveAnnotation`](InteractiveAnnotation.md)

Defined in: [WAProto/index.d.ts:9245](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9245)

Decodes an InteractiveAnnotation message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`InteractiveAnnotation`](InteractiveAnnotation.md)

InteractiveAnnotation

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9218](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9218)

Encodes the specified InteractiveAnnotation message. Does not implicitly [verify](InteractiveAnnotation.md#verify) messages.

#### Parameters

##### message

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md)

InteractiveAnnotation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:9226](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9226)

Encodes the specified InteractiveAnnotation message, length delimited. Does not implicitly [verify](InteractiveAnnotation.md#verify) messages.

#### Parameters

##### message

[`IInteractiveAnnotation`](../interfaces/IInteractiveAnnotation.md)

InteractiveAnnotation message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`InteractiveAnnotation`](InteractiveAnnotation.md)

Defined in: [WAProto/index.d.ts:9259](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9259)

Creates an InteractiveAnnotation message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`InteractiveAnnotation`](InteractiveAnnotation.md)

InteractiveAnnotation

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9280](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9280)

Gets the default type url for InteractiveAnnotation

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

Defined in: [WAProto/index.d.ts:9267](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9267)

Creates a plain object from an InteractiveAnnotation message. Also converts values to other types if specified.

#### Parameters

##### message

[`InteractiveAnnotation`](InteractiveAnnotation.md)

InteractiveAnnotation

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9252](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9252)

Verifies an InteractiveAnnotation message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
