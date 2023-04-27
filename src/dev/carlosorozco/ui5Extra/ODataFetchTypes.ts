import Filter from 'sap/ui/model/Filter';
import Sorter from 'sap/ui/model/Sorter';
import ODataModel from 'sap/ui/model/odata/v2/ODataModel';

export type ODataModelConstructor = ConstructorParameters<typeof ODataModel>;

export interface ReadParameters {
  /**
   * If specified, `sPath` has to be relative to the path given with the context.
   */
  context?: object;
  /**
   * A map containing the parameters that will be passed as query strings
   */
  urlParameters?: Record<string, string>;
  /**
   * An array of filters to be included in the request URL
   */
  filters?: Filter[];
  /**
   * An array of sorters to be included in the request URL
   */
  sorters?: Sorter[];
  /**
   * A callback function which is called when the data has been successfully retrieved. The handler can have
   * the following parameters: `oData` and `response`. The `oData` parameter contains the data of the retrieved
   * data. The `response` parameter contains further information about the response of the request.
   */
  success?: Function;
  /**
   * A callback function which is called when the request failed. The handler can have the parameter: `oError`
   * which contains additional error information.
   */
  error?: Function;
  /**
   * Deprecated - use `groupId` instead
   */
  batchGroupId?: string;
  /**
   * ID of a request group; requests belonging to the same group will be bundled in one batch request
   */
  groupId?: string;
  /**
   * Whether messages for child entities belonging to the same business object as the requested or changed
   * resources are updated. It is considered only if {@link sap.ui.model.odata.MessageScope.BusinessObject}
   * is set using {@link #setMessageScope} and if the OData service supports message scope.
   */
  updateAggregatedMessages?: boolean;
}

export interface CallFunctionParameters {
  /**
   * Defines a callback function to adjust the deep path for the resulting entity of the function import call;
   * since 1.82. The deep path of an entity is the resolved path relative to the parent contexts of the binding
   * in the UI hierarchy. For example, for a `ToBusinessPartner` relative context binding with a `/SalesOrder('42')`
   * parent context, the resulting deep path for the `BusinessPartner` is `/SalesOrder('42')/ToBusinessPartner`.
   * This deep path is used to properly assign messages and show them correctly on the UI.
   *
   * The callback function returns a `string` with the deep path for the entity returned by the function import
   * and gets the parameter map `mParameters` containing the following properties:
   * 	 - `{string} mParameters.deepPath`: The deep path of the resulting entity, as far as the framework is
   * 			able to determine from the metadata and the OData response
   * 	 - `{object} mParameters.response`: A copy of the OData response object
   */
  adjustDeepPath?: Function;
  /**
   * ID of the `ChangeSet` that this request belongs to
   */
  changeSetId?: string;
  /**
   * A callback function which is called when the request failed. The handler can have the parameter: `oError`
   * which contains additional error information.
   */
  error?: Function;
  /**
   * If the function import changes an entity, the ETag for this entity can be passed with this parameter
   */
  eTag?: string;
  /**
   * A comma-separated list of navigation properties to be expanded for the entity returned by the function
   * import; since 1.83.0. The navigation properties are requested with an additional GET request in
   * the same `batch` request as the POST request for the function import. The given `mParameters.headers`
   * are not considered in the GET request. **Note:** The following prerequisites must be fulfilled:
   *
   * 	 - batch mode must be enabled; see constructor parameter `useBatch`,
   * 	 - the HTTP method used for the function import is "POST",
   * 	 - the function import returns a single entity,
   * 	 - the back-end service must support the "Content-ID" header,
   * 	 - the back end must allow GET requests relative to this content ID outside the changeset within the
   * 			`batch` request.  The success and error callback functions are called only once, even if there
   * 			are two requests in the `batch` related to a single call of {@link #callFunction}.
   * 	 - If both requests succeed, the success callback is called with the merged data of the POST and the
   * 			GET request and with the response of the POST request.
   * 	 - If the POST request fails, the GET request also fails. In that case the error callback is called
   * 			with the error response of the POST request.
   * 	 - If the POST request succeeds but the GET request for the navigation properties fails, the success
   * 			callback is called with the data and the response of the POST request. The response object of the success
   * 			callback call and the response parameter of the corresponding `requestFailed` and `requestCompleted`
   * 			events have an additional property `expandAfterFunctionCallFailed` set to `true`.
   */
  expand?: string;
  /**
   * ID of a request group; requests belonging to the same group are bundled in one batch request
   */
  groupId?: string;
  /**
   * A map of headers for this request
   */
  headers?: Record<string, string>;
  /**
   * The HTTP method used for the function import call as specified in the metadata definition of the function
   * import
   */
  method?: string;
  /**
   * Defines whether to update all bindings after submitting this change operation; since 1.46. See {@link
   * #setRefreshAfterChange}. If given, this overrules the model-wide `refreshAfterChange` flag for this operation
   * only.
   */
  refreshAfterChange?: boolean;
  /**
   * A callback function which is called when the data has been successfully retrieved; the handler can have
   * the following parameters: `oData` and `response`.
   */
  success?: Function;
  /**
   * Maps the function import parameter name as specified in the function import's metadata to its value;
   * the value is formatted based on the parameter's type as specified in the metadata
   */
  urlParameters?: Record<string, any>;
  /**
   * **Deprecated - use `groupId` instead**
   */
  batchGroupId?: string;
}

