import Controller from 'sap/ui/core/mvc/Controller';
import JSONModel from 'sap/ui/model/json/JSONModel';
import ODataFetch from 'ui5Extra/ODataFetch/ODataFetch';
import Toast from 'ui5Extra/Toast/Toast';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class ODataFetchView extends Controller {
  oFetcher = new ODataFetch('https://services.odata.org/V3/OData/OData.svc/', {
    useBatch: false,
    maxDataServiceVersion: '3.0',
    disableHeadRequestForToken: true
  });

  dataModel = new JSONModel({ list: [], busy: false });

  onInit() {
    this.getView()?.setModel(this.dataModel, 'data');
  }

  async readData() {
    this.dataModel.setProperty('/busy', true);
    try {
      this.dataModel.setProperty('/list', []);
      const response = await this.oFetcher.read('/Products', { aborterId: 'read' });
      const { oData, oResponse } = response;
      this.dataModel.setProperty('/list', oData);
      Toast.success('Data received');
    } catch (oError) {
      Toast.error('Data failed');
    }
    this.dataModel.setProperty('/busy', false);
  }
}
