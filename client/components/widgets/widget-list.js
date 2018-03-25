import React from 'react';
import PropTypes from 'prop-types';

import renderWidget from './widget-renderer';

const WidgetList = ({ widgets }) => {
  return (
    <div>
      {widgets && widgets.map((w) => {
        return <span key={w._id}>{renderWidget(w)}</span>
      })}
      {(!widgets || !widgets.length) && <div><span>No widgets yet</span></div>}
    </div>
  );
};

WidgetList.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object)
};

export default WidgetList;
