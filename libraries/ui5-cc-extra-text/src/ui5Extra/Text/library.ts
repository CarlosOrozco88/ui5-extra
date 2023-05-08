import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library ui5Extra.Text
 */
sap.ui.getCore().initLibrary({
  name: 'ui5Extra.Text',
  version: '${version}',
  dependencies: ['sap.ui.core', 'sap.m'],
  types: [],
  interfaces: [],
  controls: ['ui5Extra.Text.Text'],
  elements: [],
  noLibraryCSS: true // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('ui5Extra.Text') as { [key: string]: unknown };
