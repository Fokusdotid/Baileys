# Type Alias: EventInputType

> **EventInputType**: `{ [key in Event["name"]]: { globals: (x: string) => Value; props: { [k in keyof EventByName<key>["props"]]: Value } } }` & `object`

Defined in: [src/WAM/constants.ts:15374](https://github.com/Fokusdotid/Baileys/blob/9c9f1957de7ce603966b24b846f4c15d5de9bbcf/src/WAM/constants.ts#L15374)
