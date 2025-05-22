# Function: assertMediaContent()

> **assertMediaContent**(`content`): [`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)

Defined in: [src/Utils/messages.ts:1025](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/Utils/messages.ts#L1025)

Checks whether the given message is a media message; if it is returns the inner content

## Parameters

### content

`undefined` | `null` | [`IMessage`](../namespaces/proto/interfaces/IMessage.md)

## Returns

[`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)
