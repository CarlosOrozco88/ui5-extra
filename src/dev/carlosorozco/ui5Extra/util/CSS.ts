import Log from 'sap/base/Log';

/**
 * @namespace dev.carlosorozco.ui5Extra.util.CSSUtil
 */
export default {
  supports(prop: string, value: string) {
    if (!value || CSS.supports(prop, value)) {
      return true;
    }
    Log.error(`${value} is not a valid CSS ${prop}`);
    return false;
  }
};
