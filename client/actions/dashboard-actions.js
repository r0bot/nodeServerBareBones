import widgetsService from '../services/widgets-service';

export const RECEIVED_WIDGET_METADATA = 'RECEIVED_WIDGET_METADATA';

export function getWidgets() {
  return (dispatch) => {
    widgetsService.getWidgets()
      .then((widgets) => {
        dispatch({
          type: RECEIVED_WIDGET_METADATA,
          widgets
        });
      });
  };
}
