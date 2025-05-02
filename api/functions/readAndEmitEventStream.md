# Function: readAndEmitEventStream()

> **readAndEmitEventStream**(`filename`, `delayIntervalMs`): `object`

Defined in: [src/Utils/baileys-event-stream.ts:38](https://github.com/Fokusdotid/Baileys/blob/4aa08196a497251af5be42856601e02d8a85cce8/src/Utils/baileys-event-stream.ts#L38)

Read event file and emit events from there

## Parameters

### filename

`string`

filename containing event data

### delayIntervalMs

`number` = `0`

delay between each event emit

## Returns

`object`

### ev

> **ev**: [`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md)

### task

> **task**: `Promise`\<`void`\>
