/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/Core"],function(e,a){"use strict";var t=e.extend("sap.f.cards.loading.TablePlaceholder",{metadata:{library:"sap.f",properties:{minItems:{type:"int",group:"Misc"},itemHeight:{type:"sap.ui.core.CSSSize"},columns:{type:"int",group:"Misc"}}},renderer:{apiVersion:2,render:function(e,t){var r=t.getMinItems(),s=t.getColumns(),o=t.getParent()._getTable().getColumns().length,i=a.getLibraryResourceBundle("sap.ui.core"),l=i.getText("BUSY_TEXT");if(!o){return}e.openStart("div",t).class("sapFCardContentPlaceholder").class("sapFCardContentTablePlaceholder").attr("tabindex","0").attr("title",l);e.accessibilityState(t,{role:"progressbar",valuemin:"0",valuemax:"100"});e.openEnd();for(var n=0;n<r+1;n++){e.openStart("div").class("sapFCardTablePlaceholderItem").style("height",t.getItemHeight()).openEnd();e.openStart("div").class("sapFCardTablePlaceholderRows").openEnd();if(s>1){for(var d=0;d<s;d++){e.openStart("div").class("sapFCardTablePlaceholderColumns").class("sapFCardLoadingShimmer").openEnd();e.close("div")}}e.close("div");e.close("div")}e.close("div")}}});return t});
//# sourceMappingURL=TablePlaceholder.js.map