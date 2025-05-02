# Type Alias: AnyMessageContent

> **AnyMessageContent**: [`AnyRegularMessageContent`](AnyRegularMessageContent.md) \| \{ `force`: `boolean`; `forward`: [`WAMessage`](WAMessage.md); \} \| \{ `delete`: [`WAMessageKey`](WAMessageKey.md); \} \| \{ `disappearingMessagesInChat`: `boolean` \| `number`; \}

Defined in: [src/Types/Message.ts:186](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/src/Types/Message.ts#L186)

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
