import React, { Component } from 'react'
import {Row,Col,Card,Button,ListGroupItem} from 'react-bootstrap';
import axios from 'axios';

export default class CounselorBody extends Component {
    handleClick=(e)=>{
        e.preventDefault();
        const doctor=this.props.doc;
        console.log(doctor)
        axios.post('http://localhost:8080/api/user/counselorrequest',JSON.stringify(doctor),{headers: {
            'Content-Type': 'application/json',
        }})
        .then((response)=>console.log(response))

    }
    render() {
        return (

                <Col xs={4} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../assets/img/doctor/'+this.props.doc.picName+'.jpg')} />
                        <Card.Body>
                            <Card.Title>{this.props.doc.name}</Card.Title>
                            <Card.Subtitle>{this.props.doc.specialty}</Card.Subtitle>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary" onClick={this.handleClick}>Request</Button>
                        </Card.Body>
                    </Card>
                </Col>
        )
    }
}
