import React, { Component } from 'react'
import SignUpFormUser from './SignUpFormUser';
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux';
import {userSignUpRequest} from '../actions/signUpActions';
import PropTypes from 'prop-types';

class SignUpPage extends Component {
    render() {
        const {userSignUpRequest}=this.props;
        return (
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh' }}
                >

                <Grid item xs={3} >
                    <h1>Welcome</h1>
                </Grid>   
                <Grid item xs={3} style={{ minWidth: '50vh' }}>
                    <SignUpFormUser userSignUpRequest={userSignUpRequest} />
                </Grid>   

            </Grid> 
            
        )
    }
    
}

SignUpFormUser.propTypes={
    userSignUpRequest : PropTypes.func.isRequired
}

export default connect(null,{userSignUpRequest})(SignUpPage);