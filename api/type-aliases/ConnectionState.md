# Type Alias: ConnectionState

> **ConnectionState**: `object`

Defined in: [src/Types/State.ts:5](https://github.com/Fokusdotid/Baileys/blob/039f28db78950e3bac7c407f144ea390dcdf207d/src/Types/State.ts#L5)

## Type declaration

### connection

> **connection**: [`WAConnectionState`](WAConnectionState.md)

connection is now open, connecting or closed

### isNewLogin?

> `optional` **isNewLogin**: `boolean`

is this a new login

### isOnline?

> `optional` **isOnline**: `boolean`

if the client is shown as an active, online client.
If this is false, the primary phone and other devices will receive notifs

### lastDisconnect?

> `optional` **lastDisconnect**: `object`

the error that caused the connection to close

#### lastDisconnect.date

> **date**: `Date`

#### lastDisconnect.error

> **error**: `Error` \| `undefined`

### legacy?

> `optional` **legacy**: `object`

legacy connection options

#### legacy.phoneConnected

> **phoneConnected**: `boolean`

#### legacy.user?

> `optional` **user**: [`Contact`](../interfaces/Contact.md)

### qr?

> `optional` **qr**: `string`

the current QR code

### receivedPendingNotifications?

> `optional` **receivedPendingNotifications**: `boolean`

has the device received all pending notifications while it was offline
