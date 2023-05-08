import Toast from 'ui5Extra/Toast/Toast';
import BaseController from './BaseController';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class TextView extends BaseController {
  pressText() {
    Toast.show('Good job! :D', { title: 'Button Pressed' });
  }
}
