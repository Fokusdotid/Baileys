# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [src/Utils/messages.ts:893](https://github.com/Fokusdotid/Baileys/blob/4c54e9ae0a9f37422d51e97c3454891bf06f36e1/src/Utils/messages.ts#L893)

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
