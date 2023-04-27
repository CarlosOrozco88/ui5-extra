import ODataModel from 'sap/ui/model/odata/v2/ODataModel';
import deepClone from 'sap/base/util/deepClone';
import {
  CallFunctionParameters,
  CreateParameters,
  ReadParameters,
  UpdateRemoveParameters,
  ODataModelConstructor,
  ResolverParams
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

  async read(sPath: string, mParameters?: ReadParameters) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this.resolver<ReadParameters>(mParameters ?? {}, resolve, reject);
      super.read(sPath, oParams);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: object }>;
  }

  async callFunction(sPath: string, mParameters?: CallFunctionParameters) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this.resolver<CallFunctionParameters>(mParameters ?? {}, resolve, reject);
      super.callFunction(sPath, oParams);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: object }>;
  }

  async create(sPath: string, oData: object, mParameters?: CreateParameters) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this.resolver<CreateParameters>(mParameters ?? {}, resolve, reject);
      super.create(sPath, oData, oParams);
    });
    return oResponse as Promise<{ oData?: object; oResponse: object }>;
  }

  async update(sPath: string, oData: object, mParameters?: UpdateRemoveParameters) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this.resolver<UpdateRemoveParameters>(mParameters ?? {}, resolve, reject);
      super.update(sPath, oData, oParams);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: object }>;
  }

  async remove(sPath: string, mParameters?: UpdateRemoveParameters) {
    await this.metadataLoaded();
    const oResponse = await new Promise((resolve, reject) => {
      const oParams = this.resolver<UpdateRemoveParameters>(mParameters ?? {}, resolve, reject);
      super.remove(sPath, oParams);
    });
    return oResponse as Promise<{ oData: undefined; oResponse: object }>;
  }

  resolver<T>(mParameters: ResolverParams<T>, resolve: Function, reject: Function) {
    const oParams: ResolverParams<T> = {
      ...mParameters,
      success: (oParamData: object, oResponse: object) => {
        const oData = mParameters?.success?.(deepClone(oParamData), deepClone(oResponse)) ?? oParamData;
        resolve({ oData, oResponse });
      },
      error: (oParamError: object) => {
        const oError = mParameters?.error?.(oParamError) ?? oParamError;
        reject(oError);
      }
    };
    return oParams;
  }
}
