# Type Alias: MessageContentGenerationOptions

> **MessageContentGenerationOptions**: [`MediaGenerationOptions`](MediaGenerationOptions.md) & `object`

Defined in: [src/Types/Message.ts:290](https://github.com/Fokusdotid/Baileys/blob/039f28db78950e3bac7c407f144ea390dcdf207d/src/Types/Message.ts#L290)

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
