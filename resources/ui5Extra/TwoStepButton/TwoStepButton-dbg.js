sap.ui.define(["sap/m/Button", "sap/m/ButtonRenderer", "sap/m/library"], function (Button, ButtonRenderer, sap_m_library) {
  const ButtonType = sap_m_library["ButtonType"];
  var STATE = /*#__PURE__*/function (STATE) {
    STATE["INITIAL"] = "INITIAL";
    STATE["FINAL"] = "FINAL";
    return STATE;
  }(STATE || {});
  const SHOW_LOAD_BAR = false;
  /**
   * Constructor for a new <code>ui5Extra.TwoStepButton.TwoStepButton</code> control.
   *
   * Extends sap.m.TwoStepButton and adds extra features
   *
   * @namespace ui5Extra.TwoStepButton
   */
  const TwoStepButton = Button.extend("ui5Extra.TwoStepButton.TwoStepButton", {
    renderer: ButtonRenderer,
    metadata: {
      library: 'ui5Extra.TwoStepButton',
      properties: {
        initialText: {
          type: 'string',
          group: 'Misc',
          defaultValue: ''
        },
        initialTooltip: {
          type: 'string',
          group: 'Misc',
          defaultValue: ''
        },
        initialIcon: {
          type: 'sap.ui.core.URI',
          group: 'Data',
          defaultValue: ''
        },
        initialType: {
          type: 'sap.m.ButtonType',
          group: 'Appearance',
          defaultValue: ButtonType.Default
        },
        finalText: {
          type: 'string',
          group: 'Misc',
          defaultValue: ''
        },
        finalTooltip: {
          type: 'string',
          group: 'Misc',
          defaultValue: ''
        },
        finalIcon: {
          type: 'sap.ui.core.URI',
          group: 'Data',
          defaultValue: ''
        },
        finalType: {
          type: 'sap.m.ButtonType',
          group: 'Appearance',
          defaultValue: ButtonType.Emphasized
        },
        enabledStep: {
          type: 'boolean',
          group: 'Behavior',
          defaultValue: true
        },
        stepDuration: {
          type: 'int',
          group: 'Behavior',
          defaultValue: 3000
        },
        showLoadBar: {
          type: 'boolean',
          group: 'Behavior',
          defaultValue: SHOW_LOAD_BAR
        }
      },
      events: {
        initialPress: {},
        finalPress: {}
      }
    },
    constructor: function _constructor(id, settings) {
      Button.prototype.constructor.call(this, id, settings);
      this._state = STATE.INITIAL;
    },
    init: function _init() {
      Button.prototype.init.call(this);
      this.addStyleClass('TwoStepButton');
      this.toggleStyleClass('showLoadBar', SHOW_LOAD_BAR);
      this._applyChangesState();
    },
    setText: function _setText(sTextParam) {
      let sText = this._isFinal() ? this.getFinalText() : this.getInitialText();
      Button.prototype.setText.call(this, sText);
      return this;
    },
    setIcon: function _setIcon(sIconParam) {
      let sIcon = this._isFinal() ? this.getFinalIcon() : this.getInitialIcon();
      Button.prototype.setIcon.call(this, sIcon);
      return this;
    },
    setTooltip: function _setTooltip(sTooltipParam) {
      let sTooltip = this._isFinal() ? this.getFinalTooltip() : this.getInitialTooltip();
      Button.prototype.setTooltip.call(this, sTooltip);
      return this;
    },
    setType: function _setType(sTypeParam) {
      let sType = this._isFinal() ? this.getFinalType() : this.getInitialType();
      Button.prototype.setType.call(this, sType);
      return this;
    },
    firePress: function _firePress(mParameters) {
      if (this.getEnabledStep()) {
        const bIsFinal = this._isFinal();
        this._changeState();
        if (bIsFinal) {
          this.fireFinalPress(mParameters);
        } else {
          this.fireInitialPress(mParameters);
        }
      } else {
        this.fireInitialPress(mParameters);
      }
      return this;
    },
    _changeState: function _changeState(bState) {
      if (bState === undefined) bState = this._isFinal() ? STATE.INITIAL : STATE.FINAL;
      this._state = bState;
      this._applyChangesState();
      return this._state;
    },
    _applyChangesState: function _applyChangesState() {
      const bFinal = this._isFinal();
      this.toggleStyleClass('Initial', !bFinal);
      this.toggleStyleClass('Final', bFinal);
      this.setText();
      this.setIcon();
      this.setType();
      this.setTooltip('');
      this._handleTimeout();
    },
    _handleTimeout: async function _handleTimeout() {
      const bFinal = this._isFinal();
      clearTimeout(this._stepTimeout);
      if (bFinal) {
        const iStepTime = this.getStepDuration();
        const oDomRef = this.getDomRef();
        if (oDomRef) oDomRef.style.transitionDuration = `${iStepTime}ms`;
        this._stepTimeout = setTimeout(() => {
          this._changeState(STATE.INITIAL);
        }, iStepTime);
      }
    },
    setInitialIcon: function _setInitialIcon(sIcon) {
      this.setProperty('initialIcon', sIcon);
      this.setIcon();
      return this;
    },
    setFinalIcon: function _setFinalIcon(sIcon) {
      this.setProperty('finalIcon', sIcon);
      this.setIcon();
      return this;
    },
    setInitialType: function _setInitialType(sType) {
      this.setProperty('initialType', sType);
      this.setType();
      return this;
    },
    setFinalType: function _setFinalType(sType) {
      this.setProperty('finalType', sType);
      this.setType();
      return this;
    },
    setInitialTooltip: function _setInitialTooltip(sTooltip) {
      this.setProperty('initialTooltip', sTooltip);
      this.setTooltip(sTooltip);
      return this;
    },
    setFinalTooltip: function _setFinalTooltip(sTooltip) {
      this.setProperty('finalTooltip', sTooltip);
      this.setTooltip(sTooltip);
      return this;
    },
    setInitialText: function _setInitialText(sText) {
      this.setProperty('initialText', sText);
      this.setText();
      return this;
    },
    setFinalText: function _setFinalText(sText) {
      this.setProperty('finalText', sText);
      this.setText();
      return this;
    },
    setShowLoadBar: function _setShowLoadBar(bShow) {
      this.setProperty('showLoadBar', bShow);
      this.toggleStyleClass('showLoadBar');
      return this;
    },
    _isFinal: function _isFinal() {
      return this._state === STATE.FINAL;
    }
  });
  return TwoStepButton;
});