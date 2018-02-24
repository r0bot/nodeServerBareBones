import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from './home/home-page';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Hello from react {this.props.test}!</h2>
        <HomePage />
      </section>
    );
  }
}

App.propTypes = {
  test: PropTypes.string.isRequired
};
