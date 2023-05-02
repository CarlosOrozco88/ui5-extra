/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./DatePickerRenderer","./DateTimeFieldRenderer","sap/ui/core/library","sap/ui/core/date/UI5Date"],function(e,t,n,a,r){"use strict";var i=e.extend(t);i.apiVersion=2;i.writeInnerValue=function(e,n){if(!n.getDateValue()&&typeof n._prefferedValue==="string"){e.attr("value",n._prefferedValue)}else{t.writeInnerValue.apply(this,arguments)}};i.getDescribedByAnnouncement=function(e){var t=n.getDescribedByAnnouncement.apply(this,arguments);return sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("DATETIMEPICKER_TYPE")+" "+t};i.getAccessibilityState=function(e){var n=t.getAccessibilityState.apply(this,arguments);n["haspopup"]=a.aria.HasPopup.Dialog.toLowerCase();return n};i.writeAdditionalContent=function(e,t){var n=t._getTranslatedTimezone(true)||t._getTimezone(true);if(!t._getShowTimezone()){return}e.openStart("div",t.getId()+"-timezoneLabel");e.class("sapMDTPTimezoneLabel");e.openEnd();e.openStart("span",t.getId()+"-timezoneID");e.openEnd();e.text(n);e.close("span");e.close("div");e.openStart("span");e.class("sapMDummyContent");e.openEnd();e.text(t._getFormatter(true).format(r.getInstance(2e3,10,20,10,10,10)));e.close("span")};i.addOuterClasses=function(e,n){t.addOuterClasses(e,n);e.class("sapMDTP");if(n._getShowTimezone()){e.class("sapMDTPWithTimezone")}};i.getAriaDescribedBy=function(e){var t=n.getAriaDescribedBy.apply(this,arguments);if(e._getShowTimezone()){t+=" "+e.getId()+"-timezoneID"}return t};return i},true);
//# sourceMappingURL=DateTimePickerRenderer.js.map