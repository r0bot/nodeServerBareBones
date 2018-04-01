import React from 'react';
import { Card } from 'react-toolbox';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function GraphWidget(props) {
  const {
    data,
    dataOptions: {
      valuesKey,
      xKey
    }
  } = props;

  // TODO: hardcoded height
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey={valuesKey} stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

GraphWidget.propTypes = {
  dataOptions: PropTypes.shape({
    valuesKey: PropTypes.string.isRequired,
    xKey: PropTypes.string,
    yKey: PropTypes.string
  }),
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
