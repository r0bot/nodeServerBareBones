import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Navigation, Button } from 'react-toolbox';

import appBarTheme from '../theme/appBar.css';

function Header(props) {
  return (
    <AppBar title='AIoT' theme={appBarTheme}>
      <Navigation type='horizontal'>
        <Link to="/"><Button icon='inbox' label='Home' flat /></Link>
        {!props.user.authenticated && <Link to="/register" ><Button icon='inbox' label='Register' flat /></Link>}
        {!props.user.authenticated && <Link to="/login" ><Button icon='inbox' label='Login' flat /></Link>}
        {props.user.authenticated && <Link to="/dashboard" ><Button icon='inbox' flat label='Dashboard' /></Link>}
        {props.user.authenticated && <Button icon='inbox' label='Signout' flat onClick={props.signoutUser} />}
      </Navigation>
    </AppBar>
  );
}

export default Header;
