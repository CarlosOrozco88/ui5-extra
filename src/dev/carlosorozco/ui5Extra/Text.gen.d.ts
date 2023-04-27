import { CSSColor } from "sap/ui/core/library";
import { CSSSize } from "sap/ui/core/library";
import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $TextSettings } from "sap/m/Text";

declare module "./Text" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $TextSettings_1 extends $TextSettings {
        color?: CSSColor | PropertyBindingInfo | `{${string}}`;
        backgroundColor?: CSSColor | PropertyBindingInfo | `{${string}}`;
        fontSize?: CSSSize | PropertyBindingInfo | `{${string}}`;
        fontWeight?: string | PropertyBindingInfo;
        fontStyle?: string | PropertyBindingInfo;
        cursor?: string | PropertyBindingInfo;
        press?: (event: Event) => void;
    }

    export default interface Text {

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
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: Event, data: CustomDataType) => void, listener?: object): this;
        detachPress(fn: (event: Event) => void, listener?: object): this;
        firePress(parameters?: object): this;
    }
}
