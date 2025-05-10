# Type Alias: LastMessageList

> **LastMessageList**: [`MinimalMessage`](MinimalMessage.md)[] \| [`ISyncActionMessageRange`](../namespaces/proto/namespaces/SyncActionValue/interfaces/ISyncActionMessageRange.md)

Defined in: [src/Types/Chat.ts:74](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Types/Chat.ts#L74)

the last messages in a chat, sorted reverse-chronologically. That is, the latest message should be first in the chat
for MD modifications, the last message in the array (i.e. the earlist message) must be the last message recv in the chat
