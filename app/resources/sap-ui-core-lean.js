//@ui5-bundle sap-ui-core-lean.js
//@ui5-bundle-raw-include ui5loader.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(e){"use strict";if(e.Promise===undefined||!e.Promise.prototype.finally||e.URLSearchParams===undefined){var t=document.documentElement,n=t.style,r="Microsoft Internet Explorer 11 and other legacy browsers are no longer supported. For more information, see ",i="Internet Explorer 11 will no longer be supported by various SAP UI technologies in newer releases",a="https://blogs.sap.com/2021/02/02/internet-explorer-11-will-no-longer-be-supported-by-various-sap-ui-technologies-in-newer-releases/";t.innerHTML='<body style="margin:0;padding:0;overflow-y:hidden;background-color:#f7f7f7;text-align:center;width:100%;position:absolute;top:50%;transform:translate(0,-50%);"><div style="color:#32363a;font-family:Arial,Helvetica,sans-serif;font-size:.875rem;">'+r+'<a href="'+a+'" style="color:#4076b4;">'+i+"</a>.</div></body>";n.margin=n.padding="0";n.width=n.height="100%";if(e.stop){e.stop()}else{document.execCommand("Stop")}throw new Error(r+a)}})(window);(function(e){"use strict";function t(e){var t=e.search(/[?#]/);return t<0?e:e.slice(0,t)}function n(e,r){r=t(r?n(r):document.baseURI);return new URL(e,r).href}function r(){}function i(e,t){Object.keys(e).forEach(function(n){t(n,e[n])})}function a(e){setTimeout(e,0)}function o(e){Promise.resolve().then(e)}var u={debug:r,info:r,warning:r,error:r,isLoggable:r};var s=r;var l;var f;var d=a;var c=true;var p=false;var g=false;var h=0;var m="./";var v;var b;var y=Object.create(null);y[""]={url:m,absoluteUrl:n(m)};var w=Object.create(null),x=Object.create(null),E=Object.create(null),j=false,A;var L=Object.create(null),q=null,I=[],O="",M=0;var D=-1;var U=D;var S=Date.now()+U;var P;var R;function _(){if(P==null){S=Date.now()+U}}function T(e){e=Number(e);var t=S-U;U=e>=-1?e:D;if(P==null){S=t+U}}function k(){if(P==null){P=new Promise(function(e){if(R==null){R=new MessageChannel;R.port2.start()}R.port2.addEventListener("message",function(){setTimeout(function(){P=null;S=Date.now()+U;e()},0)},{once:true});R.port1.postMessage(null)})}return P}function C(e){if(U<0){return e}return function(){if(P==null){e.call(undefined,arguments[0]);if(Date.now()>=S){k()}return}P.then(C(e).bind(undefined,arguments[0]))}}function N(e){if(!/\.js$/.test(e)){return undefined}e=e.slice(0,-3);if(/^jquery\.sap\./.test(e)){return e}return e.replace(/\//g,".")}function $(e){var t=e.lastIndexOf("/"),n=e.lastIndexOf(".");if(n>t){return{id:e.slice(0,n),type:e.slice(n)}}return{id:e,type:""}}var W=/(\.controller|\.fragment|\.view|\.designtime|\.support)?.js$/;function F(e){var t=W.exec(e);if(t){return{baseID:e.slice(0,t.index),subType:t[0]}}}var J=/(?:^|\/)\.+(?=\/|$)/;var H=/^\.*$/;function G(e,t){var n=e.search(J),r,i,a,o,u;if(n<0){return e}if(n===0){if(t==null){throw new Error("relative name not supported ('"+e+"'")}e=t.slice(0,t.lastIndexOf("/")+1)+e}r=e.split("/");for(a=0,o=0,u=r.length;a<u;a++){i=r[a];if(H.test(i)){if(i==="."||i===""){continue}else if(i===".."){if(o===0){throw new Error("Can't navigate to parent of root ('"+e+"')")}o--}else{throw new Error("Illegal path segment '"+i+"' ('"+e+"')")}}else{r[o++]=i}}r.length=o;return r.join("/")}function X(e,r){e=String(e||"");if(r==null){if(e){if(y[e]){delete y[e];u.info("registerResourcePath ('"+e+"') (registration removed)")}return}r=m;u.info("registerResourcePath ('"+e+"') (default registration restored)")}r=t(String(r));if(r.slice(-1)!=="/"){r+="/"}y[e]={url:r,absoluteUrl:n(r)}}function B(e,t){var n=e,r=e.length,i;while(r>0&&!y[n]){r=n.lastIndexOf("/");n=r>0?n.slice(0,r):""}s((r>0||n==="")&&y[n],"there always must be a mapping");i=y[n].url+e.slice(r+1);if(i.slice(-1)==="/"){i=i.slice(0,-1)}return i+(t||"")}function z(){return h}function Y(e,r){var i,a,o;e=t(n(e));for(i in y){a=y[i].absoluteUrl.slice(0,-1);if(e.lastIndexOf(a,0)===0){o=i+e.slice(a.length);if(o.charAt(0)==="/"){o=o.slice(1)}if(!r||L[o]&&L[o].data!=undefined){return o}}}}function K(e){var t,n;if(e!=null){e=$(e).id;t=e.length;n=w[e];while(t>0&&n==null){t=e.lastIndexOf("/");if(t>0){e=e.slice(0,t);n=w[e]}}}return n||w["*"]}function Q(e,t){var n=K(t),r,i;e=G(e,t);if(n!=null){r=$(e).id;i=r.length;while(i>0&&n[r]==null){i=r.lastIndexOf("/");r=i>0?r.slice(0,i):""}if(i>0){if(u.isLoggable()){u.debug("module ID "+e+" mapped to "+n[r]+e.slice(i))}return n[r]+e.slice(i)}}return e}function V(e,t,n,r){for(var i=0;e&&i<n;i++){if(!e[t[i]]&&r){e[t[i]]={}}e=e[t[i]]}return e}function Z(t){var n=t?t.split("."):[];if(h&&n.length>1){u.error("[nosync] getGlobalProperty called to retrieve global name '"+t+"'")}return V(e,n,n.length)}function ee(t,n){var r=t?t.split("."):[],i;if(r.length>0){i=V(e,r,r.length-1,true);i[r[r.length-1]]=n}}function te(e){return{moduleExport:e}}function ne(e){return e.moduleExport}var re=0,ie=-1,ae=1,oe=2,ue=3,se=4,le=5,fe={};function de(e){this.name=e;this.state=re;this.settled=false;this.url=this._deferred=this.data=this.group=this.error=this.pending=null;this.content=fe}de.prototype.deferred=function(){if(this._deferred==null){var e=this._deferred={};e.promise=new Promise(function(t,n){e.resolve=t;e.reject=n});e.promise.catch(r)}return this._deferred};de.prototype.api=function(){if(this._api==null){this._exports={};this._api={id:this.name.slice(0,-3),exports:this._exports,url:this.url,config:r}}return this._api};de.prototype.ready=function(e){s(!this.settled,"Module "+this.name+" is already settled");this.state=se;this.settled=true;if(arguments.length>0){this.content=e}this.deferred().resolve(te(this.value()));if(this.aliases){e=this.value();this.aliases.forEach(function(t){de.get(t).ready(e)})}};de.prototype.failWith=function(e,t){var n=ve(e,this,t);this.fail(n);return n};de.prototype.fail=function(e){s(!this.settled,"Module "+this.name+" is already settled");this.settled=true;if(this.state!==le){this.state=le;this.error=e;this.deferred().reject(e);if(this.aliases){this.aliases.forEach(function(t){de.get(t).fail(e)})}}};de.prototype.addPending=function(e){(this.pending||(this.pending=[])).push(e)};de.prototype.addAlias=function(e){(this.aliases||(this.aliases=[])).push(e);de.get(e).addPending(this.name)};de.prototype.preload=function(e,t,n){if(this.state===re&&!(A&&A(this.name))){this.state=ie;this.url=e;this.data=t;this.group=n}return this};de.prototype.value=function(){if(this.state===se){if(this.content===fe){var e=x[this.name],t=e&&(Array.isArray(e.exports)?e.exports[0]:e.exports);this.content=Z(t||N(this.name))}return this.content}return undefined};de.prototype.dependsOn=function(e){var t=e.name,n=Object.create(null);function r(e){if(!n[e]){n[e]=true;var i=L[e]&&L[e].pending;return Array.isArray(i)&&(i.indexOf(t)>=0||i.some(r))}return false}return this.name===t||r(this.name)};de.get=function(e){if(!L[e]){L[e]=new de(e)}return L[e]};function ce(){if(I.length>0){return I[I.length-1].name}return document.currentScript&&document.currentScript.getAttribute("data-sap-ui-module")}var pe,ge;function he(e){if(pe===e){return}if(pe){pe.amd=ge;pe=ge=undefined}pe=e;if(e&&!e.ui5){ge=pe.amd;Object.defineProperty(pe,"amd",{get:function(){var e=ce();if(e&&x[e]&&x[e].amd){u.debug("suppressing define.amd for "+e);return undefined}return ge},set:function(e){ge=e;u.debug("define.amd became "+(e?"active":"unset"))},configurable:true})}}try{Object.defineProperty(e,"define",{get:function(){return pe},set:function(e){he(e);u.debug("define became "+(e?"active":"unset"))},configurable:true})}catch(e){u.warning("could not intercept changes to window.define, ui5loader won't be able to a change of the AMD loader")}he(e.define);function me(e){return e&&e.name==="ModuleError"}function ve(e,t,n){var r="'"+t.name+"'";if(me(n)){r=r+"\n -> "+n._modules.replace(/ -> /g,"  -> ");if(e===n._template){n=n.cause}}var i=e.replace(/\{id\}/,r).replace(/\{url\}/,t.url)+(n?": "+n.message:"");var a=new Error(i);a.name="ModuleError";a.cause=n;if(n&&n.stack){a.stack=a.stack+"\nCaused by: "+n.stack}a._template=e;a._modules=r;return a}function be(e){var t;s(/\.js$/.test(e),"must be a Javascript module");t=de.get(e);if(t.state>re){return t}if(u.isLoggable()){u.debug(O+"declare module '"+e+"'")}t.state=se;return t}function ye(e,t){de.get(e).ready(t)}function we(e){var t=[],n=0,r;this.push=function(i,a,o,s){if(u.isLoggable()){u.debug(O+"pushing define() call"+(document.currentScript?" from "+document.currentScript.src:"")+" to define queue #"+n)}var l=document.currentScript&&document.currentScript.getAttribute("data-sap-ui-module");t.push({name:i,deps:a,factory:o,_export:s,guess:l});if(!r&&!e&&l==null){r=setTimeout(this.process.bind(this,null,"timer"))}};this.clear=function(){t=[];if(r){clearTimeout(r);r=null}};this.process=function(e,r){var i=u.isLoggable(),a=n++,o=t,s=null;this.clear();if(e){if(e.execError){if(i){u.debug("module execution error detected, ignoring queued define calls ("+o.length+")")}e.fail(e.execError);return}}s=e&&e.name;o.forEach(function(t){if(t.name==null){if(s!=null){t.name=s;s=null}else{if(c){var n=new Error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. ");if(e){e.fail(n)}else{throw n}}t.name="~anonymous~"+ ++M+".js";u.error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. "+"All other usages will fail in future releases or when standard AMD loaders are used. "+"Now using substitute name "+t.name)}}else if(e&&t.name===e.name){if(s==null&&!c){u.error("Duplicate module definition: both, an unnamed module and a module with the expected name exist."+"This use case will fail in future releases or when standard AMD loaders are used. ")}s=null}});if(s&&o.length>0){if(i){u.debug("No queued module definition matches the ID of the request. "+"Now assuming that the first definition '"+o[0].name+"' is an alias of '"+s+"'")}de.get(o[0].name).addAlias(s);s=null}if(i){u.debug(O+"["+r+"] "+"processing define queue #"+a+(e?" for '"+e.name+"'":"")+" with entries ["+o.map(function(e){return"'"+e.name+"'"})+"]")}o.forEach(function(e){Oe(e.name,e.deps,e.factory,e._export,true)});if(s!=null&&!e.settled){if(i){u.debug(O+"no queued module definition for the requested module found, assume the module to be ready")}e.data=undefined;e.ready()}if(i){u.debug(O+"processing define queue #"+a+" done")}}}var xe=new we;function Ee(e){var t=new XMLHttpRequest;function n(e){e=new Error(t.statusText?t.status+" - "+t.statusText:t.status);e.name="XHRLoadError";e.status=t.status;e.statusText=t.statusText;return e}t.addEventListener("load",function(r){if(t.status===200||t.status===0){e.state=oe;e.data=t.responseText}else{e.error=n()}});t.addEventListener("error",function(t){e.error=n()});t.open("GET",e.url,false);try{t.send()}catch(t){e.error=t}}window.addEventListener("error",function e(t){var n=document.currentScript&&document.currentScript.getAttribute("data-sap-ui-module");var r=n&&de.get(n);if(r&&r.execError==null){if(u.isLoggable()){u.debug("unhandled exception occurred while executing "+n+": "+t.message)}r.execError=t.error||{name:"Error",message:t.message};return false}});function je(e,t){var n;function r(t){_();if(u.isLoggable()){u.debug("JavaScript resource loaded: "+e.name)}n.removeEventListener("load",r);n.removeEventListener("error",i);xe.process(e,"onload")}function i(a){_();n.removeEventListener("load",r);n.removeEventListener("error",i);if(t){u.warning("retry loading JavaScript resource: "+e.name);if(n&&n.parentNode){n.parentNode.removeChild(n)}e.url=t;je(e,null);return}u.error("failed to load JavaScript resource: "+e.name);e.failWith("failed to load {id} from {url}",new Error("script load error"))}n=document.createElement("SCRIPT");n["s"+"rc"]=e.url;n.setAttribute("data-sap-ui-module",e.name);if(t!==undefined){if(x[e.name]&&x[e.name].amd){n.setAttribute("data-sap-ui-module-amd","true")}n.addEventListener("load",r);n.addEventListener("error",i)}document.head.appendChild(n)}function Ae(e){var t=E[e];if(Array.isArray(t)){u.debug("preload dependencies for "+e+": "+t);t.forEach(function(t){t=Q(t,e);if(/\.js$/.test(t)){Le(null,t,true)}})}}function Le(e,t,n,i,a){var o=u.isLoggable(),s=F(t),f=x[t],d,c,p,g,m;if(!s){throw new Error("can only require Javascript module, not "+t)}if(t[0]=="/"){u.error("Module names that start with a slash should not be used, as they are reserved for future use.")}d=de.get(t);if(f&&f.deps&&!i){if(o){u.debug("require dependencies of raw module "+t)}return Ie(d,f.deps,function(){return Le(e,t,n,true,a)},function(e){throw d.failWith("Failed to resolve dependencies of {id}",e)},n)}if(d.state===re&&d.group&&d.group!==t&&!a){if(o){u.debug(O+"require bundle '"+d.group+"'"+" containing '"+t+"'")}if(n){return Le(null,d.group,n).catch(r).then(function(){return Le(e,t,n,i,true)})}else{try{Le(null,d.group,n)}catch(e){if(o){u.error(O+"require bundle '"+d.group+"' failed (ignored)")}}}}if(o){u.debug(O+"require '"+t+"'"+(e?" (dependency of '"+e.name+"')":""))}if(d.state!==re){if(d.state===ue&&d.data!=null&&!n&&d.async){d.state=ie;d.async=n;d.pending=null}if(d.state===ie){d.state=oe;d.async=n;m=true;l&&l.start(t,"Require module "+t+" (preloaded)",["require"]);qe(t,n);l&&l.end(t)}if(d.state===se){if(!m&&o){u.debug(O+"module '"+t+"' has already been loaded (skipped).")}return n?Promise.resolve(te(d.value())):te(d.value())}else if(d.state===le){if(n){return d.deferred().promise}else{throw d.error}}else{if(n){if(e&&d.dependsOn(e)){if(u.isLoggable()){u.debug("cycle detected between '"+e.name+"' and '"+t+"', returning undefined for '"+t+"'")}return Promise.resolve(te(undefined))}return d.deferred().promise}if(!n&&!d.async){if(u.isLoggable()){u.debug("cycle detected between '"+(e?e.name:"unknown")+"' and '"+t+"', returning undefined for '"+t+"'")}return te(undefined)}u.warning("Sync request triggered for '"+t+"' while async request was already pending."+" Loading a module twice might cause issues and should be avoided by fully migrating to async APIs.")}}l&&l.start(t,"Require module "+t,["require"]);d.state=ae;d.async=n;c=j?["-dbg",""]:[""];if(!n){for(p=0;p<c.length&&d.state!==oe;p++){d.url=B(s.baseID,c[p]+s.subType);if(o){u.debug(O+"loading "+(c[p]?c[p]+" version of ":"")+"'"+t+"' from '"+d.url+"' (using sync XHR)")}if(h){g="[nosync] loading module '"+d.url+"'";if(h===1){u.error(g)}else{throw new Error(g)}}Re.load({completeLoad:r,async:false},d.url,s.baseID);Ee(d)}if(d.state===ae){d.failWith("failed to load {id} from {url}",d.error)}else if(d.state===oe){qe(t,n)}l&&l.end(t);if(d.state!==se){throw d.error}return te(d.value())}else{d.url=B(s.baseID,c[0]+s.subType);var v=j?B(s.baseID,c[1]+s.subType):d.url;if(u.isLoggable()){u.debug(O+"loading '"+t+"' from '"+d.url+"' (using <script>)")}Re.load({completeLoad:r,async:true},v,s.baseID);je(d,v);Ae(t);return d.deferred().promise}}function qe(t,r){var i=L[t],a=u.isLoggable(),o,s,l,d,c;if(i&&i.state===oe&&typeof i.data!=="undefined"){d=q;c=xe;try{q=!r;xe=new we(true);if(a){if(typeof i.data==="string"){u.warning(O+"executing '"+t+"' (using eval)")}else{u.debug(O+"executing '"+t+"'")}o=O;O=O+": "}i.state=ue;I.push({name:t,used:false});if(typeof i.data==="function"){i.data.call(e)}else if(Array.isArray(i.data)){Me.apply(null,i.data)}else{s=i.data;if(s){l=/\/\/[#@] source(Mapping)?URL=(.*)$/.exec(s);if(l&&l[1]&&/^[^/]+\.js\.map$/.test(l[2])){s=s.slice(0,l.index)+l[0].slice(0,-l[2].length)+n(l[2],i.url)}if(!l||l[1]){s+="\n//# sourceURL="+n(i.url)+"?eval"}}if(typeof f==="function"){s=f(s,t)}e.eval(s)}xe.process(i,"after eval")}catch(e){i.data=undefined;if(me(e)){i.fail(e)}else{if(e instanceof SyntaxError&&s){if(A){i.url=URL.createObjectURL(new Blob([s],{type:"text/javascript"}));je(i)}else{u.error("A syntax error occurred while evaluating '"+t+"'"+", restarting the app with sap-ui-debug=x might reveal the error location")}}i.failWith("Failed to execute {id}",e)}}finally{I.pop();if(a){O=o;u.debug(O+"finished executing '"+t+"'")}xe=c;q=d}}}function Ie(e,t,n,r,i){var a,o=[],u,s,l,f;try{if(e instanceof de){a=e.name}else{a=e;e=null}t=t.slice();for(u=0;u<t.length;u++){t[u]=Q(t[u]+".js",a)}if(e){t.forEach(function(t){if(!/^(require|exports|module)\.js$/.test(t)){e.addPending(t)}})}for(u=0;u<t.length;u++){s=t[u];if(e){switch(s){case"require.js":o[u]=te(Ue(a,true));break;case"module.js":o[u]=te(e.api());break;case"exports.js":e.api();o[u]=te(e._exports);break;default:break}}if(!o[u]){o[u]=Le(e,s,i)}}}catch(e){l=e}if(i){f=l?Promise.reject(l):Promise.all(o);return f.then(n,r)}else{if(l){r(l)}else{return n(o)}}}function Oe(t,n,r,i,a){var o=u.isLoggable();t=G(t);if(o){u.debug(O+"define('"+t+"', "+"['"+n.join("','")+"']"+")")}var s=be(t);var l=false;function f(){if(s.settled){if(s.state>=se&&a&&s.async===false){u.warning("Repeated module execution skipped after async/sync conflict for "+s.name);return true}if(c&&a){u.warning("Module '"+s.name+"' has been defined more than once. "+"All but the first definition will be ignored, don't try to define the same module again.");return true}if(!l){u.error("Module '"+s.name+"' is executed more than once. "+"This is an unsupported scenario and will fail in future versions of UI5 or "+"when a standard AMD loader is used. Don't define the same module again.");l=true}}}if(f()){return}s.content=undefined;function d(n){if(f()){return}if(o){u.debug(O+"define('"+t+"'): dependencies resolved, calling factory "+typeof r)}if(i&&h!==2){var l=t.split("/");if(l.length>1){V(e,l,l.length-1,true)}}if(typeof r==="function"){try{n=n.map(ne);var d=r.apply(e,n);if(s._api&&s._api.exports!==undefined&&s._api.exports!==s._exports){d=s._api.exports}else if(d===undefined&&s._exports){d=s._exports}s.content=d}catch(e){var c=s.failWith("failed to execute module factory for '{id}'",e);if(a){return}throw c}}else{s.content=r}if(i&&h!==2){if(s.content==null){u.error("Module '"+t+"' returned no content, but should export to global?")}else{if(o){u.debug("exporting content of '"+t+"': as global object")}var p=N(t);ee(p,s.content)}}s.ready()}Ie(s,n,a&&s.data?C(d):d,function(e){var t=s.failWith("Failed to resolve dependencies of {id}",e);if(!a){throw t}},a)}function Me(e,t,n,r){var i,a;if(typeof e==="string"){i=e+".js"}else{r=n;n=t;t=e;i=null}if(!Array.isArray(t)){r=n;n=t;if(typeof n==="function"&&n.length>0){t=["require","exports","module"].slice(0,n.length)}else{t=[]}}if(q===false||q==null&&p){xe.push(i,t,n,r);if(i!=null){var o=de.get(i);if(o.state===re){o.state=ue;o.async=true}}return}a=I.length>0?I[I.length-1]:null;if(!i){if(a&&!a.used){i=a.name;a.used=true}else{i="~anonymous~"+ ++M+".js";if(a){i=a.name.slice(0,a.name.lastIndexOf("/")+1)+i}u.error("Modules that use an anonymous define() call must be loaded with a require() call; "+"they must not be executed via script tag or nested into other modules. "+"All other usages will fail in future releases or when standard AMD loaders are used "+"or when ui5loader runs in async mode. Now using substitute name "+i)}}else if(a&&!a.used&&i!==a.name){u.debug("module names don't match: requested: "+e+", defined: ",a.name);de.get(a.name).addAlias(e)}Oe(i,t,n,r,false)}function De(e,t,n){var r=arguments;var i=typeof r[r.length-1]==="boolean";if(i){r=Array.prototype.slice.call(r,0,r.length-1)}Me.apply(this,r)}De.amd={};De.ui5={};function Ue(t,n){var r=function(r,i,a){var o;s(typeof r==="string"||Array.isArray(r),"dependency param either must be a single string or an array of strings");s(i==null||typeof i==="function","callback must be a function or null/undefined");s(a==null||typeof a==="function","error callback must be a function or null/undefined");if(typeof r==="string"){o=Q(r+".js",t);var u=de.get(o);if(n&&u.state!==ue&&u.state!==se){throw new Error("Module '"+o+"' has not been loaded yet. "+"Use require(['"+o+"']) to load it.")}return u.value()}Ie(t,r,function(t){t=t.map(ne);if(typeof i==="function"){if(p){i.apply(e,t)}else{d(function(){i.apply(e,t)})}}},function(t){if(typeof a==="function"){if(p){a.call(e,t)}else{d(function(){a.call(e,t)})}}else{throw t}},p)};r.toUrl=function(e){var n=Se(Q(e,t),e);return Pe(n)};return r}function Se(e,t){if(t.slice(-1)==="/"&&e.slice(-1)!=="/"){return e+"/"}return e}function Pe(e){if(e.indexOf("/")===0){throw new Error("The provided argument '"+e+"' may not start with a slash")}return Se(B(e),e)}var Re=Ue(null,false);var _e=Ue(null,true);function Te(e){e=Q(e+".js");if(u.isLoggable()){u.warning("sync require of '"+e+"'")}return ne(Le(null,e,false))}function ke(e,t,n,r){if(typeof e!=="string"){throw new Error("predefine requires a module name")}e=G(e);de.get(e+".js").preload("<unknown>/"+e,[e,t,n,r],null)}function Ce(e,t,n){t=t||null;n=n||"<unknown>";for(var r in e){r=G(r);de.get(r).preload(n+"/"+r,e[r],t)}}function Ne(e){var t=[ie,re,oe,se,le,ue,ae];var n={};n[ie]="PRELOADED";n[re]="INITIAL";n[ae]="LOADING";n[oe]="LOADED";n[ue]="EXECUTING";n[se]="READY";n[le]="FAILED";if(e==null){e=ie}var r=u.isLoggable("INFO")?u.info.bind(u):console.info.bind(console);var i=Object.keys(L).sort();t.forEach(function(t){if(t<e){return}var a=0;r(n[t]+":");i.forEach(function(e,i){var o=L[e];if(o.state===t){var u;if(o.state===ae){var s=o.pending&&o.pending.reduce(function(e,t){var r=de.get(t);if(r.state!==se){e.push(t+"("+n[r.state]+")")}return e},[]);if(s&&s.length>0){u="waiting for "+s.join(", ")}}else if(o.state===le){u=(o.error.name||"Error")+": "+o.error.message}r("  "+(i+1)+" "+e+(u?" ("+u+")":""));a++}});if(a===0){r("  none")}})}function $e(){var e=Object.create(null);i(y,function(t,n){e[t]=n.url});return e}function We(e,t,n,r){var i=[],a,o;if(t==null){t=true}if(t){for(a in L){o=L[a];if(o&&o.group===e){i.push(a)}}}else{if(L[e]){i.push(e)}}i.forEach(function(e){var t=L[e];if(t&&r&&e.match(/\.js$/)){ee(N(e),undefined)}if(t&&(n||t.state===ie)){delete L[e]}})}function Fe(e,t){if(e){e=Q(e)}else{e=Y(t,true)}var n=e&&L[e];if(n){n.state=oe;return n.data}else{return undefined}}function Je(){var e=Object.create(null);i(L,function(t,n){e[t]={state:n.state,ui5:N(t)}});return e}function He(e,t){e=Q(e);var n=Le(null,e,true).then(ne);return t?n.catch(r):n}var Ge={baseUrl:function(e){X("",e)},paths:X,shim:function(e,t){if(Array.isArray(t)){t={deps:t}}x[e+".js"]=t},amd:function(t){t=!!t;if(g!==t){g=t;if(t){v=e.define;b=e.require;e.define=De;e.require=_e;p=true}else{e.define=v;e.require=b}}},async:function(e){if(p&&!e){throw new Error("Changing the ui5loader config from async to sync is not supported. Only a change from sync to async is allowed.")}p=!!e},bundles:function(e,t){e+=".js";t.forEach(function(t){de.get(t+".js").group=e})},bundlesUI5:function(e,t){t.forEach(function(t){de.get(t).group=e})},debugSources:function(e){j=!!e},depCache:function(e,t){E[e+".js"]=t.map(function(e){return e+".js"})},depCacheUI5:function(e,t){E[e]=t},ignoreBundledResources:function(e){if(e==null||typeof e==="function"){A=e}},map:function(e,t){if(t==null){delete w[e]}else if(typeof t==="string"){w["*"][e]=t}else{w[e]=w[e]||Object.create(null);i(t,function(t,n){w[e][t]=n})}},reportSyncCalls:function(e){if(e===0||e===1||e===2){h=e}},noConflict:function(e){u.warning("Config option 'noConflict' has been deprecated, use option 'amd' instead, if still needed.");Ge.amd(!e)}};var Xe={baseUrl:Ge.baseUrl,paths:function(e,t){X(e,n(t,B("")+"/"))},map:Ge.map,shim:Ge.shim};function Be(e,t){function n(e,n){var r=t[e];if(typeof r==="function"){if(r.length===1){r(n)}else if(n!=null){i(n,r)}}else{u.warning("configuration option "+e+" not supported (ignored)")}}if(e.baseUrl){n("baseUrl",e.baseUrl)}i(e,function(e,t){if(e!=="baseUrl"){n(e,t)}})}function ze(e){if(e===undefined){return{amd:g,async:p,noConflict:!g}}Be(e,Ge)}function Ye(e){if(e===undefined){return undefined}Be(e,Xe)}Re.preload=Ce;Re.load=function(e,t,n){};var Ke={amdDefine:De,amdRequire:_e,config:ze,declareModule:function(e){be(G(e))},defineModuleSync:ye,dump:Ne,getAllModules:Je,getModuleContent:Fe,getModuleState:function(e){return L[e]?L[e].state:re},getResourcePath:B,getSyncCallBehavior:z,getUrlPrefixes:$e,loadJSResourceAsync:He,resolveURL:n,guessResourceName:Y,toUrl:Pe,unloadResources:We};Object.defineProperties(Ke,{logger:{get:function(){return u},set:function(e){u=e}},measure:{get:function(){return l},set:function(e){l=e}},assert:{get:function(){return s},set:function(e){s=e}},translate:{get:function(){return f},set:function(e){f=e}},callbackInMicroTask:{get:function(){return d===o},set:function(e){d=e?o:a}},maxTaskDuration:{get:function(){return U},set:T}});e.sap=e.sap||{};sap.ui=sap.ui||{};sap.ui.loader={config:ze,_:Ke};_e.config=Ye;sap.ui.define=Me;sap.ui.predefine=ke;sap.ui.require=Re;sap.ui.requireSync=Te})(window);
//@ui5-bundle-raw-include ui5loader-autoconfig.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){"use strict";var r=window.sap&&window.sap.ui&&window.sap.ui.loader,e=window["sap-ui-config"]||{},i=new URLSearchParams(window.location.search),t,a,s,u,p,o,d,n=false;function y(r,e){var i=r&&r.getAttribute("src"),s=e.exec(i);if(s){t=s[1]||"";o=r;d=i;a=/sap-ui-core-nojQuery\.js(?:[?#]|$)/.test(i);return true}}function l(r){return r&&r[r.length-1]!=="/"?r+"/":r}if(r==null){throw new Error("ui5loader-autoconfig.js: ui5loader is needed, but could not be found")}if(!y(document.querySelector("SCRIPT[src][id=sap-ui-bootstrap]"),/^((?:[^?#]*\/)?resources\/)/)){u=/^([^?#]*\/)?(?:sap-ui-(?:core|custom|boot|merged)(?:-[^?#/]*)?|jquery.sap.global|ui5loader(?:-autoconfig)?)\.js(?:[?#]|$)/;s=document.scripts;for(p=0;p<s.length;p++){if(y(s[p],u)){break}}}if(typeof e==="object"&&typeof e.resourceRoots==="object"&&typeof e.resourceRoots[""]==="string"){t=e.resourceRoots[""]}if(t==null){throw new Error("ui5loader-autoconfig.js: could not determine base URL. No known script tag and no configuration found!")}(function(){var r;try{r=window.localStorage.getItem("sap-ui-reboot-URL")}catch(r){}if(/^(true|x|X)$/.test(i.get("sap-bootstrap-debug"))){debugger}if(r){var e=l(t)+"sap/ui/core/support/debugReboot.js";document.write('<script src="'+e+'"><\/script>');var a=new Error("This is not a real error. Aborting UI5 bootstrap and rebooting from: "+r);a.name="Restart";throw a}})();(function(){var e=i.get("sap-ui-debug");try{e=e||window.localStorage.getItem("sap-ui-debug")}catch(r){}e=e||o&&o.getAttribute("data-sap-ui-debug");if(typeof e==="string"){if(/^(?:false|true|x|X)$/.test(e)){e=e!=="false"}}else{e=!!e}if(/-dbg\.js([?#]|$)/.test(d)){window["sap-ui-loaddbg"]=true;e=e||true}window["sap-ui-debug"]=e;window["sap-ui-optimized"]=window["sap-ui-optimized"]||/\.getAttribute/.test(c)&&!/oBootstrapScript/.test(c);if(window["sap-ui-optimized"]&&e){window["sap-ui-loaddbg"]=true;if(e===true&&!window["sap-ui-debug-no-reboot"]){var a;if(d!=null){a=d.replace(/\/(?:sap-ui-cachebuster\/)?([^\/]+)\.js/,"/$1-dbg.js")}else{a=l(t)+"sap-ui-core.js"}r.config({amd:false});window["sap-ui-optimized"]=false;if(r.config().async){var s=document.createElement("script");s.src=a;document.head.appendChild(s)}else{document.write('<script src="'+a+'"><\/script>')}var u=new Error("This is not a real error. Aborting UI5 bootstrap and restarting from: "+a);u.name="Restart";throw u}}function p(r){if(!/\/\*\*\/$/.test(r)){r=r.replace(/\/$/,"/**/")}return r.replace(/\*\*\/|\*|[[\]{}()+?.\\^$|]/g,function(r){switch(r){case"**/":return"(?:[^/]+/)*";case"*":return"[^/]*";default:return"\\"+r}})}var n;if(typeof e==="string"){var y="^(?:"+e.split(/,/).map(p).join("|")+")",h=new RegExp(y);n=function(r){return h.test(r)};r._.logger.debug("Modules that should be excluded from preload: '"+y+"'")}else if(e===true){n=function(){return true};r._.logger.debug("All modules should be excluded from preload")}r.config({debugSources:!!window["sap-ui-loaddbg"],ignoreBundledResources:n})})();function c(r,t,a){var s=i.get("sap-ui-"+r);if(s!=null&&(a==null||a.test(s))){return s}var u=o&&o.getAttribute("data-sap-ui-"+r.toLowerCase());if(u!=null&&(a==null||a.test(u))){return u}if(Object.prototype.hasOwnProperty.call(e,r)&&(a==null||a.test(e[r]))){return e[r]}if(r.slice(0,3)!=="xx-"){return c("xx-"+r,t,a)}return t}function h(r,e){return/^(?:true|x|X)$/.test(c(r,e,/^(?:true|x|X|false)$/))}if(h("async",false)){r.config({async:true})}r._.maxTaskDuration=c("xx-maxLoaderTaskDuration");n=h("amd",!h("noLoaderConflict",true));r.config({baseUrl:t,amd:n,map:{"*":{blanket:"sap/ui/thirdparty/blanket",crossroads:"sap/ui/thirdparty/crossroads",d3:"sap/ui/thirdparty/d3",handlebars:"sap/ui/thirdparty/handlebars",hasher:"sap/ui/thirdparty/hasher",IPv6:"sap/ui/thirdparty/IPv6",jquery:"sap/ui/thirdparty/jquery",jszip:"sap/ui/thirdparty/jszip",less:"sap/ui/thirdparty/less",OData:"sap/ui/thirdparty/datajs",punycode:"sap/ui/thirdparty/punycode",SecondLevelDomains:"sap/ui/thirdparty/SecondLevelDomains",sinon:"sap/ui/thirdparty/sinon",signals:"sap/ui/thirdparty/signals",URI:"sap/ui/thirdparty/URI",URITemplate:"sap/ui/thirdparty/URITemplate",esprima:"sap/ui/documentation/sdk/thirdparty/esprima"}},shim:{"sap/ui/thirdparty/bignumber":{amd:true,exports:"BigNumber"},"sap/ui/thirdparty/blanket":{amd:true,exports:"blanket"},"sap/ui/thirdparty/caja-html-sanitizer":{amd:false,exports:"html"},"sap/ui/thirdparty/crossroads":{amd:true,exports:"crossroads",deps:["sap/ui/thirdparty/signals"]},"sap/ui/thirdparty/d3":{amd:true,exports:"d3"},"sap/ui/thirdparty/datajs":{amd:true,exports:"OData"},"sap/ui/thirdparty/handlebars":{amd:true,exports:"Handlebars"},"sap/ui/thirdparty/hasher":{amd:true,exports:"hasher",deps:["sap/ui/thirdparty/signals"]},"sap/ui/thirdparty/IPv6":{amd:true,exports:"IPv6"},"sap/ui/thirdparty/iscroll-lite":{amd:false,exports:"iScroll"},"sap/ui/thirdparty/iscroll":{amd:false,exports:"iScroll"},"sap/ui/thirdparty/jquery":{amd:true,exports:"jQuery",deps:["sap/ui/thirdparty/jquery-compat"]},"sap/ui/thirdparty/jqueryui/jquery-ui-datepicker":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-core"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-draggable":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-mouse"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-droppable":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-mouse","sap/ui/thirdparty/jqueryui/jquery-ui-draggable"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-effect":{deps:["sap/ui/thirdparty/jquery"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-mouse":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-core","sap/ui/thirdparty/jqueryui/jquery-ui-widget"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-position":{deps:["sap/ui/thirdparty/jquery"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-resizable":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-mouse"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-selectable":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-mouse"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-sortable":{deps:["sap/ui/thirdparty/jqueryui/jquery-ui-mouse"],exports:"jQuery"},"sap/ui/thirdparty/jqueryui/jquery-ui-widget":{deps:["sap/ui/thirdparty/jquery"],exports:"jQuery"},"sap/ui/thirdparty/jquery-mobile-custom":{amd:true,deps:["sap/ui/thirdparty/jquery","sap/ui/Device"],exports:"jQuery.mobile"},"sap/ui/thirdparty/jszip":{amd:true,exports:"JSZip"},"sap/ui/thirdparty/less":{amd:true,exports:"less"},"sap/ui/thirdparty/mobify-carousel":{amd:false,exports:"Mobify"},"sap/ui/thirdparty/qunit-2":{amd:false,exports:"QUnit"},"sap/ui/thirdparty/punycode":{amd:true,exports:"punycode"},"sap/ui/thirdparty/RequestRecorder":{amd:true,exports:"RequestRecorder",deps:["sap/ui/thirdparty/URI","sap/ui/thirdparty/sinon"]},"sap/ui/thirdparty/require":{exports:"define"},"sap/ui/thirdparty/SecondLevelDomains":{amd:true,exports:"SecondLevelDomains"},"sap/ui/thirdparty/signals":{amd:true,exports:"signals"},"sap/ui/thirdparty/sinon":{amd:true,exports:"sinon"},"sap/ui/thirdparty/sinon-4":{amd:true,exports:"sinon"},"sap/ui/thirdparty/sinon-server":{amd:true,exports:"sinon"},"sap/ui/thirdparty/URI":{amd:true,exports:"URI"},"sap/ui/thirdparty/URITemplate":{amd:true,exports:"URITemplate",deps:["sap/ui/thirdparty/URI"]},"sap/ui/thirdparty/vkbeautify":{amd:false,exports:"vkbeautify"},"sap/ui/thirdparty/zyngascroll":{amd:false,exports:"Scroller"},"sap/ui/demokit/js/esprima":{amd:true,exports:"esprima"},"sap/ui/documentation/sdk/thirdparty/esprima":{amd:true,exports:"esprima"},"sap/viz/libs/canvg":{deps:["sap/viz/libs/rgbcolor"]},"sap/viz/libs/rgbcolor":{},"sap/viz/libs/sap-viz":{deps:["sap/viz/library","sap/ui/thirdparty/jquery","sap/ui/thirdparty/d3","sap/viz/libs/canvg"]},"sap/viz/libs/sap-viz-info-charts":{deps:["sap/viz/libs/sap-viz-info-framework"]},"sap/viz/libs/sap-viz-info-framework":{deps:["sap/ui/thirdparty/jquery","sap/ui/thirdparty/d3"]},"sap/viz/ui5/container/libs/sap-viz-controls-vizcontainer":{deps:["sap/viz/libs/sap-viz","sap/viz/ui5/container/libs/common/libs/rgbcolor/rgbcolor_static"]},"sap/viz/ui5/controls/libs/sap-viz-vizframe/sap-viz-vizframe":{deps:["sap/viz/libs/sap-viz-info-charts"]},"sap/viz/ui5/controls/libs/sap-viz-vizservices/sap-viz-vizservices":{deps:["sap/viz/libs/sap-viz-info-charts"]},"sap/viz/resources/chart/templates/standard_fiori/template":{deps:["sap/viz/libs/sap-viz-info-charts"]}}});var m=r._.defineModuleSync;m("ui5loader.js",null);m("ui5loader-autoconfig.js",null);if(a&&typeof jQuery==="function"){m("sap/ui/thirdparty/jquery.js",jQuery);if(jQuery.ui&&jQuery.ui.position){m("sap/ui/thirdparty/jqueryui/jquery-ui-position.js",jQuery)}}var f=o&&o.getAttribute("data-sap-ui-main");if(f){sap.ui.require(f.trim().split(/\s*,\s*/))}})();
sap.ui.requireSync("sap/ui/core/Core");
// as this module contains the Core, we ensure that the Core has been booted
sap.ui.getCore().boot && sap.ui.getCore().boot();
//# sourceMappingURL=sap-ui-core-lean.js.map
