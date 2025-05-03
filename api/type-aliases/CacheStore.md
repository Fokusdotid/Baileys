# Type Alias: CacheStore

> **CacheStore**: `object`

Defined in: [src/Types/Socket.ts:15](https://github.com/Fokusdotid/Baileys/blob/8399cb6fd4e55090cdf57b06ffaae3e8a88880fe/src/Types/Socket.ts#L15)

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
