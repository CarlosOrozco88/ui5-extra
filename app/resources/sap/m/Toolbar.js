/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BarInPageEnabler","./ToolbarLayoutData","./ToolbarSpacer","./library","sap/ui/core/Control","sap/ui/core/EnabledPropagator","sap/ui/events/KeyCodes","./ToolbarRenderer","sap/m/Button","sap/ui/core/library"],function(t,e,o,i,n,r,s,a,p,u){"use strict";var c=i.ToolbarDesign,l=i.ToolbarStyle;var g=2;var h=n.extend("sap.m.Toolbar",{metadata:{interfaces:["sap.ui.core.Toolbar","sap.m.IBar"],library:"sap.m",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},active:{type:"boolean",group:"Behavior",defaultValue:false},enabled:{type:"boolean",group:"Behavior",defaultValue:true},height:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:""},design:{type:"sap.m.ToolbarDesign",group:"Appearance",defaultValue:c.Auto},style:{type:"sap.m.ToolbarStyle",group:"Appearance",defaultValue:l.Standard},ariaHasPopup:{type:"string",group:"Accessibility",defaultValue:null}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},_activeButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{parameters:{srcControl:{type:"sap.ui.core.Control"}}}},designtime:"sap/m/designtime/Toolbar.designtime"},renderer:a});r.call(h.prototype);h.shrinkClass="sapMTBShrinkItem";h.isRelativeWidth=function(t){return/^([-+]?\d+%|auto|inherit|)$/i.test(t)};h.getOrigWidth=function(t){var e=sap.ui.getCore().byId(t);if(!e||!e.getWidth){return""}return e.getWidth()};h.checkShrinkable=function(t,i){if(t instanceof o){return this.isRelativeWidth(t.getWidth())}i=i||this.shrinkClass;t.removeStyleClass(i);var n=this.getOrigWidth(t.getId());if(!this.isRelativeWidth(n)){return}var r=t.getLayoutData();if(r instanceof e){return r.getShrinkable()&&t.addStyleClass(i)}if(n.indexOf("%")>0||t.getMetadata().isInstanceOf("sap.ui.core.IShrinkable")){return t.addStyleClass(i)}var s=t.getDomRef();if(s&&(s.firstChild||{}).nodeType==3){return t.addStyleClass(i)}};h.prototype._setEnableAccessibilty=function(t){var e=t?"true":"false",o=t?"toolbar":"none";this.data("sap-ui-fastnavgroup",e,t);this._setRootAccessibilityRole(o);return this};h.prototype.enhanceAccessibilityState=function(t,e){if(t===this.getAggregation("_activeButton")){return this.assignAccessibilityState(e)}};h.prototype.getAccessibilityState=function(){var t=this.getAriaLabelledBy(),e=this.getActive();return{role:!e?this._getAccessibilityRole():undefined,haspopup:e?this.getAriaHasPopup():undefined,labelledby:t.length?this.getAriaLabelledBy():this.getTitleId(),roledescription:this._sAriaRoleDescription}};h.prototype.assignAccessibilityState=function(t){if(!this._getAccessibilityRole()&&!this.getActive()){return{}}return Object.assign(t,this.getAccessibilityState(t))};h.prototype.init=function(){this.data("sap-ui-fastnavgroup","true",true);this._oContentDelegate={onAfterRendering:this._onAfterContentRendering}};h.prototype.onAfterRendering=function(){this._checkContents()};h.prototype.onLayoutDataChange=function(){this.rerender()};h.prototype.addContent=function(t){this.addAggregation("content",t);this._onContentInserted(t);return this};h.prototype.insertContent=function(t,e){this.insertAggregation("content",t,e);this._onContentInserted(t);return this};h.prototype.removeContent=function(t){t=this.removeAggregation("content",t);this._onContentRemoved(t);return t};h.prototype.removeAllContent=function(){var t=this.removeAllAggregation("content")||[];t.forEach(this._onContentRemoved,this);return t};h.prototype.ontap=function(t){if(this.getActive()&&!t.isMarked()||t.srcControl===this._getActiveButton()){t.setMarked();this.firePress({srcControl:t.srcControl});this.focus()}};h.prototype.onsapenter=function(t){if(this.getActive()&&!t.isMarked()||t.srcControl===this._getActiveButton()){t.setMarked();this.firePress({srcControl:this})}};h.prototype.onsapspace=function(t){if(t.srcControl===this._getActiveButton()){t.preventDefault()}};h.prototype.onkeyup=function(t){if(t.which===s.SPACE){this.onsapenter(t)}};h.prototype.ontouchstart=function(t){this.getActive()&&t.setMarked()};h.prototype._checkContents=function(){this.getContent().forEach(function(t){h.checkShrinkable(t)})};h.prototype._onContentInserted=function(t){if(t){t.attachEvent("_change",this._onContentPropertyChanged,this);t.addEventDelegate(this._oContentDelegate,t)}};h.prototype._onContentRemoved=function(t){if(t){t.detachEvent("_change",this._onContentPropertyChanged,this);t.removeEventDelegate(this._oContentDelegate,t)}};h.prototype.onfocusin=function(t){if(this.getActive()){if(t.target===this.getDomRef()){this._getActiveButton().focus()}}};h.prototype.getFocusDomRef=function(){return this.getActive()?this._getActiveButton().getFocusDomRef():this.getDomRef()};h.prototype.getFocusInfo=function(){return{id:this._getActiveButton().getId()}};h.prototype.applyFocusInfo=function(t){var e=this.getFocusDomRef();if(e){this.focus()}};h.prototype._onAfterContentRendering=function(){var t=this.getLayoutData();if(t instanceof e){t.applyProperties()}};h.prototype._onContentPropertyChanged=function(t){var e=t.getParameter("name");if(e==="visible"){this.invalidate()}if(e!="width"){return}var o=t.getSource();var i=o.getWidth().indexOf("%")>0;o.toggleStyleClass(h.shrinkClass,i)};h.prototype._getAccessibilityRole=function(){var t=this._getRootAccessibilityRole(),e=t;if(this.getActive()){e="button"}else if(this._getToolbarInteractiveControlsCount()<g&&t==="toolbar"){e=""}return e};h.prototype._getToolbarInteractiveControlsCount=function(){return this.getContent().filter(function(t){return t.getVisible()&&t.isA("sap.m.IToolbarInteractiveControl")&&typeof t._getToolbarInteractive==="function"&&t._getToolbarInteractive()}).length};h.prototype._getActiveButton=function(){if(!this._activeButton){this._activeButton=new p({text:"",id:"sapMTBActiveButton"+this.getId()}).addStyleClass("sapMTBActiveButton");this._activeButton.onfocusin=function(){this.addStyleClass("sapMTBFocused");if(typeof p.prototype.onfocusin==="function"){p.prototype.onfocusin.call(this._activeButton,arguments)}}.bind(this);this._activeButton.onfocusout=function(){this.removeStyleClass("sapMTBFocused");if(typeof p.prototype.onfocusout==="function"){p.prototype.onfocusout.call(this._activeButton,arguments)}}.bind(this);this.setAggregation("_activeButton",this._activeButton)}return this._activeButton};h.prototype.getAccessibilityInfo=function(){return{children:this.getContent()}};h.prototype.setDesign=function(t,e){if(!e){return this.setProperty("design",t)}this._sAutoDesign=this.validateProperty("design",t);return this};h.prototype.getActiveDesign=function(){var t=this.getDesign();if(t!=c.Auto){return t}return this._sAutoDesign||t};h.prototype.getTitleControl=function(){var t=sap.ui.require("sap/m/Title");if(!t){return}var e=this.getContent();for(var o=0;o<e.length;o++){var i=e[o];if(i instanceof t&&i.getVisible()){return i}}};h.prototype.getTitleId=function(){var t=this.getTitleControl();return t?t.getId():""};h.prototype.isContextSensitive=t.prototype.isContextSensitive;h.prototype.setHTMLTag=t.prototype.setHTMLTag;h.prototype.getHTMLTag=t.prototype.getHTMLTag;h.prototype.applyTagAndContextClassFor=t.prototype.applyTagAndContextClassFor;h.prototype._applyContextClassFor=t.prototype._applyContextClassFor;h.prototype._applyTag=t.prototype._applyTag;h.prototype._getContextOptions=t.prototype._getContextOptions;h.prototype._setRootAccessibilityRole=t.prototype._setRootAccessibilityRole;h.prototype._getRootAccessibilityRole=t.prototype._getRootAccessibilityRole;h.prototype._setRootAriaLevel=t.prototype._setRootAriaLevel;h.prototype._getRootAriaLevel=t.prototype._getRootAriaLevel;return h});
//# sourceMappingURL=Toolbar.js.map