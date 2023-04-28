[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / ReadParams

# Interface: ReadParams

[ODataFetch](../modules/ODataFetch.md).ReadParams

## Hierarchy

- `AborterParams`

  ↳ **`ReadParams`**

## Table of contents

### Properties

- [aborterId](ODataFetch.ReadParams.md#aborterid)
- [batchGroupId](ODataFetch.ReadParams.md#batchgroupid)
- [context](ODataFetch.ReadParams.md#context)
- [error](ODataFetch.ReadParams.md#error)
- [filters](ODataFetch.ReadParams.md#filters)
- [groupId](ODataFetch.ReadParams.md#groupid)
- [sorters](ODataFetch.ReadParams.md#sorters)
- [success](ODataFetch.ReadParams.md#success)
- [updateAggregatedMessages](ODataFetch.ReadParams.md#updateaggregatedmessages)
- [urlParameters](ODataFetch.ReadParams.md#urlparameters)

## Properties

### aborterId

• `Optional` **aborterId**: `string`

Key to abort previous requests

#### Inherited from

AborterParams.aborterId

#### Defined in

[ODataFetch.ts:605](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L605)

___

### batchGroupId

• `Optional` **batchGroupId**: `string`

Deprecated - use `groupId` instead

#### Defined in

[ODataFetch.ts:369](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L369)

___

### context

• `Optional` **context**: `object`

If specified, `sPath` has to be relative to the path given with the context.

#### Defined in

[ODataFetch.ts:342](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L342)

___

### error

• `Optional` **error**: `Function`

A callback function which is called when the request failed. The handler can have the parameter: `oError`
which contains additional error information.

#### Defined in

[ODataFetch.ts:365](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L365)

___

### filters

• `Optional` **filters**: `default`[]

An array of filters to be included in the request URL

#### Defined in

[ODataFetch.ts:350](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L350)

___

### groupId

• `Optional` **groupId**: `string`

ID of a request group; requests belonging to the same group will be bundled in one batch request

#### Defined in

[ODataFetch.ts:373](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L373)

___

### sorters

• `Optional` **sorters**: `default`[]

An array of sorters to be included in the request URL

#### Defined in

[ODataFetch.ts:354](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L354)

___

### success

• `Optional` **success**: `Function`

A callback function which is called when the data has been successfully retrieved. The handler can have
the following parameters: `oData` and `response`. The `oData` parameter contains the data of the retrieved
data. The `response` parameter contains further information about the response of the request.

#### Defined in

[ODataFetch.ts:360](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L360)

___

### updateAggregatedMessages

• `Optional` **updateAggregatedMessages**: `boolean`

Whether messages for child entities belonging to the same business object as the requested or changed
resources are updated. It is considered only if sap.ui.model.odata.MessageScope.BusinessObject
is set using [#setMessageScope](../modules/ODataFetch.md) and if the OData service supports message scope.

#### Defined in

[ODataFetch.ts:379](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L379)

___

### urlParameters

• `Optional` **urlParameters**: `Record`<`string`, `string`\>

A map containing the parameters that will be passed as query strings

#### Defined in

[ODataFetch.ts:346](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L346)
