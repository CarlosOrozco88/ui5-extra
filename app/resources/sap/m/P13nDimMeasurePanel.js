/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./P13nPanel","./P13nDimMeasureItem","./SearchField","./Table","./Column","./ColumnListItem","./ScrollContainer","./Text","./Select","./ComboBox","./Button","./OverflowToolbar","./OverflowToolbarLayoutData","./OverflowToolbarButton","./ToolbarSpacer","sap/ui/core/library","sap/ui/model/ChangeReason","sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/core/ResizeHandler","sap/ui/core/Item","sap/ui/core/InvisibleText","sap/ui/core/IconPool","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,n,r,i,o,s,a,l,d,h,u,p,g,m,c,y,I,_,f,M,T,b,v,jQuery,C){"use strict";var x=e.OverflowToolbarPriority;var S=e.ButtonType;var O=e.ToolbarDesign;var P=e.ListType;var w=e.ListMode;var L=e.P13nPanelType;var A=t.extend("sap.m.P13nDimMeasurePanel",{metadata:{library:"sap.m",properties:{chartTypeKey:{type:"string",defaultValue:""}},aggregations:{dimMeasureItems:{type:"sap.m.P13nDimMeasureItem",multiple:true,singularName:"dimMeasureItem",bindable:"bindable"},content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",visibility:"hidden"},availableChartTypes:{type:"sap.ui.core.Item",multiple:true,singularName:"availableChartType"}},events:{changeDimMeasureItems:{},changeChartType:{}}},renderer:{apiVersion:2,render:function(e,t){e.openStart("div",t);e.class("sapMP13nColumnsPanel");e.openEnd();t.getAggregation("content").forEach(function(t){e.renderControl(t)});e.close("div")}}});A.prototype.init=function(){var e=this;this._iLiveChangeTimer=0;this._iSearchTimer=0;this._bIgnoreUpdateInternalModel=false;this._bUpdateInternalModel=true;this._bOnAfterRenderingFirstTimeExecuted=false;var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");this.oAvailableRoleTypes={Dimension:[{key:"category",text:t.getText("COLUMNSPANEL_CHARTROLE_CATEGORY")},{key:"category2",text:t.getText("COLUMNSPANEL_CHARTROLE_CATEGORY2")},{key:"series",text:t.getText("COLUMNSPANEL_CHARTROLE_SERIES")}],Measure:[{key:"axis1",text:t.getText("COLUMNSPANEL_CHARTROLE_AXIS1")},{key:"axis2",text:t.getText("COLUMNSPANEL_CHARTROLE_AXIS2")},{key:"axis3",text:t.getText("COLUMNSPANEL_CHARTROLE_AXIS3")},{key:"axis4",text:t.getText("COLUMNSPANEL_CHARTROLE_AXIS4")}]};var n=new _({availableChartTypes:[],selectedChartTypeKey:null,items:[],columnKeyOfMarkedItem:undefined,isMoveDownButtonEnabled:undefined,isMoveUpButtonEnabled:undefined,showOnlySelectedItems:undefined,countOfSelectedItems:0,countOfItems:0});n.setDefaultBindingMode(f.TwoWay);n.setSizeLimit(1e3);this.setModel(n,"$sapmP13nDimMeasurePanel");this.setType(L.dimeasure);this.setTitle(t.getText("CHARTPANEL_TITLE"));this._createTable();this._createToolbar();this.setVerticalScrolling(false);var r=new a({horizontal:false,vertical:true,content:[this._oTable],width:"100%",height:"100%"});this.addAggregation("content",r);this._fnHandleResize=function(){var t=false,n,i;if(e.getParent){var o=null,s,a;var l=e.getParent();var d=e._getToolbar();if(l&&l.$){o=l.$("cont");if(o.children().length>0&&d.$().length>0){n=r.$()[0].clientHeight;s=o.children()[0].clientHeight;a=d?d.$()[0].clientHeight:0;i=s-a;if(n!==i){r.setHeight(i+"px");t=true}}}}return t};this._sContainerResizeListener=M.register(r,this._fnHandleResize)};A.prototype.onBeforeRendering=function(){this._updateInternalModel();if(!this._getInternalModel().getProperty("/columnKeyOfMarkedItem")){this._setColumnKeyOfMarkedItem(this._getColumnKeyByTableItem(this._getVisibleTableItems()[0]))}this._switchMarkedTableItemTo(this._getTableItemByColumnKey(this._getInternalModel().getProperty("/columnKeyOfMarkedItem")));this._updateControlLogic()};A.prototype.onAfterRendering=function(){var e=this;if(!this._bOnAfterRenderingFirstTimeExecuted){this._bOnAfterRenderingFirstTimeExecuted=true;window.clearTimeout(this._iLiveChangeTimer);this._iLiveChangeTimer=window.setTimeout(function(){e._fnHandleResize();e._getToolbar()._resetAndInvalidateToolbar()},0)}};A.prototype.getOkPayload=function(){this._updateInternalModel();this._getInternalModel().getProperty("/items").forEach(function(e){if(this._getDimMeasureItemByColumnKey(e.columnKey)){return}if(!e.persistentSelected){return}this.addAggregation("dimMeasureItems",new n({columnKey:e.columnKey,visible:e.persistentSelected,index:e.persistentIndex===-1?undefined:e.persistentIndex,role:e.role}))},this);return{dimMeasureItems:this.getDimMeasureItems(),chartTypeKey:this.getChartTypeKey()}};A.prototype.exit=function(){M.deregister(this._sContainerResizeListener);this._sContainerResizeListener=null;this._getToolbar().destroy();this._oTable.destroy();this._oTable=null;if(this._getInternalModel()){this._getInternalModel().destroy()}if(this.oInvisibleChartTypeText){this.oInvisibleChartTypeText.destroy();this.oInvisibleChartTypeText=null}window.clearTimeout(this._iLiveChangeTimer);window.clearTimeout(this._iSearchTimer)};A.prototype.addItem=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.addAggregation("items",e);return this};A.prototype.insertItem=function(e,t){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.insertAggregation("items",e,t);return this};A.prototype.removeItem=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}e=this.removeAggregation("items",e);return e};A.prototype.removeAllItems=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}return this.removeAllAggregation("items")};A.prototype.destroyItems=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.destroyAggregation("items");return this};A.prototype.addDimMeasureItem=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.addAggregation("dimMeasureItems",e);return this};A.prototype.insertDimMeasureItem=function(e,t){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.insertAggregation("dimMeasureItems",e,t);return this};A.prototype.updateDimMeasureItems=function(e){this.updateAggregation("dimMeasureItems");if(e===I.Change&&!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}};A.prototype.removeDimMeasureItem=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}return this.removeAggregation("dimMeasureItems",e)};A.prototype.removeAllDimMeasureItems=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}return this.removeAllAggregation("dimMeasureItems")};A.prototype.destroyDimMeasureItems=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.destroyAggregation("dimMeasureItems");return this};A.prototype.setChartTypeKey=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.setProperty("chartTypeKey",e);return this};A.prototype.addAvailableChartType=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.addAggregation("availableChartTypes",e);return this};A.prototype.insertAvailableChartType=function(e,t){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.insertAggregation("availableChartTypes",e,t);return this};A.prototype.removeAvailableChartType=function(e){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}return this.removeAggregation("availableChartTypes",e)};A.prototype.removeAllAvailableChartType=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}return this.removeAllAggregation("availableChartTypes")};A.prototype.destroyAvailableChartType=function(){if(!this._bIgnoreUpdateInternalModel){this._bUpdateInternalModel=true}this.destroyAggregation("availableChartTypes");return this};A.prototype._notifyChange=function(){var e=this.getChangeNotifier();if(e){e(this)}};A.prototype._scrollToSelectedItem=function(e){if(!e){return}sap.ui.getCore().applyChanges();if(e.getDomRef()){e.focus()}};A.prototype._getInternalModel=function(){return this.getModel("$sapmP13nDimMeasurePanel")};A.prototype._createTable=function(){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m");this._oTable=new i({mode:w.MultiSelect,rememberSelections:false,itemPress:jQuery.proxy(this._onItemPressed,this),selectionChange:jQuery.proxy(this._onSelectionChange,this),columns:[new o({vAlign:y.VerticalAlign.Middle,header:new l({text:{parts:[{path:"/countOfSelectedItems"},{path:"/countOfItems"}],formatter:function(t,n){return e.getText("COLUMNSPANEL_SELECT_ALL_WITH_COUNTER",[t,n])}}})}),new o({vAlign:y.VerticalAlign.Middle,header:new l({text:e.getText("COLUMNSPANEL_COLUMN_TYPE")})}),new o({vAlign:y.VerticalAlign.Middle,header:new l({text:e.getText("COLUMNSPANEL_COLUMN_ROLE")})})],items:{path:"/items",templateShareable:false,template:new s({cells:[new l({text:"{text}"}),new l({text:{path:"",formatter:function(t){if(t.aggregationRole==="Dimension"){return e.getText("COLUMNSPANEL_TYPE_DIMENSION")}if(t.aggregationRole==="Measure"){return e.getText("COLUMNSPANEL_TYPE_MEASURE")}}}}),new d({selectedKey:"{role}",items:{path:"availableRoleTypes",factory:function(e,t){var n=t.getObject();return new T({key:n.key,text:n.text})}},change:jQuery.proxy(this._onRoleChange,this)})],visible:"{visible}",selected:"{persistentSelected}",tooltip:"{tooltip}",type:P.Active})}});this._oTable.setModel(this._getInternalModel())};A.prototype._createToolbar=function(){var e=this;var t=sap.ui.getCore().getLibraryResourceBundle("sap.m");var n=new b({text:t.getText("COLUMNSPANEL_CHARTTYPE")});this.oInvisibleChartTypeText=n;var i=new h({placeholder:n.getText(),selectedKey:{path:"/selectedChartTypeKey"},ariaLabelledBy:n,items:{path:"/availableChartTypes",templateShareable:false,template:new T({key:"{key}",text:"{text}"})},selectionChange:jQuery.proxy(this._onChartTypeChange,this),layoutData:new g({moveToOverflow:false,stayInOverflow:false})});var o=new p(this.getId()+"-toolbar",{design:O.Auto,content:[n,i,new c,new r(this.getId()+"-searchField",{liveChange:function(t){var n=t.getSource().getValue(),r=n?300:0;window.clearTimeout(e._iSearchTimer);if(r){e._iSearchTimer=window.setTimeout(function(){e._onExecuteSearch()},r)}else{e._onExecuteSearch()}},search:jQuery.proxy(this._onExecuteSearch,this),layoutData:new g({minWidth:"12.5rem",maxWidth:"23.077rem",shrinkable:true,moveToOverflow:false,stayInOverflow:false})}),new u({text:{path:"/showOnlySelectedItems",formatter:function(e){return e?t.getText("COLUMNSPANEL_SHOW_ALL"):t.getText("COLUMNSPANEL_SHOW_SELECTED")}},tooltip:{path:"/showOnlySelectedItems",formatter:function(e){return e?t.getText("COLUMNSPANEL_SHOW_ALL"):t.getText("COLUMNSPANEL_SHOW_SELECTED")}},type:S.Transparent,press:jQuery.proxy(this._onSwitchButtonShowSelected,this),layoutData:new g({moveToOverflow:true,priority:x.High})}),new m({icon:v.getIconURI("collapse-group"),text:t.getText("COLUMNSPANEL_MOVE_TO_TOP"),tooltip:t.getText("COLUMNSPANEL_MOVE_TO_TOP"),type:S.Transparent,enabled:{path:"/isMoveUpButtonEnabled"},press:jQuery.proxy(this.onPressButtonMoveToTop,this),layoutData:new g({moveToOverflow:true,priority:x.Low,group:2})}),new m({icon:v.getIconURI("navigation-up-arrow"),text:t.getText("COLUMNSPANEL_MOVE_UP"),tooltip:t.getText("COLUMNSPANEL_MOVE_UP"),type:S.Transparent,enabled:{path:"/isMoveUpButtonEnabled"},press:jQuery.proxy(this.onPressButtonMoveUp,this),layoutData:new g({moveToOverflow:true,priority:x.High,group:1})}),new m({icon:v.getIconURI("navigation-down-arrow"),text:t.getText("COLUMNSPANEL_MOVE_DOWN"),tooltip:t.getText("COLUMNSPANEL_MOVE_DOWN"),type:S.Transparent,enabled:{path:"/isMoveDownButtonEnabled"},press:jQuery.proxy(this.onPressButtonMoveDown,this),layoutData:new g({moveToOverflow:true,priority:x.High,group:1})}),new m({icon:v.getIconURI("expand-group"),text:t.getText("COLUMNSPANEL_MOVE_TO_BOTTOM"),tooltip:t.getText("COLUMNSPANEL_MOVE_TO_BOTTOM"),type:S.Transparent,enabled:{path:"/isMoveDownButtonEnabled"},press:jQuery.proxy(this.onPressButtonMoveToBottom,this),layoutData:new g({moveToOverflow:true,priority:x.Low,group:2})})]});o.setModel(this._getInternalModel());this.addAggregation("content",o)};A.prototype.onPressButtonMoveToTop=function(){this._moveMarkedTableItem(this._getMarkedTableItem(),this._getVisibleTableItems()[0])};A.prototype.onPressButtonMoveUp=function(){var e=this._getVisibleTableItems();this._moveMarkedTableItem(this._getMarkedTableItem(),e[e.indexOf(this._getMarkedTableItem())-1])};A.prototype.onPressButtonMoveDown=function(){var e=this._getVisibleTableItems();this._moveMarkedTableItem(this._getMarkedTableItem(),e[e.indexOf(this._getMarkedTableItem())+1])};A.prototype.onPressButtonMoveToBottom=function(){var e=this._getVisibleTableItems();this._moveMarkedTableItem(this._getMarkedTableItem(),e[e.length-1])};A.prototype._onSwitchButtonShowSelected=function(){this._getInternalModel().setProperty("/showOnlySelectedItems",!this._getInternalModel().getProperty("/showOnlySelectedItems"));this._switchVisibilityOfUnselectedModelItems();this._filterModelItemsBySearchText();this._scrollToSelectedItem(this._getMarkedTableItem());this._updateControlLogic();this._fnHandleResize()};A.prototype._onExecuteSearch=function(){this._switchVisibilityOfUnselectedModelItems();this._filterModelItemsBySearchText();this._updateControlLogic()};A.prototype._switchVisibilityOfUnselectedModelItems=function(){var e=this._isFilteredByShowSelected();var t=this._getInternalModel().getProperty("/items");t.forEach(function(t){if(t.persistentSelected){t.visible=true;return}t.visible=!e});this._getInternalModel().setProperty("/items",t)};A.prototype._getVisibleModelItems=function(){return this._getInternalModel().getProperty("/items").filter(function(e){return!!e.visible})};A.prototype._getVisibleModelItems=function(){return this._getInternalModel().getProperty("/items").filter(function(e){return!!e.visible})};A.prototype._moveMarkedTableItem=function(e,t){var n=this._getModelItemByColumnKey(this._getColumnKeyByTableItem(e));var r=this._getModelItemByColumnKey(this._getColumnKeyByTableItem(t));var i=this._getModelItemIndexByColumnKey(n.columnKey);var o=this._getModelItemIndexByColumnKey(r.columnKey);this._moveModelItems(i,o);this._scrollToSelectedItem(this._getMarkedTableItem());this._updateControlLogic();this._fireChangeDimMeasureItems();this._notifyChange()};A.prototype._moveModelItems=function(e,t){var n=this._getInternalModel().getProperty("/items");if(e<0||t<0||e>n.length-1||t>n.length-1){return false}this._removeStyleOfMarkedTableItem();var r=n.splice(e,1);n.splice(t,0,r[0]);this._updateModelItemsPersistentIndex(n);this._updateCounts(n);this._getInternalModel().setProperty("/items",n);this._switchMarkedTableItemTo(this._getMarkedTableItem());return true};A.prototype._getModelItemByColumnKey=function(e){var t=this._getInternalModel().getProperty("/items").filter(function(t){return t.columnKey===e});return t[0]};A.prototype._updateCounts=function(e){var t=0;var n=0;e.forEach(function(e){t++;if(e.persistentSelected){n++}});this._getInternalModel().setProperty("/countOfItems",t);this._getInternalModel().setProperty("/countOfSelectedItems",n)};A.prototype._sortModelItemsByPersistentIndex=function(e){var t;var n=C.getLocale().toString();try{if(typeof window.Intl!=="undefined"){t=window.Intl.Collator(n,{numeric:true})}}catch(e){}e.forEach(function(e,t){e.localIndex=t});e.sort(function(e,r){if(e.persistentSelected===true&&(r.persistentSelected===false||r.persistentSelected===undefined)){return-1}else if((e.persistentSelected===false||e.persistentSelected===undefined)&&r.persistentSelected===true){return 1}else if(e.persistentSelected===true&&r.persistentSelected===true){if(e.persistentIndex>-1&&e.persistentIndex<r.persistentIndex){return-1}else if(r.persistentIndex>-1&&e.persistentIndex>r.persistentIndex){return 1}else{return e.localIndex-r.localIndex}}else if((e.persistentSelected===false||e.persistentSelected===undefined)&&(r.persistentSelected===false||r.persistentSelected===undefined)){return t?t.compare(e.text,r.text):e.text.localeCompare(r.text,n,{numeric:true})}});e.forEach(function(e){delete e.localIndex})};A.prototype._getColumnKeyByTableItem=function(e){var t=this._oTable.indexOfItem(e);if(t<0){return null}return this._oTable.getBinding("items").getContexts(undefined,undefined,undefined,true)[t].getObject().columnKey};A.prototype._getModelItemIndexByColumnKey=function(e){var t=-1;this._getInternalModel().getData().items.some(function(n,r){if(n.columnKey===e){t=r;return true}});return t};A.prototype._getSelectedModelItems=function(){return this._getInternalModel().getProperty("/items").filter(function(e){return e.persistentSelected})};A.prototype._getVisibleTableItems=function(){return this._oTable.getItems().filter(function(e){return e.getVisible()})};A.prototype._getTableItemByColumnKey=function(e){var t=this._oTable.getBinding("items").getContexts();var n=this._oTable.getItems().filter(function(n,r){return t[r].getObject().columnKey===e});return n[0]};A.prototype._getToolbar=function(){return sap.ui.getCore().byId(this.getId()+"-toolbar")||null};A.prototype._getSearchField=function(){return sap.ui.getCore().byId(this.getId()+"-searchField")||null};A.prototype._getSearchText=function(){var e=this._getSearchField();return e?e.getValue():""};A.prototype._isFilteredBySearchText=function(){return!!this._getSearchText().length};A.prototype._isFilteredByShowSelected=function(){return this._getInternalModel().getData().showOnlySelectedItems};A.prototype._updateControlLogic=function(){var e=this._isFilteredBySearchText();var t=this._isFilteredByShowSelected();var n=this._getVisibleTableItems();this._getInternalModel().setProperty("/isMoveUpButtonEnabled",n.indexOf(this._getMarkedTableItem())>0);this._getInternalModel().setProperty("/isMoveDownButtonEnabled",n.indexOf(this._getMarkedTableItem())>-1&&n.indexOf(this._getMarkedTableItem())<n.length-1);var r=sap.ui.getCore().byId(this._oTable.getId()+"-sa");if(r){r.setEnabled(!e&&!t)}};A.prototype._updateModelItemsPersistentIndex=function(e){var t=-1;e.forEach(function(e){e.persistentIndex=-1;if(e.persistentSelected){t++;e.persistentIndex=t}})};A.prototype._fireChangeDimMeasureItems=function(){this._bIgnoreUpdateInternalModel=true;this.fireChangeDimMeasureItems({items:this._getInternalModel().getProperty("/items").map(function(e){return{columnKey:e.columnKey,visible:e.persistentSelected,index:e.persistentIndex===-1?undefined:e.persistentIndex,role:e.role}})});this._bIgnoreUpdateInternalModel=false};A.prototype._fireChangeChartType=function(){this._bIgnoreUpdateInternalModel=true;this.fireChangeChartType({chartTypeKey:this._getInternalModel().getProperty("/selectedChartTypeKey")});this._bIgnoreUpdateInternalModel=false};A.prototype._getDimMeasureItemByColumnKey=function(e){var t=this.getDimMeasureItems().filter(function(t){return t.getColumnKey()===e});return t[0]};A.prototype._getMarkedTableItem=function(){return this._getTableItemByColumnKey(this._getInternalModel().getProperty("/columnKeyOfMarkedItem"))};A.prototype._setColumnKeyOfMarkedItem=function(e){this._getInternalModel().setProperty("/columnKeyOfMarkedItem",e)};A.prototype._onItemPressed=function(e){this._switchMarkedTableItemTo(e.getParameter("listItem"));this._updateControlLogic()};A.prototype._onChartTypeChange=function(e){this._fireChangeChartType();this._notifyChange()};A.prototype._onRoleChange=function(e){this._fireChangeDimMeasureItems();this._notifyChange()};A.prototype._onSelectionChange=function(e){if(!e.getParameter("selectAll")&&e.getParameter("listItems").length===1){this._switchMarkedTableItemTo(e.getParameter("listItem"))}this._selectTableItem()};A.prototype._selectTableItem=function(){this._updateControlLogic();var e=this._getInternalModel().getProperty("/items");this._updateModelItemsPersistentIndex(e);this._updateCounts(e);this._getInternalModel().setProperty("/items",e);this._fireChangeDimMeasureItems();this._notifyChange()};A.prototype._switchMarkedTableItemTo=function(e){this._removeStyleOfMarkedTableItem();var t=this._getColumnKeyByTableItem(e);if(t){this._setColumnKeyOfMarkedItem(t);e.addStyleClass("sapMP13nColumnsPanelItemSelected")}};A.prototype._removeStyleOfMarkedTableItem=function(){if(this._getMarkedTableItem()){this._getMarkedTableItem().removeStyleClass("sapMP13nColumnsPanelItemSelected")}};A.prototype._filterModelItemsBySearchText=function(){var e=this._getSearchText();e=e.replace(/(^\s+)|(\s+$)/g,"");e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var t=new RegExp(e,"igm");if(!t){return}this._getVisibleModelItems().forEach(function(e){var n=this._getTableItemByColumnKey(e.columnKey);var r=n.getCells();e.visible=false;if(r[0]&&r[0].getText().match(t)){e.visible=true}if(r[1]&&r[1].getText().match(t)){e.visible=true}if(r[2]&&r[2].getSelectedItem()&&r[2].getSelectedItem().getText().match(t)){e.visible=true}if(e.tooltip&&e.tooltip.match(t)){e.visible=true}},this);this._getInternalModel().refresh()};A.prototype._updateInternalModel=function(){if(!this._bUpdateInternalModel){return}this._bUpdateInternalModel=false;this._removeStyleOfMarkedTableItem();this._getInternalModel().setProperty("/items",this.getItems().map(function(e){return{columnKey:e.getColumnKey(),visible:true,text:e.getText(),tooltip:e.getTooltip(),aggregationRole:e.getAggregationRole(),availableRoleTypes:this.oAvailableRoleTypes[e.getAggregationRole()],role:e.getRole(),persistentIndex:-1,persistentSelected:undefined}},this));this._getInternalModel().setProperty("/selectedChartTypeKey",this.getChartTypeKey());this._getInternalModel().setProperty("/availableChartTypes",this.getAvailableChartTypes().map(function(e){return{key:e.getKey(),text:e.getText()}},this));this.getDimMeasureItems().forEach(function(e){var t=this._getModelItemByColumnKey(e.getColumnKey());if(!t){return}if(e.getIndex()!==undefined){t.persistentIndex=e.getIndex()}if(e.getVisible()!==undefined){t.persistentSelected=e.getVisible()}if(e.getRole()!==undefined){t.role=e.getRole()}},this);this._switchVisibilityOfUnselectedModelItems();this._filterModelItemsBySearchText();var e=this._getInternalModel().getProperty("/items");this._sortModelItemsByPersistentIndex(e);this._updateCounts(e);this._getInternalModel().setProperty("/items",e);this._switchMarkedTableItemTo(this._getMarkedTableItem())};return A});
//# sourceMappingURL=P13nDimMeasurePanel.js.map