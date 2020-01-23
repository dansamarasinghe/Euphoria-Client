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