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
  const TextView = BaseController.extend("dev.carlosorozco.ui5Extra.samples.controller.TextView", {
    pressText: function _pressText() {
      Toast.show('Good job! :D', {
        title: 'Button Pressed'
      });
    }
  });
  return TextView;
});