import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card } from 'react-toolbox';

import LoginForm from '../components/login-form';
import * as actions from './../actions/auth';

import loginCardTheme from '../theme/loginCard.css';

// TODO add validation with prop types
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(userData) {
    console.log(JSON.stringify(userData));
    this.props.signinUser(userData);
  }

  render() {
    const { user, from } = this.props;

    if (user.authenticated) {
      return <Redirect to={from} />;
    }
    return (
      <Card theme={loginCardTheme}>
        <LoginForm onSubmit={this.handleFormSubmit} />
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const location = state.location && state.location.state;
  return {
    from: location || { pathname: '/home' },
    user: state.user || {}
  };
}

export default connect(mapStateToProps, actions)(LoginPage);
