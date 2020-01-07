import React, { Component } from 'react'
import {Navbar,Form,FormControl,Nav,Button} from 'react-bootstrap';
import logo from '../assets/eu-logo.png';
export default class NavBarLandingPage extends Component {
    render() {
        let button;
        if(this.props.page!="signIn"){
            button=<Button variant="outline-info" href="/user/login">Sign In</Button>;
        }else{
            button=null;
        }
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <img
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Euphoria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>

                <Form inline>
                    {button}
                </Form>
            </Navbar>

        )
    }
}
