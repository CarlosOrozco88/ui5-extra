/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/format/NumberFormat","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/odata/type/ODataType"],function(t,e,n,a,o,r){"use strict";function i(){return sap.ui.getCore().getLibraryResourceBundle().getText("EnterNumber")}function s(t){var n,a;if(!t.oFormat){n={groupingEnabled:true};a=t.oFormatOptions||{};if(a.style!=="short"&&a.style!=="long"){n.preserveDecimals=true}Object.assign(n,t.oFormatOptions);t.oFormat=e.getFloatInstance(n)}return t.oFormat}function l(t){return!t.oConstraints||t.oConstraints.nullable!==false}function u(e,n){var a;e.oConstraints=undefined;if(n){a=n.nullable;if(a===false||a==="false"){e.oConstraints={nullable:false}}else if(a!==undefined&&a!==true&&a!=="true"){t.warning("Illegal nullable: "+a,null,e.getName())}}e._handleLocalizationChange()}var f=r.extend("sap.ui.model.odata.type.Single",{constructor:function(t,e){r.apply(this,arguments);this.oFormatOptions=t;u(this,e)}});f.prototype.formatValue=function(t,e){var a;if(t===null||t===undefined){return null}if(typeof t==="number"){a=t}else if(typeof t==="string"){a=parseFloat(t)}else if(e!=="any"){throw new n("Illegal "+this.getName()+" value: "+t)}switch(this.getPrimitiveType(e)){case"any":return t;case"float":return a;case"int":return Math.floor(a);case"string":return s(this).format(parseFloat(a.toPrecision(7)));default:throw new n("Don't know how to format "+this.getName()+" to "+e)}};f.prototype.parseValue=function(t,e){var n;if(t===null||t===""){return null}switch(this.getPrimitiveType(e)){case"string":n=s(this).parse(t);if(isNaN(n)){throw new a(i())}break;case"int":case"float":n=t;break;default:throw new a("Don't know how to parse "+this.getName()+" from "+e)}return Math.fround(n)};f.prototype._handleLocalizationChange=function(){this.oFormat=null};f.prototype.validateValue=function(t){if(t===null&&l(this)){return}if(typeof t==="number"){return}throw new o(i())};f.prototype.getName=function(){return"sap.ui.model.odata.type.Single"};return f});
//# sourceMappingURL=Single.js.map