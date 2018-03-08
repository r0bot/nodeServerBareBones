import React from 'react';
import { Input } from 'react-toolbox/lib/input';
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
  const fields = ['username', 'password'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });

  return errors;
};

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="md-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>

        <Field name="username" component={renderField} type="text" label="Name" />
        <Field name="password" component={renderField} type="password" label="Password" />

        <Button disabled={submitting} type="submit" className="btn">Login</Button>

        <div className="form-bottom">
          <p>Have no account?</p>
          <Link to="/register">Click here to register</Link>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'login', validate })(LoginForm);
