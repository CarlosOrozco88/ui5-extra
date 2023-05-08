declare module 'ui5Extra/Toast/Toast' {
  import { $PopupSettings } from 'ui5Extra/Toast/Popup';

  /**
   * @static
   * @namespace ui5Extra.Toast
   */
  namespace Toast {
    /**
     * Creates and displays an information message toast notification message with the given text, and optionally
     * other options.
     *
     * @param sMessage The message to be displayed.
     * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
     * is optional.
     * @returns A promise resolved after Popover is closed
     */

    export function information(sMessage: string, mOptions?: $PopupSettings): Promise<void>;
    /**
     * Creates and displays a success message toast notification message with the given text, and optionally
     * other options.
     *
     * @param sMessage The message to be displayed.
     * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
     * is optional.
     * @returns A promise resolved after Popover is closed
     */
    export function success(sMessage: string, mOptions?: $PopupSettings): Promise<void>;

    /**
     * Creates and displays a warning message toast notification message with the given text, and optionally
     * other options.
     *
     * @param sMessage The message to be displayed.
     * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
     * is optional.
     * @returns A promise resolved after Popover is closed
     */
    export function warning(sMessage: string, mOptions?: $PopupSettings): Promise<void>;

    /**
     * Creates and displays an error message toast notification message with the given text, and optionally
     * other options.
     *
     * @param sMessage The message to be displayed.
     * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
     * is optional.
     * @returns A promise resolved after Popover is closed
     */
    export function error(sMessage: string, mOptions?: $PopupSettings): Promise<void>;

    /**
     * Creates and displays a message toast notification message with the given text, and optionally
     * other options.
     *
     * @param sMessage The message to be displayed.
     * @param mOptions  Object which can contain all other options. Not all entries in this object are required. This property
     * is optional.
     * @returns A promise resolved after Popover is closed
     */
    export function show(sMessage: string, mOptions?: $PopupSettings): Promise<void>;
  }
  export default Toast;
}
