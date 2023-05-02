/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./CountMode","sap/base/Log","sap/base/util/each","sap/ui/model/TreeBinding"],function(e,t,s,o){"use strict";var i=o.extend("sap.ui.model.odata.ODataTreeBinding",{constructor:function(e,s,i,r,n){o.apply(this,arguments);this.bPendingRequest=false;this.oFinalLengths={};this.oLengths={};this.oKeys={};this.bNeedsUpdate=false;this.bHasTreeAnnotations=this._hasTreeAnnotations();this.oRootContext=null;this.iNumberOfExpandedLevels=n&&n.numberOfExpandedLevels;this.sCountMode=n&&n.countMode||this.oModel.sDefaultCountMode;if(!this.bHasTreeAnnotations){if(!n||!n.navigation){t.error("A navigation paths parameter object has to be defined");this.oNavigationPaths={}}else{this.oNavigationPaths=n.navigation}}else{t.warning("Tree hierarchy annotations are deprecated and may not work correctly with the sap.ui.model.odata.ODataModel."+" Please use the sap.ui.model.odata.v2.ODataModel (since version 1.28) instead which fully supports hierarchy annotations.")}}});i.prototype.getRootContexts=function(e,t,s){var o=null,i={numberOfExpandedLevels:this.iNumberOfExpandedLevels},r=[],n=true,a=this;if(this.bHasTreeAnnotations){i.level=0;if(!this.bDisplayRootNode){i.level=1}}else{o=this.oModel.resolve(this.getPath(),this.getContext());i.navPath=this._getNavPath(this.getPath());if(i.numberOfExpandedLevels>0){var h=o;for(var l=0;l<i.numberOfExpandedLevels;l++){var f=this._getNavPath(h);i.navPath+="/"+f;h+="/"+f}}var u=this.oModel.isList(this.sPath,this.getContext());if(u){this.bDisplayRootNode=true}else{n=false;this.oModel.createBindingContext(o,null,{expand:i.navPath},function(e){r=[e];if(a.oRootContext!==e){a.oRootContext=e;a._processODataObject(e.getObject(),o,i.navPath);a.bNeedsUpdate=true}},this.bRefresh);this.bRefresh=false}}if(n){if(!this.bDisplayRootNode){r=this._getContextsForNodeId(o,0,1,0,i)}else{r=this._getContextsForNodeId(o,e,t,s,i)}}if(!this.bDisplayRootNode&&r.length>0){this.oRootContext=r[0];r=this.getNodeContexts(r[0],e,t,s)}return r};i.prototype.getNodeContexts=function(e,t,s,o){var i,r={};if(this.bHasTreeAnnotations){var n=e.getProperty(this.oTreeProperties["hierarchy-drill-state-for"]);if(n=="leaf"){return[]}i=e.getProperty(this.oTreeProperties["hierarchy-node-for"]);r.level=parseInt(e.getProperty(this.oTreeProperties["hierarchy-level-for"]))+1}else{var a=this._getNavPath(e.getPath());if(!a){return[]}i=this.oModel.resolve(a,e);r.navPath=this.oNavigationPaths[a]}return this._getContextsForNodeId(i,t,s,o,r)};i.prototype.hasChildren=function(e){if(!e){return false}if(this.bHasTreeAnnotations){var t=e.getProperty(this.oTreeProperties["hierarchy-drill-state-for"]);return t==="expanded"||t==="collapsed"}else{var s=this._getNavPath(e.getPath());var o=e.getPath()+"/"+s;return s&&this.oLengths[o]>0}};i.prototype.getChildCount=function(e){if(this.bHasTreeAnnotations){var t;if(!e){if(this.oRootContext){t=this.oRootContext.getProperty(this.oTreeProperties["hierarchy-node-for"])}else{t="000000"}}else{t=e.getProperty(this.oTreeProperties["hierarchy-node-for"])}return this.oLengths[t]}else{if(!e){return this.oLengths[this.getPath()]}return this.oLengths[e.getPath()+"/"+this._getNavPath(e.getPath())]}};i.prototype._getContextsForNodeId=function(e,t,s,o,i){var r=[],n,a;if(!t){t=0}if(!s){s=this.oModel.iSizeLimit}if(!o){o=0}if(this.bHasTreeAnnotations){if(e==null){e="000000"}if(i.level==0){i.level++}}if(this.oFinalLengths[e]&&this.oLengths[e]<s){s=this.oLengths[e]}if(this.oKeys[e]){for(var h=t;h<t+s;h++){a=this.oKeys[e][h];if(!a){break}r.push(this.oModel.getContext("/"+a))}}n=r.length!=s&&!(this.oFinalLengths[e]&&r.length>=this.oLengths[e]);if(this.oModel.getServiceMetadata()){if(!this.bPendingRequest&&n){var l=[];if(this.bHasTreeAnnotations){if(i.numberOfExpandedLevels>0){var f=i.level+i.numberOfExpandedLevels;l.push("$filter="+this.oTreeProperties["hierarchy-level-for"]+" le '0"+f+"'")}else{l.push("$filter="+this.oTreeProperties["hierarchy-level-for"]+" eq '0"+i.level+"' and "+this.oTreeProperties["hierarchy-parent-node-for"]+" eq '"+e+"'")}}else if(i.navPath){l.push("$expand="+i.navPath)}this._loadSubNodes(e,t,s,o,l,i)}}return r};i.prototype._getCountForNodeId=function(e,s,o,i,r){var n=this;var a=[];function h(t){n.oFinalLengths[e]=true;n.oLengths[e]=parseInt(t)}function l(e){var s="Request for $count failed: "+e.message;if(e.response){s+=", "+e.response.statusCode+", "+e.response.statusText+", "+e.response.body}t.warning(s)}var f;if(this.bHasTreeAnnotations){f=this.oModel.resolve(this.getPath(),this.getContext());a.push("$filter="+this.oTreeProperties["hierarchy-parent-node-for"]+" eq '"+e+"'")}else{f=e}if(f){var u=this.oModel._createRequestUrl(f+"/$count",null,a);var d=this.oModel._createRequest(u,"GET",false);d.headers["Accept"]="text/plain, */*;q=0.5";this.oModel._request(d,h,l,undefined,undefined,this.oModel.getServiceMetadata())}};i.prototype._loadSubNodes=function(t,s,o,i,r,n){var a=this,h=false;if(s||o){r.push("$skip="+s+"&$top="+o)}if(!a.bHasTreeAnnotations&&!this.oFinalLengths[t]&&(this.sCountMode==e.Inline||this.sCountMode==e.Both)){r.push("$inlinecount=allpages");h=true}function l(e){var o,i;if(e.results){if(!a.bHasTreeAnnotations){if(h&&e.__count){a.oLengths[t]=parseInt(e.__count);a.oFinalLengths[t]=true}else if(a.oModel.isCountSupported()){a._getCountForNodeId(t)}a.oKeys[t]=[];for(i=0;i<e.results.length;i++){o=e.results[i];var r=a.oModel._getKey(o);a._processODataObject(o,"/"+r,n.navPath);a.oKeys[t][i+s]=r}}else{var l={};for(i=0;i<e.results.length;i++){o=e.results[i];t=o[a.oTreeProperties["hierarchy-parent-node-for"]];if(i==0){l[t]=s}else if(l[t]==undefined){l[t]=0}if(!(t in a.oKeys)){a.oKeys[t]=[];a._getCountForNodeId(t)}a.oKeys[t][l[t]]=a.oModel._getKey(o);l[t]++}}}else{a.oKeys[null]=a.oModel._getKey(e);if(!a.bHasTreeAnnotations){a._processODataObject(e,t,n.navPath)}}a.oRequestHandle=null;a.bPendingRequest=false;a.bNeedsUpdate=true}function f(){a.fireDataReceived()}function u(e){a.oRequestHandle=null;a.bPendingRequest=false;a.fireDataReceived()}function d(e){a.oRequestHandle=e}if(t){if(!this.oFinalLengths[t]){this.bPendingRequest=true;this.fireDataRequested();var p;if(this.bHasTreeAnnotations){p=this.oModel.resolve(this.getPath(),this.getContext())}else{p=t}this.oModel._loadData(p,r,l,u,false,d,f)}}};i.prototype.resetData=function(e){if(e){var t=e.getPath();delete this.oKeys[t];delete this.oLengths[t];delete this.oFinalLengths[t]}else{this.oKeys={};this.oLengths={};this.oFinalLengths={};this.oRootContext=null}};i.prototype.refresh=function(e,t,o){var i=false;if(!e){if(o){var r=this.oModel.resolve(this.sPath,this.oContext);var n=this.oModel.oMetadata._getEntityTypeByPath(r);if(n&&n.entityType in o){i=true}}if(t&&!i){s(this.oKeys,function(e,o){s(o,function(e,s){if(s in t){i=true;return false}return true});if(i){return false}return true})}if(!t&&!o){i=true}}if(e||i){this.resetData();this.bNeedsUpdate=false;this.bRefresh=true;this._fireChange()}};i.prototype.filter=function(e){t.warning("Filtering is currently not possible in the ODataTreeBinding");return this};i.prototype.checkUpdate=function(e,t){var o=false;if(!e){if(this.bNeedsUpdate||!t){o=true}else{s(this.oKeys,function(e,i){s(i,function(e,s){if(s in t){o=true;return false}return true});if(o){return false}return true})}}if(e||o){this.bNeedsUpdate=false;this._fireChange()}};i.prototype._getNavPath=function(e){var t=this.oModel.resolve(e,this.getContext());if(!t){return undefined}var s=t.split("/"),o=s[s.length-1],i;var r=o.split("(")[0];if(r&&this.oNavigationPaths[r]){i=this.oNavigationPaths[r]}return i};i.prototype._processODataObject=function(e,t,s){var o=[],i=this;if(s&&s.indexOf("/")>-1){o=s.split("/");s=o[0];o.splice(0,1)}var r=this.oModel._getObject(t);if(Array.isArray(r)){this.oKeys[t]=r;this.oLengths[t]=r.length;this.oFinalLengths[t]=true}if(s&&e[s]){if(Array.isArray(r)){r.forEach(function(e){var t=i.getModel().getData("/"+e);i._processODataObject(t,"/"+e+"/"+s,o.join("/"))})}else if(typeof r==="object"){i._processODataObject(e,t+"/"+s,o.join("/"))}}};i.prototype._hasTreeAnnotations=function(){var e=this.oModel,o=e.oMetadata,i=e.resolve(this.getPath(),this.getContext()),r=o._getEntityTypeByPath(i),n=o.mNamespaces["sap"],a=this;this.oTreeProperties={"hierarchy-level-for":false,"hierarchy-parent-node-for":false,"hierarchy-node-for":false,"hierarchy-drill-state-for":false};if(!r){t.fatal("EntityType for path "+i+" could not be found.");return false}s(r.property,function(e,t){if(!t.extensions){return true}s(t.extensions,function(e,s){var o=s.name;if(s.namespace===n&&o in a.oTreeProperties&&!a.oTreeProperties[o]){a.oTreeProperties[o]=t.name}});return true});var h=false;s(this.oTreeProperties,function(e,t){if(!t){h=true;return false}return true});return!h};return i});
//# sourceMappingURL=ODataTreeBinding.js.map