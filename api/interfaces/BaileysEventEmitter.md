# Interface: BaileysEventEmitter

Defined in: [src/Types/Events.ts:96](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Types/Events.ts#L96)

## Methods

### emit()

> **emit**\<`T`\>(`event`, `arg`): `boolean`

Defined in: [src/Types/Events.ts:100](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Types/Events.ts#L100)

#### Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

#### Parameters

##### event

`T`

##### arg

[`BaileysEventMap`](../type-aliases/BaileysEventMap.md)\[`T`\]

#### Returns

`boolean`

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Defined in: [src/Types/Events.ts:98](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Types/Events.ts#L98)

#### Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

#### Parameters

##### event

`T`

##### listener

(`arg`) => `void`

#### Returns

`void`

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Defined in: [src/Types/Events.ts:97](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Types/Events.ts#L97)

#### Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

#### Parameters

##### event

`T`

##### listener

(`arg`) => `void`

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**\<`T`\>(`event`): `void`

Defined in: [src/Types/Events.ts:99](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Types/Events.ts#L99)

#### Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

#### Parameters

##### event

`T`

#### Returns

`void`
