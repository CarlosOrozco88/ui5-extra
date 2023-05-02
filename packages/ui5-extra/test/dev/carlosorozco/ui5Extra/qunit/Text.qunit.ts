/*global QUnit */
import Text from 'dev/carlosorozco/ui5Extra/Text';
import Control from 'sap/ui/core/Control';

// // prepare DOM
const elem = document.createElement('div');
elem.id = 'uiArea1';
document.body.appendChild(elem);

function triggerClickEvent(control: Control) {
  const oEvent = jQuery.Event('click');
  oEvent.offsetX = 1;
  oEvent.offsetY = 1;
  const dref = control.getDomRef();
  // @ts-ignore
  // eslint-disable-next-line
  jQuery(dref).trigger(oEvent);
}

QUnit.module('QUnit Test for Text');

QUnit.test('Test Text getText', function (assert) {
  assert.expect(2);
  const oText = new Text({
    text: 'Example'
  });
  assert.equal(oText.getText(false), 'Example', "Check text equals 'Example'");
  oText.setText('');
  assert.equal(oText.getText(false), '', "Check text equals ''");
});

QUnit.test('Test Text getColor', function (assert) {
  assert.expect(3);
  const oText = new Text({
    color: '#ff0000'
  });
  assert.equal(oText.getColor(), '#ff0000', "Check color equals '#ff0000'");
  oText.setColor('blue');
  assert.equal(oText.getColor(), 'blue', "Check fontWeight equals 'blue'");
  oText.setColor('');
  assert.equal(oText.getColor(), '', "Check fontWeight equals ''");
});

QUnit.test('Test Text getBackgroundColor', function (assert) {
  assert.expect(3);
  const oText = new Text({
    backgroundColor: '#ff0000'
  });
  assert.equal(oText.getBackgroundColor(), '#ff0000', "Check color equals '#ff0000'");
  oText.setBackgroundColor('blue');
  assert.equal(oText.getBackgroundColor(), 'blue', "Check fontWeight equals 'blue'");
  oText.setBackgroundColor('');
  assert.equal(oText.getBackgroundColor(), '', "Check fontWeight equals ''");
});

QUnit.test('Test Text getFontSize', function (assert) {
  assert.expect(3);
  const oText = new Text({
    fontSize: '3rem'
  });
  assert.equal(oText.getFontSize(), '3rem', "Check fontSize equals '3rem'");
  oText.setFontSize('2rem');
  assert.equal(oText.getFontSize(), '2rem', "Check fontWeight equals '2rem'");
  oText.setFontSize('');
  assert.equal(oText.getFontSize(), '', "Check fontWeight equals ''");
});

QUnit.test('Test Text getFontWeight', function (assert) {
  assert.expect(3);
  const oText = new Text({
    fontWeight: 'bold'
  });
  assert.equal(oText.getFontWeight(), 'bold', "Check fontWeight equals 'bold'");
  oText.setFontWeight('normal');
  assert.equal(oText.getFontWeight(), 'normal', "Check fontStyle equals 'normal'");
  oText.setFontWeight('');
  assert.equal(oText.getFontWeight(), '', "Check fontStyle equals ''");
});

QUnit.test('Test Text getFontStyle', function (assert) {
  assert.expect(3);
  const oText = new Text({
    fontStyle: 'italic'
  });
  assert.equal(oText.getFontStyle(), 'italic', "Check fontStyle equals 'italic'");
  oText.setFontStyle('normal');
  assert.equal(oText.getFontStyle(), 'normal', "Check fontStyle equals 'normal'");
  oText.setFontStyle('');
  assert.equal(oText.getFontStyle(), '', "Check fontStyle equals ''");
});

// some basic eventing check
QUnit.test('Test click event', function (assert) {
  assert.expect(1);
  const done = assert.async();
  const oExample = new Text('example', {
    text: 'Example',
    press: () => {
      assert.ok(true, 'Event fired');
    }
  });
  oExample.placeAt('uiArea1');
  setTimeout(function () {
    triggerClickEvent(oExample);
    oExample.destroy();
    done();
  }, 100);
});
