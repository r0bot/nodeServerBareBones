import React from 'react';
import { Input } from "react-toolbox/lib/input";
import { Button } from 'react-toolbox/lib/button';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

const renderField = ({ input, meta, ...props }) => (
  <Input
    { ...input }
    { ...props }
    error={ meta.touched && meta.error } />
);

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

const SignupForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="md-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>

        <Field name="username" component={renderField} type="text" label="Name" />
        <Field name="email" component={renderField} type="text" label="Email"/>

        <Field name="password" component={renderField} type="password" label="Password" />
        <Field name="repassword" component={renderField} type="password" label="Repassword" />

        <Button disabled={submitting} type="submit" className="btn">Sign up</Button>

        <div className="form-bottom">
          <p>Already signed up?</p>
          <Link to="/login">Click here to sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'signup', validate })(SignupForm);
