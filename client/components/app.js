import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Navigation, Layout, Button, Panel } from 'react-toolbox';

import * as actions from './../actions/auth';
import Footer from './footer';
import HomePage from '../pages/home-page';
import ContactsPage from '../pages/contacts-page';
import RegisterPage from '../pages/register-page';
import appBarTheme from '../theme/appBar.css';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Panel>
          <AppBar title='AIoT' leftIcon='menu' theme={appBarTheme}>
            <Navigation type='horizontal'>
              <Link to="/home"><Button icon='inbox' label='Home' flat /></Link>
              {!user.authenticated && <Link to="/register" ><Button icon='inbox' label='Register' flat /></Link>}
              {user.authenticated && <Button icon='inbox' label='Signout' flat />}
            </Navigation>
          </AppBar>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/contacts" component={ContactsPage} />
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

