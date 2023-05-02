/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/extend","sap/ui/base/Object","./CalendarType","./Locale","sap/base/assert","sap/base/util/LoaderExtensions","sap/ui/core/Configuration"],function(e,t,r,n,i,a,o){"use strict";var s=/e/i,u={"acceleration-meter-per-second-squared":"acceleration-meter-per-square-second","concentr-milligram-per-deciliter":"concentr-milligram-ofglucose-per-deciliter","concentr-part-per-million":"concentr-permillion","consumption-liter-per-100kilometers":"consumption-liter-per-100-kilometer","pressure-millimeter-of-mercury":"pressure-millimeter-ofhg","pressure-pound-per-square-inch":"pressure-pound-force-per-square-inch","pressure-inch-hg":"pressure-inch-ofhg","torque-pound-foot":"torque-pound-force-foot"},l=/^([+-]?)((\d+)(?:\.(\d+))?)[eE]([+-]?\d+)$/,c=/0+$/;var f=t.extend("sap.ui.core.LocaleData",{constructor:function(e){this.oLocale=e;t.apply(this);var r=b(e);this.mData=r.mData;this.sCLDRLocaleId=r.sCLDRLocaleId},_get:function(){return this._getDeep(this.mData,arguments)},_getMerged:function(){return this._get.apply(this,arguments)},_getDeep:function(e,t){var r=e;for(var n=0;n<t.length;n++){r=r[t[n]];if(r===undefined){break}}return r},getOrientation:function(){return this._get("orientation")},getCurrentLanguageName:function(){var e=this.getLanguages();var t;var r=this.oLocale.getModernLanguage();var n=this.oLocale.getScript();if(r==="sr"&&n==="Latn"){r="sh";n=null}if(this.oLocale.getRegion()){t=e[r+"_"+this.oLocale.getRegion()]}if(!t&&n){t=e[r+"_"+n]}if(!t){t=e[r]}return t},getLanguages:function(){return this._get("languages")},getScripts:function(){return this._get("scripts")},getTerritories:function(){return this._get("territories")},getMonths:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"months","format",e)},getMonthsStandAlone:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"months","stand-alone",e)},getDays:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide"||e=="short","sWidth must be narrow, abbreviate, wide or short");return this._get(v(t),"days","format",e)},getDaysStandAlone:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide"||e=="short","sWidth must be narrow, abbreviated, wide or short");return this._get(v(t),"days","stand-alone",e)},getQuarters:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"quarters","format",e)},getQuartersStandAlone:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"quarters","stand-alone",e)},getDayPeriods:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"dayPeriods","format",e)},getDayPeriodsStandAlone:function(e,t){i(e=="narrow"||e=="abbreviated"||e=="wide","sWidth must be narrow, abbreviated or wide");return this._get(v(t),"dayPeriods","stand-alone",e)},getDatePattern:function(e,t){i(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");return this._get(v(t),"dateFormats",e)},getFlexibleDayPeriods:function(e,t){return this._get(v(t),"flexibleDayPeriods","format",e)},getFlexibleDayPeriodsStandAlone:function(e,t){return this._get(v(t),"flexibleDayPeriods","stand-alone",e)},getFlexibleDayPeriodOfTime:function(e,t){var r,n,i;r=(e*60+t)%1440;n=this._get("dayPeriodRules");function a(e){var t=e.split(":"),r=t[0],n=t[1];return parseInt(r)*60+parseInt(n)}i=Object.keys(n).find(function(e){var t=n[e];return t["_at"]&&a(t["_at"])===r});if(i){return i}return Object.keys(n).find(function(e){var t,i,o,s=n[e];if(s["_at"]){return false}o=a(s["_from"]);t=a(s["_before"]);if(o>t){i=[{start:o,end:1440},{start:0,end:t}]}else{i=[{start:o,end:t}]}return i.some(function(e){return e.start<=r&&e.end>r})})},getTimePattern:function(e,t){i(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");return this._get(v(t),"timeFormats",e)},getDateTimePattern:function(e,t){i(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");return this._get(v(t),"dateTimeFormats",e)},getCombinedDateTimePattern:function(e,t,r){i(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");i(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full");var n=this.getDateTimePattern(e,r),a=this.getDatePattern(e,r),o=this.getTimePattern(t,r);return n.replace("{0}",o).replace("{1}",a)},getCombinedDateTimeWithTimezonePattern:function(e,t,r){return this.applyTimezonePattern(this.getCombinedDateTimePattern(e,t,r))},applyTimezonePattern:function(e){var t=[e];var r=[{group:"Timezone",length:2,field:"zone",symbol:"V"}];this._appendItems(t,r);return t[0]},getTimezoneTranslations:function(){this.mTimezoneTranslations=this.mTimezoneTranslations||y(this._get("timezoneNames"));return Object.assign({},this.mTimezoneTranslations)},getCustomDateTimePattern:function(e,t){var r=this._get(v(t),"dateTimeFormats","availableFormats");return this._getFormatPattern(e,r,t)},getIntervalPattern:function(e,t){var r=this._get(v(t),"dateTimeFormats","intervalFormats"),n,i,a,o,s;if(e){n=e.split("-");i=n[0];a=n[1];o=r[i];if(o){s=o[a];if(s){return s}}}return r.intervalFormatFallback},getCombinedIntervalPattern:function(e,t){var r=this._get(v(t),"dateTimeFormats","intervalFormats"),n=r.intervalFormatFallback;return n.replace(/\{(0|1)\}/g,e)},getCustomIntervalPattern:function(e,t,r){var n=this._get(v(r),"dateTimeFormats","intervalFormats");return this._getFormatPattern(e,n,r,t)},_getFormatPattern:function(e,t,r,n){var i,a,o;if(!n){i=t[e]}else if(typeof n==="string"){if(n=="j"||n=="J"){n=this.getPreferredHourSymbol()}o=t[e];i=o&&o[n]}if(i){if(typeof i==="object"){a=Object.keys(i).map(function(e){return i[e]})}else{return i}}if(!a){a=this._createFormatPattern(e,t,r,n)}if(a&&a.length===1){return a[0]}return a},_createFormatPattern:function(e,t,r,n){var i=this._parseSkeletonFormat(e),a,o=this._findBestMatch(i,e,t),s,u,l,c,f,h,d,p,y=/^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/,b,_;if(n){if(typeof n==="string"){p=m[n]?m[n].group:"";if(p){b=g[p].index>i[i.length-1].index}d=n}else{b=true;if(i[0].symbol==="y"&&o&&o.pattern.G){l=m["G"];c=g[l.group];i.splice(0,0,{symbol:"G",group:l.group,match:l.match,index:c.index,field:c.field,length:1})}for(_=i.length-1;_>=0;_--){s=i[_];if(n[s.group]){b=false;break}}for(_=0;_<i.length;_++){s=i[_];if(n[s.group]){d=s.symbol;break}}if((d=="h"||d=="K")&&n.DayPeriod){d="a"}}if(b){return[this.getCustomDateTimePattern(e,r)]}if(o&&o.missingTokens.length===0){f=o.pattern[d];if(f&&o.distance>0){f=this._expandFields(f,o.patternTokens,i)}}if(!f){u=this._get(v(r),"dateTimeFormats","availableFormats");if(y.test(e)&&"ahHkKjJms".indexOf(d)>=0){f=this._getMixedFormatPattern(e,u,r,n)}else{h=this._getFormatPattern(e,u,r);f=this.getCombinedIntervalPattern(h,r)}}a=[f]}else if(!o){f=e;a=[f]}else{if(typeof o.pattern==="string"){a=[o.pattern]}else if(typeof o.pattern==="object"){a=[];for(var w in o.pattern){f=o.pattern[w];a.push(f)}}if(o.distance>0){if(o.missingTokens.length>0){if(y.test(e)){a=[this._getMixedFormatPattern(e,t,r)]}else{a=this._expandFields(a,o.patternTokens,i);a=this._appendItems(a,o.missingTokens,r)}}else{a=this._expandFields(a,o.patternTokens,i)}}}if(e.indexOf("J")>=0){a.forEach(function(e,t){a[t]=e.replace(/ ?[abB](?=([^']*'[^']*')*[^']*)$/g,"")})}return a},_parseSkeletonFormat:function(e){var t=[],r={index:-1},n,i,a;for(var o=0;o<e.length;o++){n=e.charAt(o);if(n=="j"||n=="J"){n=this.getPreferredHourSymbol()}if(n==r.symbol){r.length++;continue}i=m[n];a=g[i.group];if(i.group=="Other"||a.diffOnly){throw new Error("Symbol '"+n+"' is not allowed in skeleton format '"+e+"'")}if(a.index<=r.index){throw new Error("Symbol '"+n+"' at wrong position or duplicate in skeleton format '"+e+"'")}r={symbol:n,group:i.group,match:i.match,index:a.index,field:a.field,length:1};t.push(r)}return t},_findBestMatch:function(e,t,r){var n,i,a,o,s,u,l,c,f,g,h={distance:1e4,firstDiffPos:-1};for(var d in r){if(d==="intervalFormatFallback"||d.indexOf("B")>-1){continue}n=this._parseSkeletonFormat(d);u=0;i=[];l=true;if(e.length<n.length){continue}s=0;c=e.length;for(var p=0;p<e.length;p++){a=e[p];o=n[s];if(c===e.length){c=p}if(o){f=m[a.symbol];g=m[o.symbol];if(a.symbol===o.symbol){if(a.length===o.length){if(c===p){c=e.length}}else{if(a.length<f.numericCeiling?o.length<g.numericCeiling:o.length>=g.numericCeiling){u+=Math.abs(a.length-o.length)}else{u+=5}}s++;continue}else{if(a.match==o.match){u+=Math.abs(a.length-o.length)+10;s++;continue}}}i.push(a);u+=50-p}if(s<n.length){l=false}if(l&&(u<h.distance||u===h.distance&&c>h.firstDiffPos)){h.distance=u;h.firstDiffPos=c;h.missingTokens=i;h.pattern=r[d];h.patternTokens=n}}if(h.pattern){return h}},_expandFields:function(e,t,r){var n=typeof e==="string";var i;if(n){i=[e]}else{i=e}var a=i.map(function(e){var n={},i={},a="",o=false,s=0,u,l,c,f,g,h,d,p;r.forEach(function(e){n[e.group]=e});t.forEach(function(e){i[e.group]=e});while(s<e.length){p=e.charAt(s);if(o){a+=p;if(p=="'"){o=false}}else{d=m[p];if(d&&n[d.group]&&i[d.group]){g=n[d.group];h=i[d.group];u=g.length;c=h.length;l=1;while(e.charAt(s+1)==p){s++;l++}if(u===c||(u<d.numericCeiling?l>=d.numericCeiling:l<d.numericCeiling)){f=l}else{f=Math.max(l,u)}for(var y=0;y<f;y++){a+=p}}else{a+=p;if(p=="'"){o=true}}}s++}return a});return n?a[0]:a},_appendItems:function(e,t,r){var n=this._get(v(r),"dateTimeFormats","appendItems");e.forEach(function(r,i){var a,o,s;t.forEach(function(t){o=n[t.group];a="'"+this.getDisplayName(t.field)+"'";s="";for(var u=0;u<t.length;u++){s+=t.symbol}e[i]=o.replace(/\{0\}/,r).replace(/\{1\}/,s).replace(/\{2\}/,a)}.bind(this))}.bind(this));return e},_getMixedFormatPattern:function(e,t,r,n){var i=/^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/,a=/MMMM|LLLL/,o=/MMM|LLL/,s=/E|e|c/,u,l,c,f,g,m,h,d;u=i.exec(e);l=u[1];c=u[2];g=this._getFormatPattern(l,t,r);if(n){m=this.getCustomIntervalPattern(c,n,r)}else{m=this._getFormatPattern(c,t,r)}if(a.test(l)){f=s.test(l)?"full":"long"}else if(o.test(l)){f="medium"}else{f="short"}h=this.getDateTimePattern(f,r);d=h.replace(/\{1\}/,g).replace(/\{0\}/,m);return d},getNumberSymbol:function(e){i(e=="decimal"||e=="group"||e=="plusSign"||e=="minusSign"||e=="percentSign","sType must be decimal, group, plusSign, minusSign or percentSign");return this._get("symbols-latn-"+e)},getLenientNumberSymbols:function(e){i(e=="plusSign"||e=="minusSign","sType must be plusSign or minusSign");return this._get("lenient-scope-number")[e]},getDecimalPattern:function(){return this._get("decimalFormat").standard},getCurrencyPattern:function(e){return this._get("currencyFormat")[e]||this._get("currencyFormat").standard},getCurrencySpacing:function(e){return this._get("currencyFormat","currencySpacing",e==="after"?"afterCurrency":"beforeCurrency")},getPercentPattern:function(){return this._get("percentFormat").standard},getMiscPattern:function(e){i(e=="approximately"||e=="atLeast"||e=="atMost"||e=="range","sName must be approximately, atLeast, atMost or range");return this._get("miscPattern")[e]},getMinimalDaysInFirstWeek:function(){return this._get("weekData-minDays")},getFirstDayOfWeek:function(){return this._get("weekData-firstDay")},getWeekendStart:function(){return this._get("weekData-weekendStart")},getWeekendEnd:function(){return this._get("weekData-weekendEnd")},getCustomCurrencyCodes:function(){var e=this._get("currency")||{},t={};Object.keys(e).forEach(function(e){t[e]=e});return t},getCurrencyDigits:function(e){var t=this._get("currency");if(t){if(t[e]&&t[e].hasOwnProperty("digits")){return t[e].digits}else if(t["DEFAULT"]&&t["DEFAULT"].hasOwnProperty("digits")){return t["DEFAULT"].digits}}var r=this._get("currencyDigits",e);if(r==null){r=this._get("currencyDigits","DEFAULT");if(r==null){r=2}}return r},getCurrencySymbol:function(e){var t=this.getCurrencySymbols();return t&&t[e]||e},getCurrencyCodeBySymbol:function(e){var t=this._get("currencySymbols"),r;for(r in t){if(t[r]===e){return r}}return e},getCurrencySymbols:function(){var e=this._get("currency"),t={},r;for(var n in e){r=e[n].isoCode;if(e[n].symbol){t[n]=e[n].symbol}else if(r){t[n]=this._get("currencySymbols")[r]}}return Object.assign({},this._get("currencySymbols"),t)},getUnitDisplayName:function(e){var t=this.getUnitFormat(e);return t&&t["displayName"]||""},getRelativePatterns:function(e,t){if(t===undefined){t="wide"}i(t==="wide"||t==="short"||t==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");var r=[],n=this.getPluralCategories(),a,o,s,u;if(!e){e=["year","month","week","day","hour","minute","second"]}e.forEach(function(e){a=this._get("dateFields",e+"-"+t);for(var i in a){if(i.indexOf("relative-type-")===0){s=parseInt(i.substr(14));r.push({scale:e,value:s,pattern:a[i]})}else if(i.indexOf("relativeTime-type-")==0){o=a[i];u=i.substr(18)==="past"?-1:1;n.forEach(function(t){var n=o["relativeTimePattern-count-"+t];if(n){r.push({scale:e,sign:u,pattern:n})}})}}}.bind(this));return r},getRelativePattern:function(e,t,r,n){var a,o,s,u;if(typeof r==="string"){n=r;r=undefined}if(r===undefined){r=t>0}if(n===undefined){n="wide"}i(n==="wide"||n==="short"||n==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");s=e+"-"+n;if(t===0||t===-2||t===2){a=this._get("dateFields",s,"relative-type-"+t)}if(!a){o=this._get("dateFields",s,"relativeTime-type-"+(r?"future":"past"));u=this.getPluralCategory(Math.abs(t).toString());a=o["relativeTimePattern-count-"+u]}return a},getRelativeSecond:function(e,t){return this.getRelativePattern("second",e,t)},getRelativeMinute:function(e,t){if(e==0){return null}return this.getRelativePattern("minute",e,t)},getRelativeHour:function(e,t){if(e==0){return null}return this.getRelativePattern("hour",e,t)},getRelativeDay:function(e,t){return this.getRelativePattern("day",e,t)},getRelativeWeek:function(e,t){return this.getRelativePattern("week",e,t)},getRelativeMonth:function(e,t){return this.getRelativePattern("month",e,t)},getDisplayName:function(e,t){i(e=="second"||e=="minute"||e=="hour"||e=="zone"||e=="day"||e=="weekday"||e=="week"||e=="month"||e=="quarter"||e=="year"||e=="era","sType must be second, minute, hour, zone, day, weekday, week, month, quarter, year, era");if(t===undefined){t="wide"}i(t==="wide"||t==="short"||t==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");var r=["era","weekday","zone"],n=r.indexOf(e)===-1?e+"-"+t:e;return this._get("dateFields",n,"displayName")},getRelativeYear:function(e,t){return this.getRelativePattern("year",e,t)},getDecimalFormat:function(e,t,r){var n;var i;switch(e){case"long":i=this._get("decimalFormat-long");break;default:i=this._get("decimalFormat-short");break}if(i){var a=t+"-"+r;n=i[a];if(!n){a=t+"-other";n=i[a]}}return n},getCurrencyFormat:function(e,t,r){var n;var i=this._get("currencyFormat-"+e);if(!i){if(e==="sap-short"){throw new Error('Failed to get CLDR data for property "currencyFormat-sap-short"')}i=this._get("currencyFormat-short")}if(i){var a=t+"-"+r;n=i[a];if(!n){a=t+"-other";n=i[a]}}return n},getListFormat:function(e,t){var r=this._get("listPattern-"+(e||"standard")+"-"+(t||"wide"));if(r){return r}return{}},getResolvedUnitFormat:function(e){e=this.getUnitFromMapping(e)||e;return this.getUnitFormat(e)},getUnitFormat:function(e){var t=this._get("units","short",e);if(!t&&u[e]){t=this._get("units","short",u[e])}return t},getUnitFormats:function(){return this._getMerged("units","short")},getUnitFromMapping:function(e){return this._get("unitMappings",e)},getEras:function(e,t){i(e=="wide"||e=="abbreviated"||e=="narrow","sWidth must be wide, abbreviate or narrow");var r=this._get(v(t),"era-"+e),n=[];for(var a in r){n[parseInt(a)]=r[a]}return n},getEraDates:function(e){var t=this._get("eras-"+e.toLowerCase()),r=[];for(var n in t){r[parseInt(n)]=t[n]}return r},getCalendarWeek:function(e,t){i(e=="wide"||e=="narrow","sStyle must be wide or narrow");var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core",this.oLocale.toString()),n="date.week.calendarweek."+e;return r.getText(n,t)},firstDayStartsFirstWeek:function(){return this.oLocale.getLanguage()==="en"&&this.oLocale.getRegion()==="US"},getPreferredCalendarType:function(){var e,t,n,i=this._get("calendarPreference")||[];for(n=0;n<i.length;n++){e=i[n].split("-")[0];for(t in r){if(e===t.toLowerCase()){return t}}}return r.Gregorian},getPreferredHourSymbol:function(){return this._get("timeData","_preferred")},getPluralCategories:function(){var e=this._get("plurals"),t=Object.keys(e);t.push("other");return t},getPluralCategory:function(e){var t=this._get("plurals");if(typeof e==="number"){e=e.toString()}if(!this._pluralTest){this._pluralTest={}}for(var r in t){var n=this._pluralTest[r];if(!n){n=this._parsePluralRule(t[r]);this._pluralTest[r]=n}if(n(e).bMatch){return r}}return"other"},_parsePluralRule:function(e){var t="or",r="and",n="%",i="=",a="!=",o="n",u="i",l="f",g="t",m="v",h="w",d="c",p="e",y="..",v=",";var b=0,_;_=e.split(" ");function w(e){if(_[b]===e){b++;return true}return false}function C(){var e=_[b];b++;return e}function D(){var e,r;e=P();if(w(t)){r=D();return function(t){return e(t)||r(t)}}return e}function P(){var e,t;e=T();if(w(r)){t=P();return function(r){return e(r)&&t(r)}}return e}function T(){var e,t,r;e=F();if(w(i)){r=true}else if(w(a)){r=false}else{throw new Error("Expected '=' or '!='")}t=S();if(r){return function(r){return t(r).indexOf(e(r))>=0}}else{return function(r){return t(r).indexOf(e(r))===-1}}}function F(){var e;e=k();if(w(n)){var t=parseInt(C());return function(r){return e(r)%t}}return e}function k(){if(w(o)){return function(e){return e.n}}else if(w(u)){return function(e){return e.i}}else if(w(l)){return function(e){return e.f}}else if(w(g)){return function(e){return e.t}}else if(w(m)){return function(e){return e.v}}else if(w(h)){return function(e){return e.w}}else if(w(d)){return function(e){return e.c}}else if(w(p)){return function(e){return e.c}}else{throw new Error("Unknown operand: "+C())}}function S(){var e=[],t=C(),r=t.split(v),n,i,a;r.forEach(function(t){n=t.split(y);if(n.length===1){e.push(parseInt(t))}else{i=parseInt(n[0]);a=parseInt(n[1]);for(var r=i;r<=a;r++){e.push(r)}}});return function(t){return e}}var x=D();if(b!=_.length){throw new Error("Not completely parsed")}return function(e){var t,r,n,i,a,o,u=e.search(s);r=u<0?0:parseInt(e.slice(u+1));e=f.convertToDecimal(e);t=e.indexOf(".");if(t===-1){a=e;n="";i=""}else{a=e.slice(0,t);n=e.slice(t+1);i=n.replace(c,"")}o={n:parseFloat(e),i:parseInt(a),v:n.length,w:i.length,f:n===""?0:parseInt(n),t:i===""?0:parseInt(i),c:r};return{bMatch:x(o),oOperands:o}}}});f.convertToDecimal=function(e){var t,r,n,i,a,o,s=String(e);if(!s.includes("e")&&!s.includes("E")){return s}o=s.match(l);i=o[1]==="-";s=o[2].replace(".","");t=o[3]?o[3].length:0;n=o[4]?o[4].length:0;r=parseInt(o[5]);a=t+r;if(r>0){s=r<n?s.slice(0,a)+"."+s.slice(a):s=s.padEnd(a,"0")}else{s=-r<t?s=s.slice(0,a)+"."+s.slice(a):s="0."+s.padStart(n-r,"0")}if(i){s="-"+s}return s};var g={Era:{field:"era",index:0},Year:{field:"year",index:1},Quarter:{field:"quarter",index:2},Month:{field:"month",index:3},Week:{field:"week",index:4},"Day-Of-Week":{field:"weekday",index:5},Day:{field:"day",index:6},DayPeriod:{field:"hour",index:7,diffOnly:true},Hour:{field:"hour",index:8},Minute:{field:"minute",index:9},Second:{field:"second",index:10},Timezone:{field:"zone",index:11}};var m={G:{group:"Era",match:"Era",numericCeiling:1},y:{group:"Year",match:"Year",numericCeiling:100},Y:{group:"Year",match:"Year",numericCeiling:100},Q:{group:"Quarter",match:"Quarter",numericCeiling:3},q:{group:"Quarter",match:"Quarter",numericCeiling:3},M:{group:"Month",match:"Month",numericCeiling:3},L:{group:"Month",match:"Month",numericCeiling:3},w:{group:"Week",match:"Week",numericCeiling:100},W:{group:"Week",match:"Week",numericCeiling:100},d:{group:"Day",match:"Day",numericCeiling:100},D:{group:"Day",match:"Day",numericCeiling:100},E:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:1},e:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:3},c:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:2},h:{group:"Hour",match:"Hour12",numericCeiling:100},H:{group:"Hour",match:"Hour24",numericCeiling:100},k:{group:"Hour",match:"Hour24",numericCeiling:100},K:{group:"Hour",match:"Hour12",numericCeiling:100},m:{group:"Minute",match:"Minute",numericCeiling:100},s:{group:"Second",match:"Second",numericCeiling:100},z:{group:"Timezone",match:"Timezone",numericCeiling:1},Z:{group:"Timezone",match:"Timezone",numericCeiling:1},O:{group:"Timezone",match:"Timezone",numericCeiling:1},v:{group:"Timezone",match:"Timezone",numericCeiling:1},V:{group:"Timezone",match:"Timezone",numericCeiling:1},X:{group:"Timezone",match:"Timezone",numericCeiling:1},x:{group:"Timezone",match:"Timezone",numericCeiling:1},S:{group:"Other",numericCeiling:100},u:{group:"Other",numericCeiling:100},U:{group:"Other",numericCeiling:1},r:{group:"Other",numericCeiling:100},F:{group:"Other",numericCeiling:100},g:{group:"Other",numericCeiling:100},a:{group:"DayPeriod",numericCeiling:1},b:{group:"Other",numericCeiling:1},B:{group:"Other",numericCeiling:1},A:{group:"Other",numericCeiling:100}};var h={iw:"he",ji:"yi"};var d=function(){var e=n._cldrLocales,t={},r;if(e){for(r=0;r<e.length;r++){t[e[r]]=true}}return t}();var p={};function y(e,t,r,n){n=n?n.slice():[];r=r||{};t=t||"";Object.keys(e).forEach(function(i){var a=e[i];if(typeof a==="object"){var o=n.slice();var s=a["_parent"];if(s){o.push(s)}y(a,t+i+"/",r,o)}else if(typeof a==="string"&&i!=="_parent"){var u=n.length?n.join(", ")+", ":"";r[t+i]=u+a}});return r}function v(e){if(!e){e=o.getCalendarType()}return"ca-"+e.toLowerCase()}function b(e){var t=e.getLanguage()||"",r=e.getScript()||"",n=e.getRegion()||"",i;function o(e,t){var r,n,i;if(!t){return}for(r in t){if(t.hasOwnProperty(r)){n=e[r];i=t[r];if(n===undefined){e[r]=i}else if(n===null){delete e[r]}else if(typeof n==="object"&&typeof i==="object"&&!Array.isArray(n)){o(n,i)}}}}function s(e){if(!p[e]&&(!d||d[e]===true)){var t=p[e]=a.loadResource("sap/ui/core/cldr/"+e+".json",{dataType:"json",failOnError:false});if(t&&t.__fallbackLocale){o(t,s(t.__fallbackLocale));delete t.__fallbackLocale}}return p[e]}t=t&&h[t]||t;if(t==="no"){t="nb"}if(t==="zh"&&!n){if(r==="Hans"){n="CN"}else if(r==="Hant"){n="TW"}}if(t==="sh"||t==="sr"&&r==="Latn"){t="sr_Latn"}var u=t+"_"+n;var l=u;if(t&&n){i=s(u)}if(!i&&t){i=s(t);l=t}if(!i){i=s("en");l="en"}p[u]=i;l=l.replace(/_/g,"-");return{mData:i,sCLDRLocaleId:l}}var _=f.extend("sap.ui.core.CustomLocaleData",{constructor:function(e){f.apply(this,arguments);this.mCustomData=o.getFormatSettings().getCustomLocaleData()},_get:function(){var e=Array.prototype.slice.call(arguments),t,r;if(e[0].indexOf("ca-")==0){t=e[0];if(t==v()){e=e.slice(1)}}r=e.join("-");var n=this.mCustomData[r];if(n==null){n=this._getDeep(this.mCustomData,arguments);if(n==null){n=this._getDeep(this.mData,arguments)}}return n},_getMerged:function(){var t=this._getDeep(this.mData,arguments);var r=this._getDeep(this.mCustomData,arguments);return e({},t,r)}});f.getInstance=function(e){return e.hasPrivateUseSubtag("sapufmt")?new _(e):new f(e)};return f});
//# sourceMappingURL=LocaleData.js.map