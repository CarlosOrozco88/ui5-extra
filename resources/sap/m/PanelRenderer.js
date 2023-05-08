/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/Device"],function(e,t){"use strict";var n=e.ToolbarDesign;var a={apiVersion:2};a.render=function(e,t){this.startPanel(e,t);this.renderHeader(e,t);this.renderContent(e,t);this.endPanel(e)};a.startPanel=function(e,t){var n=t.getExpandable(),a={role:t.getAccessibleRole().toLowerCase()};e.openStart("div",t);e.class("sapMPanel");if(n){e.class("sapMPanelExpandable")}e.style("width",t.getWidth());e.style("height",t.getHeight());if(t.getHeaderToolbar()||!n){a.labelledby=t._getLabellingElementId()}e.accessibilityState(t,a);e.openEnd()};a.renderHeader=function(e,t){var a=t.getExpandable(),r=t.getExpanded(),i=t.getHeaderToolbar(),s;e.openStart("div");e.class("sapMPanelHeadingDiv");if(!i){e.attr("role","heading");e.attr("aria-level","2")}e.openEnd();if(a){e.openStart("div");if(i){s="sapMPanelWrappingDivTb"}else{s="sapMPanelWrappingDiv";this.writeHeaderAccessibility(e,t)}e.class(s);if(r){e.class(s+"Expanded")}e.openEnd();if(a){e.renderControl(t._oExpandButton)}}var d=t.getHeaderText();if(i){i.setDesign(n.Transparent,true);i.addStyleClass("sapMPanelHeaderTB");e.renderControl(i)}else if(d||a){e.openStart("div",t.getId()+"-header");e.class("sapMPanelHdr");e.openEnd();e.text(d);e.close("div")}if(a){e.close("div")}e.close("div");var l=t.getInfoToolbar();if(l){l.setDesign(n.Info,true);l.addStyleClass("sapMPanelInfoTB");if(a){e.openStart("div");e.class("sapMPanelExpandablePart");e.openEnd();e.renderControl(l);e.close("div")}else{e.renderControl(l)}}};a.writeHeaderAccessibility=function(e,t){e.attr("tabindex",0);e.attr("role","button");e.attr("aria-expanded",t.getExpanded());e.attr("aria-controls",t.getId()+"-content")};a.renderContent=function(e,t){this.startContent(e,t);this.renderChildren(e,t.getContent());this.endContent(e)};a.startContent=function(e,n){e.openStart("div",n.getId()+"-content");e.class("sapMPanelContent");e.class("sapMPanelBG"+n.getBackgroundDesign());if(n.getExpandable()){e.class("sapMPanelExpandablePart")}if(t.browser.firefox){e.attr("tabindex","-1")}e.openEnd()};a.renderChildren=function(e,t){t.forEach(e.renderControl,e)};a.endContent=function(e){e.close("div")};a.endPanel=function(e){e.close("div")};return a},true);
//# sourceMappingURL=PanelRenderer.js.map