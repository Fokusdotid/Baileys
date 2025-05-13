# Function: aesDecryptGCM()

> **aesDecryptGCM**(`ciphertext`, `key`, `iv`, `additionalData`): `Buffer`\<`ArrayBuffer`\>

Defined in: [src/Utils/crypto.ts:67](https://github.com/Fokusdotid/Baileys/blob/db1d3e5f41e9eede5877460f9adbb0224021575c/src/Utils/crypto.ts#L67)

decrypt AES 256 GCM;
where the auth tag is suffixed to the ciphertext

## Parameters

### ciphertext

`Uint8Array`

### key

`Uint8Array`

### iv

`Uint8Array`

### additionalData

`Uint8Array`

## Returns

`Buffer`\<`ArrayBuffer`\>
