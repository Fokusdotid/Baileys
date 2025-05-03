# Function: downloadEncryptedContent()

> **downloadEncryptedContent**(`downloadUrl`, `__namedParameters`, `__namedParameters`): `Promise`\<`Transform`\>

Defined in: [src/Utils/messages-media.ts:476](https://github.com/Fokusdotid/Baileys/blob/c0c23ce3104b65dfcc64246c9ee8a49ef38993b5/src/Utils/messages-media.ts#L476)

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
