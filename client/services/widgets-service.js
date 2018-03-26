const widgetsMock = [
  { _id: '1', type: 'toggle', title: 'toggle 1', enabled: true },
  { _id: '2', type: 'toggle', title: 'toggle 2', enabled: true },
  { _id: '3', type: 'toggle', title: 'toggle 3', enabled: false },
  { _id: '4', type: 'graph', title: 'graph', enabled: false }
];

// TODO: implement query
function getWidgets(/* query */) {
  return Promise.resolve(widgetsMock);
  // return Promise.resolve([{ mock: true }, {}]);
}


// TODO: maybe sensorsService - data for sensors,
// display that data in widgets
const widgetsService = {
  getWidgets
};

export default widgetsService;
