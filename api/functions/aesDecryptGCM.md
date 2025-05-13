# Function: aesDecryptGCM()

> **aesDecryptGCM**(`ciphertext`, `key`, `iv`, `additionalData`): `Buffer`\<`ArrayBuffer`\>

Defined in: [src/Utils/crypto.ts:67](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Utils/crypto.ts#L67)

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
