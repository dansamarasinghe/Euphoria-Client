import React, { Component } from 'react'

import SignIn from './components/SignIn'
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NoMatch from './views/user/NoMatch';
import Feed from './views/user/Feed';
import Counselors from './views/user/Counselors';
export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/user/login" component={SignIn}/>
              <Route exact path="/user/signup" component={SignUpPage}/>
              <Route exact path="/user/homepage" component={HomePageUser}/>
              <Route exact path="/user/feed" component={HomePageUser}/>
              <Route exact path="/user/counselors" component={Counselors}/>
              <Route component={NoMatch}/>
            </Switch>
        )
    }
}
