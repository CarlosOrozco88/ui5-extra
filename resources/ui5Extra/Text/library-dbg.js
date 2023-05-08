sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library ui5Extra.Text
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5Extra.Text',
    version: '0.0.1',
    dependencies: ['sap.ui.core', 'sap.m'],
    types: [],
    interfaces: [],
    controls: ['ui5Extra.Text.Text'],
    elements: [],
    noLibraryCSS: true // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('ui5Extra.Text');
});