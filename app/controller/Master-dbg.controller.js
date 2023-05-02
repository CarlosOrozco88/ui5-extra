"use strict";

sap.ui.define(["sap/ui/Device", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (sap_ui_Device, Controller, JSONModel) {
  const system = sap_ui_Device["system"];
  /**
   * @namespace ui5.typescript.helloworld.controller
   */
  const Master = Controller.extend("ui5.typescript.helloworld.controller.Master", {
    onInit: function _onInit() {
      const oModel = new JSONModel({
        Controls: ['Text', 'Toast', 'ODataFetch'].map(controlName => {
          return {
            Name: controlName
          };
        })
      });
      this.getView()?.setModel(oModel);
    },
    onSelectionChange: function _onSelectionChange(oEvent) {
      var oList = oEvent.getSource();
      let bSelected = oEvent.getParameter('selected');
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