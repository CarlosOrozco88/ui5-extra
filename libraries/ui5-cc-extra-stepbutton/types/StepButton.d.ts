declare module 'ui5Extra/StepButton/StepButton' {
  import Button from 'sap/m/Button';
  import Event from 'sap/ui/base/Event';
  import { CSSColor } from 'sap/ui/core/library';
  import { $StepButtonSettings as $ButtonSettingsSap } from 'sap/m/Button';
  import { PropertyBindingInfo } from 'sap/ui/base/ManagedObject';
  import { CSSSize } from 'sap/ui/core/library';

  /**
   * Constructor for a new <code>ui5Extra.StepButton.StepButton</code> control.
   *
   * Extends sap.m.StepButton and adds extra features
   *
   * @namespace ui5Extra.StepButton
   */
  export default class StepButton extends Button {
    constructor(id?: string | $StepButtonSettings);
    constructor(id?: string, settings?: $StepButtonSettings);

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

    private getText(): string;
    private setText(text: string): this;

    private getType(): string;
    private setType(type: ButtonType): this;

    private getIcon(): string;
    private setIcon(icon: string): this;

    private getTooltip(): string;
    private setTooltip(tooltip: string): this;

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

  interface $StepButtonSettings extends $ButtonSettingsSap {
    color?: CSSColor | PropertyBindingInfo | `{${string}}`;
    backgroundColor?: CSSColor | PropertyBindingInfo | `{${string}}`;
    fontSize?: CSSSize | PropertyBindingInfo | `{${string}}`;
    fontWeight?: string | PropertyBindingInfo;
    fontStyle?: string | PropertyBindingInfo;
    cursor?: string | PropertyBindingInfo;
    press?: (event: Event) => void;
  }
}
