# Function: aesDecryptGCM()

> **aesDecryptGCM**(`ciphertext`, `key`, `iv`, `additionalData`): `Buffer`\<`ArrayBuffer`\>

Defined in: [src/Utils/crypto.ts:67](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Utils/crypto.ts#L67)

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
