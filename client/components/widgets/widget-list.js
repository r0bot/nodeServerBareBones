import React from 'react';

const WidgetList = ({ widgets }) => {
  return (
    <div>
      {widgets}
      {!widgets && 'No widgets yet'}
    </div>
  );
};

export default WidgetList;
