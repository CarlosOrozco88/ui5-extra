sap.ui.define(["dev/carlosorozco/ui5Extra/Text", "sap/m/VBox"], function (__Text, VBox) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Text = _interopRequireDefault(__Text);
  new VBox({
    items: [new Text({
      text: 'standard'
    }), new Text({
      text: 'presable',
      fontSize: '2rem',
      fontWeight: 'bold',
      press: () => {
        console.log('pressed');
      }
    }), new Text({
      text: 'Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet',
      color: '#ff0000',
      backgroundColor: 'yellow',
      fontSize: '1rem',
      fontStyle: 'italic',
      fontWeight: 'bold',
      cursor: 'help'
    }), new Text({
      width: '10rem',
      wrapping: false,
      text: 'Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet Lorem ipsum dolor sid amet',
      color: 'white',
      backgroundColor: 'green',
      fontStyle: 'italic',
      fontWeight: 'bold'
    })]
  }).placeAt('content');
});