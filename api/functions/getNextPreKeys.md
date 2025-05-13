# Function: getNextPreKeys()

> **getNextPreKeys**(`__namedParameters`, `count`): `Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>

Defined in: [src/Utils/signal.ts:148](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Utils/signal.ts#L148)

get the next N keys for upload or processing

## Parameters

### \_\_namedParameters

[`AuthenticationState`](../type-aliases/AuthenticationState.md)

### count

`number`

number of pre-keys to get or generate

## Returns

`Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>
