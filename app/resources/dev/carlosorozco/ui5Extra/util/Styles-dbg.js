sap.ui.define(["sap/base/Log"], function (Log) {
  /**
   * @namespace dev.carlosorozco.ui5Extra.util.CSSUtil
   * @public
   */
  const Styles = {
    supports(property, value) {
      if (!value || CSS.supports(property, value)) {
        return true;
      }
      Log.error(`${value} is not a valid CSS ${property}`);
      return false;
    }
  };
  return Styles;
});