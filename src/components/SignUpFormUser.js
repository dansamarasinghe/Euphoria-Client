import React, { Component } from 'react'
import { FormControl,FormGroup,Button } from '@material-ui/core';
import { InputLabel,Input,FormHelperText } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import MaterialUIForm from 'react-material-ui-form';
import JssProvider from 'react-jss/lib/JssProvider';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
class SignUpFormUser extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''

        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        // axios.post('/api/users',{user:this.state});
        this.props.userSignUpRequest(this.state);
    }
    render() {
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
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    style={{ width: '50vh' }}
                    onChange={this.onChange}
                    value={this.state.email}

                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    margin="normal"
                    style={{ width: '50vh', height:'10vh' }}
                    onChange={this.onChange}
                    value={this.state.password}


                />
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