export interface CreateParameters {
  /**
   * If specified , `sPath` has to be relative to the path given with the context.
   */
  context?: object;
  /**
   * A callback function which is called when the data has been successfully retrieved. The handler can have
   * the following parameters: `oData` and `response`. The `oData` parameter contains the data of the newly
   * created entry if it is provided by the backend. The `response` parameter contains information about the
   * response of the request.
   */
  success?: Function;
  /**
   * A callback function which is called when the request failed. The handler can have the parameter `oError`
   * which contains additional error information.
   */
  error?: Function;
  /**
   * A map containing the parameters that will be passed as query strings
   */
  urlParameters?: Record<string, string>;
  /**
   * A map of headers for this request
   */
  headers?: Record<string, string>;
  /**
   * Deprecated - use `groupId` instead
   */
  batchGroupId?: string;
  /**
   * ID of a request group; requests belonging to the same group will be bundled in one batch request
   */
  groupId?: string;
  /**
   * ID of the `ChangeSet` that this request should belong to
   */
  changeSetId?: string;
  /**
   * Since 1.46; defines whether to update all bindings after submitting this change operation. See {@link
   * #setRefreshAfterChange} If given, this overrules the model-wide `refreshAfterChange` flag for this operation
   * only.
   */
  refreshAfterChange?: boolean;
}

export interface UpdateRemoveParameters {
  /**
   * If specified the sPath has to be is relative to the path given with the context.
   */
  context?: object;
  /**
   * A callback function which is called when the data has been successfully updated.
   */
  success?: Function;
  /**
   * A callback function which is called when the request failed. The handler can have the parameter `oError`
   * which contains additional error information.
   */
  error?: Function;
  /**
   * If specified, the `If-Match` header will be set to this ETag. Caution: This feature in not officially
   * supported as using asynchronous requests can lead to data inconsistencies. If you decide to use this
   * feature nevertheless, you have to make sure that the request is completed before the data is processed
   * any further.
   */
  eTag?: string;
  /**
   * A map containing the parameters that will be passed as query strings
   */
  urlParameters?: Record<string, string>;
  /**
   * A map of headers for this request
   */
  headers?: Record<string, string>;
  /**
   * Deprecated - use `groupId` instead
   */
  batchGroupId?: string;
  /**
   * ID of a request group; requests belonging to the same group will be bundled in one batch request
   */
  groupId?: string;
  /**
   * ID of the `ChangeSet` that this request should belong to
   */
  changeSetId?: string;
  /**
   * Since 1.46; defines whether to update all bindings after submitting this change operation. See {@link
   * #setRefreshAfterChange} If given, this overrules the model-wide `refreshAfterChange` flag for this operation
   * only.
   */
  refreshAfterChange?: boolean;
}

export type ResolverParams<T = Record<string, unknown>> = T & {
  success?: Function;
  error?: Function;
};
