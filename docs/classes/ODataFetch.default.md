[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / default

# Class: default

[ODataFetch](../modules/ODataFetch.md).default

## Hierarchy

- `default`

  ↳ **`default`**

## Table of contents

### Methods

- [callFunction](ODataFetch.default.md#callfunction)
- [create](ODataFetch.default.md#create)
- [read](ODataFetch.default.md#read)
- [remove](ODataFetch.default.md#remove)
- [update](ODataFetch.default.md#update)

## Methods

### callFunction

▸ **callFunction**<`T`\>(`sPath`, `mParameters?`): `Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPath` | `string` |
| `mParameters?` | [`CallFunctionParams`](../interfaces/ODataFetch.CallFunctionParams.md) |

#### Returns

`Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Overrides

ODataModel.callFunction

#### Defined in

[ODataFetch.ts:55](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L55)

___

### create

▸ **create**<`T`\>(`sPath`, `oData`, `mParameters?`): `Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPath` | `string` |
| `oData` | `object` |
| `mParameters?` | [`CreateParams`](../interfaces/ODataFetch.CreateParams.md) |

#### Returns

`Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Overrides

ODataModel.create

#### Defined in

[ODataFetch.ts:68](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L68)

___

### read

▸ **read**<`T`\>(`sPath`, `mParameters?`): `Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPath` | `string` |
| `mParameters?` | [`ReadParams`](../interfaces/ODataFetch.ReadParams.md) |

#### Returns

`Promise`<{ `oData`: `T` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`T`\>  }\>

#### Overrides

ODataModel.read

#### Defined in

[ODataFetch.ts:42](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L42)

___

### remove

▸ **remove**(`sPath`, `mParameters?`): `Promise`<{ `oData`: `undefined` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`undefined`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPath` | `string` |
| `mParameters?` | [`UpdateRemoveParams`](../interfaces/ODataFetch.UpdateRemoveParams.md) |

#### Returns

`Promise`<{ `oData`: `undefined` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`undefined`\>  }\>

#### Overrides

ODataModel.remove

#### Defined in

[ODataFetch.ts:94](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L94)

___

### update

▸ **update**(`sPath`, `oData`, `mParameters?`): `Promise`<{ `oData`: `undefined` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`undefined`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPath` | `string` |
| `oData` | `object` |
| `mParameters?` | [`UpdateRemoveParams`](../interfaces/ODataFetch.UpdateRemoveParams.md) |

#### Returns

`Promise`<{ `oData`: `undefined` ; `oResponse`: [`Response`](../interfaces/ODataFetch.Response.md)<`undefined`\>  }\>

#### Overrides

ODataModel.update

#### Defined in

[ODataFetch.ts:81](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L81)
