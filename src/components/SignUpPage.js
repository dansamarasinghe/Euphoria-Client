import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import {userSignUpRequest} from '../actions/signUpActions';

import PropTypes from 'prop-types';

import SignUpFormUser from './SignUpFormUser';
import NavBarLandingPage from './NavBarLandingPage';

class SignUpPage extends Component {
    render() {
        const {userSignUpRequest}=this.props;
        return (
            <Grid
                container
                spacing={3}
            >
                <Grid item xs={12}>
                    <NavBarLandingPage></NavBarLandingPage>
                </Grid>
                <Grid item xs={12}>
                        <Grid
                        container
                        spacing={3}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '70vh' }}
                        >

                            <Grid item xs={12} >
                                <Typography variant="h4" gutterBottom>
                                   Create your private account
                                </Typography>
                            </Grid>   
                            <Grid item xs={3} style={{ minWidth: '50vh' }}>
                                <SignUpFormUser userSignUpRequest={userSignUpRequest} />
                            </Grid>   

                        </Grid> 
                </Grid>
            
            </Grid>
            
            
        )
    }
    
}

SignUpFormUser.propTypes={
    userSignUpRequest : PropTypes.func.isRequired
}

export default connect(null,{userSignUpRequest})(SignUpPage);