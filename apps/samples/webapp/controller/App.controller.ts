import Controller from 'sap/ui/core/mvc/Controller';
import AppComponent from '../Component';
import { URLHelper } from 'sap/m/library';
import JSONModel from 'sap/ui/model/json/JSONModel';
import SplitContainer from 'sap/m/SplitContainer';
import Component from '../Component';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class App extends Controller {
  appModel = new JSONModel({ master_visible: false, pressed_master: false });

  public onInit(): void {
    const view = this.getView();
    if (view) {
      view.addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
    }

    this.appModel.setProperty('/master_visible', this.getSplitContainer().isMasterShown());
    const component = this.getOwnerComponent() as Component;
    component.getRouter().attachRouteMatched(() => {
      this.getSplitContainer().hideMaster();
    });

    this.getView()?.setModel(this.appModel, 'app');
  }

  getSplitContainer() {
    return this.getView()?.byId('app') as SplitContainer;
  }

  openWebsite(sUrl: string, bOpen = true) {
    URLHelper.redirect(sUrl, bOpen);
  }

  toggleMaster() {
    const app = this.getSplitContainer();
    if (app.isMasterShown()) {
      app.hideMaster();
    } else {
      app.showMaster();
      this.appModel.setProperty('/pressed_master', true);
    }
  }

  afterMasterOpen() {
    this.appModel.setProperty('/master_visible', true);
  }

  afterMasterClose() {
    this.appModel.setProperty('/master_visible', false);
    this.appModel.setProperty('/pressed_master', false);
  }
}
