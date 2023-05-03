"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const App = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.App", {
    onInit: function _onInit() {
      const view = this.getView();
      if (view) {
        view.addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
    }
  });
  return App;
});