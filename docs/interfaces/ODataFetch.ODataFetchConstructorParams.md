[@carlosorozco/ui5-extra](../README.md) / [Exports](../modules.md) / [ODataFetch](../modules/ODataFetch.md) / ODataFetchConstructorParams

# Interface: ODataFetchConstructorParams

[ODataFetch](../modules/ODataFetch.md).ODataFetchConstructorParams

## Table of contents

### Properties

- [annotationURI](ODataFetch.ODataFetchConstructorParams.md#annotationuri)
- [bindableResponseHeaders](ODataFetch.ODataFetchConstructorParams.md#bindableresponseheaders)
- [canonicalRequests](ODataFetch.ODataFetchConstructorParams.md#canonicalrequests)
- [defaultBindingMode](ODataFetch.ODataFetchConstructorParams.md#defaultbindingmode)
- [defaultCountMode](ODataFetch.ODataFetchConstructorParams.md#defaultcountmode)
- [defaultOperationMode](ODataFetch.ODataFetchConstructorParams.md#defaultoperationmode)
- [defaultUpdateMethod](ODataFetch.ODataFetchConstructorParams.md#defaultupdatemethod)
- [disableHeadRequestForToken](ODataFetch.ODataFetchConstructorParams.md#disableheadrequestfortoken)
- [disableSoftStateHeader](ODataFetch.ODataFetchConstructorParams.md#disablesoftstateheader)
- [earlyTokenRequest](ODataFetch.ODataFetchConstructorParams.md#earlytokenrequest)
- [headers](ODataFetch.ODataFetchConstructorParams.md#headers)
- [ignoreAnnotationsFromMetadata](ODataFetch.ODataFetchConstructorParams.md#ignoreannotationsfrommetadata)
- [json](ODataFetch.ODataFetchConstructorParams.md#json)
- [loadAnnotationsJoined](ODataFetch.ODataFetchConstructorParams.md#loadannotationsjoined)
- [maxDataServiceVersion](ODataFetch.ODataFetchConstructorParams.md#maxdataserviceversion)
- [metadataNamespaces](ODataFetch.ODataFetchConstructorParams.md#metadatanamespaces)
- [metadataUrlParams](ODataFetch.ODataFetchConstructorParams.md#metadataurlparams)
- [password](ODataFetch.ODataFetchConstructorParams.md#password)
- [persistTechnicalMessages](ODataFetch.ODataFetchConstructorParams.md#persisttechnicalmessages)
- [preliminaryContext](ODataFetch.ODataFetchConstructorParams.md#preliminarycontext)
- [refreshAfterChange](ODataFetch.ODataFetchConstructorParams.md#refreshafterchange)
- [sequentializeRequests](ODataFetch.ODataFetchConstructorParams.md#sequentializerequests)
- [serviceUrl](ODataFetch.ODataFetchConstructorParams.md#serviceurl)
- [serviceUrlParams](ODataFetch.ODataFetchConstructorParams.md#serviceurlparams)
- [skipMetadataAnnotationParsing](ODataFetch.ODataFetchConstructorParams.md#skipmetadataannotationparsing)
- [tokenHandling](ODataFetch.ODataFetchConstructorParams.md#tokenhandling)
- [tokenHandlingForGet](ODataFetch.ODataFetchConstructorParams.md#tokenhandlingforget)
- [useBatch](ODataFetch.ODataFetchConstructorParams.md#usebatch)
- [user](ODataFetch.ODataFetchConstructorParams.md#user)
- [withCredentials](ODataFetch.ODataFetchConstructorParams.md#withcredentials)

## Properties

### annotationURI

• `Optional` **annotationURI**: `string` \| `string`[]

The URL (or an array of URLs) from which the annotation metadata should be loaded

#### Defined in

[ODataFetch.ts:170](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L170)

___

### bindableResponseHeaders

• `Optional` **bindableResponseHeaders**: `string`[]

Set this array to make custom response headers bindable via the entity's "__metadata/headers" property

#### Defined in

[ODataFetch.ts:174](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L174)

___

### canonicalRequests

• `Optional` **canonicalRequests**: `boolean`

Whether the model tries to calculate canonical URLs to request the data.

**For example:** An application displays the details of a sales order in a form with an absolute binding
path `/SalesOrderSet("1")`. The form embeds a table for the sales order line items with a relative binding
path `ToLineItems`. If the user selects a sales order line item (e.g. Item "10"), the details of this
sales order line item are displayed in another form, which also contains a table for the sales order
line item's schedules with a relative binding path `ToSchedules`.

If the `canonicalRequests` parameter has the default value `false`, then the OData model would request
the data for the sales order line item's details form with the following requests:
```javascript

  GET /<serviceUrl>/SalesOrderSet("1")/ToLineItems(SalesOrderID="1",ItemPosition="10")
  GET /<serviceUrl>/SalesOrderSet("1")/ToLineItems(SalesOrderID="1",ItemPosition="10")/ToSchedules```

Some back-end implementations do not support more than one navigation property in the resource URL. In
this case, set the `canonicalRequests` parameter to `true`. The OData model then converts the long resource
URLs to canonical URLs and requests the data for the sales order line item's details form with the following
requests:
```javascript

  GET /<serviceUrl>/SalesOrderLineItemsSet(SalesOrderID="1",ItemPosition="10")
  GET /<serviceUrl>/SalesOrderLineItemsSet(SalesOrderID="1",ItemPosition="10")/ToSchedules```

#### Defined in

[ODataFetch.ts:201](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L201)

___

### defaultBindingMode

• `Optional` **defaultBindingMode**: `BindingMode` \| ``"Default"`` \| ``"OneTime"`` \| ``"OneWay"`` \| ``"TwoWay"``

Sets the default binding mode for the model

#### Defined in

[ODataFetch.ts:205](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L205)

___

### defaultCountMode

• `Optional` **defaultCountMode**: `CountMode` \| ``"Both"`` \| ``"Inline"`` \| ``"InlineRepeat"`` \| ``"None"`` \| ``"Request"``

Sets the default count mode for the model

#### Defined in

[ODataFetch.ts:209](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L209)

___

### defaultOperationMode

• `Optional` **defaultOperationMode**: ``"Default"`` \| `OperationMode` \| ``"Auto"`` \| ``"Client"`` \| ``"Server"``

Sets the default operation mode for the model

#### Defined in

[ODataFetch.ts:213](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L213)

___

### defaultUpdateMethod

• `Optional` **defaultUpdateMethod**: `UpdateMethod`

Default update method which is used for all update requests

#### Defined in

[ODataFetch.ts:217](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L217)

___

### disableHeadRequestForToken

• `Optional` **disableHeadRequestForToken**: `boolean`

Set this flag to `true` if your service does not support `HEAD` requests for fetching the service document
(and thus the security token) to avoid sending a `HEAD`-request before falling back to `GET`

#### Defined in

[ODataFetch.ts:222](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L222)

___

### disableSoftStateHeader

• `Optional` **disableSoftStateHeader**: `boolean`

Set this flag to `true` if you don´t want to start a new soft state session with context ID (`SID`) through
header mechanism. This is useful if you want to share a `SID` between different browser windows

#### Defined in

[ODataFetch.ts:227](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L227)

___

### earlyTokenRequest

• `Optional` **earlyTokenRequest**: `boolean`

Whether the security token is requested at the earliest convenience, if parameter `tokenHandling` is
`true`; supported since 1.79.0.

#### Defined in

[ODataFetch.ts:232](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L232)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Map of custom headers (name/value pairs) like {"myHeader":"myHeaderValue",...}

#### Defined in

[ODataFetch.ts:236](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L236)

___

### ignoreAnnotationsFromMetadata

• `Optional` **ignoreAnnotationsFromMetadata**: `boolean`

**Experimental** as of version 1.112.0; may change behavior or be removed in future versions. Whether
to ignore all annotations from service metadata, so that they are not available as V4 annotations in
this model's metamodel; see [#getMetaModel](../modules/ODataFetch.md). Only annotations from annotation files are loaded;
see the `annotationURI` parameter.

#### Defined in

[ODataFetch.ts:243](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L243)

___

### json

• `Optional` **json**: `boolean`

If set to `true`, request payloads will be JSON, XML for `false`

#### Defined in

[ODataFetch.ts:247](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L247)

___

### loadAnnotationsJoined

• `Optional` **loadAnnotationsJoined**: `boolean`

Whether the `metadataLoaded` event will be fired only after all annotations have been loaded as well

#### Defined in

[ODataFetch.ts:251](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L251)

___

### maxDataServiceVersion

• `Optional` **maxDataServiceVersion**: `string`

Please use the following string format e.g. '2.0' or '3.0'. OData version supported by the ODataModel:
'2.0'

#### Defined in

[ODataFetch.ts:256](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L256)

___

### metadataNamespaces

• `Optional` **metadataNamespaces**: `Record`<`string`, `string`\>

Map of namespace aliases (alias => URI) that can be used in metadata binding paths; each alias is mapped
to a corresponding namespace URI; when an alias is used in a metadata binding path, it addresses a metadata
extension that belongs to the corresponding namespace URI; if `metadataNamespaces` is not given, the
following default mappings will be used:
	 - `"sap": "sap:"http://www.sap.com/Protocols/SAPData"`
	 - `"m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"`
	 - `"": "http://schemas.microsoft.com/ado/2007/06/edmx`

#### Defined in

[ODataFetch.ts:266](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L266)

___

### metadataUrlParams

• `Optional` **metadataUrlParams**: `Record`<`string`, `string`\>

Map of URL parameters for metadata requests - only attached to a `$metadata` request

#### Defined in

[ODataFetch.ts:270](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L270)

___

### password

• `Optional` **password**: `string`

**Deprecated** for security reasons. Use strong server side authentication instead. Password for the
service.

#### Defined in

[ODataFetch.ts:321](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L321)

___

### persistTechnicalMessages

• `Optional` **persistTechnicalMessages**: `boolean`

Whether technical messages should always be treated as persistent, since 1.83.0

#### Defined in

[ODataFetch.ts:274](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L274)

___

### preliminaryContext

• `Optional` **preliminaryContext**: `boolean`

Whether a preliminary context will be created/used by a binding. When set to `true`, the model can bundle
the OData calls for dependent bindings into fewer $batch requests. For more information, see topic:6c47b2b39db9404582994070ec3d57a2#loio62149734b5c24507868e722fe87a75db Optimizing Dependent Bindings

#### Defined in

[ODataFetch.ts:280](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L280)

___

### refreshAfterChange

• `Optional` **refreshAfterChange**: `boolean`

Enable/disable automatic refresh after change operations

#### Defined in

[ODataFetch.ts:284](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L284)

___

### sequentializeRequests

• `Optional` **sequentializeRequests**: `boolean`

Whether to sequentialize all requests, needed in case the service cannot handle parallel requests

#### Defined in

[ODataFetch.ts:288](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L288)

___

### serviceUrl

• `Optional` **serviceUrl**: `string`

Base URI of the service to request data from; this property is mandatory when the first method parameter
`serviceUrl` is omitted, but ignored otherwise

#### Defined in

[ODataFetch.ts:293](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L293)

___

### serviceUrlParams

• `Optional` **serviceUrlParams**: `Record`<`string`, `string`\>

Map of URL parameters (name/value pairs) - these parameters will be attached to all requests, except
for the `$metadata` request

#### Defined in

[ODataFetch.ts:298](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L298)

___

### skipMetadataAnnotationParsing

• `Optional` **skipMetadataAnnotationParsing**: `boolean`

**Deprecated** This parameter does not prevent creation of annotations from the metadata document in
this model's metamodel. Whether to skip the automated loading of annotations from the metadata document.
Loading annotations from metadata does not have any effects (except the lost performance by invoking
the parser) if there are no annotations inside the metadata document

#### Defined in

[ODataFetch.ts:328](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L328)

___

### tokenHandling

• `Optional` **tokenHandling**: `boolean`

Enable/disable security token handling

#### Defined in

[ODataFetch.ts:302](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L302)

___

### tokenHandlingForGet

• `Optional` **tokenHandlingForGet**: `boolean`

Send security token for GET requests in case read access logging is activated for the OData Service in
the backend.

#### Defined in

[ODataFetch.ts:307](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L307)

___

### useBatch

• `Optional` **useBatch**: `boolean`

Whether all requests should be sent in batch requests

#### Defined in

[ODataFetch.ts:311](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L311)

___

### user

• `Optional` **user**: `string`

**Deprecated** for security reasons. Use strong server side authentication instead. UserID for the service.

#### Defined in

[ODataFetch.ts:332](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L332)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

Experimental - `true` when user credentials are to be included in a cross-origin request; please note
that this only works if all requests are asynchronous

#### Defined in

[ODataFetch.ts:316](https://github.com/CarlosOrozco88/ODataFetch/blob/d0fcdf2/src/dev/carlosorozco/ui5Extra/ODataFetch.ts#L316)
