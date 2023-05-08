sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library ui5Extra.Toast
   */
  sap.ui.getCore().initLibrary({
    name: 'ui5Extra.Toast',
    version: '0.0.1',
    dependencies: ['sap.ui.core'],
    types: ['ui5Extra.State'],
    interfaces: [],
    controls: ['ui5Extra.Toast.Toast'],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  const ui5Extra = ObjectPath.get('ui5Extra.Toast');

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