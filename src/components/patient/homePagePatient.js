import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class homePagePatient extends Component {
    render() {
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
                </Grid>   
                <Grid item xs={3} >
                </Grid>   

            </Grid>
        )
    }
}
