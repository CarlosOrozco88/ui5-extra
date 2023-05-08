sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library ui5Extra.TwoStepButton
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5Extra.TwoStepButton',
    version: '0.0.1',
    dependencies: ['sap.ui.core', 'sap.m'],
    types: [],
    interfaces: [],
    controls: ['ui5Extra.TwoStepButton.TwoStepButton'],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('ui5Extra.TwoStepButton');
});