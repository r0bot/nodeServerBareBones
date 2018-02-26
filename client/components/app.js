import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <section>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
        </section>
      </section>
    );
  }
}
