/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/model/ValidateException","sap/ui/model/odata/type/ODataType","sap/ui/model/type/String"],function(e,t,i,n){"use strict";var s=/^\d+$/,r=/^0*(?=\d)/;function a(e,t){return t&&t.isDigitSequence&&e&&e.match(s)}function l(t,i){var n,s,r;t.oConstraints=undefined;if(i){s=i.maxLength;if(typeof s==="string"){s=parseInt(s)}if(typeof s==="number"&&!isNaN(s)&&s>0){t.oConstraints={maxLength:s}}else if(s!==undefined){e.warning("Illegal maxLength: "+i.maxLength,null,t.getName())}n=i.isDigitSequence;if(n===true||n==="true"){t.oConstraints=t.oConstraints||{};t.oConstraints.isDigitSequence=true}else if(n!==undefined&&n!==false&&n!=="false"){e.warning("Illegal isDigitSequence: "+n,null,t.getName())}r=i.nullable;if(r===false||r==="false"){t.oConstraints=t.oConstraints||{};t.oConstraints.nullable=false}else if(r!==undefined&&r!==true&&r!=="true"){e.warning("Illegal nullable: "+r,null,t.getName())}}}var o=i.extend("sap.ui.model.odata.type.String",{constructor:function(t,n){var s=t?t.parseKeepsEmptyString:undefined;i.apply(this,arguments);this.oFormatOptions=t;l(this,n);this._sParsedEmptyString=null;if(this.oConstraints&&this.oConstraints.nullable===false&&this.oConstraints.isDigitSequence){this._sParsedEmptyString="0"}else if(s!==undefined){if(s===true){this._sParsedEmptyString=""}else if(s!==false){e.warning("Illegal parseKeepsEmptyString: "+s,null,this.getName())}}}});o.prototype.formatValue=function(e,t){if(e===null&&this.getPrimitiveType(t)==="string"){return""}if(a(e,this.oConstraints)){e=e.replace(r,"");if(this.oConstraints.maxLength&&e==="0"&&this.getPrimitiveType(t)==="string"){return""}}return n.prototype.formatValue.call(this,e,t)};o.prototype.parseValue=function(e,t){var i;i=e===""?this._sParsedEmptyString:n.prototype.parseValue.apply(this,arguments);if(a(i,this.oConstraints)){i=i.replace(r,"");if(this.oConstraints.maxLength){i=i.padStart(this.oConstraints.maxLength,"0")}}return i};o.prototype.validateValue=function(e){var i=this.oConstraints||{},n=i.maxLength;if(e===null){if(i.nullable!==false){return}}else if(e===""&&this._sParsedEmptyString===""){return}else if(typeof e!=="string"){throw new t("Illegal "+this.getName()+" value: "+e)}else if(i.isDigitSequence){if(!e.match(s)){throw new t(sap.ui.getCore().getLibraryResourceBundle().getText("EnterDigitsOnly"))}if(n&&e.length>n){throw new t(sap.ui.getCore().getLibraryResourceBundle().getText("EnterMaximumOfDigits",[n]))}return}else if(!n||e.length<=n){return}throw new t(sap.ui.getCore().getLibraryResourceBundle().getText(n?"EnterTextMaxLength":"EnterText",[n]))};o.prototype.getName=function(){return"sap.ui.model.odata.type.String"};return o});
//# sourceMappingURL=String.js.map