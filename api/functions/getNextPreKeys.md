# Function: getNextPreKeys()

> **getNextPreKeys**(`__namedParameters`, `count`): `Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>

Defined in: [src/Utils/signal.ts:148](https://github.com/Fokusdotid/Baileys/blob/4c54e9ae0a9f37422d51e97c3454891bf06f36e1/src/Utils/signal.ts#L148)

get the next N keys for upload or processing

## Parameters

### \_\_namedParameters

[`AuthenticationState`](../type-aliases/AuthenticationState.md)

### count

`number`

number of pre-keys to get or generate

## Returns

`Promise`\<\{ `preKeys`: \{\}; `update`: `Partial`\<[`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)\>; \}\>
