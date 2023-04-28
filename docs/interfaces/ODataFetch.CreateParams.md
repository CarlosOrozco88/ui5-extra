[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / CreateParams

# Interface: CreateParams

[ODataFetch](../modules/ODataFetch.md).CreateParams

## Hierarchy

- `AborterParams`

  ↳ **`CreateParams`**

## Table of contents

### Properties

- [aborterId](ODataFetch.CreateParams.md#aborterid)
- [batchGroupId](ODataFetch.CreateParams.md#batchgroupid)
- [changeSetId](ODataFetch.CreateParams.md#changesetid)
- [context](ODataFetch.CreateParams.md#context)
- [error](ODataFetch.CreateParams.md#error)
- [groupId](ODataFetch.CreateParams.md#groupid)
- [headers](ODataFetch.CreateParams.md#headers)
- [refreshAfterChange](ODataFetch.CreateParams.md#refreshafterchange)
- [success](ODataFetch.CreateParams.md#success)
- [urlParameters](ODataFetch.CreateParams.md#urlparameters)

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

[ODataFetch.ts:502](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L502)

___

### changeSetId

• `Optional` **changeSetId**: `string`

ID of the `ChangeSet` that this request should belong to

#### Defined in

[ODataFetch.ts:510](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L510)

___

### context

• `Optional` **context**: `object`

If specified , `sPath` has to be relative to the path given with the context.

#### Defined in

[ODataFetch.ts:478](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L478)

___

### error

• `Optional` **error**: `Function`

A callback function which is called when the request failed. The handler can have the parameter `oError`
which contains additional error information.

#### Defined in

[ODataFetch.ts:490](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L490)

___

### groupId

• `Optional` **groupId**: `string`

ID of a request group; requests belonging to the same group will be bundled in one batch request

#### Defined in

[ODataFetch.ts:506](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L506)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

A map of headers for this request

#### Defined in

[ODataFetch.ts:498](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L498)

___

### refreshAfterChange

• `Optional` **refreshAfterChange**: `boolean`

Since 1.46; defines whether to update all bindings after submitting this change operation. See [#setRefreshAfterChange](../modules/ODataFetch.md) If given, this overrules the model-wide `refreshAfterChange` flag for this operation
only.

#### Defined in

[ODataFetch.ts:516](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L516)

___

### success

• `Optional` **success**: `Function`

A callback function which is called when the data has been successfully retrieved. The handler can have
the following parameters: `oData` and `response`. The `oData` parameter contains the data of the newly
created entry if it is provided by the backend. The `response` parameter contains information about the
response of the request.

#### Defined in

[ODataFetch.ts:485](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L485)

___

### urlParameters

• `Optional` **urlParameters**: `Record`<`string`, `string`\>

A map containing the parameters that will be passed as query strings

#### Defined in

[ODataFetch.ts:494](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L494)
