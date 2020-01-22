import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {updateAppointmentStatus} from "../../actions/counselor/counselorActions";

const axios = require('axios').default;

// import { connect } from 'react-redux';

class AppointmentRequestCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointment: props.appointment,
            key: props.keyValue,
            status: props.appointment.status
        };
        // console.log(this.state.appointment)
    }

    onApprove = () => {
        let appointment = this.state.appointment;
        appointment.status = "ACCEPTED";
        console.log(appointment);
        axios.post('http://localhost:8080/api/counselor/appointments',
            appointment,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            this.setState({
                status: "ACCEPTED",
                disableActions: true,
            })
        }).catch((err) => {
            console.log(err);
        })
    };

    onReject = () => {
        let appointment = this.state.appointment;
        appointment.status = "REJECTED";
        console.log(appointment);
        axios.post('http://localhost:8080/api/counselor/appointments',
            appointment,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            this.setState({
                status: "REJECTED",
                disableActions: true,
            })
        }).catch((err) => {
            console.log(err);
        })
    };