import dashboardService from '../services/dashboard-service';

export const RECEIVED_WIDGET_METADATA = 'RECEIVED_WIDGET_METADATA';

export function getWidgets() {
  return (dispatch) => {
    dashboardService.getWidgets()
      .then((widgets) => {
        dispatch({
          type: RECEIVED_WIDGET_METADATA,
          widgets
        });
      });
  };
}
