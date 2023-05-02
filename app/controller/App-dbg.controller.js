"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  /**
   * @namespace ui5.typescript.helloworld.controller
   */
  const App = Controller.extend("ui5.typescript.helloworld.controller.App", {
    onInit: function _onInit() {
      debugger;
      const view = this.getView();
      if (view) {
        view.addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
    }
  });
  return App;
});