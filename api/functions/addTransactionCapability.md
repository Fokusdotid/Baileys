# Function: addTransactionCapability()

> **addTransactionCapability**(`state`, `logger`, `__namedParameters`): [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

Defined in: [src/Utils/auth-utils.ts:84](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/src/Utils/auth-utils.ts#L84)

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
