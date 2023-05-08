declare module 'ui5Extra/Text/Text' {
  import TextM from 'sap/m/Text';
  import Event from 'sap/ui/base/Event';
  import { CSSColor } from 'sap/ui/core/library';
  import { $TextSettings as $TextSettingsSap } from 'sap/m/Text';
  import { PropertyBindingInfo } from 'sap/ui/base/ManagedObject';
  import { CSSSize } from 'sap/ui/core/library';

  /**
   * Constructor for a new <code>ui5Extra.Text.Text</code> control.
   *
   * Extends sap.m.Text and adds extra features
   *
   * @namespace ui5Extra.Text
   */
  export default class Text extends TextM {
    constructor(id?: string | $TextSettings);
    constructor(id?: string, settings?: $TextSettings);

    onclick(oEvent: Event): void;
    ontap(oEvent: Event): void;
    onsapenter(oEvent: Event): void;

    // property: color
    getColor(): CSSColor;
    setColor(color: CSSColor): this;

    // property: backgroundColor
    getBackgroundColor(): CSSColor;
    setBackgroundColor(backgroundColor: CSSColor): this;

    // property: fontSize
    getFontSize(): CSSSize;
    setFontSize(fontSize: CSSSize): this;

    // property: fontWeight
    getFontWeight(): string;
    setFontWeight(fontWeight: string): this;

    // property: fontStyle
    getFontStyle(): string;
    setFontStyle(fontStyle: string): this;

    // property: textDecoration
    getTextDecoration(): string;
    setTextDecoration(textDecoration: string): this;

    // property: fontFamily
    getFontFamily(): string;
    setFontFamily(fontFamily: string): this;

    // property: cursor
    getCursor(): string;
    setCursor(cursor: string): this;

    // event: press
    attachPress(fn: (event: Event) => void, listener?: object): this;
    attachPress<CustomDataType extends object>(
      data: CustomDataType,
      fn: (event: Event, data: CustomDataType) => void,
      listener?: object
    ): this;
    detachPress(fn: (event: Event) => void, listener?: object): this;
    firePress(parameters?: object): this;
  }

  interface $TextSettings extends $TextSettingsSap {
    color?: CSSColor | PropertyBindingInfo | `{${string}}`;
    backgroundColor?: CSSColor | PropertyBindingInfo | `{${string}}`;
    fontSize?: CSSSize | PropertyBindingInfo | `{${string}}`;
    fontWeight?: string | PropertyBindingInfo;
    fontStyle?: string | PropertyBindingInfo;
    textDecoration?: string | PropertyBindingInfo;
    fontFamily?: string | PropertyBindingInfo;
    cursor?: string | PropertyBindingInfo;
    press?: (event: Event) => void;
  }
}
