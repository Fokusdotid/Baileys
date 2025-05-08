# Function: bindWaitForEvent()

> **bindWaitForEvent**\<`T`\>(`ev`, `event`): (`check`, `timeoutMs`?) => `Promise`\<`void`\>

Defined in: [src/Utils/generics.ts:207](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Utils/generics.ts#L207)

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
