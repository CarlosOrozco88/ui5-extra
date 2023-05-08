"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "ui5Extra/ODataFetch/ODataFetch", "ui5Extra/Toast/Toast", "./BaseController"], function (JSONModel, __ODataFetch, __Toast, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ODataFetch = _interopRequireDefault(__ODataFetch);
  const Toast = _interopRequireDefault(__Toast);
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const ODataFetchView = BaseController.extend("dev.carlosorozco.ui5Extra.samples.controller.ODataFetchView", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.dataModel = new JSONModel({
        list: [],
        busy: false
      });
    },
    onInit: function _onInit() {
      this.getView()?.setModel(this.dataModel, 'data');
    },
    readData: async function _readData() {
      if (!this.oFetcher) {
        this.oFetcher = new ODataFetch('https://cors-anywhere.herokuapp.com/https://services.odata.org/V3/OData/OData.svc/', {
          useBatch: false,
          maxDataServiceVersion: '3.0'
        });
      }
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
        this.dataModel.setProperty('/list', oData.results);
        Toast.success('Data received');
      } catch (oError) {
        Toast.error('Data failed');
      }
      this.dataModel.setProperty('/busy', false);
    }
  });
  return ODataFetchView;
});