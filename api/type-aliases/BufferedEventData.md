# Type Alias: BufferedEventData

> **BufferedEventData**: `object`

Defined in: [src/Types/Events.ts:70](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Types/Events.ts#L70)

## Type declaration

### chatDeletes

> **chatDeletes**: `Set`\<`string`\>

### chatUpdates

> **chatUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `Partial`\<[`IConversation`](../namespaces/proto/interfaces/IConversation.md) & `object` & `object`\>

### chatUpserts

> **chatUpserts**: `object`

#### Index Signature

\[`jid`: `string`\]: [`Chat`](Chat.md)

### contactUpdates

> **contactUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `Partial`\<[`Contact`](../interfaces/Contact.md)\>

### contactUpserts

> **contactUpserts**: `object`

#### Index Signature

\[`jid`: `string`\]: [`Contact`](../interfaces/Contact.md)

### groupUpdates

> **groupUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `Partial`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### historySets

> **historySets**: `object`

#### historySets.chats

> **chats**: `object`

##### Index Signature

\[`jid`: `string`\]: [`Chat`](Chat.md)

#### historySets.contacts

> **contacts**: `object`

##### Index Signature

\[`jid`: `string`\]: [`Contact`](../interfaces/Contact.md)

#### historySets.empty

> **empty**: `boolean`

#### historySets.isLatest

> **isLatest**: `boolean`

#### historySets.messages

> **messages**: `object`

##### Index Signature

\[`uqId`: `string`\]: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)

#### historySets.peerDataRequestSessionId?

> `optional` **peerDataRequestSessionId**: `string`

#### historySets.progress?

> `optional` **progress**: `number` \| `null`

#### historySets.syncType?

> `optional` **syncType**: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md)

### messageDeletes

> **messageDeletes**: `object`

#### Index Signature

\[`key`: `string`\]: [`IMessageKey`](../namespaces/proto/interfaces/IMessageKey.md)

### messageReactions

> **messageReactions**: `object`

#### Index Signature

\[`key`: `string`\]: `object`

### messageReceipts

> **messageReceipts**: `object`

#### Index Signature

\[`key`: `string`\]: `object`

### messageUpdates

> **messageUpdates**: `object`

#### Index Signature

\[`key`: `string`\]: [`WAMessageUpdate`](WAMessageUpdate.md)

### messageUpserts

> **messageUpserts**: `object`

#### Index Signature

\[`key`: `string`\]: `object`
