import Toast from 'dev/carlosorozco/ui5Extra/Toast';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class TextView extends Controller {
  pressText() {
    Toast.success('Pressed', { title: 'Success' });
  }
}
