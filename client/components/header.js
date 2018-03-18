import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Navigation, Button } from 'react-toolbox';

import appBarTheme from '../theme/appBar.css';

function Header(props) {
  return (
    <AppBar title='AIoT' leftIcon='menu' theme={appBarTheme}>
      <Navigation type='horizontal'>
        <Link to="/home"><Button icon='inbox' label='Home' flat /></Link>
        {!props.user.authenticated && <Link to="/register" ><Button icon='inbox' label='Register' flat /></Link>}
        {!props.user.authenticated && <Link to="/login" ><Button icon='inbox' label='Login' flat /></Link>}
        {props.user.authenticated && <Button icon='inbox' label='Signout' flat onClick={this.props.signoutUser} />}
      </Navigation>
    </AppBar>
  );
}

export default Header;
