"use strict";

sap.ui.define(["./BaseController"], function (__BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
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
        this.navTo(controlId);
      }
    }
  });
  return Master;
});