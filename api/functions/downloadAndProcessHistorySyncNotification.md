# Function: downloadAndProcessHistorySyncNotification()

> **downloadAndProcessHistorySyncNotification**(`msg`, `options`): `Promise`\<\{ `chats`: [`Chat`](../type-aliases/Chat.md)[]; `contacts`: [`Contact`](../interfaces/Contact.md)[]; `messages`: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)[]; `progress`: `undefined` \| `null` \| `number`; `syncType`: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md); \}\>

Defined in: [src/Utils/history.ts:102](https://github.com/Fokusdotid/Baileys/blob/49e815e65b8f4aea31725e09dcf4815734557e39/src/Utils/history.ts#L102)

## Parameters

### msg

[`IHistorySyncNotification`](../namespaces/proto/namespaces/Message/interfaces/IHistorySyncNotification.md)

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `chats`: [`Chat`](../type-aliases/Chat.md)[]; `contacts`: [`Contact`](../interfaces/Contact.md)[]; `messages`: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)[]; `progress`: `undefined` \| `null` \| `number`; `syncType`: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md); \}\>
