"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "ui5Extra/Toast/Toast"], function (Controller, __Toast) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Toast = _interopRequireDefault(__Toast);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const TwoStepButtonView = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.TwoStepButtonView", {
    pressInitial: function _pressInitial() {
      console.log('Step 1/2');
    },
    pressRemoveFinal: function _pressRemoveFinal() {
      Toast.error('Removed item', {
        title: 'Step 2/2'
      });
    },
    pressActionFinal: function _pressActionFinal() {
      Toast.information('Action', {
        title: 'Step 2/2'
      });
    },
    pressConfirmFinal: function _pressConfirmFinal() {
      Toast.success('Confirm', {
        title: 'Step 2/2'
      });
    },
    pressNoStep: function _pressNoStep() {
      Toast.show('One step');
    }
  });
  return TwoStepButtonView;
});