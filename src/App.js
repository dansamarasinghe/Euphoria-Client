import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import SignIn from './components/SignIn'
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';

import Feed from './views/user/Feed';
import Counselors from './views/user/Counselors';
import NoMatch from './views/user/NoMatch';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Routes from './Routes';


function App() {
  return (
    <Provider store={store}>
        <React.Fragment>
          <Router history={createBrowserHistory}>
            <Routes></Routes>
          </Router>
          {/* <SignIn></SignIn> */}
          {/* <HomePageUser></HomePageUser> */}
        </React.Fragment>
      

    </Provider>
  );
}

export default App;

