import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {Form,Tab,Nav,Row,Col} from 'react-bootstrap';

import PropTypes from 'prop-types';//for default exports

import validateInput from '../../validate/PatientSignUpValidation';
import { Redirect } from 'react-router-dom';
import {useStyles} from '../../assets/Styles';

import QuickRegistration from './QuickRegistration';
import FormalRegistration from './FormalRegistration';

import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

class SignUpFormUser extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    userSignUpRequest=(state)=>{
        return axios.post('http://localhost:8080/api/user/quicksignup',JSON.stringify(state),{headers: {
        'Content-Type': 'application/json',
        }})
        .then((response)=>console.log(response))
    }
    
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Quick Registration</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Formal Registration</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <QuickRegistration userSignUpRequest={this.userSignUpRequest}></QuickRegistration>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <FormalRegistration userSignUpRequest={this.userSignUpRequest}></FormalRegistration>              
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
            </Tab.Container>
            
        )
    }
}

export default SignUpFormUser;