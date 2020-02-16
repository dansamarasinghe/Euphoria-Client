import React, { Component } from 'react'

import EditUserProfile from './views/user/EditUserProfile';
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';
import Feed from './views/user/Feed';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NoMatch from './views/user/NoMatch';
import Counselors from './views/user/Counselors';
import SignInPage from './views/user/SignInPage';
import CheckEmailPage from './views/user/CheckEmailPage';
import CounselorAppointment from './views/counselor/CounselorAppointments';
import Statistics from './views/admin/Statistics'
export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/user/login" component={SignInPage}/>
              <Route exact path="/user/signup" component={SignUpPage}/>
              <Route exact path="/user/homepage" component={HomePageUser}/>
              <Route exact path="/user/feed" component={Feed}/>
              <Route exact path="/user/counselors" component={Counselors}/>
              <Route exact path="/user/counsil" component={CounselorAppointment}/>
              <Route exact path="/user/signupsuccess" component={CheckEmailPage}/>
              <Route exact path="/user/stats" component={Statistics}/>
              <Route exact path="/user/userprofile" component={EditUserProfile}/>

              <Route component={NoMatch}/>
            </Switch>
        )
    }
}
