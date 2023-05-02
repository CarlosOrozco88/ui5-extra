/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/DynamicDateUtil","sap/ui/core/date/UI5Date","sap/ui/model/SimpleType","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/base/util/each"],function(e,t,a,i,r,n,o){"use strict";var s=a.extend("sap.m.DynamicDate",{constructor:function(){this.sName="DynamicDate";a.apply(this,arguments)}});s.prototype.formatValue=function(t){var a={};if(!t){return}a.operator=t.operator;a.values=t.values.slice(0);var i=e.getOption(t.operator).getValueTypes();a.values=a.values.map(function(e,t){if(i[t]==="date"||i[t]==="datetime"){return u.parse(e)}return e},this);return a};s.prototype.parseValue=function(t){var a={},i;if(!t){return}if(t.operator==="PARSEERROR"){throw new r(t.values[0])}a.operator=t.operator;a.values=t.values.slice(0);i=e.getOption(t.operator).getValueTypes();a.values=a.values.map(function(e,t){if(i[t]==="date"||i[t]==="datetime"){return u.format(e)}return e},this);return a};s.prototype.validateValue=function(t){if(this.oConstraints){var a=sap.ui.getCore().getLibraryResourceBundle(),i=sap.ui.getCore().getLibraryResourceBundle("sap.m"),r=[],s=[],u=e.getOption(t.operator),p=u.toDates(this.formatValue(t)).map(function(e){return e.getTime()});if(p[0]===p[1]){p.length=1}p.forEach(function(e,t){var n="DynamicDate.Invalid"+(t===0?"Start":"End");o(this.oConstraints,function(t,o){switch(t){case"minimum":if(e<o){r.push("minimum");s.push(i.getText(n,[new Date(e).toDateString()]));s.push(a.getText("Date.Minimum",[new Date(o).toDateString()]))}break;case"maximum":if(e>o){r.push("maximum");s.push(i.getText(n,[new Date(e).toDateString()]));s.push(a.getText("Date.Maximum",[new Date(o).toDateString()]))}break}})},this);if(r.length>0){throw new n(this.combineMessages(s),r)}}};var u={format:function(e){if(e instanceof Date){return e.getTime()}return null},parse:function(e){if(isNaN(e)){throw new i("Cannot format date: "+e+" is not a valid Timestamp")}else if(typeof e!=="number"){e=parseInt(e)}e=t.getInstance(e);return e}};return s});
//# sourceMappingURL=DynamicDate.js.map