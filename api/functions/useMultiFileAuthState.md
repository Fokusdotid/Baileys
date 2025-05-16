# Function: useMultiFileAuthState()

> **useMultiFileAuthState**(`folder`): `Promise`\<\{ `saveCreds`: () => `Promise`\<`void`\>; `state`: [`AuthenticationState`](../type-aliases/AuthenticationState.md); \}\>

Defined in: [src/Utils/use-multi-file-auth-state.ts:33](https://github.com/Fokusdotid/Baileys/blob/eb819228f591f9a29a091aefc3a8c91a38d77089/src/Utils/use-multi-file-auth-state.ts#L33)

stores the full authentication state in a single folder.
Far more efficient than singlefileauthstate

Again, I wouldn't endorse this for any production level use other than perhaps a bot.
Would recommend writing an auth state for use with a proper SQL or No-SQL DB

## Parameters

### folder

`string`

## Returns

`Promise`\<\{ `saveCreds`: () => `Promise`\<`void`\>; `state`: [`AuthenticationState`](../type-aliases/AuthenticationState.md); \}\>
