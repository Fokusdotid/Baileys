# Function: configureSuccessfulPairing()

> **configureSuccessfulPairing**(`stanza`, `__namedParameters`): `object`

Defined in: [src/Utils/validate-connection.ts:112](https://github.com/Fokusdotid/Baileys/blob/a954da2ee3c892812cf9528a5a214092693c872f/src/Utils/validate-connection.ts#L112)

## Parameters

### stanza

[`BinaryNode`](../type-aliases/BinaryNode.md)

### \_\_namedParameters

`Pick`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md), `"signedIdentityKey"` \| `"advSecretKey"` \| `"signalIdentities"`\>

## Returns

`object`

### creds

> **creds**: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\> = `authUpdate`

### reply

> **reply**: [`BinaryNode`](../type-aliases/BinaryNode.md)
