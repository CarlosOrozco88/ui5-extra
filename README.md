# dev.carlosorozco.ui5Extra

UI5 lib with extra controls

> ❌ ¡Attention! I'm doing this library for fun and it's in development mode

## Samples

- [Samples Link](https://carlosorozco88.github.io/ui5-extra/)

# Controls

## ODataFetch

[API Reference](https://carlosorozco88.github.io/ui5-extra/api/odatafetch/) - [Samples](https://carlosorozco88.github.io/ui5-extra/#/ODataFetch)

- ODataModel for ts/js use. Uses promises so you can use async/await syntax. Also it is possible to auto-abort duplicate fetchs with `abortId`. For ts developers, it uses generics so you can customize the typings without using "as Type".
- Extends `sap/ui/model/odata/v2/ODataModel`

## StepButton

[API Reference](https://carlosorozco88.github.io/ui5-extra/api/stepbutton/) - [Samples](https://carlosorozco88.github.io/ui5-extra/#/StepButton)

- Button with two steps. The intention of this button is to reduce the use of confirmation popups.

## Toast

[API Reference](https://carlosorozco88.github.io/ui5-extra/api/toast/) - [Samples](https://carlosorozco88.github.io/ui5-extra/#/Toast)

- Toast launcher with: states, title, duration, loadBar, autoClose, apilable

## Text

[API Reference](https://carlosorozco88.github.io/ui5-extra/api/text/) - [Samples](https://carlosorozco88.github.io/ui5-extra/#/Text)

- Text control with: color, backgroundColor, fontSize, fontWeight, fontStyle, textDecoration, cursor, press event...
- The absolute anti-fiori text control 😂
- Extends `sap/m/Text`. The renderer has been copy/pasted from openui5 and it has been modified in order to add the new properties

# Links

- Carlos Orozco - [Website](https://carlosorozco.dev)
