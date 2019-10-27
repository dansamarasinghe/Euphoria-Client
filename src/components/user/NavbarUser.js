import React, { Component } from 'react'
import {Navbar,Form,FormControl,Nav,Button} from 'react-bootstrap';
import logo from '../../assets/eu-logo.png';
import styled from 'styled-components';

const Styles=styled.div`
    .bg-custom-1 {
        background-color: #85144b;
    }
    
    .bg-custom-2 {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    }
`;
go to this link material-ui.com/components/app-bar/
export default class NavbarUser extends Component {
    render() {
        return (
        <Styles>

            <Navbar bg="dark" variant="dark">
                <img
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Euphoria</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Feed</Nav.Link>
                    <Nav.Link href="#pricing">Counselors</Nav.Link>
                </Nav>
                <Form inline>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Dashboard</a>
                <a class="dropdown-item" href="#">Edit Profile</a>
                <a class="dropdown-item" href="#">Log Out</a>
                </div>
                </Form>
            </Navbar>
        </Styles>
        )
    }
}
