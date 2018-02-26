import React, { Component } from 'react';
import RegisterForm from '../components/register-form';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(userData) {
    console.log('user data: ', userData);
  }

  render() {
    return (
      <section>
        <RegisterForm onSubmit={this.onFormSubmit} />
      </section>
    );
  }
}
