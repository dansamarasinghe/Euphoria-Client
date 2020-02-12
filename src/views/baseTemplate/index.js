import React from "react";
import ReactDOM from "react-dom";
import {MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand} from "mdbreact";

class Template{
    return(){
        render({
            <MDBNavbar
                color="unique-color-dark"
                style={{ marginTop: "20px" }}
                dark
            >
                <MDBNavbarBrand href="#">
                    <img
                        src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                        height="30"
                        alt=""
                    />
                </MDBNavbarBrand>
            </MDBNavbar>
        });
    }
}