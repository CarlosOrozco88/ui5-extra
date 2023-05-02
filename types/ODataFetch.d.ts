declare module 'dev/carlosorozco/ui5Extra/ODataFetch' {
  import ODataModel from 'sap/ui/model/odata/v2/ODataModel';

  /**
   * @class
   * Constructor for a new <code>dev.carlosorozco.ui5Extra.ODataFetch</code> control.
   *
   * Extends sap.m.ODataModel in order to use Promise and async/await code
   *
   * @extends sap.ui.model.odata.v2.ODataModel
   * @public
   * @namespace dev.carlosorozco.ui5Extra
   */
  export default class ODataFetch extends ODataModel {
    constructor(vServiceUrl: string | object, settings?: $ODataFetchSettings);

    /**
     * Trigger a `GET` request to the OData service that was specified in the model constructor.
     *
     * The data will be stored in the model. The requested data is returned with the response.
     *
     * @param sPath  An absolute path or a path relative to the context given in `mParameters.context`; if the path contains
     * a query string, the query string is ignored, use `mParameters.urlParameters` instead
     * @param mParameters Optional parameter map containing any of the following properties:
     * @returns A promise resolving
     */
    read<T>(sPath: string, mParameters?: ReadParams): Promise<{ oData: T; oResponse: FetchResponse<T> }>;

    /**
     * Triggers a request for the given function import.
     *
     * If the return type of the function import is either an entity type or a collection of an entity type,
     * then this OData model's cache is updated with the values of the returned entities. Otherwise they are
     * ignored, and the `response` can be processed in the `success` callback.
     *
     * @param sPath The name of the function import starting with a slash, for example `/Activate`.
     * @param mParameters The parameter map containing any of the following properties:
     * @returns A promise resolving
     */
    callFunction<T>(
      sPath: string,
      mParameters?: CallFunctionParams
    ): Promise<{ oData: T; oResponse: FetchResponse<T> }>;

    /**
     * Trigger a `POST` request to the OData service that was specified in the model constructor; see {@link
     * topic:6c47b2b39db9404582994070ec3d57a2#loio4c4cd99af9b14e08bb72470cc7cabff4 Creating Entities documentation}
     * for comprehensive information on the topic.
     *
     * **Note:** This function does not support a "deep create" scenario. Use {@link #createEntry} or {@link
     * sap.ui.model.odata.v2.ODataListBinding#create} instead.
     *
     * @param sPath A string containing the path to the collection where an entry should be created. The path is concatenated
     * to the service URL which was specified in the model constructor.
     * @param oData Data of the entry that should be created.
     * @param mParameters Optional parameter map containing any of the following properties:
     * @returns A promise resolving
     */
    create<T>(
      sPath: string,
      oData: object,
      mParameters?: CreateParams
    ): Promise<{ oData: T; oResponse: FetchResponse<T> }>;

    /**
     * @param sPath A string containing the path to the data that should be updated. The path is concatenated to the sServiceUrl
     * which was specified in the model constructor.
     * @param oData Data of the entry that should be updated.
     * @param mParameters Optional, can contain the following attributes:
     * @returns A promise resolving
     */
    update(
      sPath: string,
      oData: object,
      mParameters?: UpdateRemoveParams
    ): Promise<{ oData: undefined; oResponse: FetchResponse<undefined> }>;

    /**
     * Trigger a `DELETE` request to the OData service that was specified in the model constructor.
     *
     * @param sPath A string containing the path to the data that should be removed. The path is concatenated to the service
     * URL which was specified in the model constructor.
     * @param mParameters, can contain the following attributes:
     */
    remove(
      sPath: string,
      mParameters?: UpdateRemoveParams
    ): Promise<{ oData: undefined; oResponse: FetchResponse<undefined> }>;
  }

  /**
   * @public
   */
  export interface $ODataFetchSettings {
    /**
     * The URL (or an array of URLs) from which the annotation metadata should be loaded
     */
    annotationURI?: string | string[];
    /**
     * Set this array to make custom response headers bindable via the entity's "__metadata/headers" property
     */
    bindableResponseHeaders?: string[];
    /**
     * Whether the model tries to calculate canonical URLs to request the data.
     *
     * **For example:** An application displays the details of a sales order in a form with an absolute binding
     * path `/SalesOrderSet("1")`. The form embeds a table for the sales order line items with a relative binding
     * path `ToLineItems`. If the user selects a sales order line item (e.g. Item "10"), the details of this
     * sales order line item are displayed in another form, which also contains a table for the sales order
     * line item's schedules with a relative binding path `ToSchedules`.
     *
     * If the `canonicalRequests` parameter has the default value `false`, then the OData model would request
     * the data for the sales order line item's details form with the following requests:
     * ```javascript
     *
     *   GET /<serviceUrl>/SalesOrderSet("1")/ToLineItems(SalesOrderID="1",ItemPosition="10")
     *   GET /<serviceUrl>/SalesOrderSet("1")/ToLineItems(SalesOrderID="1",ItemPosition="10")/ToSchedules```
     *
     *
     * Some back-end implementations do not support more than one navigation property in the resource URL. In
     * this case, set the `canonicalRequests` parameter to `true`. The OData model then converts the long resource
     * URLs to canonical URLs and requests the data for the sales order line item's details form with the following
     * requests:
     * ```javascript
     *
     *   GET /<serviceUrl>/SalesOrderLineItemsSet(SalesOrderID="1",ItemPosition="10")
     *   GET /<serviceUrl>/SalesOrderLineItemsSet(SalesOrderID="1",ItemPosition="10")/ToSchedules```
     */
    canonicalRequests?: boolean;
    /**
     * Sets the default binding mode for the model
     */
    defaultBindingMode?: BindingMode | keyof typeof BindingMode;
    /**
     * Sets the default count mode for the model
     */
    defaultCountMode?: CountMode | keyof typeof CountMode;
    /**
     * Sets the default operation mode for the model
     */
    defaultOperationMode?: OperationMode | keyof typeof OperationMode;
    /**
     * Default update method which is used for all update requests
     */
    defaultUpdateMethod?: UpdateMethod;
    /**
     * Set this flag to `true` if your service does not support `HEAD` requests for fetching the service document
     * (and thus the security token) to avoid sending a `HEAD`-request before falling back to `GET`
     */
    disableHeadRequestForToken?: boolean;
    /**
     * Set this flag to `true` if you don´t want to start a new soft state session with context ID (`SID`) through
     * header mechanism. This is useful if you want to share a `SID` between different browser windows
     */
    disableSoftStateHeader?: boolean;
    /**
     * Whether the security token is requested at the earliest convenience, if parameter `tokenHandling` is
     * `true`; supported since 1.79.0.
     */
    earlyTokenRequest?: boolean;
    /**
     * Map of custom headers (name/value pairs) like {"myHeader":"myHeaderValue",...}
     */
    headers?: Record<string, string>;
    /**
     * **Experimental** as of version 1.112.0; may change behavior or be removed in future versions. Whether
     * to ignore all annotations from service metadata, so that they are not available as V4 annotations in
     * this model's metamodel; see {@link #getMetaModel}. Only annotations from annotation files are loaded;
     * see the `annotationURI` parameter.
     */
    ignoreAnnotationsFromMetadata?: boolean;
    /**
     * If set to `true`, request payloads will be JSON, XML for `false`
     */
    json?: boolean;
    /**
     * Whether the `metadataLoaded` event will be fired only after all annotations have been loaded as well
     */
    loadAnnotationsJoined?: boolean;
    /**
     * Please use the following string format e.g. '2.0' or '3.0'. OData version supported by the ODataModel:
     * '2.0'
     */
    maxDataServiceVersion?: string;
    /**
     * Map of namespace aliases (alias => URI) that can be used in metadata binding paths; each alias is mapped
     * to a corresponding namespace URI; when an alias is used in a metadata binding path, it addresses a metadata
     * extension that belongs to the corresponding namespace URI; if `metadataNamespaces` is not given, the
     * following default mappings will be used:
     * 	 - `"sap": "sap:"http://www.sap.com/Protocols/SAPData"`
     * 	 - `"m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"`
     * 	 - `"": "http://schemas.microsoft.com/ado/2007/06/edmx`
     */
    metadataNamespaces?: Record<string, string>;
    /**
     * Map of URL parameters for metadata requests - only attached to a `$metadata` request
     */
    metadataUrlParams?: Record<string, string>;
    /**
     * Whether technical messages should always be treated as persistent, since 1.83.0
     */
    persistTechnicalMessages?: boolean;
    /**
     * Whether a preliminary context will be created/used by a binding. When set to `true`, the model can bundle
     * the OData calls for dependent bindings into fewer $batch requests. For more information, see {@link topic:6c47b2b39db9404582994070ec3d57a2#loio62149734b5c24507868e722fe87a75db
     * Optimizing Dependent Bindings}
     */
    preliminaryContext?: boolean;
    /**
     * Enable/disable automatic refresh after change operations
     */
    refreshAfterChange?: boolean;
    /**
     * Whether to sequentialize all requests, needed in case the service cannot handle parallel requests
     */
    sequentializeRequests?: boolean;
    /**
     * Base URI of the service to request data from; this property is mandatory when the first method parameter
     * `serviceUrl` is omitted, but ignored otherwise
     */
    serviceUrl?: string;
    /**
     * Map of URL parameters (name/value pairs) - these parameters will be attached to all requests, except
     * for the `$metadata` request
     */
    serviceUrlParams?: Record<string, string>;
    /**
     * Enable/disable security token handling
     */
    tokenHandling?: boolean;
    /**
     * Send security token for GET requests in case read access logging is activated for the OData Service in
     * the backend.
     */
    tokenHandlingForGet?: boolean;
    /**
     * Whether all requests should be sent in batch requests
     */
    useBatch?: boolean;
    /**
     * Experimental - `true` when user credentials are to be included in a cross-origin request; please note
     * that this only works if all requests are asynchronous
     */
    withCredentials?: boolean;
    /**
     * **Deprecated** for security reasons. Use strong server side authentication instead. Password for the
     * service.
     */
    password?: string;
    /**
     * **Deprecated** This parameter does not prevent creation of annotations from the metadata document in
     * this model's metamodel. Whether to skip the automated loading of annotations from the metadata document.
     * Loading annotations from metadata does not have any effects (except the lost performance by invoking
     * the parser) if there are no annotations inside the metadata document
     */
    skipMetadataAnnotationParsing?: boolean;
    /**
     * **Deprecated** for security reasons. Use strong server side authentication instead. UserID for the service.
     */
    user?: string;
  }

  /**
   * @public
   */
  export interface ReadParams extends AborterParams {
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

  /**
   * @public
   */
  export interface CallFunctionParams extends AborterParams {
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

  /**
   * @public
   */
  export interface CreateParams extends AborterParams {
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

  /**
   * @public
   */
  export interface UpdateRemoveParams extends AborterParams {
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

  /**
   * @public
   */
  export interface FetchResponse<T> {
    /** Response oData but stringified  dsa */
    body: string;
    /** Response oData */
    data: T;
    /** Response headers */
    headers: Record<string, string>;
    /** Request uri */
    requestUri: string;
    /** Status code */
    statusCode: number;
    /** Status text */
    statusText: string;
  }

  /**
   * @private
   */
  export interface RequestType extends Record<string, unknown> {
    abort: () => void;
  }

  /**
   * @private
   */
  export type ResolverParams<T = Record<string, unknown>> = T & {
    success?: Function;
    error?: Function;
  };

  /**
   * @private
   */
  export interface AborterParams extends Record<string, unknown> {
    /**
     * Key to abort previous requests
     */
    aborterId?: string;
  }
}
