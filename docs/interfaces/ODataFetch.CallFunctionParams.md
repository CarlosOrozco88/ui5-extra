[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / CallFunctionParams

# Interface: CallFunctionParams

[ODataFetch](../modules/ODataFetch.md).CallFunctionParams

## Hierarchy

- `AborterParams`

  ↳ **`CallFunctionParams`**

## Table of contents

### Properties

- [aborterId](ODataFetch.CallFunctionParams.md#aborterid)
- [adjustDeepPath](ODataFetch.CallFunctionParams.md#adjustdeeppath)
- [batchGroupId](ODataFetch.CallFunctionParams.md#batchgroupid)
- [changeSetId](ODataFetch.CallFunctionParams.md#changesetid)
- [eTag](ODataFetch.CallFunctionParams.md#etag)
- [error](ODataFetch.CallFunctionParams.md#error)
- [expand](ODataFetch.CallFunctionParams.md#expand)
- [groupId](ODataFetch.CallFunctionParams.md#groupid)
- [headers](ODataFetch.CallFunctionParams.md#headers)
- [method](ODataFetch.CallFunctionParams.md#method)
- [refreshAfterChange](ODataFetch.CallFunctionParams.md#refreshafterchange)
- [success](ODataFetch.CallFunctionParams.md#success)
- [urlParameters](ODataFetch.CallFunctionParams.md#urlparameters)

## Properties

### aborterId

• `Optional` **aborterId**: `string`

Key to abort previous requests

#### Inherited from

AborterParams.aborterId

#### Defined in

[ODataFetch.ts:605](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L605)

___

### adjustDeepPath

• `Optional` **adjustDeepPath**: `Function`

Defines a callback function to adjust the deep path for the resulting entity of the function import call;
since 1.82. The deep path of an entity is the resolved path relative to the parent contexts of the binding
in the UI hierarchy. For example, for a `ToBusinessPartner` relative context binding with a `/SalesOrder('42')`
parent context, the resulting deep path for the `BusinessPartner` is `/SalesOrder('42')/ToBusinessPartner`.
This deep path is used to properly assign messages and show them correctly on the UI.

The callback function returns a `string` with the deep path for the entity returned by the function import
and gets the parameter map `mParameters` containing the following properties:
	 - `{string} mParameters.deepPath`: The deep path of the resulting entity, as far as the framework is
			able to determine from the metadata and the OData response
	 - `{object} mParameters.response`: A copy of the OData response object

#### Defined in

[ODataFetch.ts:399](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L399)

___

### batchGroupId

• `Optional` **batchGroupId**: `string`

**Deprecated - use `groupId` instead**

#### Defined in

[ODataFetch.ts:468](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L468)

___

### changeSetId

• `Optional` **changeSetId**: `string`

ID of the `ChangeSet` that this request belongs to

#### Defined in

[ODataFetch.ts:403](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L403)

___

### eTag

• `Optional` **eTag**: `string`

If the function import changes an entity, the ETag for this entity can be passed with this parameter

#### Defined in

[ODataFetch.ts:412](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L412)

___

### error

• `Optional` **error**: `Function`

A callback function which is called when the request failed. The handler can have the parameter: `oError`
which contains additional error information.

#### Defined in

[ODataFetch.ts:408](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L408)

___

### expand

• `Optional` **expand**: `string`

A comma-separated list of navigation properties to be expanded for the entity returned by the function
import; since 1.83.0. The navigation properties are requested with an additional GET request in
the same `batch` request as the POST request for the function import. The given `mParameters.headers`
are not considered in the GET request. **Note:** The following prerequisites must be fulfilled:

	 - batch mode must be enabled; see constructor parameter `useBatch`,
	 - the HTTP method used for the function import is "POST",
	 - the function import returns a single entity,
	 - the back-end service must support the "Content-ID" header,
	 - the back end must allow GET requests relative to this content ID outside the changeset within the
			`batch` request.  The success and error callback functions are called only once, even if there
			are two requests in the `batch` related to a single call of [#callFunction](../modules/ODataFetch.md).
	 - If both requests succeed, the success callback is called with the merged data of the POST and the
			GET request and with the response of the POST request.
	 - If the POST request fails, the GET request also fails. In that case the error callback is called
			with the error response of the POST request.
	 - If the POST request succeeds but the GET request for the navigation properties fails, the success
			callback is called with the data and the response of the POST request. The response object of the success
			callback call and the response parameter of the corresponding `requestFailed` and `requestCompleted`
			events have an additional property `expandAfterFunctionCallFailed` set to `true`.

#### Defined in

[ODataFetch.ts:435](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L435)

___

### groupId

• `Optional` **groupId**: `string`

ID of a request group; requests belonging to the same group are bundled in one batch request

#### Defined in

[ODataFetch.ts:439](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L439)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

A map of headers for this request

#### Defined in

[ODataFetch.ts:443](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L443)

___

### method

• `Optional` **method**: `string`

The HTTP method used for the function import call as specified in the metadata definition of the function
import

#### Defined in

[ODataFetch.ts:448](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L448)

___

### refreshAfterChange

• `Optional` **refreshAfterChange**: `boolean`

Defines whether to update all bindings after submitting this change operation; since 1.46. See [#setRefreshAfterChange](../modules/ODataFetch.md). If given, this overrules the model-wide `refreshAfterChange` flag for this operation
only.

#### Defined in

[ODataFetch.ts:454](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L454)

___

### success

• `Optional` **success**: `Function`

A callback function which is called when the data has been successfully retrieved; the handler can have
the following parameters: `oData` and `response`.

#### Defined in

[ODataFetch.ts:459](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L459)

___

### urlParameters

• `Optional` **urlParameters**: `Record`<`string`, `any`\>

Maps the function import parameter name as specified in the function import's metadata to its value;
the value is formatted based on the parameter's type as specified in the metadata

#### Defined in

[ODataFetch.ts:464](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L464)
