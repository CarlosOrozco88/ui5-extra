"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","./BaseController"],function(e,t){function s(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=s(t);const r=o.extend("dev.carlosorozco.ui5Extra.samples.controller.App",{constructor:function t(){o.prototype.constructor.apply(this,arguments);this.appModel=new e({master_visible:false,pressed_master:false})},onInit:function e(){const t=this.getView();if(t){t.addStyleClass(this.getOwnerComponent().getContentDensityClass())}this.appModel.setProperty("/master_visible",this.getSplitContainer().isMasterShown());const s=this.getOwnerComponent();s.getRouter().attachRouteMatched(()=>{this.getSplitContainer().hideMaster()});this.getView()?.setModel(this.appModel,"app")},getSplitContainer:function e(){return this.getView()?.byId("app")},toggleMaster:function e(){const t=this.getSplitContainer();if(t.isMasterShown()){t.hideMaster()}else{t.showMaster();this.appModel.setProperty("/pressed_master",true)}},afterMasterOpen:function e(){this.appModel.setProperty("/master_visible",true)},afterMasterClose:function e(){this.appModel.setProperty("/master_visible",false);this.appModel.setProperty("/pressed_master",false)}});return r});
//# sourceMappingURL=App.controller.js.map