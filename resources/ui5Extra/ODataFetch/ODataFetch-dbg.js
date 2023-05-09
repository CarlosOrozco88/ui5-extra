sap.ui.define(["sap/ui/model/odata/v2/ODataModel", "sap/base/util/deepClone"], function (ODataModel, deepClone) {
  class ODataFetch extends ODataModel {
    constructor(vServiceUrl, settings) {
      super(vServiceUrl, settings);
    }

    /** @private */
    static metadata = {
      library: 'ui5Extra.ODataFetch'
    };

    /**
     * @private
     */
    static _requests = new Map();
    async read(sPath, mParameters) {
      await this.metadataLoaded();
      const oResponse = await new Promise((resolve, reject) => {
        const oParams = this._resolver(mParameters ?? {}, resolve, reject);
        const request = super.read(sPath, oParams);
        this._addRequest(request, mParameters);
      });
      return oResponse;
    }
    async callFunction(sPath, mParameters) {
      const oResponse = await new Promise((resolve, reject) => {
        const oParams = this._resolver(mParameters ?? {}, resolve, reject);
        const request = super.callFunction(sPath, oParams);
        this._addRequest(request, mParameters);
      });
      return oResponse;
    }
    async create(sPath, oData, mParameters) {
      await this.metadataLoaded();
      const oResponse = await new Promise((resolve, reject) => {
        const oParams = this._resolver(mParameters ?? {}, resolve, reject);
        const request = super.create(sPath, oData, oParams);
        this._addRequest(request, mParameters);
      });
      return oResponse;
    }
    async update(sPath, oData, mParameters) {
      await this.metadataLoaded();
      const oResponse = await new Promise((resolve, reject) => {
        const oParams = this._resolver(mParameters ?? {}, resolve, reject);
        const request = super.update(sPath, oData, oParams);
        this._addRequest(request, mParameters);
      });
      return oResponse;
    }
    async remove(sPath, mParameters) {
      await this.metadataLoaded();
      const oResponse = await new Promise((resolve, reject) => {
        const oParams = this._resolver(mParameters ?? {}, resolve, reject);
        const request = super.remove(sPath, oParams);
        this._addRequest(request, mParameters);
      });
      return oResponse;
    }
    _resolver(mParameters, resolve, reject) {
      this._abortRequest(mParameters);
      const oParams = {
        ...mParameters,
        success: (oParamData, oResponse) => {
          this._removeRequest(mParameters);
          const oData = mParameters?.success?.(deepClone(oParamData), deepClone(oResponse)) ?? oParamData;
          resolve({
            oData,
            oResponse
          });
        },
        error: oParamError => {
          this._removeRequest(mParameters);
          const oError = mParameters?.error?.(oParamError) ?? oParamError;
          reject(oError);
        }
      };
      return oParams;
    }
    _addRequest(request, mParameters) {
      const sAborterId = mParameters?.aborterId;
      if (!sAborterId) return;
      ODataFetch._requests.set(sAborterId, request);
    }
    _getRequest(mParameters) {
      const sAborterId = mParameters?.aborterId;
      if (!sAborterId) return;
      return ODataFetch._requests.get(sAborterId);
    }
    _abortRequest(mParameters) {
      const request = this._getRequest(mParameters);
      request?.abort?.();
      return this._removeRequest(mParameters);
    }
    _removeRequest(mParameters) {
      const sAborterId = mParameters?.aborterId;
      if (!sAborterId) return false;
      return ODataFetch._requests.delete(sAborterId);
    }
  }
  return ODataFetch;
});