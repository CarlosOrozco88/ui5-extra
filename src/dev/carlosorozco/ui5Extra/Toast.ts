import { State as STATE } from './library';
import Popup from './Popup';
import { $PopupSettings } from './Popup';

/**
 * @class
 * @static
 * @public
 * @namespace dev.carlosorozco.ui5Extra
 */
const Toast = {
  /**
   * @public
   */
  information(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Information });
  },

  /**
   * @public
   */
  success(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Success });
  },

  /**
   * @public
   */
  warning(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Warning });
  },

  /**
   * @public
   */
  error(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Error });
  },

  /**
   * @public
   */
  show(sMessage: string, mOptions?: $PopupSettings) {
    const oPopup = new Popup({
      ...mOptions,
      text: sMessage ?? ''
    });
    return oPopup.show();
  }
};

export default Toast;
