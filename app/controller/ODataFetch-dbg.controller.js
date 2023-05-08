"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "ui5Extra/ODataFetch/ODataFetch", "ui5Extra/Toast/Toast"], function (Controller, JSONModel, __ODataFetch, __Toast) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ODataFetch = _interopRequireDefault(__ODataFetch);
  const Toast = _interopRequireDefault(__Toast);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const ODataFetchView = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.ODataFetchView", {
    constructor: function constructor() {
      Controller.prototype.constructor.apply(this, arguments);
      this.oFetcher = new ODataFetch('https://services.odata.org/V3/OData/OData.svc/', {
        useBatch: false,
        maxDataServiceVersion: '3.0',
        disableHeadRequestForToken: true
      });
      this.dataModel = new JSONModel({
        list: [],
        busy: false
      });
    },
    onInit: function _onInit() {
      this.getView()?.setModel(this.dataModel, 'data');
    },
    readData: async function _readData() {
      this.dataModel.setProperty('/busy', true);
      try {
        this.dataModel.setProperty('/list', []);
        const response = await this.oFetcher.read('/Products', {
          aborterId: 'read'
        });
        const {
          oData,
          oResponse
        } = response;
        this.dataModel.setProperty('/list', oData);
        Toast.success('Data received');
      } catch (oError) {
        Toast.error('Data failed');
      }
      this.dataModel.setProperty('/busy', false);
    }
  });
  return ODataFetchView;
});