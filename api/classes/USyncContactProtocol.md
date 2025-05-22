# Class: USyncContactProtocol

Defined in: [src/WAUSync/Protocols/USyncContactProtocol.ts:5](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/WAUSync/Protocols/USyncContactProtocol.ts#L5)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncContactProtocol()

> **new USyncContactProtocol**(): [`USyncContactProtocol`](USyncContactProtocol.md)

#### Returns

[`USyncContactProtocol`](USyncContactProtocol.md)

## Properties

### name

> **name**: `string` = `'contact'`

Defined in: [src/WAUSync/Protocols/USyncContactProtocol.ts:6](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/WAUSync/Protocols/USyncContactProtocol.ts#L6)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [src/WAUSync/Protocols/USyncContactProtocol.ts:8](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/WAUSync/Protocols/USyncContactProtocol.ts#L8)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(`user`): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [src/WAUSync/Protocols/USyncContactProtocol.ts:15](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/WAUSync/Protocols/USyncContactProtocol.ts#L15)

Defines what goes inside the user part of a USyncQuery

#### Parameters

##### user

[`USyncUser`](USyncUser.md)

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): `boolean`

Defined in: [src/WAUSync/Protocols/USyncContactProtocol.ts:24](https://github.com/Fokusdotid/Baileys/blob/b457796e9982984bfe7323cdd6fea8bc613c4ed0/src/WAUSync/Protocols/USyncContactProtocol.ts#L24)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`boolean`

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
