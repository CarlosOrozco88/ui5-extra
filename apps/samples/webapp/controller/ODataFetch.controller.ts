import JSONModel from 'sap/ui/model/json/JSONModel';
import ODataFetch from 'ui5Extra/ODataFetch/ODataFetch';
import Toast from 'ui5Extra/Toast/Toast';
import BaseController from './BaseController';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class ODataFetchView extends BaseController {
  dataModel = new JSONModel({ list: [], busy: false });
  oFetcher?: ODataFetch;

  onInit() {
    this.getView()?.setModel(this.dataModel, 'data');
  }

  async readData() {
    if (!this.oFetcher) {
      this.oFetcher = new ODataFetch(
        'https://cors-anywhere.herokuapp.com/https://services.odata.org/V3/OData/OData.svc/',
        {
          useBatch: false,
          maxDataServiceVersion: '3.0'
        }
      );
    }
    this.dataModel.setProperty('/busy', true);
    try {
      this.dataModel.setProperty('/list', []);
      const response = await this.oFetcher.read<{ results: Record<string, any>[] }>('/Products', { aborterId: 'read' });
      const { oData, oResponse } = response;
      this.dataModel.setProperty('/list', oData.results);
      Toast.success('Data received');
    } catch (oError) {
      Toast.error('Data failed');
    }
    this.dataModel.setProperty('/busy', false);
  }
}
