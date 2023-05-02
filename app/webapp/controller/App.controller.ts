import Controller from 'sap/ui/core/mvc/Controller';
import AppComponent from '../Component';

/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class App extends Controller {
  public onInit(): void {
    debugger;
    const view = this.getView();
    if (view) {
      view.addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
    }
  }
}
