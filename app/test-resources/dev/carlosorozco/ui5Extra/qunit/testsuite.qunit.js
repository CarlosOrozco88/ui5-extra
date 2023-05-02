sap.ui.define([], function () {
  var __exports = {
    name: 'QUnit TestSuite for dev.carlosorozco.ui5Extra',
    defaults: {
      bootCore: true,
      ui5: {
        libs: 'sap.ui.core,sap.m,dev.carlosorozco.ui5Extra',
        theme: 'sap_fiori_3',
        noConflict: true,
        preload: 'auto'
      },
      qunit: {
        version: 2,
        reorder: false
      },
      sinon: {
        version: 4,
        qunitBridge: true,
        useFakeTimers: false
      },
      module: './{name}.qunit'
    },
    tests: {
      Text: {
        title: 'QUnit Test for Text',
        _alternativeTitle: 'QUnit tests: dev.carlosorozco.ui5Extra.Text'
      }
    }
  };
  return __exports;
});