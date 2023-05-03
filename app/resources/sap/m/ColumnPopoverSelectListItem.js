/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ColumnPopoverItem","sap/m/ToggleButton","sap/m/Button","sap/m/StandardListItem","sap/m/List"],function(e,t,n,o,i){"use strict";var s=e.extend("sap.m.ColumnPopoverSelectListItem",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},events:{action:{parameters:{property:{type:"string"}}}},aggregations:{items:{type:"sap.ui.core.Item",multiple:true,singularName:"item",bindable:true}}}});s.prototype._createButton=function(e,s){var a=this.getLabel(),r=this.getItems(),l=this;if(r.length>1){var p=s.getAggregation("_popover");var u=new i;for(var g=0;g<r.length;g++){var m=new o({title:r[g].getText(),type:"Active"});u.addItem(m);m.data("key",r[g].getKey())}u.attachEvent("itemPress",function(e){p.close();var t=e.getParameter("listItem");l.fireAction({property:t.data("key")})});u.setVisible(false);p.addContent(u);return new t(e,{icon:this.getIcon(),type:"Transparent",tooltip:a,visible:this.getVisible(),press:function(){if(s._oShownCustomContent){s._oShownCustomContent.setVisible(false)}if(this.getPressed()){s._cleanSelection(this);if(u){u.setVisible(true);s._oShownCustomContent=u}}else if(u){u.setVisible(false);s._oShownCustomContent=null}}})}else{return new n(e,{icon:this.getIcon(),type:"Transparent",tooltip:a,visible:this.getVisible(),press:function(){var e=s.getAggregation("_popover");if(s._oShownCustomContent){s._oShownCustomContent.setVisible(false);s._oShownCustomContent=null;s._cleanSelection(this)}e.close();l.fireAction({property:r[0]?r[0].getKey():null})}})}};return s});
//# sourceMappingURL=ColumnPopoverSelectListItem.js.map