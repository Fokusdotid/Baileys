# Function: getNextPreKeys()

> **getNextPreKeys**(`__namedParameters`, `count`): `Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>

Defined in: [src/Utils/signal.ts:148](https://github.com/Fokusdotid/Baileys/blob/039f28db78950e3bac7c407f144ea390dcdf207d/src/Utils/signal.ts#L148)

get the next N keys for upload or processing

## Parameters

### \_\_namedParameters

[`AuthenticationState`](../type-aliases/AuthenticationState.md)

### count

`number`

number of pre-keys to get or generate

## Returns

`Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>
