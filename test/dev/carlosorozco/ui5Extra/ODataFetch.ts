import ODataFetch from 'dev/carlosorozco/ui5Extra/ODataFetch';
import List from 'sap/m/List';
import StandardListItem from 'sap/m/StandardListItem';
import Grid from 'sap/ui/layout/Grid';
import JSONModel from 'sap/ui/model/json/JSONModel';

const oModel = new JSONModel({});
const box = new Grid({
  content: [
    new List({
      headerText: 'Read',
      busyIndicatorDelay: 0,
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

doActions();

function doActions() {
  box.setBusy(true);
  Promise.all([doFunctionImport(), doRead(), doCreate()]).then(() => {
    box.setBusy(false);
  });
}

async function doRead() {
  try {
    const { oData, oResponse } = await oFetcher.read('/Categories');
    oModel.setProperty('/read', oData);

    console.log('doRead success');
  } catch (error) {
    console.error('doRead error');
  }
}

async function doFunctionImport() {
  try {
    const { oData, oResponse } = await oFetcher.callFunction('/GetProductsByRating', {
      urlParameters: {
        rating: 1
      }
    });
    oModel.setProperty('/callfunction', oData);

    console.log('doFunctionImport success');
  } catch (error) {
    console.error('doFunctionImport error');
  }
}

async function doCreate() {
  try {
    const { oData, oResponse } = await oFetcher.create('/Products', { Name: 'Test' });
    oModel.setProperty('/create', oData);

    console.log('doCreate success');
  } catch (error) {
    console.error('doCreate error');
  }
}
