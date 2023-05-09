"use strict";

sap.ui.define(["ui5Extra/Toast/Toast", "./BaseController"], function (__Toast, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Toast = _interopRequireDefault(__Toast);
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const StepButtonView = BaseController.extend("dev.carlosorozco.ui5Extra.samples.controller.StepButtonView", {
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
  return StepButtonView;
});