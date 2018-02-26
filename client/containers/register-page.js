// import React from 'react';
import { connect } from 'react-redux';
import RegisterPage from '../pages/register-page';

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => {
      dispatch()
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
