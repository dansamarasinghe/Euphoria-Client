import React, { Component } from 'react';
import PostBodyUser from '../../components/user/PostBodyUser';

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';

import {UserLayout} from '../../components/user/UserLayout';
import Feed from './Feed'
import NoMatch from './NoMatch'
import NavbarUser from '../../components/user/NavbarUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Jumbotron } from '../../components/user/Jumbotron';

export default class HomePageUser extends Component {
  render() {
    return (
       <React.Fragment>
        <NavbarUser></NavbarUser>
        <Jumbotron></Jumbotron>
        <UserLayout>
          <Router>
            <Switch>
              <Route exact path="/user/feed" component={Feed}/>
              <Route exact path="/user/counselors" component={Feed}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </UserLayout>
      </React.Fragment>
    )
  }
}
