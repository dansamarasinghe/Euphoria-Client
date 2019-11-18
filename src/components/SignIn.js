import React,{useState,useEffect,Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import {connect} from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import {signIn} from '../actions/signInActions';
import {signInStyles} from '../assets/Styles';

import { Redirect } from 'react-router-dom';

import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Euphoria
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




class SignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      'email':'',
      'password':''
    }
  }

   
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleClick=(e)=>{
    e.preventDefault();
    console.log("redirect");
    
    axios.post('http://localhost:8080/api/user/signin',JSON.stringify(this.state),{headers: {
        'Content-Type': 'application/json',
    }})
    .then((response)=>{
      if(response.data){
        
        this.props.history.push('/user/homepage');
      }else{
        alert("Invalid combination of username and password");
        
      }
    }) 
    

  }
  render(){
      return(
        <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={signInStyles.paper}>
                <Avatar className={signInStyles.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={signInStyles.form} noValidate onSubmit={this.handleClick} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}

                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button

                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={signInStyles.submit}
                    
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
      )


  }

}
export default SignIn;
// SignIn.propTypes = {
//   signIn : PropTypes.func.isRequired
// }
// const mapStateToProps=(state)=>({
//   sign : state.sign
// });
