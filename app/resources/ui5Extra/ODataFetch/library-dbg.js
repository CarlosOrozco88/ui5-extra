sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library ui5Extra.ODataFetch
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5Extra.ODataFetch',
    version: '0.0.1',
    dependencies: ['sap.ui.core'],
    types: [],
    interfaces: [],
    controls: ['ui5Extra.ODataFetch.ODataFetch'],
    elements: [],
    noLibraryCSS: true // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('ui5Extra.ODataFetch');
});