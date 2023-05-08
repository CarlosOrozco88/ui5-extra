import ObjectPath from 'sap/base/util/ObjectPath';

/**
 * Initialization Code and shared classes of library ui5Extra.ODataFetch
 */
sap.ui.getCore().initLibrary({
  name: 'ui5Extra.ODataFetch',
  version: '${version}',
  dependencies: ['sap.ui.core'],
  types: [],
  interfaces: [],
  controls: ['ui5Extra.ODataFetch.ODataFetch'],
  elements: [],
  noLibraryCSS: true // if no CSS is provided, you can disable the library.css load here
});

const ui5Extra: { [key: string]: unknown } = ObjectPath.get('ui5Extra.ODataFetch') as { [key: string]: unknown };
