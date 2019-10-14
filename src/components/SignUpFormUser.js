import React, { Component } from 'react'
import { InputLabel,Input,FormHelperText } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';

import { FormControl,FormGroup,Button,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MaterialUIForm from 'react-material-ui-form';

import JssProvider from 'react-jss/lib/JssProvider';
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import validateInput from '../validate/PatientSignUp';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
class SignUpFormUser extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            errors:{},
            isLoading:false

        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    isValid=()=>{
        console.log("how baout here");
        const{errors,isValid}=validateInput(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("shit");
        // axios.post('http://localhost:8080/api/users',{user:this.state});

        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{}});
            this.props.userSignUpRequest(this.state).then(
                ()=>{
                    return <Redirect to='http://google.com'/>;
                },
                ({data})=>this.setState({errors:data,isLoading:false})
                );
        }
    }
    render() {
        const {errors} =this.state;
        return (
            
             <Form onSubmit={this.onSubmit}>
                <TextField
                        id="name"
                        name="username"
                        label="User Name"
                        margin="normal"
                        style={{ width: '50vh' }}
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        margin="normal"
                        style={{ width: '50vh' }}
                        onChange={this.onChange}
                        value={this.state.email}

                    />
                    {errors.email && <span className="help-block">{errors.email}</span>}
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        margin="normal"
                        style={{ width: '50vh', height:'10vh' }}
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    {errors.password && <span style={{ width: '50vh', height:'10vh' }}className="help-block">{errors.password}</span>}
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: '10vh' }}
                        type="submit"
                    >
                        Send
                    </Button>
                    
            </Form> 
            
            
               
            

        )
    }
}

SignUpFormUser.propTypes={
    userSignUpRequest : PropTypes.func.isRequired
}
export default SignUpFormUser;