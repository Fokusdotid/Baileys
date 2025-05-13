# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [src/Utils/messages.ts:893](https://github.com/Fokusdotid/Baileys/blob/db1d3e5f41e9eede5877460f9adbb0224021575c/src/Utils/messages.ts#L893)

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
