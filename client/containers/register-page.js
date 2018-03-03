// import React from 'react';
import { connect } from 'react-redux';
import RegisterPage from '../pages/register-page';

function mapStateToProps(state, ownProps) {
  return {
    
  };
}

function buildUserRegisteredAction(data) {
  return () => {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reguster: () => {
      dispatch(buildUserRegisteredAction(userdata))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
