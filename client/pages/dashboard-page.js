import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { Card } from 'react-toolbox';
import { WidgetList } from '../components/widgets';

import * as actions from './../actions/dashboard-actions';

// TODO: add validation with prop types
class DashboardPage extends Component {
  constructor(props) {
    super(props);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.props.getWidgets();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <WidgetList widgets={this.props.widgets}></WidgetList>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  widgets: PropTypes.array,
  getWidgets: PropTypes.func
};

function mapStateToProps(state = {}) {
  return state.dashboard;
}

export default connect(mapStateToProps, actions)(DashboardPage);
