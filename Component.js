"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/json/JSONModel"],function(t,s,e){const i=s["support"];const n=t.extend("dev.carlosorozco.ui5Extra.samples.Component",{metadata:{manifest:"json"},init:function i(){t.prototype.init.call(this);this.setModel(new e(s),"Device");this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!i.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return n});
//# sourceMappingURL=Component.js.map