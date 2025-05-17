# Type Alias: MiscMessageGenerationOptions

> **MiscMessageGenerationOptions**: `MinimalRelayOptions` & `object`

Defined in: [src/Types/Message.ts:251](https://github.com/Fokusdotid/Baileys/blob/86ad0f8078178c8586062ad3364a59e068f4b3b2/src/Types/Message.ts#L251)

## Type declaration

### backgroundColor?

> `optional` **backgroundColor**: `string`

backgroundcolor for status

### broadcast?

> `optional` **broadcast**: `boolean`

if it is broadcast

### ephemeralExpiration?

> `optional` **ephemeralExpiration**: `number` \| `string`

disappearing messages settings

### font?

> `optional` **font**: `number`

font type for status

### mediaUploadTimeoutMs?

> `optional` **mediaUploadTimeoutMs**: `number`

timeout for media upload to WA server

### quoted?

> `optional` **quoted**: [`WAMessage`](WAMessage.md)

the message you want to quote

### statusJidList?

> `optional` **statusJidList**: `string`[]

jid list of participants for status@broadcast

### timestamp?

> `optional` **timestamp**: `Date`

optional, if you want to manually set the timestamp of the message
