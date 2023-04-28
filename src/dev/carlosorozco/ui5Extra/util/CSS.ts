import Log from 'sap/base/Log';

/**
 * @namespace dev.carlosorozco.ui5Extra.util.CSSUtil
 * @public
 */
const CSS = {
  supports(property: string, value: string) {
    if (!value || CSS.supports(property, value)) {
      return true;
    }
    Log.error(`${value} is not a valid CSS ${property}`);
    return false;
  }
};

export default CSS;
