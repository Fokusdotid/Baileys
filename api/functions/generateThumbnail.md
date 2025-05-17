# Function: generateThumbnail()

> **generateThumbnail**(`file`, `mediaType`, `options`): `Promise`\<\{ `originalImageDimensions`: `undefined` \| \{ `height`: `number`; `width`: `number`; \}; `thumbnail`: `undefined` \| `string`; \}\>

Defined in: [src/Utils/messages-media.ts:289](https://github.com/Fokusdotid/Baileys/blob/a954da2ee3c892812cf9528a5a214092693c872f/src/Utils/messages-media.ts#L289)

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
