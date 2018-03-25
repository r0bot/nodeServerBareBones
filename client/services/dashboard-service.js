// TODO: implement query
function getWidgets(/* query */) {
  return Promise.resolve([]);
  // return Promise.resolve([{ mock: true }, {}]);
}

const dashboardService = {
  getWidgets
};

export default dashboardService;
