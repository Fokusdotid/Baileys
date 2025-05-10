# Function: downloadEncryptedContent()

> **downloadEncryptedContent**(`downloadUrl`, `__namedParameters`, `__namedParameters`): `Promise`\<`Transform`\>

Defined in: [src/Utils/messages-media.ts:476](https://github.com/Fokusdotid/Baileys/blob/6a8e2076fa4119b2d5152250d579a4fbed394533/src/Utils/messages-media.ts#L476)

Decrypts and downloads an AES256-CBC encrypted file given the keys.
Assumes the SHA256 of the plaintext is appended to the end of the ciphertext

## Parameters

### downloadUrl

`string`

### \_\_namedParameters

[`MediaDecryptionKeyInfo`](../type-aliases/MediaDecryptionKeyInfo.md)

### \_\_namedParameters

[`MediaDownloadOptions`](../type-aliases/MediaDownloadOptions.md) = `{}`

## Returns

`Promise`\<`Transform`\>
