import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { Card } from 'react-toolbox';
import { ToggleWidget } from '../components/widgets';

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
        {
          this.props.widgets &&
          this.props.widgets.map((w, i) => {
            return (<ToggleWidget key={i} test="abbab"></ToggleWidget>);
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return state.dashboard;
}

// function mapDispatchToProps(dispatch, ownProps) {
//   getWidgets: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// }

export default connect(mapStateToProps, actions)(DashboardPage);
