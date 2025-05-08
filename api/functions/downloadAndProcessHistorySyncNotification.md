# Function: downloadAndProcessHistorySyncNotification()

> **downloadAndProcessHistorySyncNotification**(`msg`, `options`): `Promise`\<\{ `chats`: [`Chat`](../type-aliases/Chat.md)[]; `contacts`: [`Contact`](../interfaces/Contact.md)[]; `messages`: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)[]; `progress`: `undefined` \| `null` \| `number`; `syncType`: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md); \}\>

Defined in: [src/Utils/history.ts:102](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Utils/history.ts#L102)

## Parameters

### msg

[`IHistorySyncNotification`](../namespaces/proto/namespaces/Message/interfaces/IHistorySyncNotification.md)

### options

`AxiosRequestConfig`\<\{\}\>

## Returns

`Promise`\<\{ `chats`: [`Chat`](../type-aliases/Chat.md)[]; `contacts`: [`Contact`](../interfaces/Contact.md)[]; `messages`: [`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md)[]; `progress`: `undefined` \| `null` \| `number`; `syncType`: [`HistorySyncType`](../namespaces/proto/namespaces/HistorySync/enumerations/HistorySyncType.md); \}\>
