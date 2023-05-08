import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library ui5Extra.Toast
 */
sap.ui.getCore().initLibrary({
  name: 'ui5Extra.Toast',
  version: '${version}',
  dependencies: ['sap.ui.core'],
  types: ['ui5Extra.State'],
  interfaces: [],
  controls: ['ui5Extra.Toast.Toast'],
  elements: [],
  noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('ui5Extra.Toast') as { [key: string]: unknown };

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
