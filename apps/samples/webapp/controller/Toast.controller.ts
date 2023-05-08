import Controller from 'sap/ui/core/mvc/Controller';
import Toast from 'ui5Extra/Toast/Toast';
import { $PopupSettings } from 'ui5Extra/Toast/Popup';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class ToastView extends Controller {
  information() {
    Toast.information('Information message', { title: 'Information' });
  }

  warning() {
    Toast.warning('Warning message', { title: 'Warning' });
  }

  success() {
    Toast.success('Success message', { title: 'Success' });
  }

  error() {
    Toast.error('Error message', { title: 'Error' });
  }

  show() {
    Toast.show('Show message', { title: 'Show' });
  }

  defaults(sMessage: string, mOptions?: $PopupSettings) {
    Toast.show(sMessage, mOptions);
  }
}
