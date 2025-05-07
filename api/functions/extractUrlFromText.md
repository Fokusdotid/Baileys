# Function: extractUrlFromText()

> **extractUrlFromText**(`text`): `undefined` \| `string`

Defined in: [src/Utils/messages.ts:70](https://github.com/Fokusdotid/Baileys/blob/4cdf75fe48f9b13e8084d341633612ce49e934bd/src/Utils/messages.ts#L70)

Uses a regex to test whether the string contains a URL, and returns the URL if it does.

## Parameters

### text

`string`

eg. hello https://google.com

## Returns

`undefined` \| `string`

the URL, eg. https://google.com
