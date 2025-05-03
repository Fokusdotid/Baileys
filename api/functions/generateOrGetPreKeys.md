# Function: generateOrGetPreKeys()

> **generateOrGetPreKeys**(`creds`, `range`): `object`

Defined in: [src/Utils/signal.ts:29](https://github.com/Fokusdotid/Baileys/blob/d7495b24bcd136e35724329fba661cfcc0bc8eed/src/Utils/signal.ts#L29)

## Parameters

### creds

[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)

### range

`number`

## Returns

`object`

### lastPreKeyId

> **lastPreKeyId**: `number`

### newPreKeys

> **newPreKeys**: `object`

#### Index Signature

\[`id`: `number`\]: [`KeyPair`](../type-aliases/KeyPair.md)

### preKeysRange

> **preKeysRange**: readonly \[`number`, `number`\]
