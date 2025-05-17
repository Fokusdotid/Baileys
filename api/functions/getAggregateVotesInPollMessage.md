# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [src/Utils/messages.ts:892](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Utils/messages.ts#L892)

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
