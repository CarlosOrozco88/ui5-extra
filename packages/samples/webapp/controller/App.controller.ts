import Controller from 'sap/ui/core/mvc/Controller';
import AppComponent from '../Component';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class App extends Controller {
  public onInit(): void {
    const view = this.getView();
    if (view) {
      view.addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
    }
  }
}
