# Type Alias: MessageContentGenerationOptions

> **MessageContentGenerationOptions**: [`MediaGenerationOptions`](MediaGenerationOptions.md) & `object`

Defined in: [src/Types/Message.ts:290](https://github.com/Fokusdotid/Baileys/blob/49e815e65b8f4aea31725e09dcf4815734557e39/src/Types/Message.ts#L290)

## Type declaration

### getProfilePicUrl()?

> `optional` **getProfilePicUrl**: (`jid`, `type`) => `Promise`\<`string` \| `undefined`\>

#### Parameters

##### jid

`string`

##### type

`"image"` | `"preview"`

#### Returns

`Promise`\<`string` \| `undefined`\>

### getUrlInfo()?

> `optional` **getUrlInfo**: (`text`) => `Promise`\<[`WAUrlInfo`](../interfaces/WAUrlInfo.md) \| `undefined`\>

#### Parameters

##### text

`string`

#### Returns

`Promise`\<[`WAUrlInfo`](../interfaces/WAUrlInfo.md) \| `undefined`\>
