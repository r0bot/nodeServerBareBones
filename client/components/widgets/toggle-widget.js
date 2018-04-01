import React from 'react';
import PropTypes from 'prop-types';
import { Card, Switch } from 'react-toolbox';
import widgetCardTheme from '../../theme/widgetCard.css';

const ToggleWidget = (props) => {
  return (
    <Card theme={widgetCardTheme}>
      <Switch
        label={props.title}
        checked={props.enabled}
      />
    </Card>
  );
};

ToggleWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default ToggleWidget;
