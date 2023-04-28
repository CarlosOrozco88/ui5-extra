[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / UpdateRemoveParams

# Interface: UpdateRemoveParams

[ODataFetch](../modules/ODataFetch.md).UpdateRemoveParams

## Hierarchy

- `AborterParams`

  ↳ **`UpdateRemoveParams`**

## Table of contents

### Properties

- [aborterId](ODataFetch.UpdateRemoveParams.md#aborterid)
- [batchGroupId](ODataFetch.UpdateRemoveParams.md#batchgroupid)
- [changeSetId](ODataFetch.UpdateRemoveParams.md#changesetid)
- [context](ODataFetch.UpdateRemoveParams.md#context)
- [eTag](ODataFetch.UpdateRemoveParams.md#etag)
- [error](ODataFetch.UpdateRemoveParams.md#error)
- [groupId](ODataFetch.UpdateRemoveParams.md#groupid)
- [headers](ODataFetch.UpdateRemoveParams.md#headers)
- [refreshAfterChange](ODataFetch.UpdateRemoveParams.md#refreshafterchange)
- [success](ODataFetch.UpdateRemoveParams.md#success)
- [urlParameters](ODataFetch.UpdateRemoveParams.md#urlparameters)

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

[ODataFetch.ts:554](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L554)

___

### changeSetId

• `Optional` **changeSetId**: `string`

ID of the `ChangeSet` that this request should belong to

#### Defined in

[ODataFetch.ts:562](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L562)

___

### context

• `Optional` **context**: `object`

If specified the sPath has to be is relative to the path given with the context.

#### Defined in

[ODataFetch.ts:526](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L526)

___

### eTag

• `Optional` **eTag**: `string`

If specified, the `If-Match` header will be set to this ETag. Caution: This feature in not officially
supported as using asynchronous requests can lead to data inconsistencies. If you decide to use this
feature nevertheless, you have to make sure that the request is completed before the data is processed
any further.

#### Defined in

[ODataFetch.ts:542](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L542)

___

### error

• `Optional` **error**: `Function`

A callback function which is called when the request failed. The handler can have the parameter `oError`
which contains additional error information.

#### Defined in

[ODataFetch.ts:535](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L535)

___

### groupId

• `Optional` **groupId**: `string`

ID of a request group; requests belonging to the same group will be bundled in one batch request

#### Defined in

[ODataFetch.ts:558](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L558)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

A map of headers for this request

#### Defined in

[ODataFetch.ts:550](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L550)

___

### refreshAfterChange

• `Optional` **refreshAfterChange**: `boolean`

Since 1.46; defines whether to update all bindings after submitting this change operation. See [#setRefreshAfterChange](../modules/ODataFetch.md) If given, this overrules the model-wide `refreshAfterChange` flag for this operation
only.

#### Defined in

[ODataFetch.ts:568](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L568)

___

### success

• `Optional` **success**: `Function`

A callback function which is called when the data has been successfully updated.

#### Defined in

[ODataFetch.ts:530](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L530)

___

### urlParameters

• `Optional` **urlParameters**: `Record`<`string`, `string`\>

A map containing the parameters that will be passed as query strings

#### Defined in

[ODataFetch.ts:546](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L546)
