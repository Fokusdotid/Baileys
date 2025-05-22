# Function: generateThumbnail()

> **generateThumbnail**(`file`, `mediaType`, `options`): `Promise`\<\{ `originalImageDimensions`: `undefined` \| \{ `height`: `number`; `width`: `number`; \}; `thumbnail`: `undefined` \| `string`; \}\>

Defined in: [src/Utils/messages-media.ts:289](https://github.com/Fokusdotid/Baileys/blob/982cc5b3c62bfc7b56d2f8f8427b6c1a2dda856f/src/Utils/messages-media.ts#L289)

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
