sap.ui.define(["sap/m/Text", "./TextRenderer", "sap/ui/Device", "sap/base/Log"], function (TextM, __TextRenderer, sap_ui_Device, Log) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const TextRenderer = _interopRequireDefault(__TextRenderer);
  const support = sap_ui_Device["support"];
  const system = sap_ui_Device["system"];
  /**
   * Constructor for a new <code>ui5Extra.Text.Text</code> control.
   *
   * Extends sap.m.Text and adds extra features
   *
   * @namespace ui5Extra.Text
   */
  const Text = TextM.extend("ui5Extra.Text.Text", {
    renderer: TextRenderer,
    metadata: {
      library: 'ui5Extra.Text',
      properties: {
        color: {
          type: 'sap.ui.core.CSSColor',
          group: 'Appearance',
          defaultValue: null
        },
        backgroundColor: {
          type: 'sap.ui.core.CSSColor',
          group: 'Appearance',
          defaultValue: null
        },
        fontSize: {
          type: 'sap.ui.core.CSSSize',
          group: 'Appearance',
          defaultValue: null
        },
        fontWeight: {
          type: 'string',
          group: 'Appearance',
          defaultValue: null
        },
        fontStyle: {
          type: 'string',
          group: 'Appearance',
          defaultValue: null
        },
        textDecoration: {
          type: 'string',
          group: 'Appearance',
          defaultValue: null
        },
        fontFamily: {
          type: 'string',
          group: 'Appearance',
          defaultValue: null
        },
        cursor: {
          type: 'string',
          group: 'Appearance',
          defaultValue: null
        }
      },
      events: {
        press: {}
      }
    },
    constructor: function _constructor(id, settings) {
      TextM.prototype.constructor.call(this, id, settings);
    },
    setFontWeight: function _setFontWeight(fontWeight) {
      if (this.supports('font-weight', fontWeight)) {
        this.setProperty('fontWeight', fontWeight);
      }
      return this;
    },
    setFontStyle: function _setFontStyle(fontStyle) {
      if (this.supports('font-style', fontStyle)) {
        this.setProperty('fontStyle', fontStyle);
      }
      return this;
    },
    setTextDecoration: function _setTextDecoration(textDecoration) {
      if (this.supports('text-decoration', textDecoration)) {
        this.setProperty('textDecoration', textDecoration);
      }
      return this;
    },
    setFontFamily: function _setFontFamily(fontFamily) {
      if (this.supports('font-family', fontFamily)) {
        this.setProperty('fontFamily', fontFamily);
      }
      return this;
    },
    setCursor: function _setCursor(cursor) {
      if (this.supports('cursor', cursor)) {
        this.setProperty('cursor', cursor);
      }
      return this;
    },
    onclick: function _onclick(oEvent) {
      if (support.touch && !system.desktop) {
        return;
      }
      if (this.hasListeners('press')) {
        // @ts-ignore
        // eslint-disable-next-line
        oEvent.setMarked();
      }
      this.firePress();
    },
    ontap: function _ontap(oEvent) {
      if (!(support.touch && !system.desktop)) {
        return;
      }
      if (this.hasListeners('press')) {
        // @ts-ignore
        // eslint-disable-next-line
        oEvent.setMarked();
      }
      this.firePress();
    },
    onsapenter: function _onsapenter(oEvent) {
      if (this.hasListeners('press')) {
        // @ts-ignore
        // eslint-disable-next-line
        oEvent.setMarked();
      }
      this.firePress();
    },
    supports: function _supports(property, value) {
      if (!value || CSS.supports(property, value)) {
        return true;
      }
      Log.error(`${value} is not a valid CSS ${property}`);
      return false;
    }
  });
  return Text;
});