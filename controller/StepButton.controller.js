"use strict";sap.ui.define(["ui5Extra/Toast/Toast","./BaseController"],function(e,t){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=n(e);const i=n(t);const s=i.extend("dev.carlosorozco.ui5Extra.samples.controller.StepButtonView",{pressInitial:function e(){console.log("Step 1/2")},pressRemoveFinal:function e(){o.error("Removed item",{title:"Step 2/2"})},pressActionFinal:function e(){o.information("Action",{title:"Step 2/2"})},pressConfirmFinal:function e(){o.success("Confirm",{title:"Step 2/2"})},pressNoStep:function e(){o.show("One step")}});return s});
//# sourceMappingURL=StepButton.controller.js.map