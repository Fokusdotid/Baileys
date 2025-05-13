# Function: downloadEncryptedContent()

> **downloadEncryptedContent**(`downloadUrl`, `__namedParameters`, `__namedParameters`): `Promise`\<`Transform`\>

Defined in: [src/Utils/messages-media.ts:476](https://github.com/Fokusdotid/Baileys/blob/db1d3e5f41e9eede5877460f9adbb0224021575c/src/Utils/messages-media.ts#L476)

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
