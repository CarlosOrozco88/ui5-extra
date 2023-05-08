"use strict";

sap.ui.define(["sap/m/library", "sap/ui/core/mvc/Controller"], function (sap_m_library, Controller) {
  const URLHelper = sap_m_library["URLHelper"];
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const BaseController = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.BaseController", {
    openWebsite: function _openWebsite(sUrl) {
      let bOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      URLHelper.redirect(sUrl, bOpen);
    }
  });
  return BaseController;
});