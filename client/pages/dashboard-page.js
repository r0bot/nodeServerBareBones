import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Panel } from 'react-toolbox';

// import { Redirect } from 'react-router-dom';
// import { Card } from 'react-toolbox';
import { WidgetList } from '../components/widgets';

import * as actions from '../actions/dashboard-actions';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    if (!this.props.widgets) { // their data should be live
      this.props.getWidgets();
    }

    this.onWidgetClick = this.onWidgetClick.bind(this);
  }

  onWidgetClick() {
    console.log('widget click');
  }

  render() {
    return (
      <Layout>
        <Panel>
          <h1>Dashboard</h1>
          <WidgetList widgets={this.props.widgets} onWidgetClick={this.onWidgetClick} />
        </Panel>
      </Layout>
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
