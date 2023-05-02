sap.ui.define(["sap/ui/core/IconPool"], function (IconPool) {
  /**
   * @public
   */

  /**
   * @namespace dev.carlosorozco.ui5Extra.util.Icon
   * @public
   */
  const Icon = {
    getIconInfo(iconName) {
      return IconPool.getIconInfo(iconName);
    }
  };
  return Icon;
});