# Function: extractUrlFromText()

> **extractUrlFromText**(`text`): `undefined` \| `string`

Defined in: [src/Utils/messages.ts:70](https://github.com/Fokusdotid/Baileys/blob/acae94a55f1d32612d8d312d52b001d93f2ac5e2/src/Utils/messages.ts#L70)

Uses a regex to test whether the string contains a URL, and returns the URL if it does.

## Parameters

### text

`string`

eg. hello https://google.com

## Returns

`undefined` \| `string`

the URL, eg. https://google.com
