import React from 'react';
import PropTypes from 'prop-types';

const WidgetList = ({ widgets }) => {
  return (
    <div>
      {widgets}
      {(!widgets || !widgets.length) && <div><span>No widgets yet</span></div>}
    </div>
  );
};

WidgetList.propTypes = {
  widgets: PropTypes.array
};

export default WidgetList;
