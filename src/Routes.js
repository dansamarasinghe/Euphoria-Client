import React, { Component } from 'react'

import {Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUpPage from './views/user/SignUpPage';
import HomePageUser from './views/user/HomePageUser';
import NoMatch from './views/user/NoMatch';
import Counselors from './views/user/Counselors';
import CounselorAppointments from "./views/counselor/CounselorAppointments";
import CounselorViewPatientRecords from "./views/counselor/CounselorViewPatientRecords";
import CounselorSignIn from "./views/counselor/CounselorSignIn";
import AdminDashboard from "./views/admin/AdminDashboard";
import AdminAdministrators from "./views/admin/AdminAdministrators";
import AdminCounselors from "./views/admin/AdminCounselors";
import AdminUsers from "./views/admin/AdminUsers";
import AddAdminForm from "./views/admin/AddAdminForm";
import AdminProfile from "./views/admin/AdminProfile";
import ViewPosts from "./views/admin/ViewPosts";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/user/login" component={SignIn}/>
              <Route exact path="/user/signup" component={SignUpPage}/>
              <Route exact path="/user/homepage" component={HomePageUser}/>
              <Route exact path="/user/feed" component={HomePageUser}/>
              <Route exact path="/user/counselors" component={Counselors}/>

              <Route exact path={"/counselor/appointments"} component={CounselorAppointments}/>
              <Route exact path={"/counselor/patients/records"} component={CounselorViewPatientRecords}/>
              <Route exact path={"/counselor/sign-in"} component={CounselorSignIn}/>

              <Route exact path={"/admin/dashboard"} component={AdminDashboard}/>
              <Route exact path={"/admin/administrators"} component={AdminAdministrators}/>
              <Route exact path={"/admin/counselors"} component={AdminCounselors}/>
              <Route exact path={"/admin/users"} component={AdminUsers}/>
              <Route exact path={"/admin/addAdminForm"} component={AddAdminForm}/>
              <Route exact path={"/admin/adminProfile"} component={AdminProfile}/>
              <Route exact path={"/admin/viewPosts"} component={ViewPosts}/>

              <Route component={NoMatch}/>
            </Switch>
        )
    }
}
