# Function: extractUrlFromText()

> **extractUrlFromText**(`text`): `undefined` \| `string`

Defined in: [src/Utils/messages.ts:70](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/Utils/messages.ts#L70)

Uses a regex to test whether the string contains a URL, and returns the URL if it does.

## Parameters

### text

`string`

eg. hello https://google.com

## Returns

`undefined` \| `string`

the URL, eg. https://google.com
