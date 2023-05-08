"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "./BaseController"], function (JSONModel, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace dev.carlosorozco.ui5Extra.samples.controller
   */
  const App = BaseController.extend("dev.carlosorozco.ui5Extra.samples.controller.App", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.appModel = new JSONModel({
        master_visible: false,
        pressed_master: false
      });
    },
    onInit: function _onInit() {
      const view = this.getView();
      if (view) {
        view.addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
      this.appModel.setProperty('/master_visible', this.getSplitContainer().isMasterShown());
      const component = this.getOwnerComponent();
      component.getRouter().attachRouteMatched(() => {
        this.getSplitContainer().hideMaster();
      });
      this.getView()?.setModel(this.appModel, 'app');
    },
    getSplitContainer: function _getSplitContainer() {
      return this.getView()?.byId('app');
    },
    toggleMaster: function _toggleMaster() {
      const app = this.getSplitContainer();
      if (app.isMasterShown()) {
        app.hideMaster();
      } else {
        app.showMaster();
        this.appModel.setProperty('/pressed_master', true);
      }
    },
    afterMasterOpen: function _afterMasterOpen() {
      this.appModel.setProperty('/master_visible', true);
    },
    afterMasterClose: function _afterMasterClose() {
      this.appModel.setProperty('/master_visible', false);
      this.appModel.setProperty('/pressed_master', false);
    }
  });
  return App;
});