import ODataModel from 'sap/ui/model/odata/v2/ODataModel';
import deepClone from 'sap/base/util/deepClone';
import {
  CallFunctionParameters,
  CreateParameters,
  ReadParameters,
  UpdateRemoveParameters,
  ODataModelConstructor,
  ResolverParams,
  Response,
  RequestType
} from './ODataFetchTypes';

/**
 * Constructor for a new <code>dev.carlosorozco.ui5Extra.ODataFetch</code> control.
 *
 * Extends sap.m.ODataModel in order to use Promise and async/await code
 *
 * @namespace dev.carlosorozco.ui5Extra
 */
export default class ODataFetch extends ODataModel {
  constructor(vServiceUrl: ODataModelConstructor[0], settings?: ODataModelConstructor[1]);
  constructor(vServiceUrl: ODataModelConstructor[0], settings?: ODataModelConstructor[1]) {
    super(vServiceUrl, settings);
  }

  static readonly metadata: object = {
    library: 'dev.carlosorozco.ui5Extra'
  };

  static _requests = new Map<string, RequestType>();

  async read<T>(sPath: string, mParameters: ReadParameters = {}, sAborterId = '') {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      this.abortRequest(sAborterId);
      const oParams = this.resolver<ReadParameters>(mParameters, resolve, reject, sAborterId);
      const request = super.read(sPath, oParams) as RequestType;
      this.addRequest(request, sAborterId);
    });
    return oResponse as Promise<{ oData: T; oResponse: Response<T> }>;
  }

  async callFunction<T>(sPath: string, mParameters: CallFunctionParameters = {}, sAborterId = '') {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      this.abortRequest(sAborterId);
      const oParams = this.resolver<CallFunctionParameters>(mParameters, resolve, reject, sAborterId);
      const request = super.callFunction(sPath, oParams) as RequestType;
      this.addRequest(request, sAborterId);
    });
    return oResponse as Promise<{ oData: T; oResponse: Response<T> }>;
  }

  async create<T>(sPath: string, oData: object, mParameters: CreateParameters = {}, sAborterId = '') {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      this.abortRequest(sAborterId);
      const oParams = this.resolver<CreateParameters>(mParameters, resolve, reject, sAborterId);
      const request = super.create(sPath, oData, oParams) as RequestType;
      this.addRequest(request, sAborterId);
    });
    return oResponse as Promise<{ oData: T; oResponse: Response<T> }>;
  }

  async update(sPath: string, oData: object, mParameters: UpdateRemoveParameters = {}, sAborterId = '') {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      this.abortRequest(sAborterId);
      const oParams = this.resolver<UpdateRemoveParameters>(mParameters, resolve, reject, sAborterId);
      const request = super.update(sPath, oData, oParams) as RequestType;
      this.addRequest(request, sAborterId);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: Response<undefined> }>;
  }

  async remove(sPath: string, mParameters: UpdateRemoveParameters = {}, sAborterId = '') {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      this.abortRequest(sAborterId);
      const oParams = this.resolver<UpdateRemoveParameters>(mParameters, resolve, reject, sAborterId);
      const request = super.remove(sPath, oParams) as RequestType;
      this.addRequest(request, sAborterId);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: Response<undefined> }>;
  }

  resolver<T>(mParameters: ResolverParams<T>, resolve: Function, reject: Function, sAborterId: string) {
    const oParams: ResolverParams<T> = {
      ...mParameters,
      success: (oParamData: object, oResponse: Response<T>) => {
        this.removeRequest(sAborterId);
        const oData = mParameters?.success?.(deepClone(oParamData), deepClone(oResponse)) ?? oParamData;
        resolve({ oData, oResponse });
      },
      error: (oParamError: object) => {
        this.removeRequest(sAborterId);
        const oError = mParameters?.error?.(oParamError) ?? oParamError;
        reject(oError);
      }
    };
    return oParams;
  }

  addRequest(request: RequestType, sAborterId = '') {
    if (!sAborterId) return;
    ODataFetch._requests.set(sAborterId, request);
  }

  getRequest(sAborterId = '') {
    if (!sAborterId) return;
    const request = ODataFetch._requests.get(sAborterId);
    return request;
  }

  abortRequest(sAborterId = '') {
    if (!sAborterId) return;
    const request = this.getRequest(sAborterId);
    request?.abort?.();
    this.removeRequest(sAborterId);
  }

  removeRequest(sAborterId = '') {
    if (!sAborterId) return;
    if (!ODataFetch._requests.has(sAborterId)) return;
    ODataFetch._requests.delete(sAborterId);
  }
}
