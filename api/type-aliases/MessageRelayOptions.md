# Type Alias: MessageRelayOptions

> **MessageRelayOptions**: `MinimalRelayOptions` & `object`

Defined in: [src/Types/Message.ts:239](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Types/Message.ts#L239)

## Type declaration

### additionalAttributes?

> `optional` **additionalAttributes**: `object`

additional attributes to add to the WA binary node

#### Index Signature

\[`_`: `string`\]: `string`

### additionalNodes?

> `optional` **additionalNodes**: [`BinaryNode`](BinaryNode.md)[]

### participant?

> `optional` **participant**: `object`

only send to a specific participant; used when a message decryption fails for a single user

#### participant.count

> **count**: `number`

#### participant.jid

> **jid**: `string`

### statusJidList?

> `optional` **statusJidList**: `string`[]

jid list of participants for status@broadcast

### useUserDevicesCache?

> `optional` **useUserDevicesCache**: `boolean`

should we use the devices cache, or fetch afresh from the server; default assumed to be "true"
