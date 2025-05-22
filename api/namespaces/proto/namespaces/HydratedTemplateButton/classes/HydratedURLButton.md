# Class: HydratedURLButton

Defined in: [WAProto/index.d.ts:8953](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8953)

Represents a HydratedURLButton.

## Implements

- [`IHydratedURLButton`](../interfaces/IHydratedURLButton.md)

## Constructors

### new HydratedURLButton()

> **new HydratedURLButton**(`properties`?): [`HydratedURLButton`](HydratedURLButton.md)

Defined in: [WAProto/index.d.ts:8959](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8959)

Constructs a new HydratedURLButton.

#### Parameters

##### properties?

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md)

Properties to set

#### Returns

[`HydratedURLButton`](HydratedURLButton.md)

## Properties

### consentedUsersUrl

> **consentedUsersUrl**: `string`

Defined in: [WAProto/index.d.ts:8968](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8968)

HydratedURLButton consentedUsersUrl.

#### Implementation of

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md).[`consentedUsersUrl`](../interfaces/IHydratedURLButton.md#consentedusersurl)

***

### displayText

> **displayText**: `string`

Defined in: [WAProto/index.d.ts:8962](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8962)

HydratedURLButton displayText.

#### Implementation of

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md).[`displayText`](../interfaces/IHydratedURLButton.md#displaytext)

***

### url

> **url**: `string`

Defined in: [WAProto/index.d.ts:8965](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8965)

HydratedURLButton url.

#### Implementation of

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md).[`url`](../interfaces/IHydratedURLButton.md#url)

***

### webviewPresentation

> **webviewPresentation**: [`WebviewPresentationType`](../namespaces/HydratedURLButton/enumerations/WebviewPresentationType.md)

Defined in: [WAProto/index.d.ts:8971](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8971)

HydratedURLButton webviewPresentation.

#### Implementation of

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md).[`webviewPresentation`](../interfaces/IHydratedURLButton.md#webviewpresentation)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:9041](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9041)

Converts this HydratedURLButton to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`HydratedURLButton`](HydratedURLButton.md)

Defined in: [WAProto/index.d.ts:8978](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8978)

Creates a new HydratedURLButton instance using the specified properties.

#### Parameters

##### properties?

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md)

Properties to set

#### Returns

[`HydratedURLButton`](HydratedURLButton.md)

HydratedURLButton instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`HydratedURLButton`](HydratedURLButton.md)

Defined in: [WAProto/index.d.ts:9004](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9004)

Decodes a HydratedURLButton message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`HydratedURLButton`](HydratedURLButton.md)

HydratedURLButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`HydratedURLButton`](HydratedURLButton.md)

Defined in: [WAProto/index.d.ts:9013](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9013)

Decodes a HydratedURLButton message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`HydratedURLButton`](HydratedURLButton.md)

HydratedURLButton

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8986](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8986)

Encodes the specified HydratedURLButton message. Does not implicitly [verify](HydratedURLButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md)

HydratedURLButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:8994](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L8994)

Encodes the specified HydratedURLButton message, length delimited. Does not implicitly [verify](HydratedURLButton.md#verify) messages.

#### Parameters

##### message

[`IHydratedURLButton`](../interfaces/IHydratedURLButton.md)

HydratedURLButton message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`HydratedURLButton`](HydratedURLButton.md)

Defined in: [WAProto/index.d.ts:9027](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9027)

Creates a HydratedURLButton message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`HydratedURLButton`](HydratedURLButton.md)

HydratedURLButton

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:9048](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9048)

Gets the default type url for HydratedURLButton

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

Defined in: [WAProto/index.d.ts:9035](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9035)

Creates a plain object from a HydratedURLButton message. Also converts values to other types if specified.

#### Parameters

##### message

[`HydratedURLButton`](HydratedURLButton.md)

HydratedURLButton

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:9020](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L9020)

Verifies a HydratedURLButton message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
