import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  render() {
    const { component: ComponentToRender, ...rest } = this.props;

    const redirect = <Redirect to={{ pathname: '/login', state: { from: this.props.location.state && this.props.location.state.from } }} />;
    const componentMarkup = <ComponentToRender {...rest} />;

    if (this.props.userAuthenticated) {
      return componentMarkup;
    }

    return redirect;
  }
}

function mapStateToProps(state) {
  const location = state.location && state.location.state;
  return {
    userAuthenticated: !!state.user.authenticated,
    from: location || { pathname: '/home' },
  };
}

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.object
  }),
  component: PropTypes.func, // TODO: better validation
  userAuthenticated: PropTypes.bool
};
