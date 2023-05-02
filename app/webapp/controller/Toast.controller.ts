import Controller from 'sap/ui/core/mvc/Controller';
import Component from '../Component';
import Toast from 'dev/carlosorozco/ui5Extra/Toast';
import { $PopupSettings } from 'dev/carlosorozco/ui5Extra/Popup';

/**
 * @namespace ui5.typescript.helloworld.controller
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
