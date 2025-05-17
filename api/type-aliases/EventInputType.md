# Type Alias: EventInputType

> **EventInputType**: `{ [key in Event["name"]]: { globals: (x: string) => Value; props: { [k in keyof EventByName<key>["props"]]: Value } } }` & `object`

Defined in: [src/WAM/constants.ts:15374](https://github.com/Fokusdotid/Baileys/blob/86ad0f8078178c8586062ad3364a59e068f4b3b2/src/WAM/constants.ts#L15374)
