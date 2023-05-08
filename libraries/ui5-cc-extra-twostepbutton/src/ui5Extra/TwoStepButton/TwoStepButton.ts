// Provides control ui5Extra.TwoStepButton.TwoStepButton
import Button, { $ButtonSettings } from 'sap/m/Button';
// @ts-ignore
import ButtonRenderer from 'sap/m/ButtonRenderer';
import { ButtonType } from 'sap/m/library';

enum STATE {
  INITIAL = 'INITIAL',
  FINAL = 'FINAL'
}
const SHOW_LOAD_BAR = false;
/**
 * Constructor for a new <code>ui5Extra.TwoStepButton.TwoStepButton</code> control.
 *
 * Extends sap.m.TwoStepButton and adds extra features
 *
 * @namespace ui5Extra.TwoStepButton
 */
export default class TwoStepButton extends Button {
  constructor(id?: string | $ButtonSettings);
  constructor(id?: string, settings?: $ButtonSettings);
  constructor(id?: string, settings?: $ButtonSettings) {
    super(id, settings);
  }

  /** @private */
  static readonly metadata: object = {
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
  };

  /** @private */
  static renderer = ButtonRenderer;

  /** @private */
  _state = STATE.INITIAL;

  /** @private */
  _stepTimeout: ReturnType<typeof setTimeout>;

  init() {
    super.init();
    this.addStyleClass('TwoStepButton');
    this.toggleStyleClass('showLoadBar', SHOW_LOAD_BAR);
    this._applyChangesState();
  }

  setText(sTextParam?: string) {
    let sText = this._isFinal() ? this.getFinalText() : this.getInitialText();
    super.setText(sText);
    return this;
  }

  setIcon(sIconParam?: string) {
    let sIcon = this._isFinal() ? this.getFinalIcon() : this.getInitialIcon();
    super.setIcon(sIcon);
    return this;
  }

  setTooltip(sTooltipParam: string) {
    let sTooltip = this._isFinal() ? this.getFinalTooltip() : this.getInitialTooltip();
    super.setTooltip(sTooltip);
    return this;
  }

  setType(sTypeParam?: string) {
    let sType = this._isFinal() ? this.getFinalType() : this.getInitialType();
    super.setType(sType);
    return this;
  }

  firePress(mParameters?: object) {
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
  }

  /** @private */
  _changeState(bState?: STATE) {
    if (bState === undefined) bState = this._isFinal() ? STATE.INITIAL : STATE.FINAL;
    this._state = bState;
    this._applyChangesState();
    return this._state;
  }

  /** @private */
  _applyChangesState() {
    const bFinal = this._isFinal();

    this.toggleStyleClass('Initial', !bFinal);
    this.toggleStyleClass('Final', bFinal);

    this.setText();
    this.setIcon();
    this.setType();
    this.setTooltip('');

    this._handleTimeout();
  }

  /** @private */
  async _handleTimeout() {
    const bFinal = this._isFinal();

    clearTimeout(this._stepTimeout);
    if (bFinal) {
      const iStepTime = this.getStepDuration();
      const oDomRef = this.getDomRef() as HTMLElement | null;
      if (oDomRef) oDomRef.style.transitionDuration = `${iStepTime}ms`;

      this._stepTimeout = setTimeout(() => {
        this._changeState(STATE.INITIAL);
      }, iStepTime);
    }
  }

  setInitialIcon(sIcon?: string) {
    this.setProperty('initialIcon', sIcon);
    this.setIcon();
    return this;
  }
  setFinalIcon(sIcon?: string) {
    this.setProperty('finalIcon', sIcon);
    this.setIcon();
    return this;
  }

  setInitialType(sType?: string) {
    this.setProperty('initialType', sType);
    this.setType();
    return this;
  }
  setFinalType(sType?: string) {
    this.setProperty('finalType', sType);
    this.setType();
    return this;
  }

  setInitialTooltip(sTooltip: string) {
    this.setProperty('initialTooltip', sTooltip);
    this.setTooltip(sTooltip);
    return this;
  }
  setFinalTooltip(sTooltip: string) {
    this.setProperty('finalTooltip', sTooltip);
    this.setTooltip(sTooltip);
    return this;
  }

  setInitialText(sText?: string) {
    this.setProperty('initialText', sText);
    this.setText();
    return this;
  }
  setFinalText(sText?: string) {
    this.setProperty('finalText', sText);
    this.setText();
    return this;
  }
  setShowLoadBar(bShow?: boolean) {
    this.setProperty('showLoadBar', bShow);
    this.toggleStyleClass('showLoadBar');
    return this;
  }

  /** @private */
  _isFinal() {
    return this._state === STATE.FINAL;
  }
}
