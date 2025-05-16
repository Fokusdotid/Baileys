# Function: readAndEmitEventStream()

> **readAndEmitEventStream**(`filename`, `delayIntervalMs`): `object`

Defined in: [src/Utils/baileys-event-stream.ts:38](https://github.com/Fokusdotid/Baileys/blob/eb819228f591f9a29a091aefc3a8c91a38d77089/src/Utils/baileys-event-stream.ts#L38)

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
