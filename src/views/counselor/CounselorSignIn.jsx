import React, {Component} from 'react';
import "./CounselorSignIn.scss";
import {Grid, Card, CardContent, TextField, Typography, Button} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUploadOutlined";
import logo from "../../assets/eu-logo.png";
import {connect} from 'react-redux';
import * as actions from "../../actions/index";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

class CounselorSignIn extends Component {

    constructor(props) {
        super(props);
        this.setState({
            isSignUp: props.isSignUp
        })
    };

    state = {
        loginUsername:null,
        loginPassword:null,
        name: null,
        username: null,
        password: null,
        confirmPassword: null,
        email: null,
        speciality: null,
        hospital: null,
        city: null,
        picName: null,
        signIn: null,
        isSignUp: false,
        description:null,
        slmcNumber:null,
        errors: {
            name: '',
            email: '',
            password: '',
            loginPassword:'',
            confirmPassword:'',
            slmcNumber:'',
            loginUsername:'',
        }
    };

    signIn = () => {
        console.log(this.state.name, this.state.password);
        const signInCredentials = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }
        this.props.signIn(signInCredentials);
    };