# Type Alias: SignalKeyStore

> **SignalKeyStore**: `object`

Defined in: [src/Types/Auth.ts:81](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/src/Types/Auth.ts#L81)

## Type declaration

### clear()?

clear all the data in the store

#### Returns

`Awaitable`\<`void`\>

### get()

#### Type Parameters

• **T** *extends* keyof [`SignalDataTypeMap`](SignalDataTypeMap.md)

#### Parameters

##### type

`T`

##### ids

`string`[]

#### Returns

`Awaitable`\<\{\}\>

### set()

#### Parameters

##### data

[`SignalDataSet`](SignalDataSet.md)

#### Returns

`Awaitable`\<`void`\>
