// Provides control dev.carlosorozco.ui5Extra.Text
import TextM from 'sap/m/Text';
import TextRenderer from './TextRenderer';
import Styles from './util/Styles';
import Event from 'sap/ui/base/Event';
import { support, system } from 'sap/ui/Device';

/**
 * Constructor for a new <code>dev.carlosorozco.ui5Extra.Text</code> control.
 *
 * Extends sap.m.Text and adds extra features
 *
 * @namespace dev.carlosorozco.ui5Extra
 */
export default class Text extends TextM {
  constructor(id?: string | $TextSettings_1);
  constructor(id?: string, settings?: $TextSettings_1);
  constructor(id?: string, settings?: $TextSettings_1) {
    super(id, settings);
  }

  /** @private */
  static readonly metadata: object = {
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
  };

  /** @private */
  static renderer = TextRenderer;

  setFontWeight(fontWeight: string) {
    if (Styles.supports('font-weight', fontWeight)) {
      this.setProperty('fontWeight', fontWeight);
    }
    return this;
  }

  setFontStyle(fontStyle: string) {
    if (Styles.supports('font-style', fontStyle)) {
      this.setProperty('fontStyle', fontStyle);
    }
    return this;
  }
  setCursor(cursor: string) {
    if (Styles.supports('cursor', cursor)) {
      this.setProperty('cursor', cursor);
    }
    return this;
  }

  onclick(oEvent: Event) {
    if (support.touch && !system.desktop) {
      return;
    }
    if (this.hasListeners('press')) {
      // @ts-ignore
      // eslint-disable-next-line
      oEvent.setMarked();
    }

    this.firePress();
  }

  ontap(oEvent: Event) {
    if (!(support.touch && !system.desktop)) {
      return;
    }
    if (this.hasListeners('press')) {
      // @ts-ignore
      // eslint-disable-next-line
      oEvent.setMarked();
    }

    this.firePress();
  }

  onsapenter(oEvent: Event) {
    if (this.hasListeners('press')) {
      // @ts-ignore
      // eslint-disable-next-line
      oEvent.setMarked();
    }

    this.firePress();
  }
}