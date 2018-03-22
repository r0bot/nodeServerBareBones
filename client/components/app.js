import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Panel } from 'react-toolbox';

import * as actions from './../actions/auth';
import Header from './header';
import Footer from './footer';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import LoginPage from '../pages/login-page';

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
          </Switch>
          <Footer />
        </Panel>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user || {} };
}

export default connect(mapStateToProps, actions)(App);
