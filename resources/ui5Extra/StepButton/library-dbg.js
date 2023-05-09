sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library ui5Extra.StepButton
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5Extra.StepButton',
    version: '0.0.1',
    dependencies: ['sap.ui.core', 'sap.m'],
    types: [],
    interfaces: [],
    controls: ['ui5Extra.StepButton.StepButton'],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('ui5Extra.StepButton');

  /**
   * Step
   *
   * @enum {string}
   * @public
   */
  var Step = /*#__PURE__*/function (Step) {
    Step["INITIAL"] = "INITIAL";
    Step["FINAL"] = "FINAL";
    return Step;
  }(Step || {});
  ui5Extra.Step = Step;
  var __exports = {
    __esModule: true
  };
  __exports.Step = Step;
  return __exports;
});