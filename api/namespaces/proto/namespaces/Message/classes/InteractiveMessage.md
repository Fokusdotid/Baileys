# Class: InteractiveMessage

Defined in: [WAProto/index.d.ts:16578](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16578)

Represents an InteractiveMessage.

## Implements

- [`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

## Constructors

### new InteractiveMessage()

> **new InteractiveMessage**(`properties`?): [`InteractiveMessage`](InteractiveMessage.md)

Defined in: [WAProto/index.d.ts:16584](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16584)

Constructs a new InteractiveMessage.

#### Parameters

##### properties?

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

Properties to set

#### Returns

[`InteractiveMessage`](InteractiveMessage.md)

## Properties

### body?

> `optional` **body**: `null` \| [`IBody`](../namespaces/InteractiveMessage/interfaces/IBody.md)

Defined in: [WAProto/index.d.ts:16590](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16590)

InteractiveMessage body.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`body`](../interfaces/IInteractiveMessage.md#body)

***

### carouselMessage?

> `optional` **carouselMessage**: `null` \| [`ICarouselMessage`](../namespaces/InteractiveMessage/interfaces/ICarouselMessage.md)

Defined in: [WAProto/index.d.ts:16608](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16608)

InteractiveMessage carouselMessage.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`carouselMessage`](../interfaces/IInteractiveMessage.md#carouselmessage)

***

### collectionMessage?

> `optional` **collectionMessage**: `null` \| [`ICollectionMessage`](../namespaces/InteractiveMessage/interfaces/ICollectionMessage.md)

Defined in: [WAProto/index.d.ts:16602](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16602)

InteractiveMessage collectionMessage.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`collectionMessage`](../interfaces/IInteractiveMessage.md#collectionmessage)

***

### contextInfo?

> `optional` **contextInfo**: `null` \| [`IContextInfo`](../../../interfaces/IContextInfo.md)

Defined in: [WAProto/index.d.ts:16596](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16596)

InteractiveMessage contextInfo.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`contextInfo`](../interfaces/IInteractiveMessage.md#contextinfo)

***

### footer?

> `optional` **footer**: `null` \| [`IFooter`](../namespaces/InteractiveMessage/interfaces/IFooter.md)

Defined in: [WAProto/index.d.ts:16593](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16593)

InteractiveMessage footer.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`footer`](../interfaces/IInteractiveMessage.md#footer)

***

### header?

> `optional` **header**: `null` \| [`IHeader`](../namespaces/InteractiveMessage/interfaces/IHeader.md)

Defined in: [WAProto/index.d.ts:16587](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16587)

InteractiveMessage header.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`header`](../interfaces/IInteractiveMessage.md#header)

***

### interactiveMessage?

> `optional` **interactiveMessage**: `"shopStorefrontMessage"` \| `"collectionMessage"` \| `"nativeFlowMessage"` \| `"carouselMessage"`

Defined in: [WAProto/index.d.ts:16611](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16611)

InteractiveMessage interactiveMessage.

***

### nativeFlowMessage?

> `optional` **nativeFlowMessage**: `null` \| [`INativeFlowMessage`](../namespaces/InteractiveMessage/interfaces/INativeFlowMessage.md)

Defined in: [WAProto/index.d.ts:16605](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16605)

InteractiveMessage nativeFlowMessage.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`nativeFlowMessage`](../interfaces/IInteractiveMessage.md#nativeflowmessage)

***

### shopStorefrontMessage?

> `optional` **shopStorefrontMessage**: `null` \| [`IShopMessage`](../namespaces/InteractiveMessage/interfaces/IShopMessage.md)

Defined in: [WAProto/index.d.ts:16599](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16599)

InteractiveMessage shopStorefrontMessage.

#### Implementation of

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md).[`shopStorefrontMessage`](../interfaces/IInteractiveMessage.md#shopstorefrontmessage)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:16681](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16681)

Converts this InteractiveMessage to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`InteractiveMessage`](InteractiveMessage.md)

Defined in: [WAProto/index.d.ts:16618](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16618)

Creates a new InteractiveMessage instance using the specified properties.

#### Parameters

##### properties?

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

Properties to set

#### Returns

[`InteractiveMessage`](InteractiveMessage.md)

InteractiveMessage instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`InteractiveMessage`](InteractiveMessage.md)

Defined in: [WAProto/index.d.ts:16644](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16644)

Decodes an InteractiveMessage message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`InteractiveMessage`](InteractiveMessage.md)

InteractiveMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`InteractiveMessage`](InteractiveMessage.md)

Defined in: [WAProto/index.d.ts:16653](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16653)

Decodes an InteractiveMessage message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`InteractiveMessage`](InteractiveMessage.md)

InteractiveMessage

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16626](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16626)

Encodes the specified InteractiveMessage message. Does not implicitly [verify](InteractiveMessage.md#verify) messages.

#### Parameters

##### message

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

InteractiveMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:16634](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16634)

Encodes the specified InteractiveMessage message, length delimited. Does not implicitly [verify](InteractiveMessage.md#verify) messages.

#### Parameters

##### message

[`IInteractiveMessage`](../interfaces/IInteractiveMessage.md)

InteractiveMessage message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`InteractiveMessage`](InteractiveMessage.md)

Defined in: [WAProto/index.d.ts:16667](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16667)

Creates an InteractiveMessage message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`InteractiveMessage`](InteractiveMessage.md)

InteractiveMessage

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:16688](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16688)

Gets the default type url for InteractiveMessage

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

Defined in: [WAProto/index.d.ts:16675](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16675)

Creates a plain object from an InteractiveMessage message. Also converts values to other types if specified.

#### Parameters

##### message

[`InteractiveMessage`](InteractiveMessage.md)

InteractiveMessage

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:16660](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L16660)

Verifies an InteractiveMessage message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
