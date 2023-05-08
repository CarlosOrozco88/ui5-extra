import { URLHelper } from 'sap/m/library';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class BaseController extends Controller {
  openWebsite(sUrl: string, bOpen = true) {
    URLHelper.redirect(sUrl, bOpen);
  }
}
