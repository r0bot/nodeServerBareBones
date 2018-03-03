import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(ev) {
    this[ev.target.name] = ev.target.value;
  }

  onSubmit(ev) {
    ev.preventDefault();

    if (this.password !== this.confirmPassword) {
      return console.error('Passwords do not match');
    }
    
    this.props.onSubmit({
      email: this.email,
      password: this.password
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="email" placeholder="Email" name="email" onChange={this.onInputChange} />
        <input type="password" placeholder="Password" name="password" onChange={this.onInputChange} />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.onInputChange} />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: propTypes.func.isRequired
};
