# Interface: GroupMetadata

Defined in: [src/Types/GroupMetadata.ts:11](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L11)

## Properties

### addressingMode

> **addressingMode**: `"lid"` \| `"pn"`

Defined in: [src/Types/GroupMetadata.ts:14](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L14)

group uses 'lid' or 'pn' to send messages

***

### announce?

> `optional` **announce**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:33](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L33)

is set when the group only allows admins to write messages

***

### author?

> `optional` **author**: `string`

Defined in: [src/Types/GroupMetadata.ts:49](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L49)

the person who added you to group or changed some setting in group

***

### creation?

> `optional` **creation**: `number`

Defined in: [src/Types/GroupMetadata.ts:24](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L24)

***

### desc?

> `optional` **desc**: `string`

Defined in: [src/Types/GroupMetadata.ts:25](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L25)

***

### descId?

> `optional` **descId**: `string`

Defined in: [src/Types/GroupMetadata.ts:27](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L27)

***

### descOwner?

> `optional` **descOwner**: `string`

Defined in: [src/Types/GroupMetadata.ts:26](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L26)

***

### ephemeralDuration?

> `optional` **ephemeralDuration**: `number`

Defined in: [src/Types/GroupMetadata.ts:46](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L46)

***

### id

> **id**: `string`

Defined in: [src/Types/GroupMetadata.ts:12](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L12)

***

### inviteCode?

> `optional` **inviteCode**: `string`

Defined in: [src/Types/GroupMetadata.ts:47](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L47)

***

### isCommunity?

> `optional` **isCommunity**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:39](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L39)

is this a community

***

### isCommunityAnnounce?

> `optional` **isCommunityAnnounce**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:41](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L41)

is this the announce of a community

***

### joinApprovalMode?

> `optional` **joinApprovalMode**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:37](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L37)

Request approval to join the group

***

### linkedParent?

> `optional` **linkedParent**: `string`

Defined in: [src/Types/GroupMetadata.ts:29](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L29)

if this group is part of a community, it returns the jid of the community to which it belongs

***

### memberAddMode?

> `optional` **memberAddMode**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:35](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L35)

is set when the group also allows members to add participants

***

### owner

> **owner**: `undefined` \| `string`

Defined in: [src/Types/GroupMetadata.ts:15](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L15)

***

### ownerPn?

> `optional` **ownerPn**: `string`

Defined in: [src/Types/GroupMetadata.ts:16](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L16)

***

### participants

> **participants**: [`GroupParticipant`](../type-aliases/GroupParticipant.md)[]

Defined in: [src/Types/GroupMetadata.ts:45](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L45)

***

### restrict?

> `optional` **restrict**: `boolean`

Defined in: [src/Types/GroupMetadata.ts:31](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L31)

is set when the group only allows admins to change group settings

***

### size?

> `optional` **size**: `number`

Defined in: [src/Types/GroupMetadata.ts:43](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L43)

number of group participants

***

### subject

> **subject**: `string`

Defined in: [src/Types/GroupMetadata.ts:17](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L17)

***

### subjectOwner?

> `optional` **subjectOwner**: `string`

Defined in: [src/Types/GroupMetadata.ts:19](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L19)

group subject owner

***

### subjectOwnerPn?

> `optional` **subjectOwnerPn**: `string`

Defined in: [src/Types/GroupMetadata.ts:21](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L21)

group subject owner phone number

***

### subjectTime?

> `optional` **subjectTime**: `number`

Defined in: [src/Types/GroupMetadata.ts:23](https://github.com/Fokusdotid/Baileys/blob/deec6cc75a88a82eaeedf16b76aa9218b2c772e3/src/Types/GroupMetadata.ts#L23)

group subject modification date
