import { URI } from "sap/ui/core/library";
import { ButtonType } from "sap/m/library";
import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ButtonSettings } from "sap/m/Button";

declare module "./TwoStepButton" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $TwoStepButtonSettings extends $ButtonSettings {
        initialText?: string | PropertyBindingInfo;
        initialTooltip?: string | PropertyBindingInfo;
        initialIcon?: URI | PropertyBindingInfo | `{${string}}`;
        initialType?: ButtonType | PropertyBindingInfo | `{${string}}`;
        finalText?: string | PropertyBindingInfo;
        finalTooltip?: string | PropertyBindingInfo;
        finalIcon?: URI | PropertyBindingInfo | `{${string}}`;
        finalType?: ButtonType | PropertyBindingInfo | `{${string}}`;
        enabledStep?: boolean | PropertyBindingInfo | `{${string}}`;
        stepDuration?: number | PropertyBindingInfo | `{${string}}`;
        showLoadBar?: boolean | PropertyBindingInfo | `{${string}}`;
        initialPress?: (event: Event) => void;
        finalPress?: (event: Event) => void;
    }

    export default interface TwoStepButton {

        // property: initialText
        getInitialText(): string;
        setInitialText(initialText: string): this;

        // property: initialTooltip
        getInitialTooltip(): string;
        setInitialTooltip(initialTooltip: string): this;

        // property: initialIcon
        getInitialIcon(): URI;
        setInitialIcon(initialIcon: URI): this;

        // property: initialType
        getInitialType(): ButtonType;
        setInitialType(initialType: ButtonType): this;

        // property: finalText
        getFinalText(): string;
        setFinalText(finalText: string): this;

        // property: finalTooltip
        getFinalTooltip(): string;
        setFinalTooltip(finalTooltip: string): this;

        // property: finalIcon
        getFinalIcon(): URI;
        setFinalIcon(finalIcon: URI): this;

        // property: finalType
        getFinalType(): ButtonType;
        setFinalType(finalType: ButtonType): this;

        // property: enabledStep
        getEnabledStep(): boolean;
        setEnabledStep(enabledStep: boolean): this;

        // property: stepDuration
        getStepDuration(): number;
        setStepDuration(stepDuration: number): this;

        // property: showLoadBar
        getShowLoadBar(): boolean;
        setShowLoadBar(showLoadBar: boolean): this;

        // event: initialPress
        attachInitialPress(fn: (event: Event) => void, listener?: object): this;
        attachInitialPress<CustomDataType extends object>(data: CustomDataType, fn: (event: Event, data: CustomDataType) => void, listener?: object): this;
        detachInitialPress(fn: (event: Event) => void, listener?: object): this;
        fireInitialPress(parameters?: object): this;

        // event: finalPress
        attachFinalPress(fn: (event: Event) => void, listener?: object): this;
        attachFinalPress<CustomDataType extends object>(data: CustomDataType, fn: (event: Event, data: CustomDataType) => void, listener?: object): this;
        detachFinalPress(fn: (event: Event) => void, listener?: object): this;
        fireFinalPress(parameters?: object): this;
    }
}
