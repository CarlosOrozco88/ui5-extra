import { State } from "dev/carlosorozco/ui5Extra/library";
import { URI } from "sap/ui/core/library";
import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ManagedObjectSettings } from "sap/ui/base/ManagedObject";

declare module "./Popup" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $PopupSettings extends $ManagedObjectSettings {
        title?: string | PropertyBindingInfo;
        text?: string | PropertyBindingInfo;
        maxLines?: number | PropertyBindingInfo | `{${string}}`;
        duration?: number | PropertyBindingInfo | `{${string}}`;
        state?: State | PropertyBindingInfo | `{${string}}`;
        showLoader?: boolean | PropertyBindingInfo | `{${string}}`;
        showClose?: boolean | PropertyBindingInfo | `{${string}}`;
        icon?: URI | PropertyBindingInfo | `{${string}}`;
        iconClose?: URI | PropertyBindingInfo | `{${string}}`;
        onClose?: (event: Event) => void;
    }

    export default interface Popup {

        // property: title
        getTitle(): string;
        setTitle(title: string): this;

        // property: text
        getText(): string;
        setText(text: string): this;

        // property: maxLines
        getMaxLines(): number;
        setMaxLines(maxLines: number): this;

        // property: duration
        getDuration(): number;
        setDuration(duration: number): this;

        // property: state
        getState(): State;
        setState(state: State): this;

        // property: showLoader
        getShowLoader(): boolean;
        setShowLoader(showLoader: boolean): this;

        // property: showClose
        getShowClose(): boolean;
        setShowClose(showClose: boolean): this;

        // property: icon
        getIcon(): URI;
        setIcon(icon: URI): this;

        // property: iconClose
        getIconClose(): URI;
        setIconClose(iconClose: URI): this;

        // event: onClose
        attachOnClose(fn: (event: Event) => void, listener?: object): this;
        attachOnClose<CustomDataType extends object>(data: CustomDataType, fn: (event: Event, data: CustomDataType) => void, listener?: object): this;
        detachOnClose(fn: (event: Event) => void, listener?: object): this;
        fireOnClose(parameters?: object): this;
    }
}
