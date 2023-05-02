/*
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider","sap/base/assert"],function(e,t){"use strict";var i=e.extend("sap.ui.core.util.serializer.Serializer",{constructor:function(t,i,n,r,s,a){e.apply(this);this._oRootControl=t;this._delegate=i;this._bSkipRoot=!!n;this._oWindow=r||window;this._fnSkipAggregations=s;this._fnSkipElement=a}});i.prototype.serialize=function(){return this._serializeRecursive(this._oRootControl,0)};i.prototype._serializeRecursive=function(e,i,n,r){t(typeof e!=="undefined","The control must not be undefined");var s=[];var a=!this._bSkipRoot||i!==0;if(a){var o=this._delegate.start(e,n,r);var g=this._delegate.middle(e,n,r);s.push(o+g)}var l=e.getMetadata().getAllAggregations();if(l){for(var h in l){if(this._fnSkipAggregations&&this._fnSkipAggregations(e,h)){continue}var f=[];var u=l[h];var p=e[u._sGetter]();if(e.getBindingPath(h)&&e.getBindingInfo(h).template){f.push(e.getBindingInfo(h).template)}else if(p&&p.length){for(var _=0;_<p.length;_++){var d=p[_];if(this._isObjectSerializable(d)){f.push(d)}}}else if(this._isObjectSerializable(p)){f.push(p)}if(f.length>0){if(a){s.push(this._delegate.startAggregation(e,h))}var c=this._isDefaultAggregation(e,h);for(var v=0;v<f.length;v++){s.push(this._serializeRecursive(f[v],i+1,h,c))}if(a){s.push(this._delegate.endAggregation(e,h))}}}}if(a){var S=this._delegate.end(e,n,r);s.push(S)}return s.join("")};i.prototype._isObjectSerializable=function(e){return e instanceof this._oWindow.sap.ui.core.Element&&!(this._fnSkipElement&&this._fnSkipElement(e))};i.prototype._isDefaultAggregation=function(e,t){return e.getMetadata().getDefaultAggregationName()===t};return i});
//# sourceMappingURL=Serializer.js.map