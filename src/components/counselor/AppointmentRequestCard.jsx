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

    onStart = () => {
        let appointment = this.state.appointment;
        appointment.status = "COMPLETED";
        // console.log(appointment);
        localStorage.setItem('user',appointment.id.user);
        axios.post('http://localhost:8080/api/counselor/appointments',
            appointment,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            this.setState({
                status: "COMPLETED",
                disableActions: true,
            })
            this.history.pushState(appointment.id.user, 'login');
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {

        let actions;
        if (this.state.status === 'PENDING' || this.state.status === 'REJECTED' ) {
            actions =
                <>
                    <Button onClick={this.onApprove} disabled={this.state.disableActions}>Approve</Button>
                    <Button onClick={this.onReject} disabled={this.state.disableActions}>Reject</Button>
                </>
        } else if (this.state.status === 'ACCEPTED'){
            actions =
                <>
                    <Button onClick={this.onStart} >Start session</Button>
                </>
        } else {
            actions=<></>
        }

        let createdAt=this.state.appointment.id.createdAt;

        return (
            <Grid item xs={6}>