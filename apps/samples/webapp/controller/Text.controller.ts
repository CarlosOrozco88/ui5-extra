import Toast from 'ui5Extra/Toast/Toast';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class TextView extends Controller {
  pressText() {
    Toast.show('Good job! :D', { title: 'Button Pressed' });
  }
}
