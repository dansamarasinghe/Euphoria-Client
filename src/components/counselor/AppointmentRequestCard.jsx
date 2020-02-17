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
        console.log(this.state.appointment)
    }

    onApprove = () => {
        let appointment=this.state.appointment;
        appointment.status = "ACCEPTED";
        axios.post('http://localhost:8080/api/counselor/appointments',
            {appointmentRequest:appointment},
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            this.setState({
                status: "ACCEPTED"
            })
        }).catch((err) => {
            console.log(err);
        })
    };

    onReject = () => {

        this.setState({
            status: "REJECTED"
        })
    }

    render() {
        return (
            <Grid item xs={6}>

                {/*Card-Start*/}
                <Card key={this.props.keyValue}>
                    <CardHeader
                        title={this.state.appointment.id.user.firstname + " " + this.state.appointment.id.user.lastname}
                        subheader={this.state.appointment.id.user.email}
                    />
                    <hr/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Grid item xs={12}>
                                    <Typography color={"textSecondary"} style={{fontSize: "1em"}}>
                                        Requested at {Date()}
                                    </Typography>
                                </Grid>
                                {/*<Grid item xs={12}>*/}
                                {/*    <Typography style={{fontSize: "1em"}}>*/}

                                {/*    </Typography>*/}
                                {/*</Grid>*/}

                                <Grid item xs={12}>
                                    <Typography style={{fontSize: "1em"}}>
                                        {this.state.status}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={8}>
                                <Typography variant={"body1"} color={"textPrimary"}>
                                    {this.state.appointment.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardActions style={{float: "right"}}>
                        {/*<Button onClick={this.handleClick}>Approve</Button>*/}
                        <Button onClick={this.onApprove}>Approve</Button>
                        <Button onClick={this.onReject}>Reject</Button>
                    </CardActions>
                </Card>
                {/*Card-End*/}

            </Grid>
        );
    };
}

export default AppointmentRequestCard;