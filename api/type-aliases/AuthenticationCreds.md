# Type Alias: AuthenticationCreds

> **AuthenticationCreds**: [`SignalCreds`](SignalCreds.md) & `object`

Defined in: [src/Types/Auth.ts:43](https://github.com/Fokusdotid/Baileys/blob/c2e37a764497a58082d1525ba2f083f341e3eefa/src/Types/Auth.ts#L43)

## Type declaration

### account?

> `optional` **account**: [`IADVSignedDeviceIdentity`](../namespaces/proto/interfaces/IADVSignedDeviceIdentity.md)

### accountSettings

> **accountSettings**: [`AccountSettings`](AccountSettings.md)

### accountSyncCounter

> **accountSyncCounter**: `number`

number of times history & app state has been synced

### advSecretKey

> **advSecretKey**: `string`

### firstUnuploadedPreKeyId

> **firstUnuploadedPreKeyId**: `number`

### lastAccountSyncTimestamp?

> `optional` **lastAccountSyncTimestamp**: `number`

### lastPropHash

> **lastPropHash**: `string` \| `undefined`

### me?

> `optional` **me**: [`Contact`](../interfaces/Contact.md)

### myAppStateKeyId?

> `optional` **myAppStateKeyId**: `string`

### nextPreKeyId

> **nextPreKeyId**: `number`

### noiseKey

> `readonly` **noiseKey**: [`KeyPair`](KeyPair.md)

### pairingCode

> **pairingCode**: `string` \| `undefined`

### pairingEphemeralKeyPair

> `readonly` **pairingEphemeralKeyPair**: [`KeyPair`](KeyPair.md)

### platform?

> `optional` **platform**: `string`

### processedHistoryMessages

> **processedHistoryMessages**: [`MinimalMessage`](MinimalMessage.md)[]

### registered

> **registered**: `boolean`

### routingInfo

> **routingInfo**: `Buffer` \| `undefined`

### signalIdentities?

> `optional` **signalIdentities**: [`SignalIdentity`](SignalIdentity.md)[]
