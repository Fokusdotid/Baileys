# Type Alias: AnyMessageContent

> **AnyMessageContent**: [`AnyRegularMessageContent`](AnyRegularMessageContent.md) \| \{ `force`: `boolean`; `forward`: [`WAMessage`](WAMessage.md); \} \| \{ `delete`: [`WAMessageKey`](WAMessageKey.md); \} \| \{ `disappearingMessagesInChat`: `boolean` \| `number`; \}

Defined in: [src/Types/Message.ts:220](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Types/Message.ts#L220)

## Type declaration

[`AnyRegularMessageContent`](AnyRegularMessageContent.md)

\{ `force`: `boolean`; `forward`: [`WAMessage`](WAMessage.md); \}

### force?

> `optional` **force**: `boolean`

### forward

> **forward**: [`WAMessage`](WAMessage.md)

\{ `delete`: [`WAMessageKey`](WAMessageKey.md); \}

### delete

> **delete**: [`WAMessageKey`](WAMessageKey.md)

Delete your message or anyone's message in a group (admin required)

\{ `disappearingMessagesInChat`: `boolean` \| `number`; \}

### disappearingMessagesInChat

> **disappearingMessagesInChat**: `boolean` \| `number`
