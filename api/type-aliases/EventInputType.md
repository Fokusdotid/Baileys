# Type Alias: EventInputType

> **EventInputType**: `{ [key in Event["name"]]: { globals: (x: string) => Value; props: { [k in keyof EventByName<key>["props"]]: Value } } }` & `object`

Defined in: [src/WAM/constants.ts:15374](https://github.com/Fokusdotid/Baileys/blob/8399cb6fd4e55090cdf57b06ffaae3e8a88880fe/src/WAM/constants.ts#L15374)
