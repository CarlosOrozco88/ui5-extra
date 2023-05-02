/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,jQuery,s){"use strict";var n=e.GenericTileScope;var r=e.LoadState;var a={apiVersion:2};a.render=function(e,a){var o=a._getTooltipText(),i=a._isScreenLarge(),p=a._getAriaText(),c=a.getScope(),l,d=false,S=a.hasListeners("press"),f=a.getState(),g=a.getAriaRoleDescription(),h=a.getAriaRole();var T=a.getUrl()&&!a._isInActionScope()&&f!==r.Disabled;this._bRTL=s.getRTL();if(c===n.Actions){if(f!==r.Disabled){l=t("sapMGTScopeActions")}}else if(c===n.ActionMore||c===n.ActionRemove){d=true;if(f!==r.Disabled){l=t("sapMGTScopeSingleAction")}}else{l=t("sapMGTScopeDisplay")}if(T){e.openStart("a",a);e.attr("href",a.getUrl());e.attr("rel","noopener noreferrer")}else{e.openStart("span",a)}e.attr("aria-label",p);if(g){e.attr("aria-roledescription",g)}if(h){e.attr("role",h)}else if(!T){e.attr("role",S?"button":"presentation")}else{e.attr("role","link")}e.class("sapMGT");e.class(l);if(c===n.ActionMore){e.style("padding-right","3.3rem")}if(f!==r.Disabled&&c===n.ActionRemove){e.class("sapMGTAcionRemove")}e.class("sapMGTLineMode");if(a.getSystemInfo()||a.getAppShortcut()){e.class("sapMGTInfoRendered");if(!i){e.class("sapMGTLineModeSmall")}}this._writeDirection(e);if(o){e.attr("title",o)}if(f!==r.Disabled){if(!a.isInActionRemoveScope()){e.class("sapMPointer");e.style("pointer-events","auto")}e.attr("tabindex","0")}else{e.class("sapMGTDisabled")}if(f===r.Failed){e.class("sapMGTFailed")}e.openEnd();if(o){a.getAggregation("_invisibleText").setText(o);e.renderControl(a.getAggregation("_invisibleText"))}if(a.getState()!==r.Disabled){this._renderFocusDiv(e,a)}if(i){e.openStart("div",a.getId()+"-startMarker");e.class("sapMGTStartMarker");e.openEnd();e.close("div");this._renderFailedIcon(e,a);e.openStart("span",a.getId()+"-lineWrapper");e.class("sapMGTLineWrapper");e.openEnd();e.openStart("span",a.getId()+"-headerWrapper");e.class("sapMGTHeaderWrapper");e.openEnd();this._renderHeader(e,a);if(a.getSubheader()){this._renderSubheader(e,a)}e.close("span");if(a.getSystemInfo()||a.getAppShortcut()){this._renderInfoContainer(e,a)}e.close("span");e.openStart("div",a.getId()+"-endMarker");e.class("sapMGTEndMarker");e.openEnd();if(a._isInActionScope()){this._renderActionsScope(e,a,d)}e.close("div");e.openStart("div",a.getId()+"-styleHelper");e.class("sapMGTStyleHelper");e.openEnd();e.close("div")}else if(a.getSystemInfo()||a.getAppShortcut()){e.openStart("div",a.getId()+"-touchArea");e.class("sapMGTTouchArea");e.openEnd();this._renderFailedIcon(e,a);e.openStart("span",a.getId()+"-lineModeHelpContainer");e.class("sapMGTLineModeHelpContainer");e.openEnd();e.openStart("span",a.getId()+"-headerWrapper");e.class("sapMGTHeaderWrapper");e.openEnd();this._renderHeader(e,a);if(a.getSubheader()){this._renderSubheader(e,a)}e.close("span");if(a.getSystemInfo()||a.getAppShortcut()){this._renderInfoContainer(e,a)}e.close("span");if(a._isInActionScope()){this._renderActionsScope(e,a,d)}e.close("div")}else{e.openStart("div",a.getId()+"-touchArea");e.class("sapMGTTouchArea");e.openEnd();this._renderFailedIcon(e,a);e.openStart("span",a.getId()+"-lineModeHelpContainer");e.class("sapMGTLineModeHelpContainer");e.openEnd();this._renderHeader(e,a);if(a.getSubheader()){this._renderSubheader(e,a)}e.close("span");if(a._isInActionScope()){this._renderActionsScope(e,a,d)}e.close("div")}if(a._isInActionScope()&&a.getState()!==r.Disabled){e.renderControl(a._oRemoveButton)}if(T){e.close("a")}else{e.close("span")}};a._renderInfoContainer=function(e,t){e.openStart("span",t.getId()+"-sapMGTTInfoWrapper");e.class("sapMGTTInfoWrapper").openEnd();e.openStart("span",t.getId()+"-sapMGTTInfo");e.class("sapMGTTInfo");if(!(t.getSystemInfo()&&t.getAppShortcut())){e.class("sapMGTInfoNotContainsSeperator")}e.openEnd();if(t.getAppShortcut()){e.openStart("span",t.getId()+"-appShortcut");e.class("sapMGTAppShortcutText").openEnd();e.renderControl(t._oAppShortcut);e.close("span")}if(t.getSystemInfo()){this._renderSystemInfo(e,t)}e.close("span");e.close("span")};a._writeDirection=function(e){if(this._bRTL){e.attr("dir","rtl")}};a._renderSystemInfo=function(e,t){e.openStart("span",t.getId()+"-systemInfoText");this._writeDirection(e);e.class("sapMGTSystemInfoText");if(t.getSystemInfo()&&t.getAppShortcut()){e.class("sapMGTSeperatorPresent")}e.openEnd();e.text(t._oSystemInfo.getText());e.close("span")};a._renderFailedIcon=function(e,t){if(t.getState()===r.Failed){if(t._isCompact()){t._oErrorIcon.setSize("1.25rem")}else{t._oErrorIcon.setSize("1.375rem")}e.renderControl(t._oErrorIcon.addStyleClass("sapMGTLineModeFailedIcon"))}};a._renderHeader=function(e,t){e.openStart("span",t.getId()+"-hdr-text");this._writeDirection(e);e.class("sapMGTHdrTxt");e.openEnd();e.text(t._oTitle.getText());e.close("span")};a._renderSubheader=function(e,t){e.openStart("span",t.getId()+"-subHdr-text");this._writeDirection(e);e.class("sapMGTSubHdrTxt");e.openEnd();e.text(t._oSubTitle.getText());e.close("span")};a._renderActionsScope=function(e,t,s){if(t.getState()!==r.Disabled){e.openStart("span",t.getId()+"-actions");e.class("sapMGTActionsContainer");if(s){e.class("sapMGTScopeSingleActionContainer")}e.openEnd();e.renderControl(t._oMoreIcon);e.close("span")}};a._updateHoverStyle=function(){var e=this.$("styleHelper");e.empty();if(!this._oStyleData||this.$().is(":hidden")){return}if(this._oStyleData.rtl){e.css("right",-this._oStyleData.positionRight)}else{e.css("left",-this._oStyleData.positionLeft)}this._oStyleData.lines.forEach(function(t){var s=jQuery("<div class='sapMGTLineStyleHelper'><div class='sapMGTLineStyleHelperInner'></div></div>");if(this._oStyleData.rtl){s.css("right",t.offset.x+"px")}else{s.css("left",t.offset.x+"px")}s.css({top:t.offset.y+"px",width:t.width+"px"});e.append(s)},this)};a._renderFocusDiv=function(e,t){e.openStart("div",t.getId()+"-focus");e.class("sapMGTFocusDiv");e.openEnd();e.close("div")};a._getCSSPixelValue=function(e,t){var s=e instanceof jQuery?e:e.$(),n=(s.css(t)||"").match(/([^a-zA-Z\%]*)(.*)/),r=parseFloat(n[1]),a=n[2];return a==="px"?r:r*16};return a},true);
//# sourceMappingURL=GenericTileLineModeRenderer.js.map