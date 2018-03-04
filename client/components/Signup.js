import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const renderField = ({
  input, type, placeholder, meta: { touched, error },
}) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>

          <Field name="username" component={renderField} type="text" placeholder="Username" />
          <Field name="email" component={renderField} type="text" placeholder="Email" />

          <Field name="password" component={renderField} type="password" placeholder="Password" />
          <Field name="repassword" component={renderField} type="password" placeholder="Repeat Password" />

          <div>
            { this.props.errorMessage && this.props.errorMessage.signup &&
            <div className="error-container">Oops! { this.props.errorMessage.signup }</div> }
          </div>

          <button type="submit" className="btn">Sign up</button>

          <div className="form-bottom">
            <p>Already signed up?</p>
            <Link to="/reduxauth/signin">Click here to sign in</Link>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (props) => {
  const errors = {};
  const fields = ['username', 'email', 'password', 'repassword'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });

  if (props.username && props.username.length < 3) {
    errors.username = 'minimum of 4 characters';
  }

  if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
    errors.email = 'please provide valid email';
  }

  if (props.password && props.password.length < 6) {
    errors.password = 'minimum 6 characters';
  }

  if (props.password !== props.repassword) {
    errors.repassword = "passwords doesn't match";
  }

  return errors;
};


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signup = reduxForm({ form: 'signup', validate })(Signup);

export default connect(mapStateToProps, actions)(Signup);
