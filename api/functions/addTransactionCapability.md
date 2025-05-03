# Function: addTransactionCapability()

> **addTransactionCapability**(`state`, `logger`, `__namedParameters`): [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

Defined in: [src/Utils/auth-utils.ts:84](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Utils/auth-utils.ts#L84)

Adds DB like transaction capability (https://en.wikipedia.org/wiki/Database_transaction) to the SignalKeyStore,
this allows batch read & write operations & improves the performance of the lib

## Parameters

### state

[`SignalKeyStore`](../type-aliases/SignalKeyStore.md)

the key store to apply this capability to

### logger

`ILogger`

logger to log events

### \_\_namedParameters

[`TransactionCapabilityOptions`](../type-aliases/TransactionCapabilityOptions.md)

## Returns

[`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

SignalKeyStore with transaction capability
