import React, { Component } from 'react';
import {connect} from "react-redux";
import {
  Redirect
} from "react-router-dom";

import RegisterForm from '../components/register-form';
import * as actions from './../actions/auth';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit (userData){
    console.log(JSON.stringify(userData));
    this.props.signupUser(userData);
  }

  render() {

    const { user, from } = this.props;

    if (user.authenticated) {
      return <Redirect to={from} />;
    }
    return (
      <section>
        <RegisterForm onSubmit={this.handleFormSubmit} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    from: state.location && state.location.state || { pathname: "/" },
    user: state.user || {}
  }
}

export default connect(mapStateToProps, actions)(RegisterPage);
