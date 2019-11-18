import React, { Component } from 'react'
import {Row,Col,Card,Button,ListGroupItem} from 'react-bootstrap';

import house from '../../assets/img/doctor/house.jpg';
import CounselorBody from '../../components/user/CounselorBody'

import {UserLayout} from '../../components/user/UserLayout';
import NavbarUser from '../../components/user/NavbarUser';
import { Jumbotron } from '../../components/user/Jumbotron';
export default class Counselors extends Component {
    elements = [
        {
        "id":1,
        "name":"Dr.Gregory House",
        "specialty":"diagnostician",
        "picName":"house"
        },
        {
        "id":2,
        "name":"Dr.William Chase",
        "specialty":"Neurologist",
        "picName":"chase"
        },
        {
        "id":3,
        "name":"Dr.Cameron Chase",
        "specialty":"ER",
        "picName":"cameron"
        },
    ];
    counselors=[];


    items = this.elements.map((doc)=>
            <div key={doc.id}>
                 <CounselorBody doc={doc}></CounselorBody>
            </div>
    );
    
    handleClick=(e)=>{
        e.preventDefault();
        
        
    }
    

    render() {
        
        return (
             <React.Fragment>
                <NavbarUser></NavbarUser>
                <Jumbotron></Jumbotron>
                <UserLayout>
                        <Row>
                            {this.items}
                        </Row>
                </UserLayout>
             </React.Fragment>
        )
    }
}
