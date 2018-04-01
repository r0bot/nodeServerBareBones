const widgetsMock = [ // TODO: remove
  { id: '1', type: 'toggle', title: 'toggle 1', enabled: true },
  { id: '2', type: 'toggle', title: 'toggle 2', enabled: true },
  { id: '3', type: 'toggle', title: 'toggle 3', enabled: false },
  { id: '4', type: 'graph', title: 'graph', dataOptions: { valuesKey: 'value', xKey: 'timestamp', yKey: 'y' }, enabled: false },
  { id: '5', type: 'graph', title: 'graph', dataOptions: { valuesKey: 'value', xKey: 'timestamp', yKey: 'y' }, enabled: false },
  { id: '6', type: 'graph', title: 'graph', dataOptions: { valuesKey: 'value', xKey: 'timestamp', yKey: 'y' }, enabled: false }
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
