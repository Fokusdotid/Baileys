# Type Alias: EventInputType

> **EventInputType**: `{ [key in Event["name"]]: { globals: (x: string) => Value; props: { [k in keyof EventByName<key>["props"]]: Value } } }` & `object`

Defined in: [src/WAM/constants.ts:15374](https://github.com/Fokusdotid/Baileys/blob/abcb8d9f2160683543784d4a7641ec0f8c55ed7e/src/WAM/constants.ts#L15374)
