import React, { Component } from 'react';
import PropTypes from 'prop-types';
import values from 'lodash/values';

import ToggleWidget from './toggle-widget';
import GraphWidget from './graph-widget';
import { WidgetType, MaxPlottedPoints } from '../../constants/widgets';
import dataStreamService from '../../services/data-stream-service';

export default class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false
    };
  }

  _appendData(dataSoFar, dataToAdd) { // TODO: optimize. also, maybe just for graph?
    dataSoFar = dataSoFar || [];
    let truncateCount = 0;
    const newCount = dataSoFar.length + dataToAdd.length;
    if (newCount > MaxPlottedPoints) {
      truncateCount = newCount - MaxPlottedPoints;
    }
    return dataSoFar.concat(dataToAdd).slice(truncateCount);
  }

  componentWillMount() {
    dataStreamService.connectToDataStream(this.props.id)
      .subscribe((data) => {
        if (!this.state.hasLoaded) {
          this.setState({
            hasLoaded: true
          });
        }
        this.setState((state) => ({ data: this._appendData(state.data, data) }));
      });
  }

  getMarkup() {
    switch (this.props.type) {
      case WidgetType.Toggle:
        return (<ToggleWidget {...this.props} data={this.state.data} />);
      case WidgetType.Graph:
        return (<GraphWidget {...this.props} data={this.state.data} />);
      default:
        throw new Error(`Unexpected widget type: ${this.props.type}`);
    }
  }

  render() {
    if (this.state.hasLoaded) {
      return this.getMarkup();
    }
    return (
      <span>Loading...</span> // TODO: a loading component
    );
  }
}

Widget.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(values(WidgetType))
};
