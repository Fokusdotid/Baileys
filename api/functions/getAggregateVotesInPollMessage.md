# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [src/Utils/messages.ts:893](https://github.com/Fokusdotid/Baileys/blob/9c9f1957de7ce603966b24b846f4c15d5de9bbcf/src/Utils/messages.ts#L893)

Aggregates all poll updates in a poll.

## Parameters

### msg

`Pick`\<[`IWebMessageInfo`](../namespaces/proto/interfaces/IWebMessageInfo.md), `"message"` \| `"pollUpdates"`\>

the poll creation message

### meId?

`string`

your jid

## Returns

`VoteAggregation`[]

A list of options & their voters
