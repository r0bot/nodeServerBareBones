import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Switch } from 'react-toolbox';
import widgetCardTheme from '../../theme/widgetCard.css';

const ToggleWidget = (props) => {
  return (
    <Card theme={widgetCardTheme}>
      <CardTitle title={props.title} />
      <Switch
        checked={props.enabled}
      />
    </Card>
  );
};

ToggleWidget.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  enabled: PropTypes.bool
};

export default ToggleWidget;
