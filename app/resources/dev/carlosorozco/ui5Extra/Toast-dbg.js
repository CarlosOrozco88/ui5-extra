sap.ui.define(["./library", "./Popup"], function (___library, __Popup) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const STATE = ___library["State"];
  const Popup = _interopRequireDefault(__Popup);
  /**
   * @class
   * @static
   * @public
   * @namespace dev.carlosorozco.ui5Extra
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
    information(sMessage, mOptions) {
      return this.show(sMessage, {
        ...mOptions,
        state: STATE.Information
      });
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
    success(sMessage, mOptions) {
      return this.show(sMessage, {
        ...mOptions,
        state: STATE.Success
      });
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
    warning(sMessage, mOptions) {
      return this.show(sMessage, {
        ...mOptions,
        state: STATE.Warning
      });
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
    error(sMessage, mOptions) {
      return this.show(sMessage, {
        ...mOptions,
        state: STATE.Error
      });
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
    show(sMessage, mOptions) {
      const oPopup = new Popup({
        ...mOptions,
        text: sMessage ?? ''
      });
      return oPopup.show();
    }
  };
  return Toast;
});