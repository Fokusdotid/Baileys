# Function: getMediaKeys()

> **getMediaKeys**(`buffer`, `mediaType`): `Promise`\<[`MediaDecryptionKeyInfo`](../type-aliases/MediaDecryptionKeyInfo.md)\>

Defined in: [src/Utils/messages-media.ts:58](https://github.com/Fokusdotid/Baileys/blob/f4c7971f59af0b012f8de667e7a21ae12f7bbf19/src/Utils/messages-media.ts#L58)

generates all the keys required to encrypt/decrypt & sign a media message

## Parameters

### buffer

`undefined` | `null` | `string` | `Uint8Array`\<`ArrayBufferLike`\>

### mediaType

`"ppic"` | `"product"` | `"image"` | `"video"` | `"sticker"` | `"audio"` | `"gif"` | `"ptt"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-link"` | `"thumbnail-video"` | `"md-app-state"` | `"md-msg-hist"` | `"document"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"`

## Returns

`Promise`\<[`MediaDecryptionKeyInfo`](../type-aliases/MediaDecryptionKeyInfo.md)\>
