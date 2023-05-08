// Provides control ui5Extra.Text.Text
import TextM from 'sap/m/Text';
import TextRenderer from './TextRenderer';
import Event from 'sap/ui/base/Event';
import { support, system } from 'sap/ui/Device';
import Log from 'sap/base/Log';

/**
 * Constructor for a new <code>ui5Extra.Text.Text</code> control.
 *
 * Extends sap.m.Text and adds extra features
 *
 * @namespace ui5Extra.Text
 */
export default class Text extends TextM {
  constructor(id?: string | $TextSettings_1);
  constructor(id?: string, settings?: $TextSettings_1);
  constructor(id?: string, settings?: $TextSettings_1) {
    super(id, settings);
  }

  /** @private */
  static readonly metadata: object = {
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
  };

  /** @private */
  static renderer = TextRenderer;

  setFontWeight(fontWeight: string) {
    if (this.supports('font-weight', fontWeight)) {
      this.setProperty('fontWeight', fontWeight);
    }
    return this;
  }

  setFontStyle(fontStyle: string) {
    if (this.supports('font-style', fontStyle)) {
      this.setProperty('fontStyle', fontStyle);
    }
    return this;
  }

  setTextDecoration(textDecoration: string) {
    if (this.supports('text-decoration', textDecoration)) {
      this.setProperty('textDecoration', textDecoration);
    }
    return this;
  }

  setFontFamily(fontFamily: string) {
    if (this.supports('font-family', fontFamily)) {
      this.setProperty('fontFamily', fontFamily);
    }
    return this;
  }

  setCursor(cursor: string) {
    if (this.supports('cursor', cursor)) {
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

  supports(property: string, value: string) {
    if (!value || CSS.supports(property, value)) {
      return true;
    }
    Log.error(`${value} is not a valid CSS ${property}`);
    return false;
  }
}
