sap.ui.define(["sap/m/Text","./TextRenderer","sap/ui/Device","sap/base/Log"],function(t,e,r,s){function n(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const o=n(e);const i=r["support"];const u=r["system"];const p=t.extend("ui5Extra.Text.Text",{renderer:o,metadata:{library:"ui5Extra.Text",properties:{color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},backgroundColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},fontSize:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},fontWeight:{type:"string",group:"Appearance",defaultValue:null},fontStyle:{type:"string",group:"Appearance",defaultValue:null},textDecoration:{type:"string",group:"Appearance",defaultValue:null},fontFamily:{type:"string",group:"Appearance",defaultValue:null},cursor:{type:"string",group:"Appearance",defaultValue:null}},events:{press:{}}},constructor:function e(r,s){t.prototype.constructor.call(this,r,s)},setFontWeight:function t(e){if(this.supports("font-weight",e)){this.setProperty("fontWeight",e)}return this},setFontStyle:function t(e){if(this.supports("font-style",e)){this.setProperty("fontStyle",e)}return this},setTextDecoration:function t(e){if(this.supports("text-decoration",e)){this.setProperty("textDecoration",e)}return this},setFontFamily:function t(e){if(this.supports("font-family",e)){this.setProperty("fontFamily",e)}return this},setCursor:function t(e){if(this.supports("cursor",e)){this.setProperty("cursor",e)}return this},onclick:function t(e){if(i.touch&&!u.desktop){return}if(this.hasListeners("press")){e.setMarked()}this.firePress()},ontap:function t(e){if(!(i.touch&&!u.desktop)){return}if(this.hasListeners("press")){e.setMarked()}this.firePress()},onsapenter:function t(e){if(this.hasListeners("press")){e.setMarked()}this.firePress()},supports:function t(e,r){if(!r||CSS.supports(e,r)){return true}s.error(`${r} is not a valid CSS ${e}`);return false}});return p});
//# sourceMappingURL=Text.js.map