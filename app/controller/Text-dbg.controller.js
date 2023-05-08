"use strict";

sap.ui.define(["ui5Extra/Toast/Toast", "sap/ui/core/mvc/Controller"], function (__Toast, Controller) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Toast = _interopRequireDefault(__Toast);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const TextView = Controller.extend("dev.carlosorozco.ui5Extra.samples.controller.TextView", {
    pressText: function _pressText() {
      Toast.show('Good job! :D', {
        title: 'Button Pressed'
      });
    }
  });
  return TextView;
});