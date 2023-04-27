import List from 'sap/m/List';
import StandardListItem from 'sap/m/StandardListItem';
import { URLHelper } from 'sap/m/library';
import Event from 'sap/ui/base/Event';
import JSONModel from 'sap/ui/model/json/JSONModel';

const oModel = new JSONModel(['ODataFetch', 'Text', 'Toast']);

const oList = new List({
  itemPress: (oEvent: Event) => {
    const oSource = oEvent.getParameter('listItem') as StandardListItem;
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
