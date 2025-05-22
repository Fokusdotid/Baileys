# Function: extractUrlFromText()

> **extractUrlFromText**(`text`): `undefined` \| `string`

Defined in: [src/Utils/messages.ts:70](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/Utils/messages.ts#L70)

Uses a regex to test whether the string contains a URL, and returns the URL if it does.

## Parameters

### text

`string`

eg. hello https://google.com

## Returns

`undefined` \| `string`

the URL, eg. https://google.com
