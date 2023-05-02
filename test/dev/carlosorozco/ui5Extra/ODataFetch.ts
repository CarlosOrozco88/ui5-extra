import ODataFetch from 'dev/carlosorozco/ui5Extra/ODataFetch';
import Toast from 'dev/carlosorozco/ui5Extra/Toast';
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
  // doCreate();
}

let iBusy = 0;
function setBusy(bBusy: boolean) {
  const iDif = bBusy ? 1 : -1;
  iBusy = iBusy + iDif;
  if (iBusy < 0) iBusy = 0;
  box.setBusy(iBusy > 0);
}

async function doRead() {
  try {
    setBusy(true);
    const response = await oFetcher.read('/Categories', { aborterId: 'read' });
    const { oData, oResponse } = response;
    oModel.setProperty('/read', oData);

    Toast.success('Read success');
  } catch (error: any) {
    // eslint-disable-next-line
    Toast.error(error.message);
  } finally {
    setBusy(false);
  }
}

async function doFunctionImport() {
  try {
    setBusy(true);
    const { oData, oResponse } = await oFetcher.callFunction('/GetProductsByRating', {
      aborterId: 'callFunction',
      urlParameters: {
        rating: 1
      }
    });
    oModel.setProperty('/callfunction', oData);

    Toast.success('CallFunction success');
  } catch (error: any) {
    // eslint-disable-next-line
    Toast.error(error.message);
  } finally {
    setBusy(false);
  }
}

// async function doCreate() {
//   try {
//     setBusy(true);
//     const { oData, oResponse } = await oFetcher.create('/Products', { Name: 'Test' });
//     oModel.setProperty('/create', oData);

//     console.log('doCreate success');
//   } catch (error) {
//     console.error('doCreate error');
//   } finally {
//     setBusy(false);
//   }
// }
