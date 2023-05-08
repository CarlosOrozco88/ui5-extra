"use strict";

sap.ui.define(["sap/m/library", "sap/ui/Device", "sap/ui/core/mvc/Controller"], function (sap_m_library, sap_ui_Device, Controller) {
  const URLHelper = sap_m_library["URLHelper"];
  const system = sap_ui_Device["system"];
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const BaseController = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.BaseController", {
    openWebsite: function _openWebsite(sUrl) {
      let bOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      URLHelper.redirect(sUrl, bOpen);
    },
    navTo: function _navTo(controlName) {
      this.getRouter().navTo(controlName, undefined, !system.phone);
    },
    getRouter: function _getRouter() {
      const oComponent = this.getOwnerComponent();
      return oComponent.getRouter();
    }
  });
  return BaseController;
});