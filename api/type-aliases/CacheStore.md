# Type Alias: CacheStore

> **CacheStore**: `object`

Defined in: [src/Types/Socket.ts:15](https://github.com/Fokusdotid/Baileys/blob/86ad0f8078178c8586062ad3364a59e068f4b3b2/src/Types/Socket.ts#L15)

## Type declaration

### del()

delete a key from the cache

#### Parameters

##### key

`string`

#### Returns

`void`

### flushAll()

flush all data

#### Returns

`void`

### get()

get a cached key and change the stats

#### Type Parameters

• **T**

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `T`

### set()

set a key in the cache

#### Type Parameters

• **T**

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`
