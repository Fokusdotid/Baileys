# Function: bindWaitForEvent()

> **bindWaitForEvent**\<`T`\>(`ev`, `event`): (`check`, `timeoutMs`?) => `Promise`\<`void`\>

Defined in: [src/Utils/generics.ts:207](https://github.com/Fokusdotid/Baileys/blob/3623833a320f5e60f370ef835f3de341453290f5/src/Utils/generics.ts#L207)

## Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

## Parameters

### ev

[`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md)

### event

`T`

## Returns

`Function`

### Parameters

#### check

(`u`) => `Promise`\<`undefined` \| `boolean`\>

#### timeoutMs?

`number`

### Returns

`Promise`\<`void`\>
