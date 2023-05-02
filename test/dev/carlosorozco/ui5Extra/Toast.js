import Toast from 'dev/carlosorozco/ui5Extra/Toast';
import Button from 'sap/m/Button';

new Button({
  text: 'Show',
  icon: 'sap-icon://sys-help-2',
  press: () => {
    Toast.show('Lorem ipsum dolor sit amet', { icon: 'sap-icon://sys-help-2', title: 'Show' });
  }
}).placeAt('content');
new Button({
  text: 'Information',
  press: () => {
    Toast.information('Lorem ipsum dolor sit amet', { title: 'Information' });
  }
}).placeAt('content');
new Button({
  text: 'Toast',
  press: () => {
    Toast.success('Lorem ipsum dolor sit amet', {
      title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
    });
  }
}).placeAt('content');
new Button({
  text: 'Error',
  press: () => {
    Toast.error('Lorem ipsum dolor sit amet', {
      showClose: false,
      duration: 0
    });
  }
}).placeAt('content');
new Button({
  text: 'Warning',
  press: () => {
    Toast.warning(
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      { duration: 100000, title: 'Warning' }
    );
  }
}).placeAt('content');
new Button({
  text: 'Infinite',
  press: () => {
    Toast.show('Infinite', { duration: 0, title: 'No ending' });
  }
}).placeAt('content');
new Button({
  text: 'Infinite',
  press: () => {
    Toast.show('Infinite', { showClose: false, duration: 1 });
  }
}).placeAt('content');
