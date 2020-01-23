import React, {Component} from "react";
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
import {Grid, Typography} from "@material-ui/core";
import PatientRecordCard from "../../components/counselor/PatientRecordCard";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import AppointmentRequestCard from "../../components/counselor/AppointmentRequestCard";
const axios = require('axios').default;
// import * as actions from "../../actions";
// import {connect} from "react-redux";

class CounselorViewPatientRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records:null,
            // error: null,
            // isLoaded: false,
            // items: []
        };

        // this.props.getPatientRecords("userID");
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/counselor/patient-records/'+this.state.user.id,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            this.setState({
                records:response.data,
            })
        }).catch((err) => {
            return err
        })
    };

    