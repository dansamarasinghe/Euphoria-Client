import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormControl,FormGroup,Button,Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {Form,Tab,Nav,Row,Col} from 'react-bootstrap';

import PropTypes from 'prop-types';//for default exports

import {validateQuickSignUp} from '../../validate/PatientSignUpValidation';
import { Redirect } from 'react-router-dom';
import {useStyles} from '../../assets/Styles';



class QuickRegistration extends Component {
    constructor(props){
        super(props);
        this.state={
           
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false,
            accountType:''
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    isValid=()=>{
        const{errors,isValid}=validateQuickSignUp(this.state);
        console.log(isValid);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("shit");
        
        if(this.isValid()){
            console.log("ho");
            this.setState({errors:{},accountType:'quick'});

            this.props.userSignUpRequest(this.state).then( result => {
                alert("success");
             }, function(error) {
                console.log(error);
                
             });
        }
    }
    
    render() {
        
        const {errors} =this.state;
        return (
        
                <Form onSubmit={this.onSubmit}>
                        {errors.email && <span style={{color:'red'}} className="help-block">{errors.email}</span>}
                        <Form.Group controlId="formemailq">
                            <TextField
                                id="emailq"
                                label="Email"
                                className={useStyles.textField}
                                type="email"
                                
                                name="email"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.email}

                            />
                        </Form.Group>
                    
                        {errors.password && <span style={{color:'red'}} className="help-block">{errors.password}<br></br></span> }
                        <Form.Group controlId="formpasswordq">
                            <TextField

                                id="passwordq"
                                label="Password"
                                className={useStyles.textField}
                                type="password"
                                name="password"
                                autoComplete="email"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                        </Form.Group>

                        {errors.passwordConfirmation && <span style={{color:'red'}} className="help-block">{errors.passwordConfirmation}<br></br></span> }
                        <Form.Group controlId="formpasswordconfirmationq">
                            <TextField

                                id="passwordConfirmationq"
                                label="Re-type Password"
                                className={useStyles.textField}
                                type="password"
                                name="passwordConfirmation"
                                autoComplete="password"
                                margin="none"
                                variant="outlined"
                                style={{ width: '50vh' }}
                                onChange={this.onChange}
                                value={this.state.passwordConfirmation}
                            />
                        </Form.Group>

                        <Form.Group controlId="formbutton">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '10vh' }}
                                type="submit"
                            >
                                Send
                            </Button>
                        </Form.Group>
                            
                    </Form> 
            
        )
    }
}



export default QuickRegistration;