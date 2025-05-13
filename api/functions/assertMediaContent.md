# Function: assertMediaContent()

> **assertMediaContent**(`content`): [`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)

Defined in: [src/Utils/messages.ts:1026](https://github.com/Fokusdotid/Baileys/blob/58a03b5a49cf326e1050515994499cb0bb76662f/src/Utils/messages.ts#L1026)

Checks whether the given message is a media message; if it is returns the inner content

## Parameters

### content

`undefined` | `null` | [`IMessage`](../namespaces/proto/interfaces/IMessage.md)

## Returns

[`IVideoMessage`](../namespaces/proto/namespaces/Message/interfaces/IVideoMessage.md) \| [`IImageMessage`](../namespaces/proto/namespaces/Message/interfaces/IImageMessage.md) \| [`IAudioMessage`](../namespaces/proto/namespaces/Message/interfaces/IAudioMessage.md) \| [`IDocumentMessage`](../namespaces/proto/namespaces/Message/interfaces/IDocumentMessage.md) \| [`IStickerMessage`](../namespaces/proto/namespaces/Message/interfaces/IStickerMessage.md)
