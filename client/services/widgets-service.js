// TODO: implement query
const widgetsMock = [
  { _id: '1', title: 'widget 1', enabled: true },
  { _id: '2', title: 'widget 2', enabled: true },
  { _id: '3', title: 'widget 3', enabled: false }
];

function getWidgets(/* query */) {
  return Promise.resolve(widgetsMock);
  // return Promise.resolve([{ mock: true }, {}]);
}

const widgetsService = {
  getWidgets
};

export default widgetsService;
