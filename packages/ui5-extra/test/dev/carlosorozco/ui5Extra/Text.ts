import Text from 'dev/carlosorozco/ui5Extra/Text';
import VBox from 'sap/m/VBox';

new VBox({
  items: [
    new Text({
      text: 'standard'
    }),
    new Text({
      text: 'presable',
      fontSize: '2rem',
      fontWeight: 'bold',
      press: () => {
        console.log('pressed');
      }
    }),
    new Text({
      text: 'Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet',
      color: '#ff0000',
      backgroundColor: 'yellow',
      fontSize: '1rem',
      fontStyle: 'italic',
      fontWeight: 'bold',
      cursor: 'help'
    }),
    new Text({
      width: '10rem',
      wrapping: false,
      text: 'Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet',
      color: 'white',
      backgroundColor: 'green',
      fontStyle: 'italic',
      fontWeight: 'bold'
    })
  ]
}).placeAt('content');
