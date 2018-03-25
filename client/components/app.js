import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Panel } from 'react-toolbox';

import * as actions from './../actions/auth';
import PrivateRoute from '../components/private-route';
import Header from './header';
import Footer from './footer';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import LoginPage from '../pages/login-page';
import DashboardPage from '../pages/dashboard-page';

class App extends Component {
  render() {
    return (
      <Layout>
        <Panel>
          <Header user={this.props.user} signoutUser={this.props.signoutUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
          </Switch>
          <Footer />
        </Panel>
      </Layout>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  signoutUser: PropTypes.func
};

function mapStateToProps(state) {
  return { user: state.user || {} };
}

export default connect(mapStateToProps, actions)(App);
