# Function: processHistoryMessage()

> **processHistoryMessage**(`item`): `object`

Defined in: [src/Utils/history.ts:32](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Utils/history.ts#L32)

## Parameters

### item

[`IHistorySync`](../namespaces/proto/interfaces/IHistorySync.md)

## Returns

`object`

### chats

> **chats**: [`Chat`](../type-aliases/Chat.md)[]

### contacts

> **contacts**: [`Contact`](../interfaces/Contact.md)[]

### messages

> **messages**: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)[]

### progress

> **progress**: `undefined` \| `null` \| `number` = `item.progress`

### syncType

> **syncType**: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md) = `item.syncType`
