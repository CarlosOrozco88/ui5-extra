import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library ui5Extra.TwoStepButton
 */
sap.ui.getCore().initLibrary({
  name: 'ui5Extra.TwoStepButton',
  version: '${version}',
  dependencies: ['sap.ui.core', 'sap.m'],
  types: [],
  interfaces: [],
  controls: ['ui5Extra.TwoStepButton.TwoStepButton'],
  elements: [],
  noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('ui5Extra.TwoStepButton') as { [key: string]: unknown };
