import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library ui5Extra.StepButton
 */
sap.ui.getCore().initLibrary({
  name: 'ui5Extra.StepButton',
  version: '${version}',
  dependencies: ['sap.ui.core', 'sap.m'],
  types: [],
  interfaces: [],
  controls: ['ui5Extra.StepButton.StepButton'],
  elements: [],
  noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('ui5Extra.StepButton') as { [key: string]: unknown };

/**
 * Step
 *
 * @enum {string}
 * @public
 */
export enum Step {
  INITIAL = 'INITIAL',
  FINAL = 'FINAL'
}

ui5Extra.Step = Step;
