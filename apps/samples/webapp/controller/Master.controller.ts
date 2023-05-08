import List from 'sap/m/List';
import Event from 'sap/ui/base/Event';
import ListItemBase from 'sap/m/ListItemBase';
import BaseController from './BaseController';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class Master extends BaseController {
  onSelectionChange(oEvent: Event) {
    const oList = oEvent.getSource() as List;
    const bSelected = oEvent.getParameter('selected');

    if (!(oList.getMode() === 'MultiSelect' && !bSelected)) {
      const oItem = (oEvent.getParameter('listItem') ?? oEvent.getSource()) as ListItemBase;
      const controlId: string = oItem.getBindingContext()?.getProperty('Name') ?? '';
      this.navTo(controlId);
    }
  }
}
