# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [src/Utils/messages.ts:893](https://github.com/Fokusdotid/Baileys/blob/6a8e2076fa4119b2d5152250d579a4fbed394533/src/Utils/messages.ts#L893)

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
