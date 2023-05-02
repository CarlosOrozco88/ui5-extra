"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "dev/carlosorozco/ui5Extra/Toast"], function (Controller, __Toast) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Toast = _interopRequireDefault(__Toast);
  /**
   * @namespace ui5.typescript.helloworld.controller
   */
  const ToastView = Controller.extend("ui5.typescript.helloworld.controller.ToastView", {
    information: function _information() {
      Toast.information('Information message', {
        title: 'Information'
      });
    },
    warning: function _warning() {
      Toast.warning('Warning message', {
        title: 'Warning'
      });
    },
    success: function _success() {
      Toast.success('Success message', {
        title: 'Success'
      });
    },
    error: function _error() {
      Toast.error('Error message', {
        title: 'Error'
      });
    },
    show: function _show() {
      Toast.show('Show message', {
        title: 'Show'
      });
    },
    defaults: function _defaults(sMessage, mOptions) {
      Toast.show(sMessage, mOptions);
    }
  });
  return ToastView;
});