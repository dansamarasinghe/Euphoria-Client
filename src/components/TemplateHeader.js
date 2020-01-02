import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand} from "mdbreact";

class TemplateHeader extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <MDBNavbar>
                    <MDBNavbarBrand>

                    </MDBNavbarBrand>
                </MDBNavbar>
            </BrowserRouter>
        );
    }
}