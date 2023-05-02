sap.ui.define(["sap/m/Text", "./TextRenderer", "./util/Styles", "sap/ui/Device"], function (TextM, __TextRenderer, __Styles, sap_ui_Device) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const TextRenderer = _interopRequireDefault(__TextRenderer);
  const Styles = _interopRequireDefault(__Styles);
  const support = sap_ui_Device["support"];
  const system = sap_ui_Device["system"];
  /**
   * Constructor for a new <code>dev.carlosorozco.ui5Extra.Text</code> control.
   *
   * Extends sap.m.Text and adds extra features
   *
   * @namespace dev.carlosorozco.ui5Extra
   */
  const Text = TextM.extend("dev.carlosorozco.ui5Extra.Text", {
    renderer: TextRenderer,
    metadata: {
      library: 'dev.carlosorozco.ui5Extra',
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
      if (Styles.supports('font-weight', fontWeight)) {
        this.setProperty('fontWeight', fontWeight);
      }
      return this;
    },
    setFontStyle: function _setFontStyle(fontStyle) {
      if (Styles.supports('font-style', fontStyle)) {
        this.setProperty('fontStyle', fontStyle);
      }
      return this;
    },
    setCursor: function _setCursor(cursor) {
      if (Styles.supports('cursor', cursor)) {
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
    }
  });
  return Text;
});