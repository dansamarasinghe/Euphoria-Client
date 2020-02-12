import React, { Component } from 'react'
import {Row,Col,Card,Button,ListGroupItem,Form} from 'react-bootstrap';
import axios from 'axios';
import CounselorRequestModal from '../../components/user/CounselorRequestModal';
import UserProfile from '../../assets/UserProfile';

export default class CounselorBody extends Component {

    makeRequest=(msg)=>{
        const user_counselor={
            "user_id":UserProfile.getId(),
            "counselor_id":this.props.doc.counselor_id
        }
        const request_description=msg;
        const counselor_request_details={...user_counselor,request_description};
        console.log(counselor_request_details)
        axios.post('http://localhost:8080/api/user/requestcounselor',JSON.stringify(counselor_request_details),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>{
            console.log(response);
            alert("Request Successful");
        })

    }
    render() {
        return (

                <Col xs={4} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../assets/img/doctor/'+this.props.doc.picName+'.jpg')} 
                        style={{
                            width: '100%',
                            height: '20vw',
                            objectFit:'cover'
                       
                        }} />
                        <Card.Body>
                            <Card.Title>{this.props.doc.counselor_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.doc.specialty}</Card.Subtitle>
                            <Card.Text>{this.props.doc.description}</Card.Text>
                            
                            <CounselorRequestModal doc={this.props.doc} makerequest={this.makeRequest}></CounselorRequestModal>
                            {/* <Button variant="primary" onClick={this.handleClick}>Request</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
        )
    }
}
