import React, {Component} from 'react'
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import * as actions from "../../actions";
import {getAppointments} from "../../actions";
import {connect} from "react-redux";
import AppointmentRequestCard from "../../components/counselor/AppointmentRequestCard";
const axios = require('axios').default;

class CounselorAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            appointments: null,
        };
        // this.props.getAppointments("PENDING");
        // console.log(this.props.appointments);
    }

    // handleClick = () => {
    //     this.setState({'status': 'APPROVED'})
    // };
    //
    // approve = (id) => {
    //     console.log(id);
    //     this.props.approveAppointment(id);
    // };

/*
    componentDidMount() {
        axios.get('http://localhost:8080/api/counselor/appointments/PENDING',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            this.setState({
                appointments:response.data,
            })
        }).catch((err) => {
            return err
        })

    }
*/

    componentDidMount(){
        axios.get('http://localhost:8080/api/counselor/appointments/PENDING',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                this.setState({
                    appointments:response.data,
                })
            }).catch((err) => {
                return err
            })
    };

    render() {
        // this.fetchAppointments();
        return (
            <div>
                <CounselorNavBar></CounselorNavBar>

                <Grid container spacing={3}>
                    {this.state.appointments !== null ?
                            this.state.appointments.map((appointment, key) => (
                                <>

                                    {/*Card-Start*/}
                                    <AppointmentRequestCard keyValue={key} appointment={appointment}/>
                                    {/*Card-End*/}

                                </>
                            )) : <h3 style={{textAlign: 'center'}}> Loading...</h3>
                    }
                </Grid>
            </div>

        );
    };
}

// const mapStateToProps = state => {
//     return {
//         appointments: state.counselorReducer.appointments,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         getAppointments: (status) => dispatch(actions.getAppointments(status)),
//         approveAppointment: (id) => dispatch(actions.updateAppointmentStatus(id)),
//     };
// };

export default CounselorAppointments;
