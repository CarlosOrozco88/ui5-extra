"use strict";

sap.ui.define(["sap/ui/Device", "./BaseController"], function (sap_ui_Device, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const system = sap_ui_Device["system"];
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const Master = BaseController.extend("dev.carlosorozco.ui5Extra.samples.controller.Master", {
    onSelectionChange: function _onSelectionChange(oEvent) {
      const oList = oEvent.getSource();
      const bSelected = oEvent.getParameter('selected');
      if (!(oList.getMode() === 'MultiSelect' && !bSelected)) {
        const oItem = oEvent.getParameter('listItem') ?? oEvent.getSource();
        const controlId = oItem.getBindingContext()?.getProperty('Name') ?? '';
        this.navDetail(controlId);
      }
    },
    navDetail: function _navDetail(controlName) {
      this.getRouter().navTo(controlName, undefined, !system.phone);
    },
    getRouter: function _getRouter() {
      const oComponent = this.getOwnerComponent();
      return oComponent.getRouter();
    }
  });
  return Master;
});