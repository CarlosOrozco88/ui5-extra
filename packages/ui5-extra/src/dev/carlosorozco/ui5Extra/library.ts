import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library dev.carlosorozco.ui5Extra
 */
sap.ui.getCore().initLibrary({
  name: 'dev.carlosorozco.ui5Extra',
  version: '${version}',
  dependencies: ['sap.ui.core', 'sap.m'],
  types: ['dev.carlosorozco.State'],
  interfaces: [],
  controls: ['dev.carlosorozco.ui5Extra.Text', 'dev.carlosorozco.ui5Extra.ODataFetch'],
  elements: [],
  noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('dev.carlosorozco.ui5Extra') as { [key: string]: unknown };

/**
 * States
 *
 * @enum {string}
 * @public
 */
export enum State {
  None = 'None',
  Information = 'Information',
  Success = 'Success',
  Warning = 'Warning',
  Error = 'Error'
}

ui5Extra.State = State;
