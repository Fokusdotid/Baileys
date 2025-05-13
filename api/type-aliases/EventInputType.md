# Type Alias: EventInputType

> **EventInputType**: `{ [key in Event["name"]]: { globals: (x: string) => Value; props: { [k in keyof EventByName<key>["props"]]: Value } } }` & `object`

Defined in: [src/WAM/constants.ts:15374](https://github.com/Fokusdotid/Baileys/blob/58a03b5a49cf326e1050515994499cb0bb76662f/src/WAM/constants.ts#L15374)
