/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/base/Log","sap/base/util/extend","sap/ui/dom/_ready"],function(e,t,o,n){"use strict";var i={};var a=false;function r(e,t){t=t||{};var o=document.createElement(e);for(var n in t){if(t[n]){o.setAttribute(n,t[n])}}document.head.appendChild(o)}function c(e){var t=document.head.querySelectorAll(e);for(var o=0,n=t.length;o<n;o++){t[o].remove(t[o])}}i.init=function(t){if(!a){a=true;t=o({},{viewport:true,statusBar:"default",hideBrowser:true,preventScroll:true,preventPhoneNumberDetection:true,useFullScreenHeight:true,homeIconPrecomposed:false,mobileWebAppCapable:"default"},t);if(t.preventPhoneNumberDetection){r("meta",{name:"format-detection",content:"telephone=no"})}if(t.viewport){var c;var s=e.resize.height;var l=e.resize.width;c="width=device-width, initial-scale=1.0";if(e.os.ios){c+=", maximum-scale=1.0, user-scalable=no"}r("meta",{name:"viewport",content:c});if((s!==window.innerHeight||l!==window.innerWidth)&&e.resize._update){e.resize._update()}}if(t.useFullScreenHeight){n().then(function(){document.documentElement.style.height="100%"})}if(t.preventScroll&&(e.os.ios||e.os.mac&&e.browser.mobile)){n().then(function(){document.documentElement.style.position="fixed";document.documentElement.style.overflow="hidden";document.documentElement.style.height="100%";document.documentElement.style.width="100%"})}}if(t){if(t.homeIcon){var p;if(typeof t.homeIcon==="string"){p={phone:t.homeIcon,favicon:t.homeIcon}}else{p=Object.assign({},t.homeIcon);p.phone=t.homeIcon.phone||t.homeIcon.icon||p.favicon;p.favicon=p.favicon||t.homeIcon.icon||t.homeIcon.phone;p.icon=undefined}p.precomposed=t.homeIconPrecomposed||p.precomposed;i.setIcons(p)}if(t.hasOwnProperty("mobileWebAppCapable")){i.setWebAppCapable(t.mobileWebAppCapable,t.statusBar)}}};i.setIcons=function(e){if(!e||typeof e!=="object"){t.warning("Call to sap/ui/util/Mobile.setIcons() has been ignored because there were no icons given or the argument was not an object.");return}var o=e.precomposed?"-precomposed":"",n={phone:"",tablet:"152x152","phone@2":"180x180","tablet@2":"167x167"};if(e["favicon"]){c("link[rel=icon]");r("link",{rel:"icon",href:e["favicon"]})}var i=Object.keys(n).some(function(t){return e.hasOwnProperty(t)});if(i){c("[rel=apple-touch-icon]");c("[rel=apple-touch-icon-precomposed]")}for(var a in n){if(e[a]){r("link",{rel:"apple-touch-icon"+o,href:e[a],sizes:n[a]})}}};i.setWebAppCapable=function(t,o){if(!e.system.tablet&&!e.system.phone){return}var n=["","apple"],i="mobile-web-app-capable",a=t?"yes":"no",c,s,l;for(c=0;c<n.length;c++){s=n[c]?n[c]+"-"+i:i;l=document.head.querySelector('meta[name="'+s+'"]');if(l){l.setAttribute("content",a)}else{r("meta",{name:s,content:a});if(n[c]==="apple"){r("meta",{name:"apple-mobile-web-app-status-bar-style",content:o?o:"default"})}}}};return i});
//# sourceMappingURL=Mobile.js.map