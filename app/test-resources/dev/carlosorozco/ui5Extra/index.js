sap.ui.define(["sap/m/List", "sap/m/StandardListItem", "sap/m/library", "sap/ui/model/json/JSONModel"], function (List, StandardListItem, sap_m_library, JSONModel) {
  const URLHelper = sap_m_library["URLHelper"];
  const oModel = new JSONModel(['ODataFetch', 'Text', 'Toast']);
  const oList = new List({
    itemPress: oEvent => {
      const oSource = oEvent.getParameter('listItem');
      const sControl = oSource.getTitle();
      const sUrl = location.href.replace('index.html', `${sControl}.html`);
      URLHelper.redirect(sUrl);
    },
    items: {
      path: '/',
      template: new StandardListItem({
        type: 'Active',
        title: '{}'
      })
    }
  });
  oList.setModel(oModel);
  oList.placeAt('content');
});