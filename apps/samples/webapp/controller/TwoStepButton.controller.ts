import Controller from 'sap/ui/core/mvc/Controller';
import Toast from 'ui5Extra/Toast/Toast';

/**
 * @namespace dev.carlosorozco.ui5Extra.samples.controller
 */
export default class TwoStepButtonView extends Controller {
  pressInitial() {
    console.log('Step 1/2');
  }

  pressRemoveFinal() {
    Toast.error('Removed item', {
      title: 'Step 2/2'
    });
  }

  pressActionFinal() {
    Toast.information('Action', {
      title: 'Step 2/2'
    });
  }

  pressConfirmFinal() {
    Toast.success('Confirm', {
      title: 'Step 2/2'
    });
  }

  pressNoStep() {
    Toast.show('One step');
  }
}
