# Function: makeCacheableSignalKeyStore()

> **makeCacheableSignalKeyStore**(`store`, `logger`?, `_cache`?): [`SignalKeyStore`](../type-aliases/SignalKeyStore.md)

Defined in: [src/Utils/auth-utils.ts:15](https://github.com/Fokusdotid/Baileys/blob/49e815e65b8f4aea31725e09dcf4815734557e39/src/Utils/auth-utils.ts#L15)

Adds caching capability to a SignalKeyStore

## Parameters

### store

[`SignalKeyStore`](../type-aliases/SignalKeyStore.md)

the store to add caching to

### logger?

`ILogger`

to log trace events

### \_cache?

[`CacheStore`](../type-aliases/CacheStore.md)

cache store to use

## Returns

[`SignalKeyStore`](../type-aliases/SignalKeyStore.md)
