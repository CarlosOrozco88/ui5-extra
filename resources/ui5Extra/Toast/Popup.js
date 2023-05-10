sap.ui.define(["./library","sap/ui/base/ManagedObject","sap/ui/core/IconPool"],function(t,e,s){const n=t["State"];const o="ui5Extra-notifications";const a=1e3;const i=e.extend("ui5Extra.Toast.Popup",{metadata:{library:"ui5Extra.Toast",properties:{title:{type:"string",group:"Appearance",defaultValue:""},text:{type:"string",group:"Appearance",defaultValue:""},maxLines:{type:"int",group:"Appearance",defaultValue:3},duration:{type:"int",group:"Appearance",defaultValue:3e3},state:{type:"ui5Extra.Toast.State",group:"Misc",defaultValue:n.None},showLoadBar:{type:"boolean",group:"Appearance",defaultValue:true},showClose:{type:"boolean",group:"Appearance",defaultValue:true},icon:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},iconClose:{type:"sap.ui.core.URI",group:"Data",defaultValue:"sap-icon://decline"}},events:{onClose:{}}},constructor:function t(s,n){e.prototype.constructor.call(this,s,n)},show:async function t(){const e=this.createPopup();this.setContent(e);const s=this.createULArea();const n=this.getContent();if(!n)throw Error("No static area created");s.append(n);await this.wait();e.classList.add("show");this.autoClose();await new Promise(t=>{this.resolver=t})},autoClose:function t(){const e=this.getDuration();if(e<=0)return;this._closeTimeout=setTimeout(()=>{this.close()},e||3e3)},close:async function t(){const e=this.getContent();if(!e)return;e.classList.add("hide");e.classList.remove("show");await this.wait(250);if(this.resolver){this.fireOnClose();this.resolver()}clearTimeout(this._closeTimeout);e.remove();this.destroy(true);this.cleanULArea()},createPopup:function t(){const e=this.getState();const s=document.createElement("li");s.classList.add("Popup");s.classList.add(`state-${e.toLowerCase()}`);const n=this.createIcon();if(n){s.classList.add("show-icon");s.append(n)}const o=this.createBody();s.append(o);const a=this.createProgress();if(a)s.append(a);const i=this.createClose();if(i){s.classList.add("show-close");s.append(i)}return s},createIcon:function t(){let e;const s=this.getState();const o=s!==n.None?`message-${s.toLowerCase()}`:"";const a=this.getIcon()||o;if(a){e=document.createElement("span");e.classList.add("Icon");e.classList.add("sapUiIcon");const t=this.getIconInfo(a);if(t){e.style.fontFamily=t.fontFamily;e.setAttribute("data-sap-ui-icon-content",t.content)}}return e},createBody:function t(){const e=document.createElement("div");e.classList.add("Body");const s=this.getTitle();if(s){const t=document.createElement("h1");t.classList.add("Title");t.classList.add("sapMTitle");t.classList.add("sapMTitleStyleH4");t.setAttribute("title",s);t.innerText=s;e.append(t)}const n=this.getText();const o=document.createElement("span");o.classList.add("Message");o.classList.add("sapMLabel");const a=this.getMaxLines();o.style.webkitLineClamp=`${a}`;o.setAttribute("title",n);o.innerText=n;e.append(o);return e},createProgress:function t(){let e;const s=this.getDuration();const n=this.getShowLoadBar();if(s>0&&n){let t=s-250;if(t<0)t=0;e=document.createElement("div");e.classList.add("Progress");const n=document.createElement("div");n.classList.add("Loader");n.style.animationDuration=`${t}ms`;e.append(n)}return e},createClose:function t(){const e=this.getShowClose();const s=this.getDuration();let n;if(e||s<=0){n=document.createElement("span");n.classList.add("Close");n.classList.add("sapUiIcon");n.classList.add("sapUiIconPointer");const t=this.getIconClose();const e=this.getIconInfo(t);n.setAttribute("data-sap-ui-icon-content",e.content);n.style.fontFamily=e.fontFamily;n.addEventListener("click",()=>{this.close()})}return n},setContent:function t(e){this.oContent=e;return this},getContent:function t(){return this.oContent},createULArea:function t(){const e=sap.ui.getCore().getStaticAreaRef();let s=document.getElementById(o);if(!s){s=document.createElement("ul");s.id=o;s.classList.add("Notifications");e.append(s)}return s},cleanULArea:function t(){const e=document.getElementById(o);if(e&&!e.hasChildNodes()){e.remove()}},setDuration:function t(e){if(e>0&&e<a)e=a;this.setProperty("duration",e)},getIconInfo:function t(e){return s.getIconInfo(e)},wait:function t(e=0){return new Promise(t=>{setTimeout(t,e)})}});return i});
//# sourceMappingURL=Popup.js.map