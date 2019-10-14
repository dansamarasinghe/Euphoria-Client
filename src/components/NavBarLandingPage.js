import React, { Component } from 'react'
import {Navbar,Form,FormControl,Nav,Button} from 'react-bootstrap';
import logo from '../assets/eu-logo.png';
export default class NavBarLandingPage extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Euphoria</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        )
    }
}
