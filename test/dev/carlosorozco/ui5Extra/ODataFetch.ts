import ODataFetch from 'dev/carlosorozco/ui5Extra/ODataFetch';
import Button from 'sap/m/Button';
import HBox from 'sap/m/HBox';
import List from 'sap/m/List';
import StandardListItem from 'sap/m/StandardListItem';
import Grid from 'sap/ui/layout/Grid';
import JSONModel from 'sap/ui/model/json/JSONModel';

const oModel = new JSONModel({});
const hbox = new HBox({
  items: [
    new Button({
      text: 'start',
      press: () => {
        doActions();
      }
    }),
    new Button({
      text: 'triggerRead (quick click to abort previus fetch)',
      press: () => {
        doRead();
      }
    })
  ]
}).placeAt('content');
const box = new Grid({
  busyIndicatorDelay: 0,
  content: [
    new List({
      headerText: 'Read',
      items: {
        path: '/read/results',
        template: new StandardListItem({
          title: '{Name}'
        })
      }
    }),
    new List({
      headerText: 'CallFunction',
      busyIndicatorDelay: 0,
      items: {
        path: '/callfunction/results',
        template: new StandardListItem({
          title: '{Name}',
          description: '{Price}'
        })
      }
    })
  ]
})
  .setModel(oModel)
  .placeAt('content');

const oFetcher = new ODataFetch('/odata/V3/(S(3z2przqb440uhibfsibhrfhk))/OData/OData.svc/', {
  useBatch: false,
  maxDataServiceVersion: '3.0',
  disableHeadRequestForToken: true
});

function doActions() {
  doFunctionImport();
  doRead();
  doCreate();
}

async function doRead() {
  try {
    box.setBusy(true);
    const response = await oFetcher.read('/Categories', undefined, 'getter');
    const { oData, oResponse } = response;
    oModel.setProperty('/read', oData);

    console.log('doRead success');
    box.setBusy(false);
  } catch (error) {
    console.error('doRead error');
  }
}

async function doFunctionImport() {
  try {
    box.setBusy(true);
    const { oData, oResponse } = await oFetcher.callFunction('/GetProductsByRating', {
      urlParameters: {
        rating: 1
      }
    });
    oModel.setProperty('/callfunction', oData);

    console.log('doFunctionImport success');
    box.setBusy(false);
  } catch (error) {
    console.error('doFunctionImport error');
  }
}

async function doCreate() {
  try {
    box.setBusy(true);
    const { oData, oResponse } = await oFetcher.create('/Products', { Name: 'Test' });
    oModel.setProperty('/create', oData);

    console.log('doCreate success');
    box.setBusy(false);
  } catch (error) {
    console.error('doCreate error');
  }
}
