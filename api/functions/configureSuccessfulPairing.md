# Function: configureSuccessfulPairing()

> **configureSuccessfulPairing**(`stanza`, `__namedParameters`): `object`

Defined in: [src/Utils/validate-connection.ts:112](https://github.com/Fokusdotid/Baileys/blob/58a03b5a49cf326e1050515994499cb0bb76662f/src/Utils/validate-connection.ts#L112)

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
