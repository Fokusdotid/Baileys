# Interface: GroupMetadata

Defined in: [src/Types/GroupMetadata.ts:11](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L11)

## Properties

### addressingMode

> **addressingMode**: `string`

Defined in: [src/Types/GroupMetadata.ts:14](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L14)

group uses 'lid' or 'pn' to send messages

***

### announce?

> `optional` **announce**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:30](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L30)

is set when the group only allows admins to write messages

***

### author?

> `optional` **author**: `string`

Defined in: [src/Types/GroupMetadata.ts:46](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L46)

the person who added you to group or changed some setting in group

***

### creation?

> `optional` **creation**: `number`

Defined in: [src/Types/GroupMetadata.ts:21](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L21)

***

### desc?

> `optional` **desc**: `string`

Defined in: [src/Types/GroupMetadata.ts:22](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L22)

***

### descId?

> `optional` **descId**: `string`

Defined in: [src/Types/GroupMetadata.ts:24](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L24)

***

### descOwner?

> `optional` **descOwner**: `string`

Defined in: [src/Types/GroupMetadata.ts:23](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L23)

***

### ephemeralDuration?

> `optional` **ephemeralDuration**: `number`

Defined in: [src/Types/GroupMetadata.ts:43](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L43)

***

### id

> **id**: `string`

Defined in: [src/Types/GroupMetadata.ts:12](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L12)

***

### inviteCode?

> `optional` **inviteCode**: `string`

Defined in: [src/Types/GroupMetadata.ts:44](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L44)

***

### isCommunity?

> `optional` **isCommunity**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:36](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L36)

is this a community

***

### isCommunityAnnounce?

> `optional` **isCommunityAnnounce**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:38](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L38)

is this the announce of a community

***

### joinApprovalMode?

> `optional` **joinApprovalMode**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:34](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L34)

Request approval to join the group

***

### linkedParent?

> `optional` **linkedParent**: `string`

Defined in: [src/Types/GroupMetadata.ts:26](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L26)

if this group is part of a community, it returns the jid of the community to which it belongs

***

### memberAddMode?

> `optional` **memberAddMode**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:32](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L32)

is set when the group also allows members to add participants

***

### owner

> **owner**: `undefined` \| `string`

Defined in: [src/Types/GroupMetadata.ts:15](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L15)

***

### participants

> **participants**: [`GroupParticipant`](../type-aliases/GroupParticipant.md)[]

Defined in: [src/Types/GroupMetadata.ts:42](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L42)

***

### restrict?

> `optional` **restrict**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:28](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L28)

is set when the group only allows admins to change group settings

***

### size?

> `optional` **size**: `number`

Defined in: [src/Types/GroupMetadata.ts:40](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L40)

number of group participants

***

### subject

> **subject**: `string`

Defined in: [src/Types/GroupMetadata.ts:16](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L16)

***

### subjectOwner?

> `optional` **subjectOwner**: `string`

Defined in: [src/Types/GroupMetadata.ts:18](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L18)

group subject owner

***

### subjectTime?

> `optional` **subjectTime**: `number`

Defined in: [src/Types/GroupMetadata.ts:20](https://github.com/Fokusdotid/Baileys/blob/e5a24e138f3b69cf124e0406999e537d5c9a6c18/src/Types/GroupMetadata.ts#L20)

group subject modification date
