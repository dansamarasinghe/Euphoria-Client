import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import axios from 'axios';
import * as actions from "../../actions";
import {connect} from "react-redux";

class AppointmentRequestCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.props.getAppointments(null);
        console.log(this.props.appointments);
    }

    handleClick = () => {
        this.setState({'status': 'Approved'})
    };

    approve = (id) => {
        console.log(id);
        this.props.approveAppointment(id);
    };

    render() {
        return (
            <div>
                <CounselorNavBar></CounselorNavBar>

                <Grid container spacing={3}>
                    {
                        this.props.appointments !== null ?
                            this.props.appointments.map((row, key) => (
                                <Grid item xs={6}>

                                    {/*Card-Start*/}
                                    <Card>
                                        <CardHeader
                                            title={row.id.user.first_name + "\t\t" + row.id.user.last_name}
                                            subheader={row.id.user.email}
                                        />

                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Grid item xs={12}>
                                                        <Typography color={"textSecondary"} style={{fontSize: "1em"}}>
                                                            Requested at {row.id.createdAt[0]}
                                                        </Typography>
                                                    </Grid>
                                                    {/*<Grid item xs={12}>*/}
                                                    {/*    <Typography style={{fontSize: "1em"}}>*/}

                                                    {/*    </Typography>*/}
                                                    {/*</Grid>*/}

                                                    <Grid item xs={12}>
                                                        <Typography style={{fontSize: "1em"}}
                                                                    style={{color: 'red', fontWeight: 'bold'}}>
                                                            {row.status}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography variant={"body1"} color={"textPrimary"}>
                                                        {row.description}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>

                                        <CardActions style={{float: "right"}}>
                                            {/*<Button onClick={this.handleClick}>Approve</Button>*/}
                                            <Button onClick={()=> this.approve(row.id)}>Approve</Button>
                                            <Button>Reject</Button>
                                        </CardActions>
                                    </Card>
                                    {/*Card-End*/}

                                </Grid>
                            )) : <h3 style={{textAlign: 'center'}}>Loading...</h3>
                    }
                </Grid>
            </div>

        );
    };
}

const mapStateToProps = state => {
    return {
        appointments: state.counselorReducer.appointments,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAppointments: (status) => dispatch(actions.getAppointments(status)),
        approveAppointment: (id) => dispatch(actions.approveAppointment(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppointmentRequestCard);
