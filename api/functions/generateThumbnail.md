# Function: generateThumbnail()

> **generateThumbnail**(`file`, `mediaType`, `options`): `Promise`\<\{ `originalImageDimensions`: `undefined` \| \{ `height`: `number`; `width`: `number`; \}; `thumbnail`: `undefined` \| `string`; \}\>

Defined in: [src/Utils/messages-media.ts:289](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Utils/messages-media.ts#L289)

generates a thumbnail for a given media, if required

## Parameters

### file

`string`

### mediaType

`"image"` | `"video"`

### options

#### logger?

`ILogger`

## Returns

`Promise`\<\{ `originalImageDimensions`: `undefined` \| \{ `height`: `number`; `width`: `number`; \}; `thumbnail`: `undefined` \| `string`; \}\>
