import List from 'sap/m/List';
import { system } from 'sap/ui/Device';
import Event from 'sap/ui/base/Event';
import Component from '../Component';
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
      this.navDetail(controlId);
    }
  }

  navDetail(controlName: string) {
    this.getRouter().navTo(controlName, undefined, !system.phone);
  }

  getRouter() {
    const oComponent = this.getOwnerComponent() as Component;
    return oComponent.getRouter();
  }
}
