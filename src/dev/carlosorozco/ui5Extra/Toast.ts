import { State as STATE } from './library';
import Popup from './Popup';

/**
 * @namespace dev.carlosorozco.ui5Extra
 */
export default {
  information(sMessage = '', mOptions = {}) {
    return this.show(sMessage, { ...mOptions, state: STATE.Information });
  },
  success(sMessage = '', mOptions = {}) {
    return this.show(sMessage, { ...mOptions, state: STATE.Success });
  },
  warning(sMessage = '', mOptions = {}) {
    return this.show(sMessage, { ...mOptions, state: STATE.Warning });
  },
  error(sMessage = '', mOptions = {}) {
    return this.show(sMessage, { ...mOptions, state: STATE.Error });
  },

  show(sMessage = '', mOptions = {}) {
    const oPopup = new Popup({
      ...mOptions,
      text: sMessage
    });
    return oPopup.show();
  }
};
