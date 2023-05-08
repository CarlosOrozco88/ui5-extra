import { URLHelper } from 'sap/m/library';
import { system } from 'sap/ui/Device';
import Controller from 'sap/ui/core/mvc/Controller';
import Component from '../Component';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class BaseController extends Controller {
  openWebsite(sUrl: string, bOpen = true) {
    URLHelper.redirect(sUrl, bOpen);
  }
  navTo(controlName: string) {
    this.getRouter().navTo(controlName, undefined, !system.phone);
  }

  getRouter() {
    const oComponent = this.getOwnerComponent() as Component;
    return oComponent.getRouter();
  }
}
