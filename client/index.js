import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import mainReducer from './reducers';
import App from './components/app';
import HomePage from './pages/home-page';
import ContactsPage from './pages/contacts-page';
import RegisterPage from './pages/register-page';

// TODO load inital state from server (eg isUserAuthenticated as it is using server sessions)
const initialState = {};
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(mainReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
