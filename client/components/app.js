import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import Header from './header';
import Footer from './footer';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Header />
        <section>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} disabled={user.authenticated} />
        </section>
        <Footer />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user || {}}
}

export default connect(mapStateToProps)(App);

