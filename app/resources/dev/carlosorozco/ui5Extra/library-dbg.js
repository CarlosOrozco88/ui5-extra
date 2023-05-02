sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library dev.carlosorozco.ui5Extra
   */
  sap.ui.getCore().initLibrary({
    name: 'dev.carlosorozco.ui5Extra',
    version: '0.0.1',
    dependencies: ['sap.ui.core', 'sap.m'],
    types: ['dev.carlosorozco.State'],
    interfaces: [],
    controls: ['dev.carlosorozco.ui5Extra.Text', 'dev.carlosorozco.ui5Extra.ODataFetch'],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('dev.carlosorozco.ui5Extra');

  /**
   * States
   *
   * @enum {string}
   * @public
   */
  var State = /*#__PURE__*/function (State) {
    State["None"] = "None";
    State["Information"] = "Information";
    State["Success"] = "Success";
    State["Warning"] = "Warning";
    State["Error"] = "Error";
    return State;
  }(State || {});
  ui5Extra.State = State;
  var __exports = {
    __esModule: true
  };
  __exports.State = State;
  return __exports;
});