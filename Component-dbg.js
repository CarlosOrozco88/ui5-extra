"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/model/json/JSONModel"], function (UIComponent, Device, JSONModel) {
  const support = Device["support"];
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples
   */
  const Component = UIComponent.extend("dev.carlosorozco.ui5Extra.samples.Component", {
    metadata: {
      manifest: 'json'
    },
    init: function _init() {
      UIComponent.prototype.init.call(this);
      this.setModel(new JSONModel(Device), 'Device');
      this.getRouter().initialize();
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains('sapUiSizeCozy') || document.body.classList.contains('sapUiSizeCompact')) {
          this.contentDensityClass = '';
        } else if (!support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = 'sapUiSizeCompact';
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = 'sapUiSizeCozy';
        }
      }
      return this.contentDensityClass;
    }
  });
  return Component;
});