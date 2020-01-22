import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';
class AppoinmentCard extends Component {

    handleClick=()=>{
        this.setState({'status':'Approved'})
    }
    render() {
        return (
            <Grid item xs={4}>

                {/*Card-Start*/}
                <Card>
                    <CardHeader
                        title={this.props.user}
                        subheader={this.props.username}
                    />