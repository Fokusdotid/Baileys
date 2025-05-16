# Function: getUrlInfo()

> **getUrlInfo**(`text`, `opts`): `Promise`\<`undefined` \| [`WAUrlInfo`](../interfaces/WAUrlInfo.md)\>

Defined in: [src/Utils/link-preview.ts:37](https://github.com/Fokusdotid/Baileys/blob/49e815e65b8f4aea31725e09dcf4815734557e39/src/Utils/link-preview.ts#L37)

Given a piece of text, checks for any URL present, generates link preview for the same and returns it
Return undefined if the fetch failed or no URL was found

## Parameters

### text

`string`

first matched URL in text

### opts

[`URLGenerationOptions`](../type-aliases/URLGenerationOptions.md) = `...`

## Returns

`Promise`\<`undefined` \| [`WAUrlInfo`](../interfaces/WAUrlInfo.md)\>

the URL info required to generate link preview
