# Class: NoteEditAction

Defined in: [WAProto/index.d.ts:34779](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34779)

Represents a NoteEditAction.

## Implements

- [`INoteEditAction`](../interfaces/INoteEditAction.md)

## Constructors

### new NoteEditAction()

> **new NoteEditAction**(`properties`?): [`NoteEditAction`](NoteEditAction.md)

Defined in: [WAProto/index.d.ts:34785](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34785)

Constructs a new NoteEditAction.

#### Parameters

##### properties?

[`INoteEditAction`](../interfaces/INoteEditAction.md)

Properties to set

#### Returns

[`NoteEditAction`](NoteEditAction.md)

## Properties

### chatJid

> **chatJid**: `string`

Defined in: [WAProto/index.d.ts:34791](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34791)

NoteEditAction chatJid.

#### Implementation of

[`INoteEditAction`](../interfaces/INoteEditAction.md).[`chatJid`](../interfaces/INoteEditAction.md#chatjid)

***

### createdAt

> **createdAt**: `number` \| `Long`

Defined in: [WAProto/index.d.ts:34794](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34794)

NoteEditAction createdAt.

#### Implementation of

[`INoteEditAction`](../interfaces/INoteEditAction.md).[`createdAt`](../interfaces/INoteEditAction.md#createdat)

***

### deleted

> **deleted**: `boolean`

Defined in: [WAProto/index.d.ts:34797](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34797)

NoteEditAction deleted.

#### Implementation of

[`INoteEditAction`](../interfaces/INoteEditAction.md).[`deleted`](../interfaces/INoteEditAction.md#deleted)

***

### type

> **type**: [`NoteType`](../namespaces/NoteEditAction/enumerations/NoteType.md)

Defined in: [WAProto/index.d.ts:34788](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34788)

NoteEditAction type.

#### Implementation of

[`INoteEditAction`](../interfaces/INoteEditAction.md).[`type`](../interfaces/INoteEditAction.md#type)

***

### unstructuredContent

> **unstructuredContent**: `string`

Defined in: [WAProto/index.d.ts:34800](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34800)

NoteEditAction unstructuredContent.

#### Implementation of

[`INoteEditAction`](../interfaces/INoteEditAction.md).[`unstructuredContent`](../interfaces/INoteEditAction.md#unstructuredcontent)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [WAProto/index.d.ts:34870](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34870)

Converts this NoteEditAction to JSON.

#### Returns

`object`

JSON object

***

### create()

> `static` **create**(`properties`?): [`NoteEditAction`](NoteEditAction.md)

Defined in: [WAProto/index.d.ts:34807](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34807)

Creates a new NoteEditAction instance using the specified properties.

#### Parameters

##### properties?

[`INoteEditAction`](../interfaces/INoteEditAction.md)

Properties to set

#### Returns

[`NoteEditAction`](NoteEditAction.md)

NoteEditAction instance

***

### decode()

> `static` **decode**(`reader`, `length`?): [`NoteEditAction`](NoteEditAction.md)

Defined in: [WAProto/index.d.ts:34833](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34833)

Decodes a NoteEditAction message from the specified reader or buffer.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

##### length?

`number`

Message length if known beforehand

#### Returns

[`NoteEditAction`](NoteEditAction.md)

NoteEditAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### decodeDelimited()

> `static` **decodeDelimited**(`reader`): [`NoteEditAction`](NoteEditAction.md)

Defined in: [WAProto/index.d.ts:34842](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34842)

Decodes a NoteEditAction message from the specified reader or buffer, length delimited.

#### Parameters

##### reader

Reader or buffer to decode from

`Uint8Array`\<`ArrayBufferLike`\> | `Reader`

#### Returns

[`NoteEditAction`](NoteEditAction.md)

NoteEditAction

#### Throws

If the payload is not a reader or valid buffer

#### Throws

If required fields are missing

***

### encode()

> `static` **encode**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34815](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34815)

Encodes the specified NoteEditAction message. Does not implicitly [verify](NoteEditAction.md#verify) messages.

#### Parameters

##### message

[`INoteEditAction`](../interfaces/INoteEditAction.md)

NoteEditAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### encodeDelimited()

> `static` **encodeDelimited**(`message`, `writer`?): `Writer`

Defined in: [WAProto/index.d.ts:34823](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34823)

Encodes the specified NoteEditAction message, length delimited. Does not implicitly [verify](NoteEditAction.md#verify) messages.

#### Parameters

##### message

[`INoteEditAction`](../interfaces/INoteEditAction.md)

NoteEditAction message or plain object to encode

##### writer?

`Writer`

Writer to encode to

#### Returns

`Writer`

Writer

***

### fromObject()

> `static` **fromObject**(`object`): [`NoteEditAction`](NoteEditAction.md)

Defined in: [WAProto/index.d.ts:34856](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34856)

Creates a NoteEditAction message from a plain object. Also converts values to their respective internal types.

#### Parameters

##### object

Plain object

#### Returns

[`NoteEditAction`](NoteEditAction.md)

NoteEditAction

***

### getTypeUrl()

> `static` **getTypeUrl**(`typeUrlPrefix`?): `string`

Defined in: [WAProto/index.d.ts:34877](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34877)

Gets the default type url for NoteEditAction

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

Defined in: [WAProto/index.d.ts:34864](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34864)

Creates a plain object from a NoteEditAction message. Also converts values to other types if specified.

#### Parameters

##### message

[`NoteEditAction`](NoteEditAction.md)

NoteEditAction

##### options?

`IConversionOptions`

Conversion options

#### Returns

`object`

Plain object

***

### verify()

> `static` **verify**(`message`): `null` \| `string`

Defined in: [WAProto/index.d.ts:34849](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/WAProto/index.d.ts#L34849)

Verifies a NoteEditAction message.

#### Parameters

##### message

Plain object to verify

#### Returns

`null` \| `string`

`null` if valid, otherwise the reason why it is not
