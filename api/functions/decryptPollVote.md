# Function: decryptPollVote()

> **decryptPollVote**(`vote`, `ctx`): [`PollVoteMessage`](../namespaces/proto/namespaces/Message/classes/PollVoteMessage.md)

Defined in: [src/Utils/process-message.ts:120](https://github.com/Fokusdotid/Baileys/blob/9c9f1957de7ce603966b24b846f4c15d5de9bbcf/src/Utils/process-message.ts#L120)

Decrypt a poll vote

## Parameters

### vote

[`IPollEncValue`](../namespaces/proto/namespaces/Message/interfaces/IPollEncValue.md)

encrypted vote

### ctx

`PollContext`

additional info about the poll required for decryption

## Returns

[`PollVoteMessage`](../namespaces/proto/namespaces/Message/classes/PollVoteMessage.md)

list of SHA256 options
