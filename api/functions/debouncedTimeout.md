# Function: debouncedTimeout()

> **debouncedTimeout**(`intervalMs`, `task`?): `object`

Defined in: [src/Utils/generics.ts:114](https://github.com/Fokusdotid/Baileys/blob/3533fb5d5a1e97f0cc8384505a121b389a346518/src/Utils/generics.ts#L114)

## Parameters

### intervalMs

`number` = `1000`

### task?

() => `void`

## Returns

`object`

### cancel()

> **cancel**: () => `void`

#### Returns

`void`

### setInterval()

> **setInterval**: (`newInterval`) => `number`

#### Parameters

##### newInterval

`number`

#### Returns

`number`

### setTask()

> **setTask**: (`newTask`) => () => `void`

#### Parameters

##### newTask

() => `void`

#### Returns

`Function`

##### Returns

`void`

### start()

> **start**: (`newIntervalMs`?, `newTask`?) => `void`

#### Parameters

##### newIntervalMs?

`number`

##### newTask?

() => `void`

#### Returns

`void`
