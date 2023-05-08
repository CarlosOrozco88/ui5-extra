declare module 'ui5Extra/TwoStepButton/TwoStepButton' {
  import Button from 'sap/m/Button';
  import Event from 'sap/ui/base/Event';
  import { CSSColor } from 'sap/ui/core/library';
  import { $TwoStepButtonSettings as $ButtonSettingsSap } from 'sap/m/Button';
  import { PropertyBindingInfo } from 'sap/ui/base/ManagedObject';
  import { CSSSize } from 'sap/ui/core/library';

  /**
   * Constructor for a new <code>ui5Extra.TwoStepButton.TwoStepButton</code> control.
   *
   * Extends sap.m.TwoStepButton and adds extra features
   *
   * @namespace ui5Extra.TwoStepButton
   */
  export default class TwoStepButton extends Button {
    constructor(id?: string | $TwoStepButtonSettings);
    constructor(id?: string, settings?: $TwoStepButtonSettings);

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

  interface $TwoStepButtonSettings extends $ButtonSettingsSap {
    color?: CSSColor | PropertyBindingInfo | `{${string}}`;
    backgroundColor?: CSSColor | PropertyBindingInfo | `{${string}}`;
    fontSize?: CSSSize | PropertyBindingInfo | `{${string}}`;
    fontWeight?: string | PropertyBindingInfo;
    fontStyle?: string | PropertyBindingInfo;
    cursor?: string | PropertyBindingInfo;
    press?: (event: Event) => void;
  }
}
