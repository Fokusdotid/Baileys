# Variable: Curve

> `const` **Curve**: `object`

Defined in: [src/Utils/crypto.ts:16](https://github.com/Fokusdotid/Baileys/blob/a954da2ee3c892812cf9528a5a214092693c872f/src/Utils/crypto.ts#L16)

## Type declaration

### generateKeyPair()

> **generateKeyPair**: () => [`KeyPair`](../type-aliases/KeyPair.md)

#### Returns

[`KeyPair`](../type-aliases/KeyPair.md)

### sharedKey()

> **sharedKey**: (`privateKey`, `publicKey`) => `Buffer`\<`any`\>

#### Parameters

##### privateKey

`Uint8Array`

##### publicKey

`Uint8Array`

#### Returns

`Buffer`\<`any`\>

### sign()

> **sign**: (`privateKey`, `buf`) => `any`

#### Parameters

##### privateKey

`Uint8Array`

##### buf

`Uint8Array`

#### Returns

`any`

### verify()

> **verify**: (`pubKey`, `message`, `signature`) => `boolean`

#### Parameters

##### pubKey

`Uint8Array`

##### message

`Uint8Array`

##### signature

`Uint8Array`

#### Returns

`boolean`
