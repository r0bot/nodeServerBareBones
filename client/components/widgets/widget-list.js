import React from 'react';
import PropTypes from 'prop-types';

import Widget from './widget';

const WidgetList = ({ widgets }) => {
  const hasWidgets = widgets && widgets.length;

  return (
    <div>
      {hasWidgets && widgets.map((w) => {
        return (<span key={w.id}>{<Widget {...w} />}</span>);
      })}
      {!hasWidgets && (<div><span>No widgets yet</span></div>)}
    </div>
  );
};

WidgetList.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object),
  readOnly: PropTypes.bool
};

export default WidgetList;
