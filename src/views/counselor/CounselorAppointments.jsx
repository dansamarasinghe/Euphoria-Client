import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import CounselorNavBar from "../../components/counselor/CounselorNavBar";
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
    }

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
    axios.get('http://localhost:8080/api/counselor/appointments/ALL',
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

