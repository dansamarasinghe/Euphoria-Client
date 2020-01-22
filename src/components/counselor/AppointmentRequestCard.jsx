import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {updateAppointmentStatus} from "../../actions/counselor/counselorActions";

const axios = require('axios').default;

// import { connect } from 'react-redux';