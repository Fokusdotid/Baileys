# Function: assertMediaContent()

> **assertMediaContent**(`content`): [`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)

Defined in: [src/Utils/messages.ts:1026](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Utils/messages.ts#L1026)

Checks whether the given message is a media message; if it is returns the inner content

## Parameters

### content

`undefined` | `null` | [`IMessage`](../namespaces/proto/interfaces/IMessage.md)

## Returns

[`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)
