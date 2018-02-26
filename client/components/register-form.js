import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(ev) {
    this[ev.target.type] = ev.target.value;
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit({
      email: this.email,
      password: this.password
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="email" placeholder="Email" onChange={this.onInputChange} />
        <input type="password" placeholder="Password" onChange={this.onInputChange} />
        {/* TODO: confirm password field */}
        <input type="submit" value="Register" />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: propTypes.func.isRequired
};
