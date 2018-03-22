import { RECEIVED_WIDGET_METADATA } from '../actions/dashboard-actions';

function dashboardReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVED_WIDGET_METADATA:
      return { ...state, widgets: action.widgets.slice(0) }; // TODO: cloning the array?
    default:
      return state;
  }
}

export default dashboardReducer;
