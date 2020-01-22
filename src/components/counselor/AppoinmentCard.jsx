import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';
class AppoinmentCard extends Component {

    handleClick=()=>{
        this.setState({'status':'Approved'})
    }