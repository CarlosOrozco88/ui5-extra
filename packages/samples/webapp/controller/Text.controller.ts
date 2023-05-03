import Toast from 'dev/carlosorozco/ui5Extra/Toast';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class TextView extends Controller {
  pressText() {
    Toast.success('Pressed', { title: 'Success' });
  }
}
