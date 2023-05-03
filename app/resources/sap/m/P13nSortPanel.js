/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./P13nConditionPanel","./P13nPanel","./P13nSortItem"],function(t,e,o,i){"use strict";var n=t.P13nPanelType;var r=t.P13nConditionOperation;var a=o.extend("sap.m.P13nSortPanel",{metadata:{deprecated:true,library:"sap.m",properties:{containerQuery:{type:"boolean",group:"Misc",defaultValue:false},layoutMode:{type:"string",group:"Misc",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",visibility:"hidden"},sortItems:{type:"sap.m.P13nSortItem",multiple:true,singularName:"sortItem",bindable:"bindable"}},events:{addSortItem:{},removeSortItem:{},updateSortItem:{}}},renderer:{apiVersion:2,render:function(t,e){t.openStart("section",e);t.class("sapMSortPanel");t.openEnd();t.openStart("div");t.class("sapMSortPanelContent");t.class("sapMSortPanelBG");t.openEnd();e.getAggregation("content").forEach(function(e){t.renderControl(e)});t.close("div");t.close("section")}}});a.prototype._getConditions=function(){return this._oSortPanel.getConditions()};a.prototype.setContainerQuery=function(t){this.setProperty("containerQuery",t);this._oSortPanel.setContainerQuery(t);return this};a.prototype.setLayoutMode=function(t){this.setProperty("layoutMode",t);this._oSortPanel.setLayoutMode(t);return this};a.prototype.validateConditions=function(){return this._oSortPanel.validateConditions()};a.prototype.removeInvalidConditions=function(){this._oSortPanel.removeInvalidConditions()};a.prototype.removeValidationErrors=function(){this._oSortPanel.removeValidationErrors()};a.prototype.onBeforeNavigationFrom=function(){return this.validateConditions()};a.prototype.onAfterNavigationFrom=function(){return this.removeInvalidConditions()};a.prototype.setOperations=function(t){this._aOperations=t;if(this._oSortPanel){this._oSortPanel.setOperations(this._aOperations)}return this};a.prototype.init=function(){this.setType(n.sort);this.setTitle(sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("SORTPANEL_TITLE"));this._aKeyFields=[];if(!this._aOperations){this.setOperations([r.Ascending,r.Descending])}this._oSortPanel=new e({autoReduceKeyFieldItems:true,layoutMode:this.getLayoutMode(),dataChange:this._handleDataChange()});this._oSortPanel.setOperations(this._aOperations);this._oSortPanel._sAddRemoveIconTooltipKey="SORT";this.addAggregation("content",this._oSortPanel)};a.prototype.exit=function(){var t=function(t){if(t&&t.destroy){t.destroy()}return null};this._aKeyFields=t(this._aKeyFields);this._aOperations=t(this._aOperations)};a.prototype.onBeforeRendering=function(){if(this._bUpdateRequired){this._bUpdateRequired=false;var t=[];var e=(this.getBindingInfo("items")||{}).model;this.getItems().forEach(function(o){var i=o.getBindingContext(e);if(o.getBinding("key")){i.getObject()[o.getBinding("key").getPath()]=o.getKey()}t.push({key:o.getColumnKey(),text:o.getText(),tooltip:o.getTooltip()})});t.splice(0,0,{key:null,text:sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("P13NDIALOG_SELECTION_NONE")});this._oSortPanel.setKeyFields(t);var o=[];e=(this.getBindingInfo("sortItems")||{}).model;this.getSortItems().forEach(function(t){var i=t.getBindingContext(e);if(t.getBinding("key")){i.getObject()[t.getBinding("key").getPath()]=t.getKey()}o.push({key:t.getKey(),keyField:t.getColumnKey(),operation:t.getOperation()})});this._oSortPanel.setConditions(o)}};a.prototype.addItem=function(t){o.prototype.addItem.apply(this,arguments);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return this};a.prototype.removeItem=function(t){var e=o.prototype.removeItem.apply(this,arguments);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return e};a.prototype.destroyItems=function(){this.destroyAggregation("items");if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return this};a.prototype.addSortItem=function(t){this.addAggregation("sortItems",t,true);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return this};a.prototype.insertSortItem=function(t,e){this.insertAggregation("sortItems",t,e,true);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return this};a.prototype.updateSortItems=function(t){this.updateAggregation("sortItems");if(t==="change"&&!this._bIgnoreBindCalls){this._bUpdateRequired=true;this.invalidate()}};a.prototype.removeSortItem=function(t){t=this.removeAggregation("sortItems",t,true);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return t};a.prototype.removeAllSortItems=function(){var t=this.removeAllAggregation("sortItems",true);if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return t};a.prototype.destroySortItems=function(){this.destroyAggregation("sortItems");if(!this._bIgnoreBindCalls){this._bUpdateRequired=true}return this};a.prototype._handleDataChange=function(){var t=this;return function(e){var o=e.getParameter("newData");var n=e.getParameter("operation");var r=e.getParameter("key");var a=e.getParameter("index");var s;if(n==="update"){s=t.getSortItems()[a];if(s){s.setColumnKey(o.keyField);s.setOperation(o.operation)}t.fireUpdateSortItem({key:r,index:a,sortItemData:s});t._notifyChange()}if(n==="add"){s=new i({key:r,columnKey:o.keyField,operation:o.operation});t._bIgnoreBindCalls=true;t.fireAddSortItem({key:r,index:a,sortItemData:s});t._bIgnoreBindCalls=false;t._notifyChange()}if(n==="remove"){t._bIgnoreBindCalls=true;t.fireRemoveSortItem({key:r,index:a});t._bIgnoreBindCalls=false;t._notifyChange()}}};a.prototype._notifyChange=function(){var t=this.getChangeNotifier();if(t){t(this)}};return a});
//# sourceMappingURL=P13nSortPanel.js.map