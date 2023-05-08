import { State as STATE } from './library';
import Popup from './Popup';
import { $PopupSettings } from './Popup';

/**
 * @class
 * @static
 * @public
 * @namespace ui5Extra.Toast
 */
const Toast = {
  /**
   * Creates and displays an information message toast notification message with the given text, and optionally
   * other options.
   *
   * @param sMessage The message to be displayed.
   * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
   * is optional.
   * @returns A promise resolved after Popover is closed
   */
  information(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Information });
  },

  /**
   * Creates and displays a success message toast notification message with the given text, and optionally
   * other options.
   *
   * @param sMessage The message to be displayed.
   * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
   * is optional.
   * @returns A promise resolved after Popover is closed
   */
  success(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Success });
  },

  /**
   * Creates and displays a warning message toast notification message with the given text, and optionally
   * other options.
   *
   * @param sMessage The message to be displayed.
   * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
   * is optional.
   * @returns A promise resolved after Popover is closed
   */
  warning(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Warning });
  },

  /**
   * Creates and displays an error message toast notification message with the given text, and optionally
   * other options.
   *
   * @param sMessage The message to be displayed.
   * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
   * is optional.
   * @returns A promise resolved after Popover is closed
   */
  error(sMessage: string, mOptions?: $PopupSettings) {
    return this.show(sMessage, { ...mOptions, state: STATE.Error });
  },

  /**
   * Creates and displays a message toast notification message with the given text, and optionally
   * other options.
   *
   * @param sMessage The message to be displayed.
   * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
   * is optional.
   * @returns A promise resolved after Popover is closed
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
