# Function: extractUrlFromText()

> **extractUrlFromText**(`text`): `undefined` \| `string`

Defined in: [src/Utils/messages.ts:70](https://github.com/Fokusdotid/Baileys/blob/9c9f1957de7ce603966b24b846f4c15d5de9bbcf/src/Utils/messages.ts#L70)

Uses a regex to test whether the string contains a URL, and returns the URL if it does.

## Parameters

### text

`string`

eg. hello https://google.com

## Returns

`undefined` \| `string`

the URL, eg. https://google.com
