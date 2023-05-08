import ODataModel from 'sap/ui/model/odata/v2/ODataModel';
import deepClone from 'sap/base/util/deepClone';
import {
  $ODataFetchSettings,
  AborterParams,
  CallFunctionParams,
  CreateParams,
  FetchResponse,
  ReadParams,
  RequestType,
  ResolverParams,
  UpdateRemoveParams
} from 'ui5Extra/ODataFetch/ODataFetch';

export default class ODataFetch extends ODataModel {
  constructor(vServiceUrl: string | object, settings?: $ODataFetchSettings);
  constructor(vServiceUrl: string | object, settings?: $ODataFetchSettings) {
    super(vServiceUrl, settings);
  }

  /** @private */
  static readonly metadata: object = {
    library: 'ui5Extra.ODataFetch'
  };

  /**
   * @private
   */
  static _requests = new Map<string, RequestType>();

  async read<T>(sPath: string, mParameters?: ReadParams) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this._resolver<ReadParams>(mParameters ?? {}, resolve, reject);
      const request = super.read(sPath, oParams) as RequestType;
      this._addRequest(request, mParameters);
    });
    return oResponse as Promise<{ oData: T; oResponse: FetchResponse<T> }>;
  }

  async callFunction<T>(sPath: string, mParameters?: CallFunctionParams) {
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this._resolver<CallFunctionParams>(mParameters ?? {}, resolve, reject);
      const request = super.callFunction(sPath, oParams) as RequestType;
      this._addRequest(request, mParameters);
    });
    return oResponse as Promise<{ oData: T; oResponse: FetchResponse<T> }>;
  }

  async create<T>(sPath: string, oData: object, mParameters?: CreateParams) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this._resolver<CreateParams>(mParameters ?? {}, resolve, reject);
      const request = super.create(sPath, oData, oParams) as RequestType;
      this._addRequest(request, mParameters);
    });
    return oResponse as Promise<{ oData: T; oResponse: FetchResponse<T> }>;
  }

  async update(sPath: string, oData: object, mParameters?: UpdateRemoveParams) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this._resolver<UpdateRemoveParams>(mParameters ?? {}, resolve, reject);
      const request = super.update(sPath, oData, oParams) as RequestType;
      this._addRequest(request, mParameters);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: FetchResponse<undefined> }>;
  }

  async remove(sPath: string, mParameters?: UpdateRemoveParams) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this._resolver<UpdateRemoveParams>(mParameters ?? {}, resolve, reject);
      const request = super.remove(sPath, oParams) as RequestType;
      this._addRequest(request, mParameters);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: FetchResponse<undefined> }>;
  }

  /**
   * @private
   */
  _resolver<T>(mParameters: ResolverParams<T>, resolve: Function, reject: Function) {
    this._abortRequest(mParameters);

    const oParams: ResolverParams<T> = {
      ...mParameters,
      success: (oParamData: object, oResponse: FetchResponse<T>) => {
        this._removeRequest(mParameters);
        const oData = mParameters?.success?.(deepClone(oParamData), deepClone(oResponse)) ?? oParamData;
        resolve({ oData, oResponse });
      },
      error: (oParamError: object) => {
        this._removeRequest(mParameters);
        const oError = mParameters?.error?.(oParamError) ?? oParamError;
        reject(oError);
      }
    };
    return oParams;
  }

  /**
   * @private
   */
  _addRequest(request: RequestType, mParameters?: AborterParams) {
    const sAborterId = mParameters?.aborterId;
    if (!sAborterId) return;
    ODataFetch._requests.set(sAborterId, request);
  }

  /**
   * @private
   */
  _getRequest(mParameters?: AborterParams) {
    const sAborterId = mParameters?.aborterId;
    if (!sAborterId) return;
    return ODataFetch._requests.get(sAborterId);
  }

  /**
   * @private
   */
  _abortRequest(mParameters?: AborterParams) {
    const request = this._getRequest(mParameters);
    request?.abort?.();
    return this._removeRequest(mParameters);
  }

  /**
   * @private
   */
  _removeRequest(mParameters?: AborterParams) {
    const sAborterId = mParameters?.aborterId;
    if (!sAborterId) return false;
    return ODataFetch._requests.delete(sAborterId);
  }
}
