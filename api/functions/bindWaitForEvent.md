# Function: bindWaitForEvent()

> **bindWaitForEvent**\<`T`\>(`ev`, `event`): (`check`, `timeoutMs`?) => `Promise`\<`void`\>

Defined in: [src/Utils/generics.ts:207](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/Utils/generics.ts#L207)

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
