// Provides control ui5Extra.StepButton.StepButton
import Button, { $ButtonSettings } from 'sap/m/Button';
// @ts-ignore
import ButtonRenderer from 'sap/m/ButtonRenderer';
import { ButtonType } from 'sap/m/library';
import { Step } from './library';

const SHOW_LOAD_BAR = false;
/**
 * Constructor for a new <code>ui5Extra.StepButton.StepButton</code> control.
 *
 * Extends sap.m.StepButton and adds extra features
 *
 * @namespace ui5Extra.StepButton
 */
export default class StepButton extends Button {
  constructor(id?: string | $ButtonSettings);
  constructor(id?: string, settings?: $ButtonSettings);
  constructor(id?: string, settings?: $ButtonSettings) {
    super(id, settings);
  }

  /** @private */
  static readonly metadata: object = {
    library: 'ui5Extra.StepButton',
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
      duration: {
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

  private _state = Step.INITIAL;

  private _stepTimeout: ReturnType<typeof setTimeout>;

  init() {
    super.init();
    this.addStyleClass('StepButton');
    this.toggleStyleClass('showLoadBar', SHOW_LOAD_BAR);
    this._applyChangesState();
  }

  setText(sTextParam?: string) {
    const initialText = this.getInitialText();
    const finalText = this.getFinalText();

    const sText = this._isFinal() ? finalText : initialText;

    super.setText(sText || initialText);
    return this;
  }

  setIcon(sIconParam?: string) {
    const initialIcon = this.getInitialIcon();
    const finalIcon = this.getFinalIcon();

    const sIcon = this._isFinal() ? finalIcon : initialIcon;

    super.setIcon(sIcon || initialIcon);
    return this;
  }

  setTooltip(sTooltipParam: string) {
    const initialTooltip = this.getInitialTooltip();
    const finalTooltip = this.getFinalTooltip();

    const sTooltip = this._isFinal() ? finalTooltip : initialTooltip;

    super.setTooltip(sTooltip || initialTooltip);
    return this;
  }

  setType(sTypeParam?: ButtonType) {
    const initialType = this.getInitialType();
    const finalType = this.getFinalType();

    const sType = this._isFinal() ? finalType : initialType;

    super.setType(sType || initialType);
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

  private _changeState(bState?: Step) {
    if (bState === undefined) bState = this._isFinal() ? Step.INITIAL : Step.FINAL;
    this._state = bState;
    this._applyChangesState();
    return this._state;
  }

  private _applyChangesState() {
    const bFinal = this._isFinal();

    this.toggleStyleClass('Initial', !bFinal);
    this.toggleStyleClass('Final', bFinal);

    this.setText();
    this.setIcon();
    this.setType();
    this.setTooltip('');

    this._handleTimeout();
  }

  private async _handleTimeout() {
    const bFinal = this._isFinal();

    clearTimeout(this._stepTimeout);
    if (bFinal) {
      const iStepTime = this.getDuration();
      const oDomRef = this.getDomRef() as HTMLElement | null;
      if (oDomRef) oDomRef.style.transitionDuration = `${iStepTime}ms`;

      this._stepTimeout = setTimeout(() => {
        this._changeState(Step.INITIAL);
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

  private _isFinal() {
    return this._state === Step.FINAL;
  }
}
